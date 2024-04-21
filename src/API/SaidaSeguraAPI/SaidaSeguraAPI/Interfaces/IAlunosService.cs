using SaidaSeguraAPI.Models;

namespace SaidaSeguraAPI.Interfaces
{
    public interface IAlunoService
    {
        IEnumerable<Aluno> GetAlunosByResponsavelId(int responsavelId);
    }
}
