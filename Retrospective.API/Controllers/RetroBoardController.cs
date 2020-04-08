using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Retrospective.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RetroBoardController : ControllerBase
    {
        // GET: api/Retro
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/RetroBoard/5
        [HttpGet("{id}", Name = "GetRetro")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/RetroBoard
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/RetroBoard/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
