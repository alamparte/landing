//   // Selecciona el elemento que deseas rotar
//   const rotatingElementRight = document.querySelector('.img-section__auto-rotate');
//   const rotatingElementRight2 = document.querySelector('.img-section__auto-rotate');

//   // Variable para rastrear el progreso del scroll
//   let lastScrollTop = 0;

//   // Escucha el evento de scroll
//   window.addEventListener('scroll', () => {
//     // Calcula la cantidad de desplazamiento de la página
//     const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
//     // Multiplica el valor del scroll por un factor para controlar la velocidad de rotación
//     const rotateDeg = scrollTop * 0.2; // Ajusta 0.2 para cambiar la sensibilidad

//     // Calcular la escala según el scroll. Aquí ajustamos la escala entre 1 y 1.5
//     let scaleValue = 0.4 + scrollTop * 0.0005; 
//     if (scaleValue > 1) scaleValue = 1;

//      // Calcular opacidad en base al scroll (máximo 1)
//   let opacityValue = scrollTop * 0.001;
//   if (opacityValue > 1) opacityValue = 1;

//     // Calcular la traslación en Y para dar movimiento vertical (puedes ajustar el factor de multiplicación)
//     const translateY = Math.max(0, 200 - scrollTop * 0.3); 

//     // Aplica la rotación al elemento
//     rotatingElementRight.style.transform = `rotate(${rotateDeg}deg) scale(${scaleValue}) translateY(${translateY}px)`;
//     rotatingElementRight.style.opacity = opacityValue;

//     rotatingElementRight2.style.transform = `rotate(${rotateDeg}deg) scale(${scaleValue}) translateY(${translateY}px)`;
//     rotatingElementRight2.style.opacity = opacityValue;

//     lastScrollTop = scrollTop;
//   });





//   // 2da img
//   const rotatingElementReverse = document.querySelector('.img-section__auto-rotate-reverse');

//   // Variable para rastrear el progreso del scroll
//   let lastScrollTop2 = 0;

//   // Escucha el evento de scroll
//   window.addEventListener('scroll', () => {
//     // Calcula la cantidad de desplazamiento de la página
//     const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
//     // Multiplica el valor del scroll por un factor para controlar la velocidad de rotación
//     const rotateDeg = scrollTop * 0.2; // Ajusta 0.2 para cambiar la sensibilidad

//     // Calcular la escala según el scroll. Aquí ajustamos la escala entre 1 y 1.5
//     let scaleValue = 0.4 + scrollTop * 0.0005; 
//     if (scaleValue > 1) scaleValue = 1;

//      // Calcular opacidad en base al scroll (máximo 1)
//   let opacityValue = scrollTop * 0.001;
//   if (opacityValue > 1) opacityValue = 1;

//     // Calcular la traslación en Y para dar movimiento vertical (puedes ajustar el factor de multiplicación)
//     const translateY = Math.max(0, 200 - scrollTop * 0.3); 

//     // Aplica la rotación al elemento
//     rotatingElementReverse.style.transform = `rotate(${rotateDeg}deg) scale(${scaleValue}) translateY(${translateY}px)`;
//     rotatingElementReverse.style.opacity = opacityValue;

//      // Para la segunda imagen (rotación hacia la izquierda)
//   const rect = rotatingElementReverse.getBoundingClientRect();
  
//   // Verifica si la imagen está dentro de la ventana visible
//   if (rect.top < window.innerHeight && rect.bottom > 0) {
//     const rotateDegReverse = -rotateDeg; // Rota en la dirección opuesta
//     // Aplica la rotación a la segunda imagen
//     rotatingElementReverse.style.transform = `rotate(${rotateDegReverse}deg) scale(${scaleValue}) translateY(${translateY}px)`;
//     rotatingElementReverse.style.opacity = opacityValue; // Mantiene la misma opacidad que la primera
//   } else {
//     // Si no está visible, opcionalmente, establece la opacidad a 0
//     rotatingElementReverse.style.opacity = 0;
//   }

//     lastScrollTop2 = scrollTop;
//   });



// Selecciona todos los elementos que deseas rotar hacia la derecha
const rotatingElements = document.querySelectorAll('.img-section__auto-rotate'); // Gira hacia la derecha
const rotatingElementReverse = document.querySelector('.img-section__auto-rotate-reverse'); // Gira hacia la izquierda

