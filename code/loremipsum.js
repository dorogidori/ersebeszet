let lorem = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.";

document.addEventListener('DOMContentLoaded', () => { 

// fetch('./data/constants.json')
//     .then(response => response.json())
//     .then(data => {
//       lorem = data.loremipsum;
//       createlorem();
//     })
//     .catch(err => console.error('Hiba a JSON beolvasásakor:', err));
createlorem();
})

function createlorem() {
    const main = document.getElementById('main');

    for (let i = 0; i < 10; i++) {
        const p = document.createElement('p');
        p.textContent = lorem;
        main.appendChild(p);
    }
}