// Crear las listas de imágenes, títulos y frases

const imagenes = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Ulysses_And_The_Sirens_by_L%C3%A9on_Belly.jpg/960px-Ulysses_And_The_Sirens_by_L%C3%A9on_Belly.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/The_%22Triumph_of_Achilles%22_fresco%2C_in_Corfu_Achilleion.jpg/1920px-The_%22Triumph_of_Achilles%22_fresco%2C_in_Corfu_Achilleion.jpg",
  "https://content-historia.nationalgeographic.com.es/medio/2023/03/08/jason-y-medea-cuadro-pintado-en-el-ano-1759-por-el-artista-frances-carlo-van-loo_bbe41e78_230308104211_800x649.jpg",
  "https://ewahrsezb42.exactdn.com/wp-content/uploads/atalanta.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdNd1wQ2zTUHV33geybfqpAmMK_-RW-NdFrQ&s",
  
];


const titulos = [
  "Odiseo (Ulises)",
  "Aquiles",
  "Jasón",
  "Atalanta",
  "Herácles (Hércules)",

  
];

const frases = [
  "Te alimentas de plantas, frutas, hojas y flores. Vives en bosques de climas cálidos y prefieres la tierra que el agua.",
  "Eres pequeña pero tu extravagancia no pasa desapercibida. Vives en bosques húmedos y lluviosos y tienes veneno en la piel.",
];

// Trae los elementos del HTML que tienen ese id
const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");

// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function generarPrediccion() {
  // Para elegir la misma posición en todas las listas, generar un solo número aleatorio
  const indice = numeroRandom(0, frases.length); // 0, 1, 2, 3

  // Reemplaza el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  titulo.innerText = titulos[indice]; // Entre los [] se pasa el número aleatorio generado arriba

  // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  imagen.src = imagenes[indice];

  // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${frases[indice]}</p>`;
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();