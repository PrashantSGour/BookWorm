using BookWorm_Dotnet.Models;
using BookWorm_Dotnet.Services;
using Microsoft.AspNetCore.Mvc;

namespace BookWorm_Dotnet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerService _customerService;

        public CustomerController(ICustomerService customerService)
        {
            _customerService = customerService;
        }

        [HttpPost]
        [Route("register")]
        public async Task<ActionResult<CustomerMaster>> AddCustomer([FromBody] CustomerMaster customerMaster)
        {
            if (customerMaster == null)
            {
                return BadRequest("Data Not Found in RequestBody");
            }
            try
            {
                var customer=await _customerService.AddCustomerAsync(customerMaster);
                return Ok(new { Object = customer, Message = "Customer Added Successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }
        [HttpGet]
        public async Task<ActionResult<CustomerMaster>> GetAllCustomers()
        {
            return Ok(await _customerService.GetAllCustomersAsyn());
        }
    }
}
