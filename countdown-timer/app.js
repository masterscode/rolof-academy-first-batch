const form = document.forms[0];

const display = document.querySelector('.display-time');
const [days,hours, minutes] = display.querySelectorAll('.time')
let secondsCount = 60;

const displayResult = time => {
    days.innerHTML = Math.floor((((time / 1000) / 60) / 60)/24);
    hours.innerHTML = Math.floor((((time / 1000) / 60) / 60));
    minutes.innerHTML =secondsCount < 0 ? secondsCount = 60 : secondsCount--;
    
}
const handleSubmit = (event) => {
    event.preventDefault();
    document.querySelector("[name='time-input']").setAttribute('disabled', true);
    timeInput = form.querySelector("[name='time-input']").value;
    
    setInterval( ()=> {     
        time =  Date.parse(timeInput) - Date.now(),
        console.log(time);
        displayResult(time);
    }, 1000)
}


form.addEventListener('submit', handleSubmit);