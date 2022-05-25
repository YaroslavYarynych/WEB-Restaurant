/* stycky header */
var navig = document.getElementById("navig");
var menuUl = document.getElementById("menuUl")
window.onscroll = function(){
    if(window.pageYOffset >= menuUl.offsetTop){
        navig.classList.add("sticky");
    }
    else{
        navig.classList.remove("sticky");
    }
}
/* Лічильник */
const counters = document.querySelectorAll('.counter');
const speed = 100;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target')
    const count = +counter.innerText;
        const inc = target/speed;
        if(count<target){
            counter.innerText = count + inc;
            setTimeout(updateCount, 1);
        } else{
           count.innerText = target; 
        }
    }
    updateCount();
})
/* Відправлення даних форми в консоль */
const form = document.getElementById('form');
function retrieveFormValue(event) {
    event.preventDefault();
    const fields = document.querySelectorAll('input, select, textarea')
    const values = {}
    fields.forEach(field => {
    const {name, value} = field;
    values[name] = value;
})
console.log(values);
    };
form.addEventListener('submit', retrieveFormValue);
/* -------------------contact ----------------------*/

