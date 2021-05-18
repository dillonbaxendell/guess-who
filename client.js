console.log('Here are all the available people:', people);

$(document).ready( readyNow );


// Declaring randomIndex so I can access it using the people array
let randomIndex = randomNumber(0, (people.length - 1));

function readyNow() {
    //code triggered here is safe to manipulate DOM
    console.log('DOM IS READY, jquery loaded');

    $( '.guessWho' ).append(`
    <div>
        <h2>Click on: ${randomPerson()}</h2>
    </div>
    `)

    // For loop cycles through the people array to append each profile picture to the DOM
    // based off their githubUsername
    for( let person of people ) {
        $( '.pictures' ).append(
            `<div data-name=${person.name} class="profilePic" id="overlay">
                <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
            </div>`
        );
    }

    //targets the divs of the pictures to run guessWho on the click
    $('.profilePic').on('click', guessWho)


}

// A generic randomNumber function
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

// Create a function to generate a randomPerson from the people array using the randomIndex variable 
// declared up top
function randomPerson() {
    return people[randomIndex].name
}

// Create a function to guess who
function guessWho() {
    console.log('guess who!');
    
    // If the data variable "name" (found on the data-name on the div of each image) is equal
    // to the randomPerson that was generated, either success or try again
    if( $(this).data( 'name' ) === randomPerson()) {
        addCorrectVisuals();
        alert("YAY! You got it right!");
        setTimeout(function(){ location.reload() }, 3000)
    } else {
        alert("Nope... try again!");
    }
}

function addCorrectVisuals() {
    $(this).parent().addClass( 'overlay' );
}