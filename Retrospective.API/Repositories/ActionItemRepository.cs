using System.Collections.Generic;
using MongoDB.Driver;
using Retrospective.API.Models;
using Retrospective.API.Mongo;
using Retrospective.API.Repositories.Interfaces;

namespace Retrospective.API.Repositories
{
    public class ActionItemRepository : IActionItemRepository
    {
        private readonly IRetroDataContext _dataContext;

        public ActionItemRepository(IRetroDataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public List<ActionItem> GetAll()
        {
            return _dataContext.ActionItems.Find(actionItem => true).ToList();
        }

        public ActionItem Get(int id)
        {
            return _dataContext.ActionItems.Find(actionItem => actionItem.Id == id.ToString()).FirstOrDefault();
        }

        public ActionItem Create(ActionItem actionItem)
        {
            _dataContext.ActionItems.InsertOne(actionItem);
            return actionItem;
        }

        public void Update(ActionItem actionItem)
        {
            _dataContext.ActionItems.ReplaceOne(a => a.Id == actionItem.Id, actionItem);
        }

        public void Remove(ActionItem actionItem)
        {
            _dataContext.ActionItems.DeleteOne(a => actionItem.Id == a.Id);
        }
    }
}
