document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const elements = {
        dialogs: {
            initial: document.getElementById('initial-dialog'),
            question: document.getElementById('question-dialog'),
            modal: document.getElementById('memory-modal'),
            options: document.getElementById('options-dialog'),
            teacherQuestion: document.getElementById('teacher-question'),
            norma1: document.getElementById('flow-norma1'),
            teacher1: document.getElementById('flow-teacher1'),
            norma2: document.getElementById('flow-norma2'),
            teacher2: document.getElementById('flow-teacher2'),
            final: document.getElementById('flow-final'),
            feedback1: document.getElementById('feedback-1'),
            feedback3: document.getElementById('feedback-3'),
            feedback4: document.getElementById('feedback-4'),
            finalFeedback: document.getElementById('final-feedback')
        },
        buttons: {
            closeInitial: document.getElementById('close-initial'),
            closeQuestion: document.getElementById('close-question'),
            closeModal: document.getElementById('close-modal'),
            closeFeedback1: document.getElementById('close-feedback1'),
            closeFeedback3: document.getElementById('close-feedback3'),
            closeFeedback4: document.getElementById('close-feedback4'),
            closeFinal: document.getElementById('close-final'),
            continueFlow: [
                document.getElementById('continue-flow1'),
                document.getElementById('continue-flow2'),
                document.getElementById('continue-flow3'),
                document.getElementById('continue-flow4'),
                document.getElementById('continue-flow5'),
                document.getElementById('continue-flow6')
            ]
        },
        characters: {
            juanNormal: document.getElementById('juan-normal'),
            juanInitial: document.getElementById('juan-initial'),
            normaNormal: document.getElementById('norma-normal'),
            normaThinking: document.getElementById('norma-thinking'),
            boy: document.getElementById('boy'),
            girl: document.getElementById('girl'),
            teacher: document.getElementById('teacher')
        },
        optionButtons: document.querySelectorAll('.option-btn')
    };

    // Estado inicial de los personajes
    function initCharacters() {
        elements.characters.juanInitial.style.display = 'block';
        elements.characters.juanNormal.style.display = 'none';
        elements.characters.normaNormal.style.display = 'block';
        elements.characters.normaThinking.style.display = 'none';
        elements.characters.boy.style.display = 'block';
        elements.characters.girl.style.display = 'block';
        elements.characters.teacher.style.display = 'block';
    }

    // Mostrar diálogo inicial
    function showInitialDialog() {
        elements.dialogs.initial.style.display = 'block';
    }

    // Configurar eventos
    function setupEvents() {
        // Flujo principal
        elements.buttons.closeInitial.addEventListener('click', function() {
            elements.dialogs.initial.style.display = 'none';
            // Cambiar personajes
            elements.characters.normaNormal.style.display = 'none';
            elements.characters.normaThinking.style.display = 'block';
            // Mostrar siguiente diálogo
            elements.dialogs.question.style.display = 'block';
        });

        elements.buttons.closeQuestion.addEventListener('click', function() {
            elements.dialogs.question.style.display = 'none';
            elements.dialogs.modal.style.display = 'flex';
        });

        elements.buttons.closeModal.addEventListener('click', function() {
            elements.dialogs.modal.style.display = 'none';
            elements.dialogs.options.style.display = 'block';
        });

        // Manejo de opciones
        elements.optionButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                elements.dialogs.options.style.display = 'none';
                const option = this.getAttribute('data-option');
                
                if (option === '1') {
                    elements.dialogs.feedback1.style.display = 'block';
                } else if (option === '2') {
                    elements.dialogs.teacherQuestion.style.display = 'block';
                } else if (option === '3') {
                    elements.dialogs.feedback3.style.display = 'block';
                } else if (option === '4') {
                    elements.dialogs.feedback4.style.display = 'block';
                }
            });
        });

        // Cerrar feedbacks y volver a opciones
        elements.buttons.closeFeedback1.addEventListener('click', function() {
            elements.dialogs.feedback1.style.display = 'none';
            elements.dialogs.options.style.display = 'block';
        });

        elements.buttons.closeFeedback3.addEventListener('click', function() {
            elements.dialogs.feedback3.style.display = 'none';
            elements.dialogs.options.style.display = 'block';
        });

        elements.buttons.closeFeedback4.addEventListener('click', function() {
            elements.dialogs.feedback4.style.display = 'none';
            elements.dialogs.options.style.display = 'block';
        });

        // Flujo de diálogos (opción 2)
        elements.buttons.continueFlow[0].addEventListener('click', function() {
            elements.dialogs.teacherQuestion.style.display = 'none';
            elements.dialogs.norma1.style.display = 'block';
        });

        elements.buttons.continueFlow[1].addEventListener('click', function() {
            elements.dialogs.norma1.style.display = 'none';
            elements.dialogs.teacher1.style.display = 'block';
        });

        elements.buttons.continueFlow[2].addEventListener('click', function() {
            elements.dialogs.teacher1.style.display = 'none';
            elements.dialogs.norma2.style.display = 'block';
        });

        elements.buttons.continueFlow[3].addEventListener('click', function() {
            elements.dialogs.norma2.style.display = 'none';
            elements.dialogs.teacher2.style.display = 'block';
        });

        elements.buttons.continueFlow[4].addEventListener('click', function() {
            elements.dialogs.teacher2.style.display = 'none';
            // Cambiar personajes
            elements.characters.juanInitial.style.display = 'none';
            elements.characters.juanNormal.style.display = 'block';
            elements.characters.normaThinking.style.display = 'none';
            elements.characters.normaNormal.style.display = 'block';
            // Mostrar diálogo final
            elements.dialogs.final.style.display = 'block';
        });

        elements.buttons.continueFlow[5].addEventListener('click', function() {
            elements.dialogs.final.style.display = 'none';
            elements.dialogs.finalFeedback.style.display = 'block';
        });

        // Cerrar feedback final y redirigir
        elements.buttons.closeFinal.addEventListener('click', function() {
            window.location.href = 'escena7.html';
        });
    }

    // Inicializar
    initCharacters();
    showInitialDialog();
    setupEvents();
});