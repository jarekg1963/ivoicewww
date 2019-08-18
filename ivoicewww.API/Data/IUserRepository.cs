using System.Collections.Generic;
using System.Threading.Tasks;
using ivoicewww.API.Models;


namespace ivoicewww.API.Data
{
    public interface IUserRepository: IGenericRepository
    {
        Task<IEnumerable<User>> GetUsers();
        Task<User> GetUser(int id);
        Task<User> DeleteUser(int id) ;

    }
}



 
