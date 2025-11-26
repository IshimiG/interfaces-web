export interface Producto {
    id: number;
    name: string;
    urlImage: string;
    precioActual: number;
    precioAnterior: number;
    valoracion: number;
    opiniones: number;
    fechaEnvio: string; precioEnvio: number; otrosEnvios: boolean; } export const productos: Producto[] = [ { id: 1, name: "Laptop ASUS ROG Zephyrus G14", urlImage: "https://example.com/images/asus-rog-g14.jpg", precioActual: 2299.99, precioAnterior: 2499.99, valoracion: 4.8, opiniones: 1342, fechaEnvio: "2025-11-06", precioEnvio: 0, otrosEnvios: false }, { id: 2, name: "iPhone 15 Pro 256GB", urlImage: "https://example.com/images/iphone-15-pro.jpg",
    precioActual: 1249.00,
    precioAnterior: 1349.00,
    valoracion: 4.9,
    opiniones: 9823,
    fechaEnvio: "2025-11-05",
    precioEnvio: 5.99,
    otrosEnvios: true
  },
  {
    id: 3,
    name: "Smart TV Samsung 65” QLED 4K",
    urlImage: "https://example.com/images/samsung-qled65.jpg",
    precioActual: 999.00,
    precioAnterior: 1299.00,
    valoracion: 4.7,
    opiniones: 2147,
    fechaEnvio: "2025-11-09",
    precioEnvio: 19.99,
    otrosEnvios: false
  },
  {
    id: 4,
    name: "Auriculares Sony WH-1000XM5",
    urlImage: "https://example.com/images/sony-wh1000xm5.jpg",
    precioActual: 379.99,
    precioAnterior: 399.99,
    valoracion: 4.9,
    opiniones: 6031,
    fechaEnvio: "2025-11-07",
    precioEnvio: 0,
    otrosEnvios: true
  },
  {
    id: 5,
    name: "Nintendo Switch OLED",
    urlImage: "https://example.com/images/nintendo-switch-oled.jpg",
    precioActual: 329.99,
    precioAnterior: 349.99,
    valoracion: 4.6,
    opiniones: 15892,
    fechaEnvio: "2025-11-06",
    precioEnvio: 0,
    otrosEnvios: false
  },
  {
    id: 6,
    name: "Monitor LG Ultragear 27” QHD 165Hz",
    urlImage: "https://example.com/images/lg-ultragear-27.jpg",
    precioActual: 389.99,
    precioAnterior: 429.99,
    valoracion: 4.5,
    opiniones: 2478,
    fechaEnvio: "2025-11-08",
    precioEnvio: 12.99,
    otrosEnvios: false
  },
  {
    id: 7,
    name: "Teclado Mecánico Keychron K8 Pro RGB",
    urlImage: "https://example.com/images/keychron-k8-pro.jpg",
    precioActual: 119.99,
    precioAnterior: 139.99,
    valoracion: 4.4,
    opiniones: 953,
    fechaEnvio: "2025-11-05",
    precioEnvio: 0,
    otrosEnvios: true
  },
  {
    id: 8,
    name: "Mouse Logitech G Pro X Superlight",
    urlImage: "https://example.com/images/logitech-gpro-x.jpg",
    precioActual: 139.99,
    precioAnterior: 159.99,
    valoracion: 4.8,
    opiniones: 5312,
    fechaEnvio: "2025-11-06",
    precioEnvio: 0,
    otrosEnvios: false
  },
  {
    id: 9,
    name: "Apple Watch Series 9 GPS 45mm",
    urlImage: "https://example.com/images/apple-watch-s9.jpg",
    precioActual: 449.00,
    precioAnterior: 499.00,
    valoracion: 4.7,
    opiniones: 3921,
    fechaEnvio: "2025-11-07",
    precioEnvio: 7.99,
    otrosEnvios: true
  },
  {
    id: 10,
    name: "GoPro HERO 12 Black",
    urlImage: "https://example.com/images/gopro-hero12.jpg",
    precioActual: 399.99,
    precioAnterior: 449.99,
    valoracion: 4.8,
    opiniones: 2745,
    fechaEnvio: "2025-11-09",
    precioEnvio: 0,
    otrosEnvios: false
  }
];
