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


public class Responsaveis {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)

    private Integer id;
    @Column
    private String nomeResposavel;
    @Column
    private String telefone;
    @Column
    private String grauParentesco;
    @Column
    private String dataNascimento;
    @Column
    private String cpf;
    @Column
    private String tipoDocumento;
    @Column
    private String motivoNAutorizado;
    @Column
    private String autorizado;



}
