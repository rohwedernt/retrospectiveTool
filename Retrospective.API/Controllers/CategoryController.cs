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
    public class CategoryController : ControllerBase
    {
        // GET: api/Category/5
        [HttpGet("{retroId}", Name = "GetCategories")]
        public IEnumerable<string> Get(int? retroId)
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Category/5
        [HttpGet("{retroId}/{categoryId}", Name = "GetCategory")]
        public string Get(int retroId, int categoryId)
        {
            return "value";
        }

        // POST: api/Category
        [HttpPost("{retroId}")]
        public void Post(int retroId, [FromBody] string value)
        {
        }

        // PUT: api/Category/5
        [HttpPut("{retroId}/{categoryId}")]
        public void Put(int retroId, int categoryId, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{retroId}/{categoryId}")]
        public void Delete(int retroId, int categoryId)
        {
        }
    }
}