// Escucha el evento de scroll
window.addEventListener('scroll', () => {
  handleImagesScroll(rotatingElements, 1); // Llama para imágenes que rotan a la derecha
  handleSingleImageScroll(rotatingElementReverse, -1); // Llama para la imagen que rota a la izquierda
});

// Función para manejar el scroll de varias imágenes
function handleImagesScroll(elements, direction) {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();

    // Verifica si el elemento está en el viewport
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      // Multiplica el valor del scroll por un factor para controlar la velocidad de rotación
      const rotateDeg = scrollTop * 0.2 * direction; // Ajusta 0.2 para cambiar la sensibilidad

      // Calcular la escala según el scroll
      let scaleValue = 0.4 + scrollTop * 0.0005; 
      if (scaleValue > 1) scaleValue = 1;

      // Calcular opacidad en base al scroll (máximo 1)
      let opacityValue = scrollTop * 0.001;
      if (opacityValue > 1) opacityValue = 1;

      // Calcular la traslación en Y
      const translateY = Math.max(0, 200 - scrollTop * 0.3); 

      // Aplica la rotación y transformaciones al elemento actual
      applyTransformations(element, rotateDeg, scaleValue, translateY, opacityValue);
    }
  });
}

// Función para manejar el scroll de una imagen única
function handleSingleImageScroll(element, direction) {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const rect = element.getBoundingClientRect();

  // Verifica si el elemento está en el viewport
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    // Multiplica el valor del scroll por un factor para controlar la velocidad de rotación
    const rotateDeg = scrollTop * 0.2 * direction; // Ajusta 0.2 para cambiar la sensibilidad

    // Calcular la escala según el scroll
    let scaleValue = 0.4 + scrollTop * 0.0005; 
    if (scaleValue > 1) scaleValue = 1;

    // Calcular opacidad en base al scroll (máximo 1)
    let opacityValue = scrollTop * 0.001;
    if (opacityValue > 1) opacityValue = 1;

    // Calcular la traslación en Y
    const translateY = Math.max(0, 200 - scrollTop * 0.3); 

    // Aplica la rotación y transformaciones al elemento único
    applyTransformations(element, rotateDeg, scaleValue, translateY, opacityValue);
  }
}

// Función para aplicar transformaciones
function applyTransformations(element, rotateDeg, scaleValue, translateY, opacityValue) {
  element.style.transform = `rotate(${rotateDeg}deg) scale(${scaleValue}) translateY(${translateY}px)`;
  element.style.opacity = opacityValue;
}










// // Selecciona el elemento que deseas rotar
// const rotatingElement = document.querySelector('.img-section__auto-rotate');

// // Variable para rastrear el progreso del scroll
// let lastScrollTop = 0;

// // Escucha el evento de scroll
// window.addEventListener('scroll', () => {
//   // Calcula la cantidad de desplazamiento de la página
//   const scrollTop = window.scrollY || document.documentElement.scrollTop;

//   // Obtiene la altura total del documento y la altura de la ventana
//   const documentHeight = document.documentElement.scrollHeight;
//   const windowHeight = window.innerHeight;

//   // Calcula el porcentaje de scroll completado
//   const scrollPercentage = scrollTop / (documentHeight - windowHeight);

//   // Multiplica el valor del scroll por un factor para controlar la velocidad de rotación
//   const rotateDeg = scrollTop * 0.2; // Ajusta 0.2 para cambiar la sensibilidad

//   // Calcular la escala según el scroll. Aquí ajustamos la escala entre 0.4 y 1
//   let scaleValue = 0.4 + scrollTop * 0.0005; 
//   if (scaleValue > 1) scaleValue = 1;

//   // Calcular opacidad en base al scroll (máximo 1)
//   let opacityValue = Math.min(scrollPercentage + 0.1, 1); // Asegura que la opacidad comience un poco arriba de 0
//   if (opacityValue > 1) opacityValue = 1;

//   // Calcular la traslación en Y para dar movimiento vertical (puedes ajustar el factor de multiplicación)
//   const translateY = Math.max(0, 200 - scrollTop * 0.3); // Se reduce hacia 0 a medida que se hace scroll

//   // Aplica rotación, escala, traslación y opacidad al elemento
//   rotatingElement.style.transform = `rotate(${rotateDeg}deg) scale(${scaleValue})`;
// //   rotatingElement.style.transform = `rotate(${rotateDeg}deg) scale(${scaleValue}) translateY(${translateY}px)`;
//   rotatingElement.style.opacity = opacityValue;

//   lastScrollTop = scrollTop;
// });