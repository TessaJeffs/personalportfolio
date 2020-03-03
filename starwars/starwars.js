import {films} from '../data/films.js'
import {people} from '../data/people.js'
console.log(people.length)
console.log("Hi there! My first JavaScript code!")
console.log(document.querySelector('.greeting')
let greetingDiv = document.querySelector ('.greeting')
let castList = document.querySelector ('.greeting')
let counter = 1

function populateDom(characters) people.forEach (person=>{
let nameItem = document.createElement("li")
    nameItem.textContent = person.name
    castList.appendChild(nameItem)
    
let personAnchor = document.createElement("a")
    personAnchor.href = "#"
let personImg = document.createELement ("img")
  personImg.src = 'https://starwars-visualguide.com/assets/img/characters/${counter.jpg'

  personImg.addEventsListener ('error',{event}=> {personImg.hidden=true
    //personImg.src = '../images/uvu.jpeg'
})
personImg.addEventListener("click", function ( event ) {
    console.log('thanks for clicking!')
    let maleButton = document.querySelector('#maleButton')
    let maleButton = document.querySelector('#femaleButton')
    let maleButton = document.querySelector('#otherButton')
    maleButton.addEventListener ("click", function ( event){
        console.log ('thanks for clicking!')
    })

personAnchor.appendChild(personImg)
greetingDiv.appendChild(personAnchor)
counter++
)}
}