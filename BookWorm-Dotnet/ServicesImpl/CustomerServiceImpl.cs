using BookWorm_Dotnet.Models;
using BookWorm_Dotnet.Repository;
using BookWorm_Dotnet.Services;
using Microsoft.EntityFrameworkCore;

namespace BookWorm_Dotnet.ServicesImpl
{
    public class CustomerServiceImpl : ICustomerService
    {
        private readonly BookWormDbContext _dbContext;
        public CustomerServiceImpl(BookWormDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<CustomerMaster> AddCustomerAsync(CustomerMaster customer)
        {
            _dbContext.CustomerMasters.Add(customer);
            await _dbContext.SaveChangesAsync();
            return customer;
        }

        public async Task<bool> DeleteCustomerAsync(long id)
        {
            var customer = await _dbContext.CustomerMasters.FindAsync(id);
            if (customer == null) return false;
            _dbContext.CustomerMasters.Remove(customer);
            await _dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<List<CustomerMaster>> GetAllCustomersAsyn()
        {
            return await _dbContext.CustomerMasters.ToListAsync();
        }

        public async Task<CustomerMaster?> GetCustomerByIdAsyn(long id)
        {
            return await _dbContext.CustomerMasters.FindAsync(id);
        }

        public async Task<CustomerMaster?> UpdateCustomerAsync(CustomerMaster customer)
        {   
            var existingcustomer = await _dbContext.CustomerMasters.FindAsync(customer.CustomerId);
            if(existingcustomer == null) return null;
            _dbContext.Entry(existingcustomer).CurrentValues.SetValues(customer);
            await _dbContext.SaveChangesAsync();
            return await _dbContext.CustomerMasters.FindAsync(customer.CustomerId);
        }

        public async Task<CustomerMaster> GetCustomerByEmailAsync(string  email)
        {

        }
    }
}
