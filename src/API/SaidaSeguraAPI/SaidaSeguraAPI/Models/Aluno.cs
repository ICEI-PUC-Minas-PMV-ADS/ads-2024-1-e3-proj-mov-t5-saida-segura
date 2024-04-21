namespace SaidaSeguraAPI.Models
{
    public class Aluno
    {
        public int Id { get; set; }
        public int Id_Prof { get; set; }
        public int Id_Resp { get; set; }
        public string Nome { get; set; }
        public DateTime Data_Nasc { get; set; }
    }
}
