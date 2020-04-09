using System.Collections.Generic;
using MongoDB.Driver;
using Retrospective.API.Models;
using Retrospective.API.Mongo;
using Retrospective.API.Repositories.Interfaces;

namespace Retrospective.API.Repositories
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly IRetroDataContext _dataContext;

        public CategoryRepository(IRetroDataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public List<Category> GetAll()
        {
            return _dataContext.Categories.Find(category => true).ToList();
        }

        public Category Get(string id)
        {
            return _dataContext.Categories.Find(category => category.Id == id).FirstOrDefault();
        }

        public Category Create(Category category)
        {
            _dataContext.Categories.InsertOne(category);
            return category;
        }

        public void Update(Category category)
        {
            _dataContext.Categories.ReplaceOne(c => c.Id == category.Id, category);
        }

        public void Remove(Category category)
        {
            _dataContext.Categories.DeleteOne(c => category.Id == c.Id);
        }
    }
}
