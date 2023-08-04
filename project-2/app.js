(function () {
    const buttons = document.querySelectorAll('.counterBtn')
    let count = 0;
    const counter = document.querySelector('#counter')

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (button.classList.contains('prevBtn')) {
                count--;
            } else if (button.classList.contains('nextBtn')) {
                count++;
            }

            counter.textContent = count
            if (count < 0) {
                counter.style.color = 'red'
                // alert('its already Zero')
            }
            else if (count > 0) {
                counter.style.color = 'green'
            }
            else {
                counter.style.color = '#000'
            }
        })
    })

})()