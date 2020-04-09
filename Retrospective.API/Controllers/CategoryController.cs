using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Retrospective.API.Models;
using Retrospective.API.Repositories.Interfaces;

namespace Retrospective.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _repo;

        public CategoryController(ICategoryRepository categoryRepository)
        {
            _repo = categoryRepository;
        }

        // GET: api/Retro
        [HttpGet]
        public IEnumerable<Category> Get()
        {
            return _repo.GetAll();
        }

        // GET: api/Category/5
        [HttpGet("{id}", Name = "GetCategory")]
        public IEnumerable<Category> Get(string id)
        {
            return _repo.GetByRetroId(id);
        }

        // POST: api/Category
        [HttpPost]
        public ActionResult<Category> Create([FromBody] Category category)
        {
            _repo.Create(category);

            return CreatedAtRoute("GetCategory", new { id = category.Id }, category);
        }

        // PUT: api/Category/5
        [HttpPut("{id}")]
        public IActionResult Put(string id, [FromBody] Category value)
        {
            var ret = _repo.Get(id);

            if (ret == null)
            {
                return NotFound();
            }

            _repo.Update(value);

            return NoContent();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var category = _repo.Get(id);

            if (category == null)
            {
                return NotFound();
            }

            _repo.Remove(category);

            return NoContent();
        }
    }
}
