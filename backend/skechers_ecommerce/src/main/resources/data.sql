/*-- ===========================================
-- TABLA: ROL
-- =========================================== */
INSERT IGNORE INTO rol (nombre, descripcion, activo)
VALUES
('Administrador', 'Administrador del sistema', 1),
('Cliente', 'Cliente registrado en la tienda', 1);

/*-- ===========================================
-- TABLA: USUARIO
-- =========================================== */
INSERT INTO usuario
(nombre, apellido, correo, contrasena_hash, telefono, direccion, activo, rol_id)
VALUES
('Andrea','Perez','andrea@gmail.com',
'$2a$10$abcdefghijklmnopqrstuv123456789012345678901234567890',
'3001234567',
'Calle 100 #20-30, Bogotá',
1,
1),

('Juan','Gomez','juan@gmail.com',
'$2a$10$abcdefghijklmnopqrstuv123456789012345678901234567891',
'3019876543',
'Cra 15 #45-20, Medellín',
1,
2),

('Laura','Martinez','laura@gmail.com',
'$2a$10$abcdefghijklmnopqrstuv123456789012345678901234567892',
'3105556677',
'Av. Libertadores, Cali',
1,
2);

-- ===========================================b
-- TABLA: CATEGORIA
-- ===========================================

INSERT INTO categoria (nombre, descripcion, estado)
VALUES
('Hombre', 'Calzado para hombre', 1),
('Mujer', 'Calzado para mujer', 1),
('Niños', 'Calzado infantil', 1),
('Accesorios', 'Accesorios y complementos Skechers', 1);

/*-- ===========================================
-- TABLA: USUARIO
-- ===========================================

INSERT INTO usuario(nombre, apellido, correo, contraseña, telefono, direccion, fecha_registro, estado, rol_id_rol)
VALUES
('Juan','Pérez','juan@skechers.com','123456','3001234567','Calle 10 #20-30',NOW(),1,1),
('Andrea','Gómez','andrea@gmail.com','123456','3019876543','Carrera 15 #30-20',NOW(),1,2);/*

-- ===========================================
-- TABLA: PRODUCTO
-- ===========================================

INSERT INTO producto(nombre, descripcion, precio, imagen, estado, categoria_id_categoria)
VALUES
('Skechers Go Walk 7','Zapato deportivo ultracómodo para caminar.',349900,'gowalk7.jpg',1,1),
('Skechers Arch Fit','Calzado con soporte ergonómico.',399900,'archfit.jpg',1,1),
('Skechers Uno Stand On Air','Zapato casual para mujer.',429900,'uno.jpg',1,2);

-- ===========================================
-- TABLA: PRODUCTO_VARIANTE
-- ===========================================

INSERT INTO producto_variante (talla,color,stock,codigo_producto,estado,id_producto)
VALUES
('39','Negro',12,'GW7-39-N',1,1), ('40','Negro',15,'GW7-40-N',1,1), ('41','Negro',9,'GW7-41-N',1,1), ('39','Gris',8,'GW7-39-G',1,1), ('40','Gris',6,'GW7-40-G',1,1),
('41','Gris',10,'GW7-41-G',1,1), ('40','Azul',11,'AF-40-A',1,2), ('41','Azul',5,'AF-41-A',1,2), ('37','Blanco',14,'UNO-37-B',1,3),('38','Blanco',7,'UNO-38-B',1,3);

-- ===========================================
-- TABLA: CARRITO
-- ===========================================

INSERT INTO carrito
(fecha_creacion,estado,usuario_id_usuario)
VALUES
(NOW(),1,2);

-- ===========================================
-- TABLA: DETALLE_CARRITO
-- ===========================================

INSERT INTO detallecarrito
(cantidad,subtotal,carrito_id_carrito,producto_variante_id_variante)
VALUES
(2,699800,1,2);

-- ===========================================
-- TABLA: PAGO
-- ===========================================

INSERT INTO pago
(metodo_pago,fecha_pago,monto,estado)
VALUES
('Tarjeta de crédito',NOW(),699800,'Pagado');

-- ===========================================
-- TABLA: PEDIDO
-- ===========================================

INSERT INTO pedido
(fecha_pedido,estado,total,usuario_id_usuario,pago_id_pago)
VALUES
(NOW(),'Entregado',699800,2,1);

-- ===========================================
-- TABLA: DETALLE_PEDIDO
-- ===========================================

INSERT INTO detallepedido
(cantidad,precio_unitario,subtotal,pedido_id_pedido,producto_variante_id_variante)
VALUES
(2,349900,699800,1,2);
 */