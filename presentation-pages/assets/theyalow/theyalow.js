let backButton = document.querySelector('.return'); 
let sizeButton = document.querySelector('.size');
let iframe = document.querySelector('.iframe')


sizeButton.addEventListener('click', () => {
    if (sizeButton.textContent === 'Mobile') {
        iframe.classList.remove('desktop');
        iframe.classList.add('mobile');
        sizeButton.textContent = 'Desktop';
        // sizeButton.value = 'Desktop';
    }
    else {
        iframe.classList.remove('mobile');
        iframe.classList.add('desktop');
        sizeButton.textContent = 'Mobile';
    }
})