package com.api.api.repository;

import com.api.api.model.Matricula;
import com.api.api.model.Responsaveis;
import com.api.api.model.UsuarioEscola;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ResponsaveisRepository extends JpaRepository <Responsaveis, Integer> {



}
