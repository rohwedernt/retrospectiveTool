using System.Collections.Generic;
using MongoDB.Driver;
using Retrospective.API.Models;
using Retrospective.API.Mongo;
using Retrospective.API.Repositories.Interfaces;

namespace Retrospective.API.Repositories
{
    public class BoardItemRepository : IBoardItemRepository
    {

        private readonly IRetroDataContext _dataContext;

        public BoardItemRepository(IRetroDataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public List<BoardItem> GetAll()
        {
            return _dataContext.BoardItems.Find(boardItem => true).ToList();
        }

        public BoardItem Get(string id)
        {
            return _dataContext.BoardItems.Find(boardItem => boardItem.Id == id).FirstOrDefault();
        }

        public BoardItem Create(BoardItem boardItem)
        {
            _dataContext.BoardItems.InsertOne(boardItem);
            return boardItem;
        }

        public void Update(BoardItem boardItem)
        {
            _dataContext.BoardItems.ReplaceOne(b => b.Id == boardItem.Id, boardItem);
        }

        public void Remove(BoardItem boardItem)
        {
            _dataContext.BoardItems.DeleteOne(b => boardItem.Id == b.Id);
        }
    }
}
