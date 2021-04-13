const choreCollection = document.querySelector('div#chore-list')


function renderAllChores () {
fetch ('http://localhost:3000/chores')
    .then(resp => resp.json())
    .then(choresArr => {
        // console.log(data)
        choresArr.forEach(choresObj => {
            renderOneChore(choresObj)
        })
    })
}
function renderOneChore(choresObj) {
    const outerDiv = document.createElement('div')
    outerDiv.classList.add ('chore-card')

    outerDiv.innerHTML = `
    <button class="delete-button" data-id="${choresObj.id}">x</button>
    <h3> ${choresObj.title} </h3>
    <p> Duration: ${choresObj.duration} </p>
    <input></input>
    <!-- value should have the importance  -->
    
    `
    // console.log(outerDiv)
    choreCollection.append(outerDiv)


}

const choreForm = document.querySelector('form#new-chore-form')

choreForm.addEventListener('submit', event => {
    event.preventDefault()
    // console.log(event.target)
    const newChoreObj = {
        title: event.target.title.value,
        priority: event.target.priority.value,
        duration: event.target.priority.value
    }

    fetch ('http://localhost:3000/chores', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accepts': 'application/json'
        },
        body: JSON.stringify(newChoreObj)
    })
    // choreform.reset()
})
    
renderAllChores()