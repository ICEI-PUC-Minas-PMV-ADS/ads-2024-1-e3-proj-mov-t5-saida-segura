package com.api.api.controller;

import com.api.api.model.Cadastro;
import com.api.api.model.Matricula;
import com.api.api.model.UsuarioEscola;
import com.api.api.service.MatriculaService;
import com.api.api.service.UsuarioEscolaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
@RequestMapping("/Matricula")

public class MatriculaController {
    @Autowired
    MatriculaService matriculaService;

    @PostMapping
    public String criarcadastro(@RequestBody Matricula cadastro){
        return matriculaService.criarmatricula(cadastro);

    }
    @DeleteMapping("/{id}")
    public String deletarmatricula(@Param("id") int id){
        return matriculaService.deletarmatricula(id);

    }
    @GetMapping()

    public List<Matricula> listarMatriculas(){
        return matriculaService.listarMatriculas();
    }
    @GetMapping("/{nomeAluno}")

    public List<Matricula> listarAlunos(@RequestParam("nomeAluno") String nomeAluno) {
        return matriculaService.buscarpornomeAluno(nomeAluno);
    }
    @GetMapping("/{id}")

    public Matricula exibirMatricula(@RequestParam("id") int id) {
        return matriculaService.buscarporId(id);
    }

}
