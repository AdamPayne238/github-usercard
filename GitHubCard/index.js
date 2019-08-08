/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
    
// let entryPoint = document.querySelector('data')

// axios.get('https://api.github.com/users/AdamPayne238')
//     .then((response) => {
//         console.log(response);
//         response.data.data.forEach( item => {
//         let newCard = gitCard(item)
//         entryPoint.appendChild(newCard)
//         })
//     .catch((err) => {
//         console.log(err);
//       })
//     })


    // let entryPoint = document.querySelector('.entry')

// Step Three: talk about HTTP, requesting data from a server, and axios
// Write the code to request data from this address (or whatever breed you want :) ) 
// console.log the response and inspect it in the console, note that the response data is going to be different for every server.
// move onto step 4 with the response data in mind. 

// axios.get('https://dog.ceo/api/breed/mastiff/images/random/12')
//   .then((response) => {
//   console.log(response);
//   response.data.message.forEach( item => {
//     let newDog = DogCard(item)
//     entryPoint.appendChild(newDog)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
const followersArray = ["https://api.github.com/users/tetondan", "https://api.github.com/users/dustinmyers", "https://api.github.com/users/justsml", "https://api.github.com/users/luishrd", "https://api.github.com/users/bigknell"];

//break

//Classes

//card
//card-info
//name
//username

function gitCard(gitHub){

  //Define Element
  //Card
  let newCard = document.createElement('div');
  //Image {image url of user}
  let newImage = document.createElement('img');
  // newImage.src = "https://avatars1.githubusercontent.com/u/52122395?v=4";
  //Card Info
  let newInfo = document.createElement('div');
  //Name {users name}
  let newName = document.createElement('h3');
  //UserName {users user name}
  let newUserName = document.createElement('p');
  //Location {users location}
  let newLocation = document.createElement('p');
  //Profile
  let newProfile = document.createElement('p');
  // newProfile.src = "https://github.com/AdamPayne238";
  //Followers
  let newFollowers = document.createElement('p');
  // newFollowers.src = "https://api.github.com/users/AdamPayne238/followers";
  //Following
  let newFollowing = document.createElement('p');
  // newFollowing.src = "https://api.github.com/users/AdamPayne238/following{/other_user}";
  //Bio {users bio}
  let newBio = document.createElement('p');
  //newBio.src = "Student";

  //Set Structure of Elements (appendChild)
  newCard.appendChild(newImage);
  newCard.appendChild(newInfo);
  newCard.appendChild(newName);
  newCard.appendChild(newUserName);
  newCard.appendChild(newLocation);
  newCard.appendChild(newProfile);
  newCard.appendChild(newFollowers);
  newCard.appendChild(newFollowing);
  newCard.appendChild(newBio);

  //Set Class
  //Card
  newCard.classList.add('.card');
  //Card Info
  newInfo.classList.add('.card-info');
  //Name
  newName.classList.add('.name');
  //UserName
  newUserName.classList.add('.username');

  //Set Content
  newImage.textContent = imgUrl;
  newInfo.textContent = imgUrl;
  newName.textContent = imgUrl;
  newUserName.textContent = imgUrl;
  newLocation.textContent = gitHub.location;
  newProfile.textContent = `${gitHub.html_url}`;
  newFollowers.textContent = `Followers: ${gitHub.newFollowers}`;
  newFollowing.textContent = `Following: ${gitHub.newFollowing}`;
  newBio.textContent = `Bio: ${gitHub.newio}`;

  return newCard;

}

let entryPoint = document.querySelector('data')

axios.get('https://api.github.com/users/AdamPayne238')
    .then((response) => {
        console.log(response)
        response.data.data.forEach(item => {
          let newCard = gitCard(item)
          entryPoint.appendChild(newCard)
        })
    .catch((err) => {
        console.log(err);
      })
    })

//       axios.get('https://dog.ceo/api/breed/mastiff/images/random/12')
//   .then((response) => {
//   console.log(response);
//   response.data.message.forEach( item => {
//     let newDog = DogCard(item)
//     entryPoint.appendChild(newDog)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// })



/* Step 3: Create a function that accepts a single object as its only argument,

          Using DOM methods and properties, create a component that will return the following DOM element:

*<div class="card">
  *<img src={image url of user} />
  *<div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
