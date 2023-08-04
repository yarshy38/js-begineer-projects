const cursor = document.querySelector('.cursor')
var timeout;


document.addEventListener('mouseover', (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
    cursor.style.display = 'block';


    // ani

    function mouseStopped() {
        cursor.style.display = 'none'
    }

    // hide
    clearTimeout(timeout)
    timeout = setTimeout(mouseStopped, 1000)
})