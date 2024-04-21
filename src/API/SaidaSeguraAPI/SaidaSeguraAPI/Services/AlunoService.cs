using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using SaidaSeguraAPI.Data;
using SaidaSeguraAPI.Interfaces;
using SaidaSeguraAPI.Models;

namespace SaidaSeguraAPI.Services
{
    public class AlunoService : IAlunoService
    {
        private readonly SaidaSeguraDbContext _context;

        public AlunoService(SaidaSeguraDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Aluno> GetAlunosByResponsavelId(int responsavelId)
        {
            return _context.Alunos.Where(a => a.Id_Resp == responsavelId).ToList();
        }
    }
}