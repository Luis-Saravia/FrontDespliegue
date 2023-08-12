const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(e)
    console.log(e.target.value)

    fetch('')
})