using Microsoft.EntityFrameworkCore;
using SaidaSeguraAPI.Models;

namespace SaidaSeguraAPI.Data
{
    public class SaidaSeguraDbContext: DbContext
    {
        public SaidaSeguraDbContext(DbContextOptions<SaidaSeguraDbContext> options) : base(options)
        {
        }

        public DbSet<Aluno> Alunos { get; set; }
        public DbSet<Usuarios> Usuarios { get; set; }
    }
}