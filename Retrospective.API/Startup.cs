using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Retrospective.API.Mongo;
using Retrospective.API.Repositories;
using Retrospective.API.Repositories.Interfaces;

namespace Retrospective.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<RetroManagementSettings>(
                Configuration.GetSection(nameof(RetroManagementSettings)));

            services.AddSingleton<IRetroManagementSettings>(sp =>
                sp.GetRequiredService<IOptions<RetroManagementSettings>>().Value);

            services.AddSingleton<IRetroDataContext, RetroDataContext>();

            services.AddScoped<IRetroBoardRepository, RetroBoardRepository>();
            services.AddScoped<IActionItemRepository, ActionItemRepository>();
            services.AddScoped<IBoardItemRepository, BoardItemRepository>();
            services.AddScoped<ICategoryRepository, CategoryRepository>();
            services.AddScoped<ITeamRepository, TeamRepository>();

            services.AddControllers()
                .AddNewtonsoftJson(options => options.UseMemberCasing());
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
