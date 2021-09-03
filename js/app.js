//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

//EventListeners
eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);
}


//Funciones
function agregarTweet(e) {
    e.preventDefault();

    //TextArea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    //Validación
    if(tweet === ''){
        mostrarError('El mensaje no puede ir vacío');
        return; //Evita que se ejecuten más líneas de código
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    //Agregar al arreglo de tweets
    tweets = [...tweets, tweetObj];
    
    //Se crea el HTML
    crearHTML();

    //Reiniciar el formulario
    formulario.reset();
}

//Mostrar error
function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //Elimina la alerta después de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

//Muestra listado de tweets
function crearHTML(){
    
    limpiarHTML();
    
    if(tweets.length > 0){
        tweets.forEach(tweet => {
            const li = document.createElement('li');    //Crea el HTML    
            li.innerText = tweet.tweet;                 //Agrega el texto
            listaTweets.appendChild(li);                //Se inserta en el HTML    
        });
    }
}

//Limpiar el HTML
function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}