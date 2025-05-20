const phone = document.getElementById("phone");
const messageSound = document.getElementById("messageSound");
const startButton = document.getElementById("startButton");
const messageWindow = document.getElementById("messageWindow");
const closeMessageWindow = document.getElementById("closeMessageWindow");
const options = document.getElementById("options");
const normaAvatar = document.getElementById("normaAvatar");
const normaImage = document.getElementById("normaImage");
const messageBubble = document.getElementById("messageBubble");
const decisionBubble = document.getElementById("decisionBubble");
const helpButton = document.getElementById("helpButton");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const feedbackMessage = document.getElementById("feedbackMessage");
const closeFeedback = document.getElementById("closeFeedback");
const feedbackImage = document.getElementById("feedbackImage");
const feedbackText = document.getElementById("feedbackText");

// Initial setup
phone.style.pointerEvents = "none";
normaAvatar.style.display = "block";
decisionBubble.style.display = "none";
options.style.display = "none";

// Start button event
startButton.addEventListener("click", function() {
    startButton.style.display = "none";
    showMessageNotification();
});

function showMessageNotification() {
    messageBubble.style.display = "block";
    
    setTimeout(() => {
        phone.classList.add("vibrate");
        phone.querySelector("img").src = "images/mensaje2.png";
        messageSound.play();
        phone.style.pointerEvents = "auto";
    }, 1000);
}

// Phone event
phone.addEventListener("click", function() {
    phone.classList.remove("vibrate");
    phone.querySelector("img").src = "images/phone.png";
    messageSound.pause();
    messageSound.currentTime = 0;
    messageBubble.style.display = "none";
    messageWindow.style.display = "block";
    phone.style.pointerEvents = "none";
});

// Close message window
closeMessageWindow.addEventListener("click", function() {
    messageWindow.style.display = "none";
    // Cambiar a la imagen de Norma pensando
    normaImage.src = "images/Norma_pensando.png";
    decisionBubble.style.display = "block";
});

// Help button
helpButton.addEventListener("click", function() {
    decisionBubble.style.display = "none";
    // Volver a la imagen normal de Norma
   // normaImage.src = "images/Norma.png";
    options.style.display = "flex";
});

// Option 3 (correct)
option3.addEventListener("click", function() {
    options.style.display = "none";
    normaImage.src = "images/Norma.png";
    // Show mom with transition
    const momAvatar = document.getElementById("momAvatar");
    momAvatar.classList.add("visible");
    
    // Show dialog bubble after 1 second
    setTimeout(() => {
        const momBubble = document.getElementById("momBubble");
        momBubble.style.display = "block";
        
        // Close button setup
        document.getElementById("closeMomBubble").addEventListener("click", function() {
            momBubble.style.display = "none";
            
            // Show final message
            const finalMessage = document.getElementById("finalMessage");
            finalMessage.style.display = "block";
            
            // Create button for next scene
            const nextSceneButton = document.createElement("button");
            nextSceneButton.textContent = "Siguiente escena";
            nextSceneButton.className = "next-scene-button";
            nextSceneButton.addEventListener("click", function() {
                // Transition and redirection
                const transitionLayer = document.createElement("div");
                transitionLayer.id = "transitionLayer";
                transitionLayer.style.position = "fixed";
                transitionLayer.style.top = "0";
                transitionLayer.style.left = "0";
                transitionLayer.style.width = "100%";
                transitionLayer.style.height = "100%";
                transitionLayer.style.backgroundColor = "black";
                transitionLayer.style.zIndex = "9999";
                transitionLayer.style.opacity = "0";
                transitionLayer.style.transition = "opacity 0.8s ease-in-out";
                document.body.appendChild(transitionLayer);
                
                setTimeout(() => {
                    transitionLayer.style.opacity = "1";
                }, 50);
                
                setTimeout(() => {
                    window.location.href = "escena2.html";
                }, 800);
            });
            
            finalMessage.appendChild(nextSceneButton);
        });
    }, 1000);
});

// Option 2 (incorrect)
option2.addEventListener("click", function() {
    options.style.display = "none";
    feedbackImage.src = "images/Alerta.png";
    feedbackText.innerHTML = `
    <p style="text-align: justify;">
    Ignorar el mensaje no resuelve el problema. Aunque evitaste la interacción, es importante que busques ayuda para evitar que la situación empeore.</p>`
   feedbackMessage.style.display = "block"  
   options.style.display = "none"; //

});

// Option 1 (incorrect)
option1.addEventListener("click", function() {
    options.style.display = "none";
    feedbackImage.src = "images/peligro.png";
    feedbackText.innerHTML = `
        <p style="text-align: justify;">
            Responder el mensaje de un desconocido aumenta el riesgo de que te roben tus datos personales. 
            Recuerda que es muy importante hablar con tus padres, un adulto de confianza o un maestro, 
            cuando te sientas insegura en línea o no sabes qué hacer para evitar situaciones riesgosas.
        </p>`
    feedbackMessage.style.display = "block";
});

// Close feedback message and restart
closeFeedback.addEventListener("click", function() {
    feedbackMessage.style.display = "none";
    // Mostrar Norma pensando de nuevo
    normaImage.src = "images/Norma_pensando.png";
    //decisionBubble.style.display = "block";
    options.style.display = "flex"; 
});