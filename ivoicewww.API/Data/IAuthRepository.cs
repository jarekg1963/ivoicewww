using System.Threading.Tasks;
using ivoicewww.API.Models;
namespace ivoicewww.API.Data
{
    public interface IAuthRepository 
    {
         Task<User> Login(string username, string password);
        

          Task<User> Register(User user, string password ); 
           Task<bool> UserExist(string username);
 
    }

}


