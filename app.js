function addImage() {
    // Crear un nuevo elemento de imagen
    var img = document.createElement("img");

    // Establecer el atributo src de la imagen
    img.src = "https://via.placeholder.com/150";

    // Establecer atributos adicionales (opcional)
    img.alt = "Imagen de ejemplo";
    img.width = 150; // Ancho en píxeles
    img.height = 150; // Alto en píxeles

    // Encontrar el contenedor donde se agregará la imagen
    var container = document.getElementById("imageContainer");

    // Agregar la imagen al contenedor
    container.appendChild(img);
}