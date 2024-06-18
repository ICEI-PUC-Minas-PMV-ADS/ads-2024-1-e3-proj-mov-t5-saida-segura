package com.api.api.service;

import com.api.api.model.HistoricoSaida;
import com.api.api.repository.CadastroRepository;
import com.api.api.model.Cadastro;
import com.api.api.repository.HistoricoSaidaRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@NoArgsConstructor

public class HistoricoSaidaService {
    @Autowired
    HistoricoSaidaRepository historicoSaidaRepository;

    public String criarHistorico( HistoricoSaida historicoSaida) {
        historicoSaidaRepository.save(historicoSaida);
        return " Salvo! ";

    }

    public List<HistoricoSaida> buscarpornomeAluno(String nomeAluno) {
      return  historicoSaidaRepository.buscarhistoricopornomeAluno(nomeAluno);

    }

    public List<HistoricoSaida> buscarpornomeResponsavel(String nomeResponsavel) {
        return historicoSaidaRepository.buscarhistoricoporresponsavelAluno(nomeResponsavel);
    }

    public List<HistoricoSaida> buscarpornomeResponsavelLiberacao(String nomeResponsavelLiberacao) {
        return historicoSaidaRepository.buscarhistoricoporresponsavelLiberacao(nomeResponsavelLiberacao);
    }

    public List<HistoricoSaida> buscarporDataSaida(String dataSaida) {
        return historicoSaidaRepository.buscarhistoricopordataSaida(dataSaida);
    }

    public List<HistoricoSaida> listarHistorico() {
        return historicoSaidaRepository.findAll();

    }


}