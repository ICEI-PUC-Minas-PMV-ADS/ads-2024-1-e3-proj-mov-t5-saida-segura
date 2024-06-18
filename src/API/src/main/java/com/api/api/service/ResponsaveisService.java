package com.api.api.service;

import com.api.api.model.Responsaveis;
import com.api.api.model.UsuarioEscola;
import com.api.api.repository.ResponsaveisRepository;
import com.api.api.repository.UsuarioEscolaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service

public class ResponsaveisService {

    @Autowired
    ResponsaveisRepository responsaveisRepository;

    public String criarcadastro(Responsaveis usuario) {
        responsaveisRepository.save(usuario);
        return " Salvo! ";

    }


    public List<Responsaveis> listarResponsaveis() {
        return responsaveisRepository.findAll();

    }
}


