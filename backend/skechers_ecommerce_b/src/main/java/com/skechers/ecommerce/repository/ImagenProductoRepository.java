package com.skechers.ecommerce.repository;

import com.skechers.ecommerce.entity.ImagenProducto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImagenProductoRepository extends JpaRepository<ImagenProducto, Integer> {
} 
