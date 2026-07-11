package com.skechers.ecommerce.service;
import com.skechers.ecommerce.entity.Rol;

import java.util.List;
import java.util.Optional;

public interface RolService {
    List<Rol> listar();
    Optional<Rol> buscarPorId(Integer id);
    Rol guardar(Rol rol);
    void eliminar(Integer id);

}
