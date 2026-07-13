package com.skechers.ecommerce.service;

import com.skechers.ecommerce.entity.Categoria;

import java.util.List;
import java.util.Optional;

public interface CategoriaService {

    List<Categoria> listar();

    Optional<Categoria> buscarPorId(Integer id);

    Categoria guardar(Categoria categoria);

    Categoria actualizar(Categoria categoria);

    void eliminar(Integer id);

}


