using System.Threading.Tasks;
using ivoicewww.API.Data;
using ivoicewww.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ivoicewww.API.Controllers {

    [Authorize]
    [Route ("api/[controller]")]
    [ApiController]

    public class UsersController : ControllerBase {

        public readonly IUserRepository _repo;
      

        public UsersController (IUserRepository repo) {
            _repo = repo;
    
        }

        

        [HttpGet]
        public async Task<IActionResult> GetUsers () {
            var users = await _repo.GetUsers ();
            return Ok (users);
        }

        [HttpGet ("{id}")]
        public async Task<IActionResult> GetUser (int id) {
            var user = await _repo.GetUser (id);
            return Ok (user);
        }

        [HttpDelete ("{id}")]
       public async Task<ActionResult<User>> DeleteUser (int id) {
          
           var user = await _repo.GetUser(id);
            if (user == null) {
                return NotFound ();
            }

                await _repo.DeleteUser(id);
             return user;

         }

    }
}