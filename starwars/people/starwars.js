import {films} from '../../data/films.js'
import {people} from '../../data/people.js'
let gallery = document.querySelector ('.gallery')
const maleCharacters = people.filter (person => person.gender === 'male')
const femaleCharacters = people.filter (person => person.gender === 'female')
const otherCharacters = people.filter (
    person => 
    person.gender === 'n/a'||
    person.gender === 'none' ||
    person.gender === 'hermaphrodite',
)

maleButton.addEventListener ('click', function(event){
    populateDOM(maleCharacters)
})
    femaleButton.addEventListener ('click', function(event){
        populateDOM(femaleCharacters)
})
otherButton.addEventListener ('click', function(event){
    populateDOM(otherCharacters)
})

let url = "https://swapi.co/api/people/1/"
function getLastNumber(URL) {
    let end =  url.lastIndexOf('/')
    let start = end -2 
    if (url.charAt(start) === "/"){
        start++
    }
    console.log(`Start is: ${start} and end is: ${end}`)
    console.log(url.slice(start, end))
    return url.slice(start,end)
}

function removeChildren (element) {
    while (element.firstChild){
        element.removeChild(element.firstChild)
    }
}
getLastNumber(url)
function populateDOM(characters) {
    removeChildren(gallery)
    characters.forEach(person=> {
        let imageNum = getLastNumber(person.url)
        let personAnchor = document.createElement('a')
        personAnchor.href = '#'
        let personImg = document.createElement ('img')
        personImg.src = `https://starwars-visualguide.com/assets/img/characters/${counter}.jpg`

        personImg.addEventListener ('error', event => {
            personImg.hidden = true
            //person img src = '../images/uvu.jpeg'
         })
personImg.addEventListener("click", function (event){
    console.log ("thanks for clicking!")
})
personAnchor.appendChild (personImg)
galleryDiv.appendChild(personAnchor)
counter++
    })
    }