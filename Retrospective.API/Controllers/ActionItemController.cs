using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Retrospective.API.Models;
using Retrospective.API.Repositories.Interfaces;

namespace Retrospective.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActionItemController : ControllerBase
    {
        private readonly IActionItemRepository _repo;

        public ActionItemController(IActionItemRepository actionItemRepository)
        {
            _repo = actionItemRepository;
        }
        // GET: api/ActionItem
        [HttpGet]
        public IEnumerable<ActionItem> Get()
        {
            return _repo.GetAll();
        }

        // GET: api/ActionItem/5
        [HttpGet("{id}", Name = "GetActionItem")]
        public ActionResult<ActionItem> Get(string id)
        {
            var ret = _repo.Get(id);

            if (ret == null)
            {
                return NotFound();
            }

            return ret;
        }

        // POST: api/ActionItem
        [HttpPost]
        public ActionResult<ActionItem> Create([FromBody] ActionItem value)
        {
            _repo.Create(value);

            return CreatedAtRoute("GetActionItem", new { id = value.Id.ToString() }, value);
        }

        // PUT: api/ActionItem/5
        [HttpPut("{id}")]
        public IActionResult Update(string id, [FromBody] ActionItem value)
        {
            var action = _repo.Get(id);

            if (action == null)
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
            var action = _repo.Get(id);

            if (action == null)
            {
                return NotFound();
            }

            _repo.Remove(action);

            return NoContent();
        }
    }
}
