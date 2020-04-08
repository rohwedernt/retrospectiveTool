using System.Collections.Generic;
using Retrospective.API.Models;

namespace Retrospective.API.Repositories
{
    public interface ITeamRepository
    {
        public List<Team> GetAll();

        public Team Get(int id);

        public Team Create(Team team);

        public void Update(Team team);

        public void Remove(Team team);
    }
}
