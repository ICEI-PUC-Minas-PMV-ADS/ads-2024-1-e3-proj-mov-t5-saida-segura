package com.api.api.controller;

import com.api.api.model.Cadastro;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.api.api.service.CadastroService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

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

    public ResponseEntity<?> validarUsuario(@RequestParam("email") String email, @RequestParam("senha") String senha){
        String usuario= cadastroService.validarUsuario(email,senha);
        if(usuario=="não existe!"){
         return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body("usuário não encontrado!");
        }
        return  ResponseEntity.ok(usuario);
    }

    @DeleteMapping("/{id}")
    public String deletarUsuario(@RequestParam("id") Integer id){
        return cadastroService.deleteUsusarios(id);
    }
    @PutMapping ("/{email}/{senha}")

    public String upDateUsuario(@RequestParam("email") String email, @RequestParam("senha") String senha){
        return cadastroService.update(email, senha);
    }
}
