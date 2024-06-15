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


public class HistoricoSaida {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)

    private Integer id;
    @Column
    private String nomeAluno;
    @Column
    private String responsavelLiberacao;
    @Column
    private String responsavelAluno;
    @Column
    private String dataSaida;
    @Column
    private String horaSaida;
}
