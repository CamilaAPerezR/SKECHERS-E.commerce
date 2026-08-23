package com.skechers.ecommerce.service;

import java.util.List;
import java.util.Optional;

import com.skechers.ecommerce.entity.ProductoVariante;

public interface ProductoVarianteService {

    List<ProductoVariante> listar();

    Optional<ProductoVariante> buscarPorId(Integer id);

    ProductoVariante guardar(ProductoVariante productoVariante);

    ProductoVariante actualizar(Integer id, ProductoVariante productoVariante);

    void eliminar(Integer id);
} 
