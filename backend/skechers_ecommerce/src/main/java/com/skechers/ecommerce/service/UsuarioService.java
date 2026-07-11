package com.skechers.ecommerce.service;

import com.skechers.ecommerce.entity.Usuario;
import com.skechers.ecommerce.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public List<Usuario> listar() {
        return usuarioRepository.findAll();
    }

    public Optional<Usuario> buscarPorId(Integer id) {
        return usuarioRepository.findById(id);
    }

    public Usuario guardar(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public Usuario actualizar(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public void eliminar (Integer id ) {
        Usuario usuario = usuarioRepository.findById(id)
        .orElseThrow(()-> new RuntimeException("usuario no encontrado"));
        usuario.setActivo(false);
        usuarioRepository.save(usuario);
    }
}

    