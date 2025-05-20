document.addEventListener('DOMContentLoaded', function() {
    // Elementos de la interfaz
    const normaAnsiedad = document.getElementById('escena4-norma-ansiedad');
    const normaPensando = document.getElementById('escena4-norma-pensando');
    const normaNormal = document.getElementById('escena4-norma-normal');
    const initialMsg = document.getElementById('escena4-initial-msg');
    const seeMessageBtn = document.getElementById('escena4-see-message');
    const problemDialog = document.getElementById('escena4-problem-dialog');
    const helpBtn = document.getElementById('escena4-help-btn');
    const optionsBox = document.getElementById('escena4-options');
    const opt1 = document.getElementById('escena4-opt1');   
    const opt2 = document.getElementById('escena4-opt2');
    const opt3 = document.getElementById('escena4-opt3');
    const feedbackAlert = document.getElementById('escena4-feedbackAlert');
    const feedbackWarning = document.getElementById('escena4-feedbackWarning');
    const feedback2 = document.getElementById('escena4-feedback2');
    const feedback1BtnClose = document.getElementById('escena4-feedback1BtnClose');
    const feedback3BtnClose = document.getElementById('escena4-feedback3BtnClose');
    const talkParentsBtn = document.getElementById('escena4-talk-parents-btn');
    const normaAccept = document.getElementById('escena4-norma-accept');
    const closeDialog = document.getElementById('escena4-close-dialog');
    const parentsContainer = document.getElementById('escena4-parents-container');
    const momAvatar = document.getElementById('escena4-mom');
    const dadAvatar = document.getElementById('escena4-dad');
    const parentsMsg = document.getElementById('escena4-parents-msg');
    const closeParentsMsg = document.getElementById('escena4-close-parents-msg');
    const closeParentsMsg2 = document.getElementById('escena4-close-parents-msg2');
    const parentsMsg2 = document.getElementById('escena4-parents-msg2');
    const finalFeedback = document.getElementById('escena4-final-feedback');
    const nextBtn = document.getElementById('escena4-next-btn');

    // Ver mensaje inicial de Norma
    seeMessageBtn.addEventListener('click', function() {
        initialMsg.style.display = 'none';
        problemDialog.style.display = 'flex';
    });

    // Mostrar opciones (cambia la imagen de Norma)
    helpBtn.addEventListener('click', function() {
        problemDialog.style.display = 'none';
        normaAnsiedad.style.display = 'none';
        normaPensando.style.display = 'block';
        optionsBox.style.display = 'block';
    });

    // Opción 1: Ignorarlo (incorrecta)
    opt1.addEventListener('click', function() {
        optionsBox.style.display = 'none';
        feedbackAlert.style.display = 'flex';
    });

    // Cerrar feedback incorrecto 1 y volver a opciones
    feedback1BtnClose.addEventListener('click', function() {
        feedbackAlert.style.display = 'none';
        optionsBox.style.display = 'block';
    });

    // Opción 2: Dejar de subir fotos (incorrecta)
    opt2.addEventListener('click', function() {
        optionsBox.style.display = 'none';
        feedbackWarning.style.display = 'flex';
    });

    // Cerrar feedback incorrecto 3 y volver a opciones
    feedback3BtnClose.addEventListener('click', function() {
        feedbackWarning.style.display = 'none';
        optionsBox.style.display = 'block';
    });

    // Opción 3: Hablar con padres (correcta)
    opt3.addEventListener('click', function() {
        optionsBox.style.display = 'none';
        feedback2.style.display = 'flex';
    });

    // Hablar con padres
    talkParentsBtn.addEventListener('click', function() {
        feedback2.style.display = 'none';
        normaAccept.style.display = 'flex';
        parentsContainer.style.display = 'block';
        momAvatar.style.display = 'inline-block';
        dadAvatar.style.display = 'inline-block';
    });





    // Cerrar diálogo de Norma y mostrar mensaje de padres
    closeDialog.addEventListener('click', function() {
        normaAccept.style.display = 'none';
        normaPensando.style.display = 'none';
        normaNormal.style.display = 'flex';
        parentsMsg.style.display = 'block';
    });

    closeParentsMsg.addEventListener('click', function(){
        parentsMsg.style.display = 'none';
        parentsMsg2.style.display = 'flex';
    });

    // Cerrar mensaje de padres y mostrar feedback final
    closeParentsMsg2.addEventListener('click', function() {
        normaNormal.style.display = 'block';
        parentsMsg2.style.display = 'none';
        momAvatar.style.display = 'none';
        dadAvatar.style.display = 'none';
        parentsContainer.style.display = 'none';
        finalFeedback.style.display = 'flex';
    });

    // Ir a la siguiente escena
    nextBtn.addEventListener('click', function() {
        window.location.href = 'escena6.html';
    });
});