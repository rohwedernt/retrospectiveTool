using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Retrospective.API.Models
{
    public class RetroBoard
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("StartDate")]
        public DateTime StartDate { get; set; }

        [BsonElement("EndDate")]
        public DateTime EndDate { get; set; }

        [BsonElement("BoardName")]
        public string BoardName { get; set; }
    }
}
