const result = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

let count = 0;

buttons.forEach((button) =>{
  button.addEventListener('click', (e) => {
    const clasS = e.currentTarget.classList;
    if(clasS.contains('decrease')){
      count--;
    }
    else if(clasS.contains('increase')){
      count++;
    }
    else {
      count = 0;
    }
    if(count > 0) {
      result.style.color = "green";
      document.body.style.backgroundColor = "green";
    }
    else if (count < 0) {
      result.style.color = "red";
      document.body.style.backgroundColor = "red";

    }
    else {
      document.body.style.backgroundColor = "white";
      result.style.color = "white";
    }
    result.textContent = count;
  });
})