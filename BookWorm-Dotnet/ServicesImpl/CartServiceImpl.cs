using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using BookWorm_Dotnet.Models;
using BookWorm_Dotnet.Repository;
using BookWorm_Dotnet.Services;

public class CartServiceImpl : ICartService
{
    private readonly BookWormDbContext _context;

    public CartServiceImpl(BookWormDbContext context)
    {
        _context = context;
    }

    // Get all carts
    public async Task<List<CartMaster>> GetAllCarts()
    {
        return await _context.CartMasters.ToListAsync();
    }

    // Get cart by ID
    public async Task<CartMaster?> GetCartById(int id)
    {
        return await _context.CartMasters.FindAsync(id);
    }

    // Create or update cart
    public async Task<CartMaster> SaveCart(CartMaster cartMaster)
    {
        await UpdateCartCost(cartMaster);
        _context.CartMasters.Update(cartMaster);
        await _context.SaveChangesAsync();
        return cartMaster;
    }

    // Delete cart by ID
    public async Task DeleteCart(int id)
    {
        var cartMaster = await _context.CartMasters.FindAsync(id);
        if (cartMaster != null)
        {
            _context.CartMasters.Remove(cartMaster);
            await _context.SaveChangesAsync();
        }
    }

    // Get cart by customer ID
    public async Task<CartMaster?> GetCartByCustomerId(long id)
    {
        return await _context.CartMasters.FirstOrDefaultAsync(cm => cm.CustomerId == id && cm.IsActive);
    }

    // Update the cost of the cart by summing all offer_costs of CartDetails
    public async Task UpdateCartCost(CartMaster cartMaster)
    {
        var cartDetailsList = await _context.CartDetails
            .Where(cd => cd.CartId == cartMaster.CartId)
            .ToListAsync();

        cartMaster.Cost = cartDetailsList.Sum(cd => cd.OfferCost);
        _context.CartMasters.Update(cartMaster);
        await _context.SaveChangesAsync();
    }

    // Checkout cart
    public async Task CheckoutCart(long customerId)
    {
        var cartMaster = await _context.CartMasters
            .FirstOrDefaultAsync(cm => cm.CustomerId == customerId && cm.IsActive);

        if (cartMaster == null)
        {
            throw new Exception("Active cart not found for customer");
        }

        cartMaster.IsActive = false;
        _context.CartMasters.Update(cartMaster);
        await _context.SaveChangesAsync();

        var newCartMaster = new CartMaster
        {
            CustomerId = customerId,
            IsActive = true,
            Cost = 0.0
        };

        _context.CartMasters.Add(newCartMaster);
        await _context.SaveChangesAsync();
    }

    // Add cart
    public async Task AddCartAsync(CartMaster cartMaster)
    {
        _context.CartMasters.Add(cartMaster);
        await _context.SaveChangesAsync();
    }
}
