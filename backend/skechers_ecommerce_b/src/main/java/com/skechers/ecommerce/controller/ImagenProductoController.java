package com.skechers.ecommerce.controller;

import com.skechers.ecommerce.entity.ImagenProducto;
import com.skechers.ecommerce.service.ImagenProductoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/imagenes-producto")
public class ImagenProductoController {

    private final ImagenProductoService imagenProductoService;

    public ImagenProductoController(ImagenProductoService imagenProductoService) {
        this.imagenProductoService = imagenProductoService;
    }

    @GetMapping
    public List<ImagenProducto> listar() {
        return imagenProductoService.listar();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ImagenProducto> buscarPorId(@PathVariable Integer id) {
        return imagenProductoService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ImagenProducto guardar(@RequestBody ImagenProducto imagenProducto) {
        return imagenProductoService.guardar(imagenProducto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ImagenProducto> actualizar(
            @PathVariable Integer id,
            @RequestBody ImagenProducto imagenProducto) {

        return imagenProductoService.buscarPorId(id)
                .map(imagenExistente -> {
                    return ResponseEntity.ok(
                            imagenProductoService.actualizar(id, imagenProducto)
                    );
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Integer id) {

        if (imagenProductoService.buscarPorId(id).isPresent()) {
            imagenProductoService.eliminar(id);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }
} 
