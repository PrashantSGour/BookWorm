using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;
using BookWorm_Dotnet.Models;
using BookWorm_Dotnet.Repository;

namespace BookWorm_Dotnet.ServicesImpl
{
    public class DatabaseLogger : ILogger
    {
        private readonly BookWormDbContext _dbContext;
        private readonly string _categoryName;

        public DatabaseLogger(BookWormDbContext dbContext, string categoryName)
        {
            _dbContext = dbContext;
            _categoryName = categoryName;
        }

        public IDisposable? BeginScope<TState>(TState state) => null;

        public bool IsEnabled(LogLevel logLevel) => true; // Log everything

        public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception? exception, Func<TState, Exception?, string> formatter)
        {
            if (formatter == null) return;

            var logEntry = new LogEntry
            {
                Timestamp = DateTime.UtcNow,
                LogLevel = logLevel.ToString(),
                Message = formatter(state, exception),
                Exception = exception?.ToString()
            };

            _dbContext.LogEntries.Add(logEntry);
            _dbContext.SaveChanges();
        }
    }

    public class DatabaseLoggerProvider : ILoggerProvider
    {
        private readonly BookWormDbContext _dbContext;

        public DatabaseLoggerProvider(BookWormDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public ILogger CreateLogger(string categoryName) => new DatabaseLogger(_dbContext, categoryName);

        public void Dispose() { }
    }
}
