dotnet new webapi -o ivoicewww.API -n ivoicewww.API

repozytorium 

1. plik .gitignore 
2. tworzymy repozytorium na stronce github 
3. git init
4. git remote add origin https://github.com/jarekg1963/ivoicewww.git
5 git push -u origin master


- reszta z menu 


dotnet add package Microsoft.EntityFrameworkCore.Sqlite --version 2.2.6

dotnet ef migrations add InitialCreateDb
dotnet ef database update


material 

npm install --save hammerjs

Zmiana w dodawaniu rekordu - dodajemy nowe pola 

-1 . Oczywyście pole musi być w modelu 

	User.cs
0. UserForRefisterDto - dodajemy linie 
	public string CompanyName { get; set; }
1 . IAuthRepositoty - modyfikujemy wiersz 
	Task<User> Register(User user, string password , string mail , string CompanyName,  string CompanyPhone ); 
2    AuthRepository - modyfikujemy 
	public async Task<User> Register (User user, string Password , string mail , string CompanyName , string CompanyPhone) 
3. Na samym koncu modyfukujemy Controller


  Username = userForRegisterDto.Username,
                Mail = userForRegisterDto.Mail,
                CompanyName = userForRegisterDto.CompanyName,
                CompanyPhone = userForRegisterDto.CompanyPhone,
             CompanyCity = userForRegisterDto.CompanyCity   ,
             CompanyStreetNumber = userForRegisterDto.CompanyStreetNumber,
             CompanyCountry = userForRegisterDto.CompanyCountry