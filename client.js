console.log('Here are all the available people:', people);

$(document).ready( readyNow );


// Declaring randomIndex 
let randomIndex = randomNumber(0, (people.length - 1));

function readyNow() {
    //code triggered here is safe to manipulate DOM
    console.log('DOM IS READY, jquery loaded');

    $( '.guessWho' ).append(`
    <div>
        <h2>Click on: ${randomPerson()}</h2>
    </div>
    `)

    for( let person of people ) {
        $( '.pictures' ).append(
            `<div data-name=${person.name} class="profilePic">
                <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of Chris">
            </div>`
        );
    }

    //targets the divs of the pictures to run guessWho on the click
    $('.profilePic').on('click', guessWho)


}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function randomPerson() {
    return people[randomIndex].name
}

function guessWho() {
    console.log('guess who!');
    
    if( $(this).data( 'name' ) === randomPerson()) {
        alert("Success! You got it right!");
    } else {
        alert("Oops, try again!");
    }
}