window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let isListening = false;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'nl';

let p = document.createElement('p');
const inputDate = document.querySelector('#date');
inputDate.value = '';

function animateMicrophone(animate = false) {
    if(animate) {
        document.querySelector('.date-picker .microphone img').classList.add('listening');
    } else {
        document.querySelector('.date-picker .microphone .listening').classList.remove('listening');
    }
}

document.querySelector('.microphone').addEventListener('click', function() {
    if(!isListening) {
        recognition.start();
        isListening = true;
        animateMicrophone(true);

        recognition.addEventListener('result', function(e) {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');
        
            inputDate.value = transcript;
        
            if (e.results[0].isFinal) {
                recognition.stop();
                isListening = false;
            }
            animateMicrophone(false);
        });
    } else {
        recognition.stop();
        isListening = false;
        animateMicrophone(false);
    }
});