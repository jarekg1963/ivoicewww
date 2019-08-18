using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ivoicewww.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace ivoicewww.API.Data {
    public class UserRepository : GenericRepository, IUserRepository {
        private readonly DataContext _context;
        public UserRepository (DataContext context) : base (context) {
            _context = context;

        }
        public async Task<User> GetUser (int id) {
            var user = await _context.Users.FirstOrDefaultAsync (u => u.Id == id);
            return user;
        }

        public async Task<IEnumerable<User>> GetUsers () {
            var users = await _context.Users.ToListAsync ();
            return users;
        }

        public async Task<User> DeleteUser(int id) {
            var user = await _context.Users.FindAsync(id);
            if (user == null) {
                Console.WriteLine (nameof (Index));
              
            }
            _context.Users.Remove (user);
             await _context.SaveChangesAsync();
      return user;
            

        }

    }

}