const productos = [
    {
      id: "Adff21",
      nombre: "Purina Excellent Maintenance",
      descripcion: "La selección de un alimento adecuado para tu mascota es muy importante para garantizar su crecimiento, desarrollo y salud. Con esta opción de Excellent podrás cubrir las necesidades nutricionales y energéticas de tu perro.",
      stock: 5,
      categoria: "comida-normal",
      imagen: "/img/purina.webp",
      precio: 430
    },
    {
      id: "Gjmn222",
      nombre: "Soga Juguete Para Perros",
      descripcion: "SOGA JUGUETE PARA PERROS 2 NUDOS PURO ALGODÓN 20 CM. Puro algodón, muy resistente y no daña a su perro. Favorece la limpieza e higiene de la dentadura de su mascota.",
      stock: 10,
      categoria: "comida-normal",
      imagen: "/img/soga.webp",
      precio: 150
    },
    {
      id: "Lom222",
      nombre: "Juguete Pelota Para Perros",
      descripcion: "GIGWI BALL SQUEAKER en tonalidades rojo y púrpura en su versión mediana. Este juguete combina funcionalidad y estilo, siendo un elemento de entretenimiento para tu compañero canino y una muestra de calidad y diseño refinado.",
      stock: 2,
      categoria: "comida-especial",
      imagen: "/img/pelota.webp",
      precio: 300
    },
    {
      id: "Htm123",
      nombre: "Pedigree Rodeo Snacks",
      descripcion: "Pedigree® RODEO™ es el snack perfecto para recompensar a tu perro y demostrarle tu afecto. Disponible también en sabor Pollo y otros snacks de la gama Pedigree® para tu mascota.",
      stock: 3,
      categoria: "comida-especial",
      imagen: "/img/snack.webp",
      precio: 100
    },
    {
      id: "Jfw222",
      nombre: "Agua Mineralizada sin Gas",
      descripcion: "Pedigree® RODEO™ es el snack perfecto para recompensar a tu perro y demostrarle tu afecto. Disponible también en sabor Pollo y otros snacks de la gama Pedigree® para tu mascota.",
      stock: 1,
      categoria: "pociones",
      imagen: "/img/agua.webp",
      precio: 120
    },
    {
      id: "Gtm222",
      nombre: "Gaseosa Pepsi Black",
      descripcion: "Pedigree® RODEO™ es el snack perfecto para recompensar a tu perro y demostrarle tu afecto. Disponible también en sabor Pollo y otros snacks de la gama Pedigree® para tu mascota.",
      stock: 3,
      categoria: "pociones",
      imagen: "/img/pepsi.webp",
      precio: 140
    },
    {
      id: "Gtm221",
      nombre: "Energizante Monster Energy",
      descripcion: "Pedigree® RODEO™ es el snack perfecto para recompensar a tu perro y demostrarle tu afecto. Disponible también en sabor Pollo y otros snacks de la gama Pedigree® para tu mascota.",
      stock: 3,
      categoria: "pociones",
      imagen: "/img/monster.webp",
      precio: 160
    },
    {
      id: "Gtm566",
      nombre: "Jugo Cepita Naranja",
      descripcion: "Pedigree® RODEO™ es el snack perfecto para recompensar a tu perro y demostrarle tu afecto. Disponible también en sabor Pollo y otros snacks de la gama Pedigree® para tu mascota.",
      stock: 5,
      categoria: "pociones",
      imagen: "/img/cepita.jpeg",
      precio: 110
    },
    {
      id: "Tmy543",
      nombre: "Alfajor Triple Milka Mousse",
      descripcion: "Pedigree® RODEO™ es el snack perfecto para recompensar a tu perro y demostrarle tu afecto. Disponible también en sabor Pollo y otros snacks de la gama Pedigree® para tu mascota.",
      stock: 6,
      categoria: "combos",
      imagen: "/img/milka.webp",
      precio: 70
    },
    {
      id: "Tmy545",
      nombre: "Alfajor Block Cofler",
      descripcion: "Pedigree® RODEO™ es el snack perfecto para recompensar a tu perro y demostrarle tu afecto. Disponible también en sabor Pollo y otros snacks de la gama Pedigree® para tu mascota.",
      stock: 7,
      categoria: "combos",
      imagen: "/img/cofler.jpeg",
      precio: 75
    },
    {
      id: "Tmy546",
      nombre: "Gomitas Arcor Mogul Rollo",
      descripcion: "Pedigree® RODEO™ es el snack perfecto para recompensar a tu perro y demostrarle tu afecto. Disponible también en sabor Pollo y otros snacks de la gama Pedigree® para tu mascota.",
      stock: 30,
      categoria: "combos",
      imagen: "/img/mogul.webp",
      precio: 20
    },
    {
      id: "Tmy547",
      nombre: "Gomitas Mogul Ladrillos",
      descripcion: "Pedigree® RODEO™ es el snack perfecto para recompensar a tu perro y demostrarle tu afecto. Disponible también en sabor Pollo y otros snacks de la gama Pedigree® para tu mascota.",
      stock: 15,
      categoria: "combos",
      imagen: "/img/mogul-ladrillos.webp",
      precio: 25
    }
  ]
  
  const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
      //simulamos un retraso de red de 2 segundos
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    })
  }
  
  export { obtenerProductos }