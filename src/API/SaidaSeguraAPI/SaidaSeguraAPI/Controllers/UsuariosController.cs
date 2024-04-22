using Microsoft.AspNetCore.Mvc;
using SaidaSeguraAPI.Models;
using SaidaSeguraAPI.Services;

namespace SaidaSeguraAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsuarioController : ControllerBase
    {
        private readonly UsuarioService _usuarioService;

        public UsuarioController(UsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }

        [HttpPost("login")]
        public IActionResult Login(LoginRequest request)
        {
            var usuario = _usuarioService.Autenticar(request.Cpf, request.Senha);
            if (usuario == null)
            {
                return Unauthorized(new { message = "CPF ou senha inválidos" });
            }

            return Ok(usuario);
        }
    }

    public class LoginRequest
    {
        public string Cpf { get; set; }
        public string Senha { get; set; }
    }
}