package com.api.api.repository;

import com.api.api.model.Cadastro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CadastroRepository extends JpaRepository <Cadastro, Integer> {
    @Query("Select u from Cadastro u where email=?1 and senha=?2")
    List<Cadastro> validarusuario(@Param("email") String email, @Param("senha") String senha);

    @Query("Select u from Cadastro u where email=:email")
    Cadastro buscarusuario(@Param("email") String email);

}
