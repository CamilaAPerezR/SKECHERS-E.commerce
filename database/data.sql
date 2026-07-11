INSERT INTO rol (nombre, descripcion, activo) VALUES
('ADMIN', 'Administrador del sistema', 1),
('CLIENTE', 'Cliente registrado', 1);

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

INSERT INTO categoria
(nombre, descripcion, activo)
VALUES

('Running','Calzado para correr',1),

('Walking','Calzado para caminar',1),

('Casual','Calzado casual',1),

('Training','Calzado para entrenamiento',1);

INSERT INTO producto
(nombre, descripcion, precio, activo, categoria_id)
VALUES

('Skechers GO RUN Consistent',
'Tenis deportivos con amortiguación ULTRA LIGHT.',
429900.00,
1,
1),

('Skechers GO WALK 7',
'Zapato cómodo para caminatas largas.',
389900.00,
1,
2),

('Skechers Uno Stand On Air',
'Tenis casual con cámara de aire visible.',
459900.00,
1,
3),

('Skechers Max Cushioning Elite',
'Máxima amortiguación para corredores.',
579900.00,
1,
1);


INSERT INTO imagen_producto
(url, orden, activo, producto_id)
VALUES

('/img/productos/gorun1.jpg',1,1,1),

('/img/productos/gowalk7.jpg',1,1,2),

('/img/productos/uno.jpg',1,1,3),

('/img/productos/max.jpg',1,1,4);

INSERT INTO producto_variante
(talla,color,sku,stock,activo,producto_id)
VALUES

('38','Negro','SKU-GRC-38-N',15,1,1),
('39','Negro','SKU-GRC-39-N',20,1,1),
('40','Azul','SKU-GRC-40-A',12,1,1),

('39','Gris','SKU-GW7-39-G',18,1,2),
('40','Gris','SKU-GW7-40-G',10,1,2),

('41','Blanco','SKU-UNO-41-B',8,1,3),
('42','Blanco','SKU-UNO-42-B',6,1,3),

('40','Rojo','SKU-MAX-40-R',10,1,4),
('41','Rojo','SKU-MAX-41-R',12,1,4);

INSERT INTO carrito
(estado, usuario_id)
VALUES

('ACTIVO',2),

('ACTIVO',3);

INSERT INTO detalle_carrito
(cantidad, carrito_id, producto_variante_id)
VALUES

(1,1,2),

(2,1,4),

(1,2,7);

INSERT INTO pedido
(estado,total,direccion_envio,usuario_id)
VALUES

('PAGADO',
1209700.00,
'Medellín',
2),

('PENDIENTE_PAGO',
459900.00,
'Cali',
3);

INSERT INTO detalle_pedido
(
cantidad,
precio_unitario,
subtotal,
sku_producto,
nombre_producto,
talla_producto,
color_producto,
pedido_id,
producto_variante_id
)
VALUES

(
1,
429900.00,
429900.00,
'SKU-GRC-39-N',
'Skechers GO RUN Consistent',
'39',
'Negro',
1,
2
),

(
2,
389900.00,
779800.00,
'SKU-GW7-39-G',
'Skechers GO WALK 7',
'39',
'Gris',
1,
4
),

(
1,
459900.00,
459900.00,
'SKU-UNO-41-B',
'Skechers Uno Stand On Air',
'41',
'Blanco',
2,
6
);

INSERT INTO pago
(
metodo_pago,
referencia_transaccion,
monto,
estado,
detalle_respuesta,
pedido_id
)
VALUES

(
'Tarjeta de Crédito',
'TRX20260711001',
1209700.00,
'APROBADO',
'Pago aprobado correctamente.',
1
),

(
'PSE',
NULL,
459900.00,
'PENDIENTE',
'Esperando confirmación bancaria.',
2
);




