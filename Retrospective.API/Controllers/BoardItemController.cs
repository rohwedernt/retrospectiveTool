using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Retrospective.API.Models;
using Retrospective.API.Repositories.Interfaces;

namespace Retrospective.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BoardItemController : ControllerBase
    {
        private readonly IBoardItemRepository _repo;

        public BoardItemController(IBoardItemRepository boardItemRepository)
        {
            _repo = boardItemRepository;
        }

        // GET: api/Note
        [HttpGet]
        public IEnumerable<BoardItem> Get()
        {
            return _repo.GetAll();
        }

        [HttpGet("{categoryId}", Name = "GetBoardItem")]
        public IEnumerable<BoardItem> Get(string categoryId)
        {
            return _repo.GetByCategoryId(categoryId);
        }

        // POST: api/Note/1
        [HttpPost]
        public ActionResult<BoardItem> Create([FromBody] BoardItem value)
        {
            return _repo.Create(value);
        }

        // PUT: api/Note/1/5
        [HttpPut("{itemId}")]
        public IActionResult Update(string itemId, [FromBody] BoardItem value)
        {
            var boardItem = _repo.Get(itemId);

            if (boardItem == null)
            {
                return NotFound();
            }

            _repo.Update(value);

            return NoContent();
        }

        // DELETE: api/ApiWithActions/1/5
        [HttpDelete("{itemId}")]
        public IActionResult Delete(int retroId, string itemId)
        {
            var boardItem = _repo.Get(itemId);

            if (boardItem == null)
            {
                return NotFound();
            }

            _repo.Remove(boardItem);

            return NoContent();
        }
    }
}
