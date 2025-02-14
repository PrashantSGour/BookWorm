using System.Collections.Generic;
using System.Threading.Tasks;
using BookWorm_Dotnet.Models;

public interface IShelfDetailsService
{
    Task<IEnumerable<MyShelfDetail>> GetAllAsync();
    Task<MyShelfDetail?> GetByIdAsync(int id);
    Task<MyShelfDetail> AddAsync(MyShelfDetail shelfDetail);
    Task<bool> UpdateAsync(MyShelfDetail shelfDetail);
    Task<bool> DeleteAsync(int id);
}
