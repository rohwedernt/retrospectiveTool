using System.Collections.Generic;
using Retrospective.API.Models;

namespace Retrospective.API.Repositories
{
    public interface IRetroBoardRepository
    { 
        public List<RetroBoard> GetAll();

        public RetroBoard Get(int id);

        public RetroBoard Create(RetroBoard retroBoard);

        public void Update(RetroBoard retroBoard);

        public void Remove(RetroBoard retroBoard);
    }
}
