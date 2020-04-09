using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Retrospective.API.Models
{
    public class BoardItem
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("RetroBoardId")]
        public string RetroBoardId { get; set; }

        [BsonElement("CategoryId")]
        public string CategoryId { get; set; }

        [BsonElement("Value")]
        public string Value { get; set; }

        [BsonElement("Likes")]
        public int Likes { get; set; }
    }
}
