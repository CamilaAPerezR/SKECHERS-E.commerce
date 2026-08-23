package com.skechers.ecommerce.service.impl;

import com.skechers.ecommerce.entity.ImagenProducto;
import com.skechers.ecommerce.repository.ImagenProductoRepository;
import com.skechers.ecommerce.service.ImagenProductoService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ImagenProductoServiceImpl implements ImagenProductoService {

    private final ImagenProductoRepository imagenProductoRepository;

    public ImagenProductoServiceImpl(ImagenProductoRepository imagenProductoRepository) {
        this.imagenProductoRepository = imagenProductoRepository;
    }

    @Override
    public List<ImagenProducto> listar() {
        return imagenProductoRepository.findAll();
    }

    @Override
    public Optional<ImagenProducto> buscarPorId(Integer id) {
        return imagenProductoRepository.findById(id);
    }

    @Override
    public ImagenProducto guardar(ImagenProducto imagenProducto) {
        return imagenProductoRepository.save(imagenProducto);
    }

    @Override
    public ImagenProducto actualizar(Integer id, ImagenProducto imagenProducto) {
        imagenProducto.setId(id);
        return imagenProductoRepository.save(imagenProducto);
    }

    @Override
    public void eliminar(Integer id) {
        imagenProductoRepository.deleteById(id);
    }
} 

