using System;
using System.Collections.Generic;
namespace ivoicewww.API.Models {
    public class User {
        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

       public string  Mail { get; set; }

       public int CallCount { get; set; }

       public Boolean Active {get; set; }

       public string  CompanyName { get; set; }

       public string  CompanyPhone  { get; set; }

       public string  CompanyCity  { get; set; }

       public string  CompanyStreetNumber  { get; set; }

       public string  CompanyCountry  { get; set; }


        // Postawowe informacje

       
    }
}