document.addEventListener('DOMContentLoaded', function() {
    // Elementos de la interfaz
    const normaAvatar=document.getElementById('escena3-norma');
    const normaAvatarSinCel=document.getElementById('escena3-norma-sincel');
    const normaNormal=document.getElementById('escena3-norma-normal');
    const initialMsg = document.getElementById('escena3-initial-msg');
    const seeMessageBtn = document.getElementById('escena3-see-message');
    const problemDialog = document.getElementById('escena3-problem-dialog');
    const helpBtn = document.getElementById('escena3-help-btn');
    const optionsBox = document.getElementById('escena3-options');
    const opt1 = document.getElementById('escena3-opt1');   
    const opt2 = document.getElementById('escena3-opt2');
    const opt3 = document.getElementById('escena3-opt3');
    const feedbackAlert = document.getElementById('escena3-feedbackAlert');
    const feedbackWarning = document.getElementById('escena3-feedbackWarning');
    const feedback2 = document.getElementById('escena3-feedback2');
    const fedback1BtnClose = document.getElementById('fedback1BtnClose');
    const fedback3BtnClose = document.getElementById('fedback3BtnClose');
    const talkParentsBtn = document.getElementById('escena3-talk-parents-btn');
    const normaAccept = document.getElementById('escena3-norma-accept');
    const closeDialog = document.getElementById('escena3-close-dialog');
    const parentsContainer = document.getElementById('escena3-parents-container');
    const momAvatar = document.getElementById('escena3-mom');
    const dadAvatar = document.getElementById('escena3-dad');
    const parentsMsg = document.getElementById('escena3-parents-msg');
    const closeParentsMsg = document.getElementById('escena3-close-parents-msg');
    const closeParentsMsg2 = document.getElementById('escena3-close-parents-msg2');
    const parentsMsg2=document.getElementById('escena3-parents-msg2')
    const finalFeedback = document.getElementById('escena3-final-feedback');
    const nextBtn = document.getElementById('escena3-next-btn');

    // Ver mensaje inicial de Norma
    seeMessageBtn.addEventListener('click', function() {
        initialMsg.style.display = 'none';
        problemDialog.style.display = 'flex';
    });

    // Mostrar opciones
    helpBtn.addEventListener('click', function() {
        problemDialog.style.display = 'none';
        optionsBox.style.display = 'block';
    });

    // Opción 1: Ignorar las molestias (incorrecta)
    opt1.addEventListener('click', function() {
        optionsBox.style.display = 'none';
        feedbackAlert.style.display = 'flex';
    });

    // Cerrar feedback incorrecto 1 y volver a opciones
    fedback1BtnClose.addEventListener('click', function() {
        feedbackAlert.style.display = 'none';
        optionsBox.style.display = 'block';
    });

    // Opción 2: Decirle a sus padres (correcta)
    opt2.addEventListener('click', function() {
        optionsBox.style.display = 'none';
        feedback2.style.display = 'flex';
    });

    // Opción 3: Automedicarse (incorrecta)
    opt3.addEventListener('click', function() {
        optionsBox.style.display = 'none';
        feedbackWarning.style.display = 'flex';
    });

    // Cerrar feedback incorrecto 3 y volver a opciones
    fedback3BtnClose.addEventListener('click', function() {
        feedbackWarning.style.display = 'none';
        optionsBox.style.display = 'block';
    });

    // Hablar con padres
    talkParentsBtn.addEventListener('click', function() {
        feedback2.style.display = 'none';
        normaAccept.style.display = 'flex';
          // Mostrar el contenedor de padres
          parentsContainer.style.display = 'block';
          // Mostrar los avatares de padres
          momAvatar.style.display = 'inline-block';
          dadAvatar.style.display = 'inline-block';
          // Mostrar el mensaje de los padres
         
    });

    // Cerrar diálogo de Norma y aparece el dialogo de la mamá
    closeDialog.addEventListener('click', function() {
        normaAccept.style.display = 'none';
        normaAvatar.style.display='none'
        normaAvatarSinCel.style.display='block'
        parentsMsg.style.display = 'block';



    });

    closeParentsMsg.addEventListener('click', function(){
        parentsMsg.style.display = 'none';
        parentsMsg2.style.display='flex'
       // closeParentsMsg2.style.dysplay='block';   
    })




// Cerrar mensaje de padres y mostrar feedback final
   closeParentsMsg2.addEventListener('click', function() {
    normaNormal.style.display='block';
    normaAvatarSinCel.style.display='none';
        parentsMsg2.style.display = 'none';
    //   momAvatar.style.display = 'none';
       //dadAvatar.style.display = 'none';
     //  parentsContainer.style.display = 'none';
       finalFeedback.style.display = 'flex';
    });

    // Ir a la siguiente escena
 // Ir a la siguiente escena
nextBtn.addEventListener('click', function() {
    window.location.href = 'escena5.html'; // Redirige a la escena 5 por practicidad
});

});