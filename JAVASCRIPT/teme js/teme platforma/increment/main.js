(function main() {
    const display = document.querySelector('[data-counter-display]');
    const buttons = document.querySelectorAll('[data-counter-button]');

    // intial settings
    const initialCount = 0;
    let count = initialCount;
    updateHtml();

    //
    buttons.forEach((button) => button.addEventListener('click', handleClick));
    function handleClick(e) {
        const which = e.target.dataset.counterButton;
        switch (which) {
            case 'increment': {
                count++;
                break;
            }
            case 'decrement': {
                count--;
                break;
            }
            case 'reset': {
                count = initialCount;
                break;
            }
            default: {
                // console.error(`The value "${which}" provided is not valid`);
                count += Number(which);
                break;
            }
        }
        updateHtml();
    }


    function updateHtml() {
        display.innerText = count;

        display.classList.remove('positive', 'negative');
        if (count > 0) {
            //sa se aplice clasa positive
            display.classList.add('positive');
        } else if (count < 0) {
            //sa se aplice clasa negative
            display.classList.add('negative');
        }
    }
})();

//1. Dynamically create the increment / decrement buttons using the document.createElement() method.
const incrementBtn= document.createElement('button');
incrementBtn.textContent= 'Increment';

const decrementBtn= document.createElement('button');
decrementBtn.textContent= 'Decrement';


incrementBtn.addEventListener('click', () => {
    count++;
    display.textContent= count;
});

decrementBtn.addEventListener('click', () => {
    count--;
    display.textContent= count;
});


//2. Modify the JSON source elements array to create 2 more buttons to increment / decrement by 10 the counter (-10, +10).
const decrement10Btn=document.querySelector('[data-counter-button]');
const increment10Btn=document.querySelector('[data-counter-button]');

decrement10Btn.addEventListener('click', () =>{
    count -= 10;
    display.textContent= count;
});

increment10Btn.addEventListener('click', () =>{
    count += 10;
    display.textContent= count;
});
