package com.skechers.ecommerce.controller;

import com.skechers.ecommerce.service.RolService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.skechers.ecommerce.entity.Rol;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@RestController
@RequestMapping("/api/roles")

public class RolController {
    private final RolService rolService;

// ESTE ES EL CONSTRUCTOR
    public RolController(RolService rolService) {
        this.rolService = rolService;
    }

@GetMapping
    public List<Rol> listar() {
        return rolService.listar();
    }

}
