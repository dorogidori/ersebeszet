let lorem = "";

document.addEventListener('DOMContentLoaded', () => { 

fetch('../data/constants.json')
    .then(response => response.json())
    .then(data => {
      lorem = data.loremipsum;
      createlorem();
    })
    .catch(err => console.error('Hiba a JSON beolvasásakor:', err));
})

function createlorem() {
    const main = document.getElementById('main');

    for (let i = 0; i < 10; i++) {
        const p = document.createElement('p');
        p.textContent = lorem;
        main.appendChild(p);
    }
}