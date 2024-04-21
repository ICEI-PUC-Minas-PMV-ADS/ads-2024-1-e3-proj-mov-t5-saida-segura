namespace SaidaSeguraAPI.Models
{
    public class Usuarios
    {
        public int Id { get; set; }
        public int TipoUsuario { get; set; }
        public string cpf { get; set; }
        public string rg { get; set; }
        public string senha { get; set; }
        public string Nome { get; set; }
        public int grau { get; set; }
        public DateTime Data_Nasc { get; set; }
    }
}
