
const getPersonajeInfo = charactersName => {
    axios
    .get( `https://www.anapioficeandfire.com/api/characters?name=${charactersName}`)
    .then(response => console.log(response))
    .catch(err=>console.error(err))
    }

    //getPersonajeInfo('Daenerys Targaryen')
const nombrePersonaje = document.querySelector('#personajeInfo')

nombrePersonaje.addEventListener('click',()=>{

    const userInput = document.querySelector('#personaje').value 
    getPersonajeInfo(userInput)
})