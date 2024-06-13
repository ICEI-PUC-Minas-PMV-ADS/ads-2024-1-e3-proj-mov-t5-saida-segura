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

public class Cadastro {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)

    private Integer id;
 @Column
    private String nome;
@Column
    private String senha;
@Column
    private String responsavelPeloAluno;
    @Column
    private String email;
}
