using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Retrospective.API.Models
{
    public class Team
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("RetroBoardIds")]
        public List<string> RetroBoardIds { get; set; }

        [BsonElement("TeamName")]
        public string TeamName { get; set; }
    }
}
