package com.skechers.ecommerce.service;

import java.util.List;
import java.util.Optional;

import com.skechers.ecommerce.entity.Producto;

public interface ProductoService {

    List<Producto> listar();

    Optional<Producto> buscarPorId(Integer id);

    Producto guardar(Producto producto);

    Producto actualizar(Integer id, Producto producto);

    void eliminar(Integer id);
}
