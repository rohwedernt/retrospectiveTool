using System.Collections.Generic;
using Retrospective.API.Models;

namespace Retrospective.API.Repositories.Interfaces
{
    public interface IActionItemRepository
    {
        public List<ActionItem> GetAll();

        public ActionItem Get(string id);

        public ActionItem Create(ActionItem actionItem);

        public void Update(ActionItem actionItem);

        public void Remove(ActionItem actionItem);
    }
}
