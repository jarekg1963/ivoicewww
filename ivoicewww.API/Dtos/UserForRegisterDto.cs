using System.ComponentModel.DataAnnotations;

namespace PortalRandkowy.API.Dtos
{
    
    public class UserForRegisterDto
    {
        
         [Required(ErrorMessage="Nazwa uzytkownika jest wymagana")]
        public string Username { get; set; }
       [Required(ErrorMessage="Hasło uzytkownika jest wymagane")]
        [StringLength(12, MinimumLength=6 , ErrorMessage="Hasło musi mieć 6 - 12 znaków")]
        public string  Password { get; set; }

        public string  Mail { get; set; }

        public string CompanyName { get; set; }

        public string CompanyPhone { get; set; }

        public string  CompanyCity  { get; set; }

         public string  CompanyStreetNumber  { get; set; }

       public string  CompanyCountry  { get; set; }


     
    }
}