// --- Logó img ---
  //   <img class="logo" src="images/logowithtext.jpg">
  //
export function displayLogoWithText(id) {
    const logoImg = document.createElement('img');
    logoImg.id = id;
    logoImg.classList.add('logo');
    logoImg.src = './images/logowithtext.jpg';

    return logoImg;
}

// --- Támogatás gomb div ---
// <div id="donatediv">
//     <button class="donatebtn">Támogasson minket!</button>
// </div>
//
export function displayDonateButton(id) {
  const donateDiv = document.createElement('div');
  donateDiv.id = id;

  const donateBtn = document.createElement('button');
  donateBtn.classList.add('donatebtn');
  donateBtn.textContent = 'Támogasson minket!';

  donateDiv.appendChild(donateBtn);

  return donateDiv;
}