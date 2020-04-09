using System.Collections.Generic;
using Retrospective.API.Models;

namespace Retrospective.API.Repositories.Interfaces
{
    public interface ICategoryRepository
    {
        public List<Category> GetAll();

        public List<Category> GetByRetroId(string boardId);

        public Category Get(string id);

        public Category Create(Category category);

        public void Update(Category category);

        public void Remove(Category category);
    }
}
