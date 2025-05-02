import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export const showToast = (motivo, texto) => {
  Toastify({
    text: texto,
    duration: 3000,
    // destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: motivo === 'succesfully' ? "linear-gradient(to right, #00b09b, #96c93d)" : 'linear-gradient(to right, red, black)',
    },
    onClick: function(){} // Callback after click
  }).showToast();
}