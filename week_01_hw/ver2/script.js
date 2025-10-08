function openBox() {
  let num = Math.floor(Math.random() * 100) + 1;
  let changeText = document.querySelector(".changeText");
  console.log(num);

  if(num >= 1 && num <= 50){
    console.log("alive");
    let fileName = '../imgs/cat-alive.jpg';
    document.querySelector('img').setAttribute('src', fileName);
    // added alt text
    document.querySelector('img').setAttribute('alt', "image of a living cat inside a box with the title, 'Schrodinger's CAT'");
    changeText.innerHTML = "Hooray, your cat is ALIVE!";

  } else if (num >= 51 && num <= 100) {
    console.log("dead");
    let fileName = '../imgs/cat-dead.jpg';
    document.querySelector('img').setAttribute('src', fileName);
    //added alt text
    document.querySelector('img').setAttribute('alt', "image of cat laying sideways completely still inside the box");
    changeText.innerHTML = "Oh no, your cat is DEAD!";
  }
}