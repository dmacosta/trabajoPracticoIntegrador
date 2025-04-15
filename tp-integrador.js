//ESTRUCTURA DEL CÓDIGO
/* TRABAJO PRÁCTICO INTEGRADOR - SISTEMA DE GESTIÓN DE BIBLIOTECA */

/* PUNTO 1:1. Estructura de Datos
 */

const libros = [
    { 
      id:1,
      titulo: "Una vida con propósito",
      autor: "Rick Warren",
      anio: 2002,
      genero: "Cristianismo",
      disponible: true
    },
    {
      id: 2,
      titulo: "Locos de amor por Jesús",
      autor: "DC Talk y The Voice of the Martyrs",
      anio: 2003,
      genero: "Testimonios / Fe",
      disponible: true
    },
    { id: 3,
      titulo: "El desafío del amor",
      autor: "Stephen Kendrick y Alex Kendrick",
      anio: 2008,
      genero: "Matrimonio cristiano",
      disponible: false
    },
    {
      id: 4,
      titulo: "Más que un carpintero",
      autor: "Josh McDowell",
      anio: 1977,
      genero: "Apologética",
      disponible: true
    },
    { id:5,
      titulo: "Cristianismo y nada más",
      autor: "C.S. Lewis",
      anio: 1952,
      genero: "Teología / Apologética",
      disponible: true
    },
    {
      id:6,
      titulo: "La cruz y el puñal",
      autor: "David Wilkerson",
      anio: 1963,
      genero: "Biografía / Testimonio",
      disponible: true
    },
    {
      id:7,
      titulo: "El evangelio según Jesucristo",
      autor: "John MacArthur",
      anio: 1988,
      genero: "Teología",
      disponible: false
    },
    {
      id: 8,
      titulo: "La oración: Clave del avivamiento",
      autor: "Charles Finney",
      anio: 1835,
      genero: "Avivamiento / Oración",
      disponible: true
    },
    { id:9,
      titulo: "Discipulado",
      autor: "Juan Carlos Ortiz",
      anio: 1975,
      genero: "Vida cristiana",
      disponible: true
    },
    { 
      id:10,
      titulo: "El poder de la esposa que ora",
      autor: "Stormie Omartian",
      anio: 1997,
      genero: "Oración / Matrimonio",
      disponible: true
    }
  ];
  
/*PUNTO1.b Crear un array de objetos llamado usuarios con al menos 5 usuarios. Cada usuario debe tener:
id (número)
nombre (string)
email (string)
librosPrestados (array de ids de libros).*/

const usuarios= [
{
    id: 1,
    nombre: "Daiana",
    email: "daiana@abc.com",
    librosPrestados: [9,10]
},
{
    id: 2,
    nombre: "Mariano",
    email: "mariano@abc.com",
    librosPrestados: [3,5]
},
{
    id: 3,
    nombre: "Maria",
    email: "maria@abc.com",
    librosPrestados: [1,2,3]
},
{
    id: 4,
    nombre: "Lorenzo",
    email: "lolo@abc.com",
    librosPrestados: []
},
{
    id: 5,
    nombre: "Poly",
    email: "poly@abc.com",
    librosPrestados: [4]
},
]


//PUNTO 2//
/*2. Funciones de Gestión de Libros
Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.
*/

function agregarLibro(id, titulo, autor, anio, genero) {
  
    if (libros.some (libro => libro.id === id)) {
      console.log("Error: Ya existe un libro con ese ID.");
      return;
    } //se agrega condicion para evitar que asignen el mismo id 
  
    const nuevoLibro = {
      id,
      titulo,
      autor,
      anio,
      genero,
      disponible: true
    };
  
    libros.push(nuevoLibro);
    console.log(`Libro agregado: ${titulo}`);
  }


  /*Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o género utilizando el algoritmo de búsqueda lineal. 
*/
  function buscarLibro(criterio, valor) {
  const resultados = [];

  for (let i = 0; i < libros.length; i++) {
    const libro = libros[i];

    // Convertimos a minúsculas para que no haya problemas con las mayúsculas
    if (criterio === "titulo" && libro.titulo.toLowerCase().includes(valor.toLowerCase())) {
      resultados.push(libro);
    } else if (criterio === "autor" && libro.autor.toLowerCase().includes(valor.toLowerCase())) {
      resultados.push(libro);
    } else if (criterio === "genero" && libro.genero?.toLowerCase().includes(valor.toLowerCase())) {
      resultados.push(libro);
    }
  }

  if (resultados.length === 0) {
    console.log("❌ No se encontraron libros con ese criterio.");
  } else {
    console.log(`✅ Libros encontrados por ${criterio} "${valor}":`);
    resultados.forEach(libro => {
      console.log(`- ${libro.titulo} (${libro.autor}, ${libro.anio})`);
    });
  }
}

  