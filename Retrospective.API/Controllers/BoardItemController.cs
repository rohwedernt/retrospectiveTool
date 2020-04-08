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
    public class BoardItemController : ControllerBase
    {
        // GET: api/Note
        [HttpGet("{retroId}", Name = "GetNotes")]
        public IEnumerable<string> Get(int retroId)
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Note/5
        [HttpGet("{retroId}/{itemId}", Name = "GetNote")]
        public string Get(int retroId, int itemId)
        {
            return "value";
        }

        // POST: api/Note/1
        [HttpPost("{retroId}")]
        public void Post(int retroId, [FromBody] string value)
        {
        }

        // PUT: api/Note/1/5
        [HttpPut("{retroId}/{itemId}")]
        public void Put(int retroId, int itemId, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/1/5
        [HttpDelete("{retroId}/{itemId}")]
        public void Delete(int retroId, int itemId)
        {
        }
    }
}
