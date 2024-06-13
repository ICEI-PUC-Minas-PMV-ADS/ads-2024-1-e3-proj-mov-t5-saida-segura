package com.api.api.controller;

import com.api.api.model.Cadastro;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.api.api.service.CadastroService;

import java.util.List;

@Controller
@RestController
@RequestMapping("/Cadastro")

public class CadastroController {
    @Autowired
    CadastroService cadastroService;

    @PostMapping
    public String cadastrarUsuario(@RequestBody Cadastro cadastro){
        return cadastroService.cadastrarUsuarios(cadastro);

    }
    @GetMapping("/{email}/{senha}")

    public List<Cadastro> validarUsuario(@RequestParam("email") String email, @RequestParam("senha") String senha){
        return cadastroService.validarUsuario(email, senha);
    }

    @DeleteMapping("/{id}")
    public String deletarUsuario(@RequestParam("id") Integer id){
        return cadastroService.deleteUsusarios(id);
    }
    @PutMapping ("/{id}/{senha}")

    public String upDateUsuario(@RequestParam("id") Integer id, @RequestParam("senha") String senha){
        return cadastroService.update(id, senha);
    }
}
