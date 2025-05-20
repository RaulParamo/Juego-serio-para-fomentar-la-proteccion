document.addEventListener('DOMContentLoaded', function() {
    // Mostrar diálogo inicial
    const dialogoInicial = document.getElementById('escena5-dialogo-inicial');
       dialogoInicial.style.display='block';
    const cerrarInicialBtn = document.getElementById('escena5-cerrar-inicial');
    const dialogoNorma = document.getElementById('escena5-dialogo-norma');
   const verMensajeBtn = document.getElementById('escena5-ver-mensaje');
     const modalWhatsapp = document.getElementById('escena5-modal-whatsapp');
  const cerrarWhatsappBtn = document.getElementById('escena5-cerrar-whatsapp');
    const opcionesDiv = document.getElementById('escena5-opciones');
     const opcionesBtns = document.querySelectorAll('.escena5-opcion');
    const feedback1 = document.getElementById('escena5-feedback-1');
    const cerrarFeedback1 = document.getElementById('escena5-cerrar-feedback-1');
    const feedback2 = document.getElementById('escena5-feedback-2');
    const intentar2 = document.getElementById('escena5-intentar-2');
    const feedback3 = document.getElementById('escena5-feedback-3');
    const intentar3 = document.getElementById('escena5-intentar-3');
    const mensajeFinal = document.getElementById('escena5-mensaje-final');
    const cerrarFinal = document.getElementById('escena5-cerrar-final');
    
    // Event listeners
    cerrarInicialBtn.addEventListener('click', function() {
        dialogoInicial.style.display='none';
        dialogoNorma.style.display='block';
    });
     
    verMensajeBtn.addEventListener('click', function() {
        dialogoNorma.style.display = 'none';
        modalWhatsapp.style.display = 'block';
    });
  
    cerrarWhatsappBtn.addEventListener('click', function() {
        modalWhatsapp.style.display = 'none';
        opcionesDiv.style.display = 'block';
    });
    
    opcionesBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            opcionesDiv.style.display = 'none';
            const opcion = this.getAttribute('data-opcion');
            
            if (opcion === '1') {
                feedback1.style.display = 'block';
            } else if (opcion === '2') {
                feedback2.style.display = 'block';
            } else if (opcion === '3') {
                feedback3.style.display = 'block';
            }
        });
    });
    
    cerrarFeedback1.addEventListener('click', function() {
        feedback1.style.display = 'none';
        mensajeFinal.style.display = 'block';
    });
    
    intentar2.addEventListener('click', function() {
        feedback2.style.display = 'none';
        opcionesDiv.style.display = 'block';
    });
    
    intentar3.addEventListener('click', function() {
        feedback3.style.display = 'none';
        opcionesDiv.style.display = 'block';
    });
    
    cerrarFinal.addEventListener('click', function() {
        mensajeFinal.style.display = 'none';
 window.location.href = 'escena4.html'; // R    });
});

});