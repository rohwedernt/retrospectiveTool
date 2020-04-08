using System.Collections.Generic;
using Retrospective.API.Models;

namespace Retrospective.API.Repositories
{
    public interface ICategoryRepository
    {
        public List<Category> GetAll();

        public Category Get(int id);

        public Category Create(Category category);

        public void Update(Category category);

        public void Remove(Category category);
    }
}
