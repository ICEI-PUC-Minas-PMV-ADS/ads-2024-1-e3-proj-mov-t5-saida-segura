package com.api.api.controller;

import com.api.api.model.Cadastro;
import com.api.api.model.Responsaveis;
import com.api.api.service.CadastroService;
import com.api.api.service.ResponsaveisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
@RequestMapping("/Responsaveis")

public class ResponsaveisController {
    @Autowired
    ResponsaveisService responsaveisService;

    @PostMapping
    public String criarcadastro(@RequestBody Responsaveis cadastro){
        return responsaveisService.criarcadastro(cadastro);

    }
    @GetMapping()

    public List<Responsaveis> listarResponsaveis(){
        return responsaveisService.listarResponsaveis();
    }

}
