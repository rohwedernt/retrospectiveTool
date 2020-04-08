using System.Collections.Generic;
using MongoDB.Driver;
using Retrospective.API.Models;
using Retrospective.API.Mongo;

namespace Retrospective.API.Repositories
{
    public interface IRetroBoardRepository
    {
        public List<RetroBoard> GetAll();

        public RetroBoard Get(int id);

        public RetroBoard Create(RetroBoard retroBoard);

        public void Update(int id, RetroBoard retroBoard);

        public void Remove(RetroBoard retroBoard);

        public void Remove(int id);
    }
}
