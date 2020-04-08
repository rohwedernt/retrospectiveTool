namespace Retrospective.API.Mongo
{
    public class RetroManagementSettings : IRetroManagementSettings
    {
        public string RetroCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IRetroManagementSettings
    {
        string RetroCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
