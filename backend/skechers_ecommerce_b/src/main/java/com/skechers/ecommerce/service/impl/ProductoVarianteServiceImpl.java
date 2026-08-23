package com.skechers.ecommerce.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.skechers.ecommerce.entity.ProductoVariante;
import com.skechers.ecommerce.repository.ProductoVarianteRepository;
import com.skechers.ecommerce.service.ProductoVarianteService;

@Service
public class ProductoVarianteServiceImpl implements ProductoVarianteService {

    private final ProductoVarianteRepository productoVarianteRepository;

    public ProductoVarianteServiceImpl(ProductoVarianteRepository productoVarianteRepository) {
        this.productoVarianteRepository = productoVarianteRepository;
    }

    @Override
    public List<ProductoVariante> listar() {
        return productoVarianteRepository.findAll();
    }

    @Override
    public Optional<ProductoVariante> buscarPorId(Integer id) {
        return productoVarianteRepository.findById(id);
    }

    @Override
    public ProductoVariante guardar(ProductoVariante productoVariante) {
        return productoVarianteRepository.save(productoVariante);
    }

    @Override
    public ProductoVariante actualizar(Integer id, ProductoVariante productoVariante) {

        ProductoVariante varianteExistente = productoVarianteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Variante no encontrada"));

        varianteExistente.setTalla(productoVariante.getTalla());
        varianteExistente.setColor(productoVariante.getColor());
        varianteExistente.setSku(productoVariante.getSku());
        varianteExistente.setStock(productoVariante.getStock());
        varianteExistente.setActivo(productoVariante.getActivo());
        varianteExistente.setProducto(productoVariante.getProducto());

        return productoVarianteRepository.save(varianteExistente);
    }

    @Override
    public void eliminar(Integer id) {
        productoVarianteRepository.deleteById(id);
    }
} 
