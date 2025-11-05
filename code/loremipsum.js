let lorem = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.";

export default function createlorem(elemId) {
    
    document.addEventListener('DOMContentLoaded', () => {
        const main = document.getElementById(elemId);    

        for (let i = 0; i < 10; i++) {
            const p = document.createElement('p');
            p.textContent = lorem;
            main.appendChild(p);
        }
    });

    const size = document.getElementById("size");
    if(size != null) {
        size.textContent = `${window.innerWidth} x ${window.innerHeight}`;
    }
}