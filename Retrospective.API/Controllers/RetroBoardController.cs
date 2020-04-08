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
    public class RetroBoardController : ControllerBase
    {
        private IRetroBoardRepository _repo;

        public RetroBoardController(IRetroBoardRepository retroBoardRepository)
        {
            _repo = retroBoardRepository;
        }

        // GET: api/Retro
        [HttpGet]
        public IEnumerable<RetroBoard> Get()
        {
            return _repo.GetAll();
        }

        // GET: api/RetroBoard/5
        [HttpGet("{id}", Name = "GetRetro")]
        public ActionResult<RetroBoard> Get(string id)
        {
            var ret = _repo.Get(id);

            if(ret == null)
            {
                return NotFound();
            }

            return ret;
        }

        // POST: api/RetroBoard
        [HttpPost]
        public ActionResult<RetroBoard> Create([FromBody] RetroBoard board)
        {
            _repo.Create(board);

            return CreatedAtRoute("GetRetro", new { id = board.Id.ToString() }, board);
        }

        // PUT: api/RetroBoard/5
        [HttpPut("{id}")]
        public IActionResult Put(string id, [FromBody] RetroBoard value)
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
            var board = _repo.Get(id);

            if (board == null)
            {
                return NotFound();
            }

            _repo.Remove(board);

            return NoContent();
        }
    }
}
