//first player enters name 
//name is captured, updated on firebase and shown on DOM
//next player enters name
//name is captured, updated on firebase and shown on DOM

//players have r p or s to choose from
//players choose one, then the choices are compared
//the winner is announced


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCn2pmlLwGKnIRxTZEPfbSiPnuGcCeWrnU",
    authDomain: "rps-multiplayer-7fae0.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-7fae0.firebaseio.com",
    projectId: "rps-multiplayer-7fae0",
    storageBucket: "",
    messagingSenderId: "121726355774"
  };
  firebase.initializeApp(config);

  console.log(firebase);

// Assign the reference to the database variable database
var database = firebase.database();

// Initial Values
var turns = 0;

var initialPlayer1 = "Waiting for Player 1";

var initialPlayer2 = "Waiting for Player 2";

var player1 = {
	"name": "",
	"losses": 0,
	"wins": 0,
};

var player2 = {
	"name": "",
	"losses": 0,
	"wins": 0,
};

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.

database.ref().on("value", function(snapshot) {

//If firebase has a player1 and player2

//use t/f instead of exists
if (snapshot.child("player1").exists() && snapshot.child("player2").exists()) {

// Set the variables to equal to the stored values in firebase.
     player1.name = snapshot.val().player1.name;
     player2.name = snapshot.val().player2.name;


//     // Change the HTML to reflect the stored values
      $("#player1").text(player1.name);
      $("#player2").text(player2.name);
      $("#results").text("results!");

console.log("anything");
}

 // Else Firebase doesn't have a player1 or 2, so use the initial local values
else {

//Show initial values on HTML

//Don't know why adding text moves the divs on HTML
    $("#player1").text(initialPlayer1);
    $("#player2").text(initialPlayer2);
    $("#results").text("results go here");
    console.log("player2 name: " + player2.name);
 }
// Console Log any errors experienced
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

$("#nameSubmit").on("click", function() {
	// var playersRef = firebase.database().ref();

	var name = $("#playerName").val().trim();

	if (player1.name = "waiting for a player") {
		player1.name = name;

		console.log(name);

		database.ref("player1").update({
          name: name,
        })

	} else {
		player2.name = name;

		console.log("something here")
		database.ref("player2").update({
          name:  name,
        })
	}

	
});