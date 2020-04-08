using System.Collections.Generic;
using MongoDB.Driver;
using Retrospective.API.Models;
using Retrospective.API.Mongo;
using Retrospective.API.Repositories.Interfaces;

namespace Retrospective.API.Repositories
{
    public class RetroBoardRepository : IRetroBoardRepository
    {
        private readonly IRetroDataContext _dataContext;

        public RetroBoardRepository(IRetroDataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public List<RetroBoard> GetAll()
        {
            return _dataContext.RetroBoards.Find(retroBoard => true).ToList();
        }

        public RetroBoard Get(int id)
        {
            return _dataContext.RetroBoards.Find(retroBoard => retroBoard.Id == id).FirstOrDefault();
        }

        public RetroBoard Create(RetroBoard retroBoard)
        {
            _dataContext.RetroBoards.InsertOne(retroBoard);
            return retroBoard;
        }

        public void Update(RetroBoard retroBoard)
        {
            _dataContext.RetroBoards.ReplaceOne(rb => rb.Id == retroBoard.Id, retroBoard);
        }

        public void Remove(RetroBoard retroBoard)
        {
            _dataContext.RetroBoards.DeleteOne(rb => retroBoard.Id == rb.Id);
        }
    }
}
