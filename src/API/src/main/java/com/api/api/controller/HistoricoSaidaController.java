
package com.api.api.controller;

import com.api.api.model.HistoricoSaida;
import com.api.api.model.Matricula;
import com.api.api.service.HistoricoSaidaService;
import com.api.api.service.MatriculaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
@RestController
@RequestMapping("/HistoricoSaida")

public class HistoricoSaidaController {

    @Autowired
    HistoricoSaidaService historicoSaidaService;

    @PostMapping
    public String criarHistorico(@RequestBody HistoricoSaida cadastro){
        return historicoSaidaService.criarHistorico(cadastro);

    }
    @GetMapping()

    public List<HistoricoSaida> listarHistorico(){
        return historicoSaidaService.listarHistorico();
    }
    @GetMapping("/{nomeAluno}")

    public List<HistoricoSaida> listarAlunos(@RequestParam("nomeAluno") String nomeAluno) {
        return historicoSaidaService.buscarpornomeAluno(nomeAluno);
    }

    @GetMapping("/{nomeResponsavel}")

    public List<HistoricoSaida> listarnomeResponsavel(@RequestParam("nomeResponsavel") String nomeResponsavel) {
        return historicoSaidaService.buscarpornomeResponsavel(nomeResponsavel);
    }

    @GetMapping("/{nomeResponsavelLiberacao}")

    public List<HistoricoSaida> listarnomeresponsavelpelaliberacao(@RequestParam("nomeResponsavelLiberacao") String nomeResponsavelLiberacao) {
        return historicoSaidaService.buscarpornomeResponsavelLiberacao(nomeResponsavelLiberacao);
    }
    @GetMapping("/{nomeResponsavelLiberacao}")

    public List<HistoricoSaida> listarDataSaida(@RequestParam("dataSaida") String dataSaida) {
        return historicoSaidaService.buscarporDataSaida(dataSaida);
    }


    //@GetMapping("/{id}")

    //public Matricula exibirHistorico(@RequestParam("id") int id) {
     //   return historicoSaidaService.buscarporId(id);
    //}

}
