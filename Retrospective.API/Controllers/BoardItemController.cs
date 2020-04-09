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
        public IEnumerable<BoardItem> Get(int retroId)
        {
            return _repo.GetAll();
        }

        // GET: api/Note/5
        [HttpGet("{itemId}", Name = "GetBoardItem")]
        public ActionResult<BoardItem> Get(string itemId)
        {
            var ret = _repo.Get(itemId);

            if (ret == null)
            {
                return NotFound();
            }

            return ret;
        }

        // POST: api/Note/1
        [HttpPost]
        public ActionResult<RetroBoard> Create([FromBody] BoardItem value)
        {
            _repo.Create(value);

            return CreatedAtRoute("GetBoardItem", new { itemId = value.Id }, value);
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
