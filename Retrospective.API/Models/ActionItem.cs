using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Retrospective.API.Models
{
    public class ActionItem
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("RetroBoardId")]
        public string RetroBoardId { get; set; }

        [BsonElement("Value")]
        public string Value { get; set; }

        [BsonElement("IsResolved")]
        public bool IsResolved { get; set; }
    }
}
