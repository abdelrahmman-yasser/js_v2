// ""; //
// so to this ${-------} actually work you have to but the text in ``  not "" or ''

// typeOf // this if you wanna to ask about the kind of this thing it's text , object , function ........

let user = `boda`;
const greeting = `welcome to our web ${user}`;

console.log(greeting);

// {if statement }
const access = false;

if (access) {
  console.log(`you have access`);
} else {
  console.log(`you are not allowed to be here`);
}
//
const age = 20;
if (age >= 18) {
  console.log(`welcome to our website man`);
} else {
  console.log(`you don't have access to this website `);
}
//if you want to add anything to the condition of the if you will use this &&
const bankAccount = 100;
if (age >= 18 && bankAccount >= 100) {
  console.log("you have access to enter!");
}
//
//
//
// {else if}
const year = 2007;

if (year <= 2005) {
  console.log("oh man that is too old");
} else if (year >= 2010) {
  console.log("you are too young");
} else {
  console.log("oh man  this is the right age that i want");
}

//  FALSE, 0 ,"", NULL, UNDEFINED, NAN(not a number)  all of this mean zero

function greet(name) {
  console.log("welcome to our website " + name);
}
console.log("rest of the code");
function signUp() {
  let name = prompt("what is your name ");
  greet(name);
}
signUp();
//
//
let inbox = max(120, 20);
function max(nr1, nr2) {
  if (nr1 < nr2) {
    return nr1 * 10;
  } else {
    return nr2 * 2;
  }
}
console.log(inbox);

//
//
Math.min();
Math.max();
Math.random();
/* let inbox = Math.max(50, 60);
   console.log(inbox);  just like this*/

//
//objects//
const text1 = {
  name: "bodayasser",
  age: 20,
  married: false,
  greet: function () {
    console.log("hello there yooo");
  },
};

console.log(text1.name);
//
//
///
//////////////Arrays/////////////
//..................0.........1..........2.......3........4......
const listUsers = ["boda", "yasser", "hossam", "zoz", "mohammed"];

listUsers.pop(); // remove the last thing { name(the type of the arrays) , any thing youKnow}
listUsers.push(); // add a thing in the back of the thing id? { name , any thing youKnow} don't forget to do this ""  listUsers.push("tito") becuse if you forget it it's not gonna work.
listUsers.shift(); // remove the first thing { name , any thing youKnow}
listUsers.unshift(); // add a thing in the first thing id? also  { name , any thing youKnow}

console.log(listUsers);

console.log(listUsers[0]); //going to show you the 0 thing which is "boda".
console.log(listUsers[1]); //goning to show you the 1 thing which is "yasser".

//it is the same thing in 2 ,3 , 4 . it will show you "hossam" "zoz" "mohammed"

//
//
//
//

// {switch statement}

let text2 = "banana";
switch (text2) {
  case "banana": ///case ... in switchs we have cases you know?!
    console.log("yooo i love bananas");
    break; //break.. this make if the switch is right in banana it's goning to stop here. and it's very important!!.
  case "apple":
    console.log("apple ummy");
    break;
  case "avocado":
    console.log("what is this avocado");
    break;
  default: ////this is mean if any thing going false so will see you the default thing !!   so if i say "blah blah fruit" it will show you "what kind of that fruit". that is it yooooooo
    console.log("what kind of that fruit");
}
//so this all mean if the text was banana going ot show you ("yooo i love bananas") and if it not goning to the next and the next and the next.......

// so i can add NR for the fruit//
const fruits = "banana";
let fruitsNr = 0;
switch (fruits) {
  case "banana": ///case ... in switchs we have cases you know?!
    console.log("yooo i love bananas");
    fruitsNr = 1;
    break;
  case "apple":
    console.log("apple ummy");
    fruitsNr = 2;
    break;
  case "avocado":
    console.log("what is this avocado");
    fruitsNr = 3;
    break;
  default:
    console.log("what kind of that fruit");
}

/////for loops ////
///variables///if statment////if it true this will happen(i++)
for (let i = 0; i <= 100; i++) {
  /////////////////////////////////////
  for (let i = 0; i <= 100; i++) {
    if (i === 20) {
      console.log(`HEY YOU RECH 20??`);
      continue; /*this mean if the for === 20 say `HEY YOU RECH 20??`  but with continue this will be defrant the continue thing that will replace the 20 with `HEY YOU RECH 20` and the 20 is gone.*/
    }
    console.log(i); //to actually work if it will be فووق  it will not work becuse the if statment will be in the sec place====
  }
}
for (let i = 0; i <= 100; i++) {
  if (i === 20) {
    console.log(`HEY YOU RECH 20??`);
    break; //the code will stop like switch
  }
  console.log(i);
}

