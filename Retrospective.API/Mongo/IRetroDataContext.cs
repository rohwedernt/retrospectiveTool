using MongoDB.Driver;
using Retrospective.API.Models;

namespace Retrospective.API.Mongo
{
    public interface IRetroDataContext
    {
        IMongoCollection<RetroBoard> RetroBoards { get; }
        IMongoCollection<ActionItem> ActionItems { get; }
        IMongoCollection<BoardItem> BoardItems { get; }
        IMongoCollection<Category> Categories { get; }
        IMongoCollection<Team> Teams { get; }
    }
}
