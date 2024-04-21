using Microsoft.AspNetCore.Mvc;
using SaidaSeguraAPI.Interfaces;

namespace SaidaSeguraAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AlunosController : ControllerBase
    {
        private readonly IAlunoService _alunoService;

        public AlunosController(IAlunoService alunoService)
        {
            _alunoService = alunoService;
        }

        [HttpGet("responsavel/{responsavelId}")]
        public IActionResult GetByResponsavelId(int responsavelId)
        {
            var alunos = _alunoService.GetAlunosByResponsavelId(responsavelId);
            if (alunos == null)
            {
                return NotFound();
            }
            return Ok(alunos);
        }
    }
}
