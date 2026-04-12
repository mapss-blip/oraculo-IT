// Crear las listas de imágenes, títulos y frases

const imagenes = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Ulysses_And_The_Sirens_by_L%C3%A9on_Belly.jpg/960px-Ulysses_And_The_Sirens_by_L%C3%A9on_Belly.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/The_%22Triumph_of_Achilles%22_fresco%2C_in_Corfu_Achilleion.jpg/1920px-The_%22Triumph_of_Achilles%22_fresco%2C_in_Corfu_Achilleion.jpg",
  "https://ewahrsezb42.exactdn.com/wp-content/uploads/atalanta.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdNd1wQ2zTUHV33geybfqpAmMK_-RW-NdFrQ&s",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Oedipus_at_Colonus.jpg/960px-Oedipus_at_Colonus.jpg",

];


const titulos = [
  "Odiseo (Ulises)",
  "Aquiles",
  "Atalanta",
  "Herácles (Hércules)",
  "Edipo"

  
];

const nombrehistoria = [
  "La Odisea", 
  "La Iliada", 
  "Atalanta", 
  "Los 12 trabajos", 
  "Edipo Rey",
]

const frases = [
 "Eres inteligente y leal, pero a veces dejas que te gane tu orgullo",
 "Eres considerado el mejor, pero eres más vulnerable de lo que crees",
 "De las pocas mujeres en la mitología en la categoría de 'héroe', en misiones junto a héroes varones, eres infravalorada a pesar de ser mucho más fuerte de lo que aparentas",
 "Considerado el más capaz, eres volátil y tienes a tus espaldas tanto logros como cosas cuestionables",
 "Eres una persona perspicaz, pero también eres bastante impulsivo. No intentes evadir las consecuencias de tus actos"



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

    prediccion.innerHTML = `<h4>${nombrehistoria[indice]}</h4>`;

  // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${frases[indice]}</p>`;
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();


const varSubtitulo = document.getElementById("subtitulooooo");
let estadoInicial = true;
varSubtitulo.addEventListener("click", () => {
    if(estadoInicial === true){
        varSubtitulo.innerText = "🌪️ Nada en exceso... 🌪️";
    }
    else {
        varSubtitulo.innerText = "🌀 Conócete a ti mismo...🌀";
    }
       estadoInicial = !estadoInicial;
})