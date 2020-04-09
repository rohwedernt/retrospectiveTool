using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Retrospective.API.Models
{
    public class Category
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("RetroBoardId")]
        public string RetroBoardId { get; set; }

        [BsonElement("Name")]
        public string Name { get; set; }
    }
}
