using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Retrospective.API.Models
{
    public class ActionItem
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
    }
}
