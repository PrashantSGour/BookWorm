using BookWorm_Dotnet.DTOs;
using BookWorm_Dotnet.Services;
using BookWorm_Dotnet.ServicesImpl;
using Microsoft.AspNetCore.Mvc;

namespace BookWorm_Dotnet.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly ICustomerService _customerService;
        private readonly IUserActivityService _userActivityService;

        public LoginController(ICustomerService customerService, IUserActivityService userActivityService)
        {
            _customerService = customerService;
            _userActivityService = userActivityService;
        }

        [HttpPost]
        public async Task<ActionResult<CustomerMaster>> Login([FromBody] LoginRequests loginRequest)
        {
            if (loginRequest == null || string.IsNullOrEmpty(loginRequest.Email) || string.IsNullOrEmpty(loginRequest.Password))
            {
                return BadRequest(new { Message = "Email and Password are required" });
            }

            var customer = await _customerService.GetCustomerByEmailAsync(loginRequest.Email);
            if (customer == null)
            {
                return BadRequest(new { Message = "User Doesn't Exist" });
            }

            var existingUser = await _customerService.GetCustomerByEmailAndPasswordAsync(loginRequest.Email, loginRequest.Password);
            if (existingUser == null)
            {
                return BadRequest(new { Message = "Password Incorrect" });
            }

            // Log successful login
            await _userActivityService.LogActivity(existingUser.Customeremail, "Login");

            return Ok(new { Object = existingUser, Message = "Login Successful" });
        }

        [HttpPost("logout")]
        public async Task<IActionResult> Logout([FromBody] string email)
        {
            // Log the logout action
            await _userActivityService.LogActivity(email, "Logout");

            return Ok(new { Message = "Logout Successful" });
        }
    }
}
