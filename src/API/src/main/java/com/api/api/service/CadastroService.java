package com.api.api.service;

import com.api.api.repository.CadastroRepository;
import com.api.api.model.Cadastro;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class CadastroService {
    @Autowired
    CadastroRepository cadastroRepository;

    public String cadastrarUsuarios(Cadastro usuarios){
        cadastroRepository.save(usuarios);
        return " Salvo! ";

    }
    public String deleteUsusarios (Integer id){
        cadastroRepository.deleteById(id);
        return " Usuário deletado com sucesso!";
    }

    public List<Cadastro> validarUsuario (String email, String senha){
        return cadastroRepository.validarusuario(email, senha);

    }

    public String update (String email, String senha){
        Cadastro settarUsuario= cadastroRepository.buscarusuario(email);
        settarUsuario.setSenha(senha);
        cadastroRepository.save(settarUsuario);
        return "OK";

    }
}
