package com.skechers.ecommerce.repository;

import com.skechers.ecommerce.entity.ProductoVariante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoVarianteRepository extends JpaRepository<ProductoVariante, Integer> {

}
