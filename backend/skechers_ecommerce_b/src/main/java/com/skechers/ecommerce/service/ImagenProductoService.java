package com.skechers.ecommerce.service;

import com.skechers.ecommerce.entity.ImagenProducto;

import java.util.List;
import java.util.Optional;

public interface ImagenProductoService {

    List<ImagenProducto> listar();

    Optional<ImagenProducto> buscarPorId(Integer id);

    ImagenProducto guardar(ImagenProducto imagenProducto);

    ImagenProducto actualizar(Integer id, ImagenProducto imagenProducto);

    void eliminar(Integer id);
} 