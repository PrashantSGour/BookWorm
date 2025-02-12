using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using BookWorm_Dotnet.Models;
using BookWorm_Dotnet.Repository;
using BookWorm_Dotnet.Services;

namespace BookWorm_Dotnet.ServicesImpl
{
    public class ProductsServiceImpl:IProductService
    {
        private readonly BookWormDbContext _context;

        public ProductsServiceImpl(BookWormDbContext context)
        {
            _context = context;
        }

        // Get all products
        public async Task<List<ProductMaster>> GetAllProductsAsync()
        {
            return await _context.ProductMasters.ToListAsync();
        }

        // Get product by ID
        public async Task<ProductMaster?> GetProductByIdAsync(int productId)
        {
            return await _context.ProductMasters.FindAsync(productId);
        }

        // Add a new product
        public async Task<ProductMaster> AddProductAsync(ProductMaster product)
        {
            _context.ProductMasters.Add(product);
            await _context.SaveChangesAsync();
            return product;
        }

        // Update a product
        public async Task<ProductMaster?> UpdateProductAsync(ProductMaster product)
        {
            var existingProduct = await _context.ProductMasters.FindAsync(product.ProductId);
            if (existingProduct == null)
            {
                return null; 
            }

            _context.Entry(existingProduct).CurrentValues.SetValues(product);
            await _context.SaveChangesAsync();

            return await _context.ProductMasters.FindAsync(product.ProductId);
        }


        // Delete a product
        public async Task<bool> DeleteProductAsync(int productId)
        {
            var product = await _context.ProductMasters.FindAsync(productId);
            if (product == null) return false;

            _context.ProductMasters.Remove(product);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
