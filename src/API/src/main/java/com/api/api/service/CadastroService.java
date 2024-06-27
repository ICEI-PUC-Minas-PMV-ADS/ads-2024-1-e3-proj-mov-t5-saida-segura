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

    public String validarUsuario (String email, String senha){
        List<Cadastro> usuarios= cadastroRepository.validarusuario(email, senha);
        if(usuarios==null || usuarios.isEmpty() || usuarios.size()==0){
            return "não existe!";

        }
        return "ok";

    }

    public String update (String email, String senha){
        Cadastro settarUsuario= cadastroRepository.buscarusuario(email);
        settarUsuario.setSenha(senha);
        cadastroRepository.save(settarUsuario);
        return "OK";

    }
}
