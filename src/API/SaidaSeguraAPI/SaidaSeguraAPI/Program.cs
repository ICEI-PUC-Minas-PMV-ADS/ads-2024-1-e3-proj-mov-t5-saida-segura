using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using SaidaSeguraAPI.Data;
using SaidaSeguraAPI.Interfaces;
using SaidaSeguraAPI.Services;

var builder = WebApplication.CreateBuilder(args);

// Adiciona serviços ao contêiner.
builder.Services.AddControllers();
builder.Services.AddScoped<IAlunoService, AlunoService>();
builder.Services.AddScoped<UsuarioService>();


// Adiciona o serviço Swagger
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "NomeDoSeuProjeto", Version = "v1" });
});

var connectionString = "Server=tcp:saida-segura.database.windows.net,1433;Initial Catalog=saidasegura;Persist Security Info=False;User ID=pucminas;Password=saidasegura123!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
builder.Services.AddDbContext<SaidaSeguraDbContext>(options =>
    options.UseSqlServer(connectionString));

var app = builder.Build();

// Configura o pipeline de solicitação HTTP.
if (app.Environment.IsDevelopment())
{
    // Habilita o middleware para servir o Swagger gerado como um terminal JSON.
    app.UseSwagger();

    // Habilita o middleware para servir swagger-ui (HTML, JS, CSS, etc.), especificando o terminal JSON Swagger.
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "NomeDoSeuProjeto V1");
    });

    app.UseDeveloperExceptionPage();
}
app.UseCors(builder =>
{
    builder.AllowAnyOrigin()
           .AllowAnyMethod()
           .AllowAnyHeader();
});


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();