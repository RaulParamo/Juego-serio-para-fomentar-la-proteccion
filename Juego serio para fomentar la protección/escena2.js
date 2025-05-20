document.addEventListener('DOMContentLoaded', function () {
    // Elementos de la escena
    const seeMessageBtn = document.getElementById('escena2-see-message');
    const norma = document.getElementById('escena2-norma');
    const normaPensando = document.getElementById('escena2-norma-pensando-whatsapp');
    const computerModal = document.getElementById('escena2-computer-modal');
    const recordandoModal = document.getElementById('escena2-recordando-modal');
    const closeModalBtn = document.getElementById('escena2-close-modal');
    const closemodal2Btn = document.getElementById('escena2-close-modal2');
    const helpDialog = document.getElementById('escena2-help-dialog');
    const helpBtn = document.getElementById('escena2-help-btn');
    const optionsBox = document.getElementById('escena2-options');
    const opt1 = document.getElementById('escena2-opt1');
    const opt2 = document.getElementById('escena2-opt2');
    const opt3 = document.getElementById('escena2-opt3');
    const opt4 = document.getElementById('escena2-opt4');
    const feedback1 = document.getElementById('escena2-feedback1');
    const feedback2 = document.getElementById('escena2-feedback2');
    const feedback3 = document.getElementById('escena2-feedback3');
    const feedback1CloseBtns = document.getElementById('escena2-feedback1-close');
    const feedback3CloseBtns = document.getElementById('escena2-feedback3-close');
    const nextBtn = document.getElementById('escena2-next-btn');
    const initialMsg = document.getElementById('escena2-initial-msg');
    const normaAccept = document.getElementById('escena2-norma-accept');
    const talkParentsBtn = document.getElementById('escena2-talk-parents-btn');
    const parentsContainer = document.getElementById('escena2-parents-container');
    const parentsMsg = document.getElementById('escena2-parents-msg');
    const closeParentsMsg = document.getElementById('escena2-close-parents-msg');
    const momAvatar = document.getElementById('escena2-mom');
    const feedbackFinal=document.getElementById('escena2-feedback-final')

    // 1. Mostrar modal con imagen de computadora al hacer clic en "Ver el mensaje"
    seeMessageBtn.addEventListener('click', function () {
        initialMsg.style.display = 'none';
        computerModal.style.display = 'flex';

    });

    // 2. Cerrar modal y mostrar diálogo donde ella recuerda
    closeModalBtn.addEventListener('click', function () {
        computerModal.style.display = 'none';
        norma.style.display = 'none';
        normaPensando.style.display = 'flex';

        helpDialog.style.display = 'block';
    });

    // 3. Mostrar los consejos de los papaás
    helpBtn.addEventListener('click', function () {
        helpDialog.style.display = 'none';
        recordandoModal.style.display = 'flex';
        //
    });
    closemodal2Btn.addEventListener('click', function () {
        recordandoModal.style.display = 'none',
            optionsBox.style.display = 'flex';
    })


    // 4. Manejar las opciones seleccionadas
    opt1.addEventListener('click', function () {
        optionsBox.style.display = 'none';
        feedback1.style.display = 'block';
    });
    feedback1CloseBtns.addEventListener('click', function () {
        feedback1.style.display = 'none';
        optionsBox.style.display = 'flex';
    })

   
    opt2.addEventListener('click', function() {
        optionsBox.style.display = 'none';
        normaAccept.style.display = 'block';
    });

    opt3.addEventListener('click', function() {
        optionsBox.style.display = 'none';
        feedback3.style.display = 'block';
    });

      feedback3CloseBtns.addEventListener('click', function () {
        feedback3.style.display = 'none';
        optionsBox.style.display = 'flex';
    })

    opt4.addEventListener('click', function() {
        optionsBox.style.display = 'none';
      normaAccept.style.display = 'block';
    });

   talkParentsBtn.addEventListener('click', function(){
feedbackFinal.style.display='block';
normaAccept.style.display = 'none';
   })


/*

    
    // 5. Mostrar padres cuando Norma acepta hablar con ellos
    talkParentsBtn.addEventListener('click', function() {
        normaAccept.style.display = 'none';
        parentsContainer.style.display = 'block';
        
        // Animación para hacer aparecer a los padres
        setTimeout(() => {
            momAvatar.style.opacity = '1';
            dadAvatar.style.opacity = '1';
            parentsMsg.style.display = 'block';
        }, 100);
    });

    // 6. Cerrar mensaje de padres y mostrar feedback final
    closeParentsMsg.addEventListener('click', function() {
        parentsMsg.style.display = 'none';
        
        // Animación para desaparecer a los padres
        momAvatar.style.opacity = '0';
        dadAvatar.style.opacity = '0';
        
        setTimeout(() => {
            parentsContainer.style.display = 'none';
            feedback2.style.display = 'block';
        }, 500);
    });

    // 7. Cerrar feedbacks y volver a opciones
    feedbackCloseBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            feedback1.style.display = 'none';
            feedback2.style.display = 'none';
            feedback3.style.display = 'none';
            optionsBox.style.display = 'flex';
        });
    });
*/
    // 8. Transición a siguiente escena
    nextBtn.addEventListener('click', function() {
        const transition = document.createElement('div');
        transition.style.position = 'fixed';
        transition.style.top = '0';
        transition.style.left = '0';
        transition.style.width = '100%';
        transition.style.height = '100%';
        transition.style.backgroundColor = 'black';
        transition.style.opacity = '0';
        transition.style.transition = 'opacity 0.8s ease';
        transition.style.zIndex = '9999';
        document.body.appendChild(transition);
        
        setTimeout(() => {
            transition.style.opacity = '1';
        }, 50);
        
        setTimeout(() => {
            window.location.href = 'escena3.html';
        }, 800);
    });
});