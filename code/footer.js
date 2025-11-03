let associationInfo = {};

document.addEventListener('DOMContentLoaded', () => { 

fetch('../data/associationInfo.json') //TODO: külön fájlban előre beolvasni
    .then(response => response.json())
    .then(data => {
      associationInfo = data.associationInfo;
      create();
    })
    .catch(err => console.error('Hiba a JSON beolvasásakor:', err));
})

function create() {
  const footer = document.getElementById('footer');

  // --- Vízszintes elválasztó ---
  const hr = document.createElement('hr');
  footer.appendChild(hr);

  // --- Fő footer content ---
  const footerContent = document.createElement('div');
  footerContent.id = 'footercontent';

  // --- Logó div ---
  //   <div id="footerlogodiv">
  //        <img class="logo" src="images/logowithtext.jpg">
  //   </div>
  //
  const logoDiv = document.createElement('div');
  logoDiv.id = 'footerlogodiv';
  const logoImg = document.createElement('img');
  logoImg.className = 'logo';
  logoImg.src = '../images/logowithtext.jpg';
  logoDiv.appendChild(logoImg);

  // --- Elérhetőségek div ---
  // <div id="footercontactdiv" class="decorline">
  //     <div class="footerinnerdiv">
  //         <i class="fa fa-map-marker footericon"></i>
  //         <div id="address">1115 Budapest, Tétényi út 12-16.</div>
  //     </div>
  //     <div class="footerinnerdiv">
  //         <i class="fa fa-phone footericon"></i>
  //         <div id="phone">+36 30 123 4567</div>
  //     </div>
  //     <div class="footerinnerdiv">
  //         <i class="fa fa-envelope-o footericon"></i>
  //         <div id="email">info@alapitvany.com</div>
  //     </div>
  // </div>
  //
  const contactDiv = document.createElement('div');
  contactDiv.id = 'footercontactdiv';
  contactDiv.className = 'decorline';

  const contactItems = [
    { icon: 'fa-map-marker', text: associationInfo.address, id: 'address' },
    { icon: 'fa-phone', text: associationInfo.phone, id: 'phone' },
    { icon: 'fa-envelope-o', text: associationInfo.email, id: 'email' }
  ];

  contactItems.forEach(item => {
    const innerDiv = document.createElement('div');
    innerDiv.className = 'footerinnerdiv';

    const icon = document.createElement('i');
    icon.className = `fa ${item.icon} footericon`;

    const textDiv = document.createElement('div');
    textDiv.id = item.id;
    textDiv.textContent = item.text;

    innerDiv.appendChild(icon);
    innerDiv.appendChild(textDiv);
    contactDiv.appendChild(innerDiv);
  });

  // --- Bankszámlaszám div ---
  // <div id="footeraccountnumdiv" class="decorline">
  //     <div class="footerinnerdiv">
  //         <i class="fa fa-credit-card footericon"></i>
  //         <div>Bankszámlaszám</div>
  //     </div>
  //     <div id="accountnum">12011351 - 02046180 - 00100004</div>
  // </div>
  //
  const accountDiv = document.createElement('div');
  accountDiv.id = 'footeraccountnumdiv';
  accountDiv.className = 'decorline';

  const accountInner = document.createElement('div');
  accountInner.className = 'footerinnerdiv';

  const accountIcon = document.createElement('i');
  accountIcon.className = 'fa fa-credit-card footericon';

  const accountLabel = document.createElement('div');
  accountLabel.textContent = 'Bankszámlaszám';

  accountInner.appendChild(accountIcon);
  accountInner.appendChild(accountLabel);

  const accountNum = document.createElement('div');
  accountNum.id = 'accountnum';
  accountNum.textContent = associationInfo.accountnum;

  accountDiv.appendChild(accountInner);
  accountDiv.appendChild(accountNum);

  // --- Támogatás gomb div ---
  const donateDiv = document.createElement('div');
  donateDiv.id = 'donatediv';

  const donateBtn = document.createElement('button');
  donateBtn.className = 'donatebtn';
  donateBtn.textContent = 'Támogasson minket!';

  donateDiv.appendChild(donateBtn);

  // --- Összeillesztés ---
  footerContent.appendChild(logoDiv);
  footerContent.appendChild(contactDiv);
  footerContent.appendChild(accountDiv);
  footerContent.appendChild(donateDiv);

  footer.appendChild(footerContent);

};
