function openBox() {
  let num = Math.floor(Math.random() * 100) + 1;
  let changeText = document.querySelector(".changeText");
  console.log(num);

  if(num >= 1 && num <= 50){
    //alive
    console.log("alive");
    let fileName = 'imgs/cat-alive.jpg';
    document.querySelector('img').setAttribute('src', fileName);
    changeText.innerHTML = "Hooray, your cat is ALIVE!";

  } else if (num >= 51 && num <= 100) {
    //dead
    console.log("dead");
    let fileName = 'imgs/cat-dead.jpg';
    document.querySelector('img').setAttribute('src', fileName);
    changeText.innerHTML = "Oh no, your cat is DEAD!";
  }
}