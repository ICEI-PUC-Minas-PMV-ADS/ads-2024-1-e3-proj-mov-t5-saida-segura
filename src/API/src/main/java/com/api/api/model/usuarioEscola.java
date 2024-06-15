package com.api.api.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class UsuarioEscola {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)

    private Integer id;
    @Column
    private String nomeFuncionario;
    @Column
    private String funcao;
    @Column
    private String matricula;

}
