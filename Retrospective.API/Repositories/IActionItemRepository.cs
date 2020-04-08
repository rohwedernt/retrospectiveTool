﻿using System.Collections.Generic;
using Retrospective.API.Models;

namespace Retrospective.API.Repositories
{
    public interface IActionItemRepository
    {
        public List<ActionItem> GetAll();

        public ActionItem Get(int id);

        public ActionItem Create(ActionItem actionItem);

        public void Update(ActionItem actionItem);

        public void Remove(ActionItem actionItem);
    }
}
