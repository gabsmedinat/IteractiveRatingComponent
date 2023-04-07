localStorage.setItem('value','#');

const one = document.getElementById('choice1');
const two = document.getElementById('choice2');
const three = document.getElementById('choice3');
const four = document.getElementById('choice4');
const five = document.getElementById('choice5');
const submit = document.querySelector('#submit');


function setLocalStorage(anEvent)  {
    localStorage.setItem('value',anEvent.target.textContent);
    console.log(localStorage.getItem('value'))
};
function submitting(goAhead){
    window.location.href = 'index2.html';
}



one.addEventListener('click',setLocalStorage);
two.addEventListener('click',setLocalStorage);
three.addEventListener('click',setLocalStorage);
four.addEventListener('click',setLocalStorage);
five.addEventListener('click',setLocalStorage);
submit.addEventListener('click',submitting);

// html2
  

