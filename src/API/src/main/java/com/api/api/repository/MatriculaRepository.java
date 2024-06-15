package com.api.api.repository;

import com.api.api.model.HistoricoSaida;
import com.api.api.model.Matricula;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MatriculaRepository extends JpaRepository <Matricula, Integer> {

    @Query("Select u from Matricula u where id=:id")
    Matricula buscarporid(@Param("id") Integer id);

    @Query("Select u from Matricula u where nomeAluno=nomeAluno")
    List<Matricula> buscarpornomeAluno(@Param("nomeAluno") String nomeAluno);


}
