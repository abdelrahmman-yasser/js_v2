function sayHi() {
  console.log(`hello there ${name}`);
  changeName();
  console.log(`sayHi is finished`);
}

function changeName() {
  name = "Bobby";
  console.log(`we changed it to ${name}`);
  console.log(`changeName is finished`);
}
let name = "boda";
sayHi();

console.log("we are done with this code");
