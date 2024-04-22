using SaidaSeguraAPI.Data;
using SaidaSeguraAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SaidaSeguraAPI.Services
{
    public class UsuarioService
    {
        private readonly SaidaSeguraDbContext _context;

        public UsuarioService(SaidaSeguraDbContext context)
        {
            _context = context;
        }

        public Usuarios Autenticar(string cpf, string senha)
        {
            return _context.Usuarios.SingleOrDefault(x => x.cpf == cpf && x.senha == senha);
        }

        public IEnumerable<Usuarios> ListarUsuarios()
        {
            return _context.Usuarios.ToList();
        }

        public Usuarios ObterPorId(int id)
        {
            return _context.Usuarios.FirstOrDefault(x => x.Id == id);
        }
    }
}