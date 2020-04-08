using System.Collections.Generic;
using MongoDB.Driver;
using Retrospective.API.Models;
using Retrospective.API.Mongo;

namespace Retrospective.API.Repositories
{
    public class RetroBoardRepository : IRetroBoardRepository
    {
        private readonly IMongoCollection<RetroBoard> _retroBoards;

        public RetroBoardRepository(IRetroManagementSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _retroBoards = database.GetCollection<RetroBoard>(settings.RetroCollectionName);
        }

        public List<RetroBoard> GetAll()
        {
            return _retroBoards.Find(retroBoard => true).ToList();
        }

        public RetroBoard Get(int id)
        {
            return _retroBoards.Find(retroBoard => retroBoard.Id == id).FirstOrDefault();
        }

        public RetroBoard Create(RetroBoard retroBoard)
        {
            _retroBoards.InsertOne(retroBoard);
            return retroBoard;
        }

        public void Update(RetroBoard retroBoard)
        {
            _retroBoards.ReplaceOne(rb => rb.Id == retroBoard.Id, retroBoard);
        }

        public void Remove(RetroBoard retroBoard)
        {
            _retroBoards.DeleteOne(rb => retroBoard.Id == rb.Id);
        }
    }
}
