package com.api.api.repository;

import com.api.api.model.Cadastro;
import com.api.api.model.HistoricoSaida;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface HistoricoSaidaRepository extends JpaRepository <HistoricoSaida, Integer> {

        @Query("Select u from HistoricoSaida u where id=:id")
        List<HistoricoSaida> buscarhistoricoporId(@Param("id") Integer id);

        @Query("Select u from HistoricoSaida u where nomeAluno=nomeAluno")
        List<HistoricoSaida> buscarhistoricopornomeAluno(@Param("nomeAluno") String nomeAluno);

        @Query("Select u from HistoricoSaida u where responsavelLibereacao=:responsavelLibereacao")
        List<HistoricoSaida> buscarhistoricoporresponsavelLiberacao(@Param("responsavelLibereacao") String responsavelLibereacao);

       @Query("Select u from HistoricoSaida u where responsavelAluno=:responsavelAluno")
       List<HistoricoSaida> buscarhistoricoporresponsavelAluno(@Param("responsavelAluno") String responsavelAluno);

       @Query("Select u from HistoricoSaida u where dataSaida=:dataSaida")
       List<HistoricoSaida> buscarhistoricopordataSaida(@Param("dataSaida") String dataSaida);
}
