using MongoDB.Driver;
using Retrospective.API.Models;

namespace Retrospective.API.Mongo
{
    public class RetroDataContext : IRetroDataContext
    {
        private readonly IMongoDatabase _dataContext;

        public RetroDataContext(IRetroManagementSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            _dataContext = client.GetDatabase(settings.DatabaseName);
        }

        public IMongoCollection<RetroBoard> RetroBoards => _dataContext.GetCollection<RetroBoard>("RetroBoards");

        public IMongoCollection<ActionItem> ActionItems => _dataContext.GetCollection<ActionItem>("ActionItems");

        public IMongoCollection<BoardItem> BoardItems => _dataContext.GetCollection<BoardItem>("BoardItems");

        public IMongoCollection<Category> Categories => _dataContext.GetCollection<Category>("Categories");

        public IMongoCollection<Team> Teams => _dataContext.GetCollection<Team>("Teams");
    }
}
