package com.api.api.service;

import com.api.api.model.Matricula;
import com.api.api.model.UsuarioEscola;
import com.api.api.repository.MatriculaRepository;
import com.api.api.repository.UsuarioEscolaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class UsuarioEscolaService {

    @Autowired
    UsuarioEscolaRepository usuarioEscolaRepository;

    public String criarcadastro(UsuarioEscola usuario) {
        usuarioEscolaRepository.save(usuario);
        return " Salvo! ";

    }


    public List<UsuarioEscola> listarusuarioEscola() {
        return usuarioEscolaRepository.findAll();

    }
}
