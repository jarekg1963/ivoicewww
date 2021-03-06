﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ivoicewww.API.Data;
using ivoicewww.API.Models;

namespace ivoicewww.API.Controllers {
    // nasza aplikacja bedzie dostepna pod adresem hhtp://localhost:5000/api/Values ( pierwsza czesc nazwy )
    [Authorize]
    [Route ("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase {
        private readonly DataContext _context;

        public ValuesController (DataContext context) {
            _context = context;

        }

        // GET api/values
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetValues () 
        {
        var values = await _context.Values.ToListAsync();
        return Ok (values);    
        }

        // GET api/values/5
        [AllowAnonymous]
        [HttpGet ("{id}")]
        public async Task<IActionResult> GetValue (int id) {
            var  Values = await _context.Values.FirstOrDefaultAsync(x => x.Id == id); 
          return Ok (Values); 
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult>  AddValue ([FromBody] Value value) 
        { 
            _context.Add(value);
            await _context.SaveChangesAsync();
            return Ok(value);
        }



        // PUT api/values/5
        [HttpPut ("{id}")]
        public async Task<IActionResult> EditValue (int id, [FromBody] Value value) 
        {
            var data = await _context.Values.FindAsync(id);
            data.Name = value.Name;
            _context.Values.Update(data);
            _context.SaveChanges();
            return Ok(data);

         }

        // DELETE api/values/5
        [HttpDelete ("{id}")]
        public async Task<IActionResult> DeleteValue (int id)
        {
            var data = await _context.Values.FindAsync(id);
            if (data == null)
            return NoContent();


            _context.Values.Remove(data);
            await _context.SaveChangesAsync();
            return Ok(data);

         }
    }
}