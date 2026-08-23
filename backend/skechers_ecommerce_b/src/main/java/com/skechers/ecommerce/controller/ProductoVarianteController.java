package com.skechers.ecommerce.controller;

import com.skechers.ecommerce.entity.ProductoVariante;
import com.skechers.ecommerce.service.ProductoVarianteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos-variantes")
public class ProductoVarianteController {

    private final ProductoVarianteService productoVarianteService;

    public ProductoVarianteController(ProductoVarianteService productoVarianteService) {
        this.productoVarianteService = productoVarianteService;
    }

    @GetMapping
    public List<ProductoVariante> listar() {
        return productoVarianteService.listar();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductoVariante> buscarPorId(@PathVariable Integer id) {
        return productoVarianteService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ProductoVariante guardar(@RequestBody ProductoVariante productoVariante) {
        return productoVarianteService.guardar(productoVariante);
    }

    @PutMapping("/{id}")
public ResponseEntity<ProductoVariante> actualizar(@PathVariable Integer id,
                                                   @RequestBody ProductoVariante productoVariante) {

    return productoVarianteService.buscarPorId(id)
            .map(productoVarianteExistente -> {
                return ResponseEntity.ok(
                        productoVarianteService.actualizar(id, productoVariante)
                );
            })
            .orElse(ResponseEntity.notFound().build());

        }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Integer id) {

        if (productoVarianteService.buscarPorId(id).isPresent()) {
            productoVarianteService.eliminar(id);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }

    
}