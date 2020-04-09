using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Retrospective.API.Models;
using Retrospective.API.Repositories.Interfaces;

namespace Retrospective.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamController : ControllerBase
    {
        private readonly ITeamRepository _repo;

        public TeamController(ITeamRepository teamRepository)
        {
            _repo = teamRepository;
        }

        // GET: api/Retro
        [HttpGet]
        public IEnumerable<Team> Get()
        {
            return _repo.GetAll();
        }

        // GET: api/Team/5
        [HttpGet("{id}", Name = "GetTeam")]
        public ActionResult<Team> Get(string id)
        {
            var ret = _repo.Get(id);

            if (ret == null)
            {
                return NotFound();
            }

            return ret;
        }

        // POST: api/Team
        [HttpPost]
        public ActionResult<Team> Create([FromBody] Team team)
        {
            _repo.Create(team);

            return CreatedAtRoute("GetTeam", new { id = team.Id }, team);
        }

        // PUT: api/Team/5
        [HttpPut("{id}")]
        public IActionResult Put(string id, [FromBody] Team value)
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
            var team = _repo.Get(id);

            if (team == null)
            {
                return NotFound();
            }

            _repo.Remove(team);

            return NoContent();
        }
    }
}
