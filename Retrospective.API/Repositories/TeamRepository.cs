using System.Collections.Generic;
using MongoDB.Driver;
using Retrospective.API.Models;
using Retrospective.API.Mongo;
using Retrospective.API.Repositories.Interfaces;

namespace Retrospective.API.Repositories
{
    public class TeamRepository : ITeamRepository
    {
        private readonly IRetroDataContext _dataContext;

        public TeamRepository(IRetroDataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public List<Team> GetAll()
        {
            return _dataContext.Teams.Find(team => true).ToList();
        }

        public Team Get(int id)
        {
            return _dataContext.Teams.Find(team => team.Id == id.ToString()).FirstOrDefault();
        }

        public Team Create(Team team)
        {
            _dataContext.Teams.InsertOne(team);
            return team;
        }

        public void Update(Team team)
        {
            _dataContext.Teams.ReplaceOne(t => t.Id == team.Id, team);
        }

        public void Remove(Team team)
        {
            _dataContext.Teams.DeleteOne(t => team.Id == t.Id);
        }
    }
}