////////////////////////////
const texts = ["bodayasser", "ammar yasser ", "car is black", "sky is blue"];

for (let i = 0; i < texts.length; i++) {
  console.log(i);
}
/*this // texts.lenght // will count the "thing" inside the texts so if you want to add any thing to texts you don't want to edit the number becuse the texts.length will added /*/

//insted of doing that do this more easy//
const texts = ["bodayasser", "ammar yasser ", "car is black", "sky is blue"];
for (let name of texts) {
  console.log(texts.indexOf(name));
}

////////////////////0///////////////1///////////////2///////////////3///////
const texts = ["bodayasser", "ammar yasser ", "car is black", "sky is blue"];

for (let i = 0; i < texts.length; i++) {
  console.log(texts[3]); //this will show you the 3 thing
}
//////////////////////////
const texts = ["bodayasser", "ammar yasser ", "car is black", "sky is blue"];

for (let i = 0; i < texts.length; i++) {
  console.log(texts[i]); //if you wanna show the hole texts
}

/*insted of that do this mooooore easy */
const texts = ["bodayasser", "ammar yasser ", "car is black", "sky is blue"];
for (let name of texts) {
  console.log(name);
} //this is more easy
////
//if wanna to calc the letters
const texts = "bodaysser";

for (let i = 0; i < texts.length; i++) {
  console.log(i);
}
//////////////////guessGame////////////////////
function guessGame() {
  let randomNr = Math.floor(
    Math.random() * 11
  ); /*Math.floor// this makes the NR without the 5.5454884 this stufe Math.floor make it like this 5 that's it//*/
  let guess;
  do {
    guess = prompt("guess a number between 1-10");
    console.log(guess, randomNr);
    if (randomNr > guess) {
      console.log("You gussed too low");
    } else if (randomNr < guess) {
      console.log("Guess was too high");
    }
  } while (guess != randomNr);
  console.log("YOU WON");
}
guessGame();

////////scope//////

//GLOBAL SCOPE
let food = "apple";
let fruits = 5;

//FUNCTION SCOPE
function store() {}

//BLOCK SCOPE

if (true) {
  console.log(food);
}
/////////////////////DOM///////////////////////

//HTML collection//
const collectionItems = document.getElementsByClassName("item");
const todoList = document.getElementById("todolist");
const todoNr = document.getElementsByClassName("todo-nr")[0];

const newItem = document.createElement("li");
newItem.classList.add("item"); //it's a classList not "className" (remember)
newItem.innerText = "item 3";

todoList.appendChild(newItem);
//Update the ammount of items that we have
todoNr.innerText = collectionItems.length;

///////////////////NODE LIST (query selector)///////////////////

const nodeItems = document.querySelectorAll(".item"); //in the node list we put the . for the class //make sure that the A (All) is capital.

const todoList = document.querySelector("#todolist"); //and we put the # for the id
const todoNr = document.querySelector(".todo-nr"); ///. for class

const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "item 3";

const anotherItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "item 4";

todoList.appendChild(newItem);
todoList.appendChild(anotherItem);
//Update the ammount of items that we have
todoNr.innerText = nodeItems.length;

//////////////////////////////////////Events////////////////////////////////////
const button = document.querySelector("#sumbit");

//Events is ----> click, scrooll, .........

//Attach a Event Listener ---> this listen to the events that we have like this..

button.addEventListener(
  "click",
  newItem
); /*make sure that the newItem don't have ()
becuse if the newItem have the()  like this --->  newItem()--the  newItem will run auto without clicking the button  traaaaaaaa..
*/

00000;

/////to add item and change the number of the items with the dooller sign ($) and the number of todoNr
const todoList = document.querySelector("#todolist");
const button = document.querySelector("#sumbit");
const todoNr = document.querySelector(".todo-Nr b"); //to select the tag but it with the class///
const items = todoList.children;
button.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.innerText = `item ${items.length + 1}`; //the dooler sign need `` remember //
  todoList.appendChild(newItem);
  todoNr.innerText = items.length;
});

0000000000000000000000000000;

////////////////////to style the html in the js //////////////////////////////
const todoList = document.querySelector("#todolist");
const button = document.querySelector("#sumbit");
const todoNr = document.querySelector(".todo-Nr b");
const mainTitle = document.querySelector(".main-title");
button.addEventListener("click", function () {
  mainTitle.style.color = "red"; //to style in js you have to write the value with camelcase remember
  mainTitle.style.fontSize = "100px";
});
////////////////add clases ////////////
const todoList = document.querySelector("#todolist");
const button = document.querySelector("#sumbit");
const todoNr = document.querySelector(".todo-Nr b");
const mainTitle = document.querySelector(".main-title");
button.addEventListener("click", function () {
  mainTitle.classList.toggle(/*add*/ "somechanging"); //toggle here for (if mainTitle have the class so remove it and if the mainTitle don't have the class so add it )this is helpfull becuse when you click the button you will have it and if you click the button again you will not have it traaaaaaaaaaaaa///
});
//////////////////////////Remove items//////////////////////
const todoList = document.querySelector("#todolist");
const button = document.querySelector("#sumbit");
const todoNr = document.querySelector(".todo-Nr b");
const mainTitle = document.querySelector(".main-title");
const items = todoList.children;

