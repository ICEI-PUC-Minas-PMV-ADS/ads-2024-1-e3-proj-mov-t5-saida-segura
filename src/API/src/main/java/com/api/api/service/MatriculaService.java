package com.api.api.service;

import com.api.api.model.HistoricoSaida;
import com.api.api.model.Matricula;
import com.api.api.repository.HistoricoSaidaRepository;
import com.api.api.repository.MatriculaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class MatriculaService {
    @Autowired
    MatriculaRepository matriculaRepository;

    public String criarmatricula(Matricula matriculaAluno) {
        matriculaRepository.save(matriculaAluno);
        return " Salvo! ";

    }
    public String deletarmatricula(int id) {
    matriculaRepository.deleteById(id);
    return "Deletado com sucesso!";
    }


    public List<Matricula> buscarpornomeAluno(String nomeAluno) {
        return  matriculaRepository.buscarpornomeAluno(nomeAluno);

    }

    public Matricula buscarporId(int id) {
        return matriculaRepository.buscarporid(id);

    }

    public List<Matricula> listarMatriculas() {
        return matriculaRepository.findAll();

    }

    }