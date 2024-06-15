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


public class Matricula {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)

    private Integer id;
    @Column
    private String nomeAluno;
    @Column
    private String endereco;
    @Column
    private String responsavel;
    @Column
    private String professor;
    @Column
    private int matricula;
    @Column
    private int idadeAluno;
    @Column
    private int serieAluno;
    @Column
    private String salaAluno;

}
