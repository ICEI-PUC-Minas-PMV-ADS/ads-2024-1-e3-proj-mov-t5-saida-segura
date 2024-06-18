package com.api.api.controller;

import com.api.api.model.Responsaveis;
import com.api.api.model.UsuarioEscola;
import com.api.api.service.ResponsaveisService;
import com.api.api.service.UsuarioEscolaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
@RequestMapping("/UsuarioEscola")

public class UsuarioEscolaControler {
    @Autowired
    UsuarioEscolaService usuarioescolaService;

    @PostMapping
    public String criarcadastro(@RequestBody UsuarioEscola cadastro){
        return usuarioescolaService.criarcadastro(cadastro);

    }
    @GetMapping()

    public List<UsuarioEscola> listarUsuarioEscola(){
        return usuarioescolaService.listarusuarioEscola();
    }

}