button.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.innerText = `item ${items.length + 1}`;
  todoList.appendChild(newItem);
  todoNr.innerText = items.length;
  newItem.addEventListener("click", deleteItem);
});

function deleteItem(e) {
  e.stopPropagation(); //this will make when you click on something to delete it will delete what you only click yooooooooooo;
  e.target.remove(); /////// (target) for to target the element that you click on it/*and thee remove for removeing any thing you click on it ;
}
0000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
//////////////////////////////////////the final cooode suiiiiiii/////////////////////////
const todoList = document.querySelector("#todolist");
const button = document.querySelector("#sumbit");
const todoNr = document.querySelector(".todo-Nr b");
const mainTitle = document.querySelector(".main-title");
const nameInput = document.querySelector(".name-input");
const items = todoList.children;

button.addEventListener("click", function (e) {
  e.preventDefault(); //stop the natural behavior of thee form which is (refeshing the pageee)*/*//*//*//*//*
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.innerText = nameInput.value;
  todoList.appendChild(newItem);
  todoNr.innerText = items.length;
  nameInput.value = ""; //this for when you click submit the text will gone traaaaa
  newItem.addEventListener("click", deleteItem);
});

function deleteItem(e) {
  e.stopPropagation();
  e.target.remove();
}

todoList.addEventListener("click", function () {
  todoList.classList.toggle("fade");
});

////////////////////(local storage) and (session storage) ///////////////////////

//local storage
///////the name of the storage///the value
localStorage.setItem("todo", "feed the cat"); //this if the user close the browser it will save

//clear the localStorage

localStorage.clear(); ///boooom now is cleeeeaaaar traaaa

//session storage
////////////////////////name////////////value////////////
sessionStorage.setItem("todoList", "session feeding cat"); //this when the user close the browser the data will be clear by it self

//////////////////////////////////GETTING STUFF BACK////////////////

localStorage.getItem(/*i will but the name*/);

/////////////if i wann but arrays in the storage/////////

//in localStorage you can't but an arrays and object with out doing some stuff
00000000000000000000000000000000000000000000000000000000000000000000

/////////////////////////////////////////ARRAYS///////////////////////////////////////

const todoList = ["feed the cat", "eat brakfast", "wash the car"];

localStorage.setItem("todos", JSON.stringify(todoList)); //make it string
 
const retrieved = JSON.parse(localStorage.getItem("todos")); //it well show like an arraay

000000000000000000000000000000000000000000000000000000000;

///////higher order function///

//////////////////map/////////////////
const videos = [
  "pranking my sister",
  "learning javascript",
  "html tutorial",
  "learning type fast",
  "boda",
  "tito",
  "rap",
  "takoso",
];
//map
const newVideos = videos.map(function (video) {
  return video.toUpperCase();
});

//we can use if statement in map

const newVideos = videos.map(function (video) {
  if (video.length < 4) {
    return video;
  } else {
    return "nope";
  }
});

//if statement another way

const newVIdeos = videos.map(function (video) {
  ////////////if statement/if it true//if it false
  return video.length < 10 ? video : "nope";
});

/////////////find///////////

const searchTutorial = videos.find(function (video) {
  //find for return a specific thing that include a "what you want to return"
  return video.includes("html");
});

////////////filter//////////
const shortSearch = videos.filter(function (video) {
  //soo filter for return a specific things not a thing
  return video.length > 5;
});
const games = [
  { title: "Mass Effect", rating: 9.5 },
  { title: "God of war", rating: 10 },
  { title: "Last of us", rating: 7 },
  { title: "Lol", rating: 3 },
  { title: "WWE", rating: 8 },
];

//////SOME and EVERY////

//so some and every thay will see if some game has a ratin > 
0000;
//[every will say false ] so every will see if every game > 7 or not (every game)
000;
///[some will say true]so some will see if some of the game > 7 or not (some of the games not every game)

const checkRating = games.every(function (game) {
  return game.rating > 7;
});

console.log(checkRating);

const someRating = games.some(function (game) {
  return game.rating > 7;
});
console.log(someRating);

////////////sorting////////////
const ratings = [92, 56, 4, 2, 22, 45.6, 10, 80];

ratings.sort(function (a, b) {
  return a - b;
});

console.log(ratings);
