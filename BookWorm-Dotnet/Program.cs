
using BookWorm_Dotnet.Repository;
using BookWorm_Dotnet.ServicesImpl;
using BookWorm_Dotnet.Services;
using Microsoft.EntityFrameworkCore;

namespace BookWorm_Dotnet
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            var configuration = builder.Configuration;

            // Add services to the container.
            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddScoped<IProductService,ProductServiceImpl>();
            builder.Services.AddScoped<ICustomerService, CustomerServiceImpl>();
            builder.Services.AddScoped<IUserActivityService, UserActivityServiceImpl>();
            builder.Services.AddScoped<ILanguageMasterService, LanguageServiceImpl>();
            builder.Services.AddScoped<IGenreService, GenreServiceImpl>();
            builder.Services.AddScoped<IProductTypeService, ProductTypeServiceImpl>();



            var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
            builder.Services.AddDbContext<BookWormDbContext>(options =>
                options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

            // Register Database Logger
            builder.Services.AddSingleton<ILoggerProvider, DatabaseLoggerProvider>();
            builder.Services.AddSingleton<IOtpService, OtpService>();
            builder.Services.AddSingleton<IEmailService, EmailService>();
            // Add Logging Configuration
            builder.Logging.ClearProviders();
            builder.Logging.AddConsole();
            builder.Logging.AddDebug();
            builder.Logging.AddProvider(new DatabaseLoggerProvider(builder.Services.BuildServiceProvider().GetRequiredService<BookWormDbContext>()));

            // Enable CORS
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAll",
                    policy =>
                    {
                        policy.AllowAnyOrigin()
                              .AllowAnyMethod()
                              .AllowAnyHeader();
                    });
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseCors("AllowAll"); // Apply CORS policy

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
