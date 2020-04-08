using System.Collections.Generic;
using Retrospective.API.Models;

namespace Retrospective.API.Repositories.Interfaces
{
    public interface IBoardItemRepository
    {
        public List<BoardItem> GetAll();

        public BoardItem Get(string id);

        public BoardItem Create(BoardItem boardItem);

        public void Update(BoardItem boardItem);

        public void Remove(BoardItem boardItem);
    }
}
