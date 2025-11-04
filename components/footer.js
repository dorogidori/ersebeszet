import {displayLogoWithText, displayDonateButton} from './global.js';

export default function createFooter() {
  const footer = document.getElementById('footer');

  // --- Vízszintes elválasztó ---
  const hr = document.createElement('hr');
  footer.appendChild(hr);

  // --- Fő footer content ---
  const footerContent = document.createElement('div');
  footerContent.id = 'footercontent';

  // logo
  const logoImg = displayLogoWithText('footerlogo');
  const logoDiv = document.createElement('div');
  logoDiv.id = 'footerlogodiv';
  logoDiv.appendChild(logoImg);
  footerContent.appendChild(logoDiv);
  // contact info
  const contactDiv = displayContactInfo();
  footerContent.appendChild(contactDiv);
  // account number
  const accountDiv = displayAccountNumber();
  footerContent.appendChild(accountDiv);
  // donate button
  const donateDiv = displayDonateButton('donatediv');
  footerContent.appendChild(donateDiv);

  footer.appendChild(footerContent);
}

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
function displayContactInfo() {
    const contactDiv = document.createElement('div');
    contactDiv.id = 'footercontactdiv';
    contactDiv.classList.add('decorline');

    const associationInfo = getAssociationInfo();

    const contactItems = [
        { icon: 'fa-map-marker', text: associationInfo.address, id: 'address' },
        { icon: 'fa-phone', text: associationInfo.phone, id: 'phone' },
        { icon: 'fa-envelope-o', text: associationInfo.email, id: 'email' }
    ];

    contactItems.forEach(item => {
        const innerDiv = document.createElement('div');
        innerDiv.classList.add('footerinnerdiv');

        const icon = document.createElement('i');
        icon.classList.add('fa');
        icon.classList.add(`${item.icon}`);
        icon.classList.add('footericon');

        const textDiv = document.createElement('div');
        textDiv.id = item.id;
        textDiv.textContent = item.text;

        innerDiv.appendChild(icon);
        innerDiv.appendChild(textDiv);
        contactDiv.appendChild(innerDiv);
    });

    return contactDiv;
}

// --- Bankszámlaszám div ---
  // <div id="footeraccountnumdiv" class="decorline">
  //     <div class="footerinnerdiv">
  //         <i class="fa fa-credit-card footericon"></i>
  //         <div>Bankszámlaszám</div>
  //     </div>
  //     <div id="accountnum">12011351 - 02046180 - 00100004</div>
  // </div>
  //
function displayAccountNumber() {
    const accountDiv = document.createElement('div');
    accountDiv.id = 'footeraccountnumdiv';
    accountDiv.classList.add('decorline');

    const accountInner = document.createElement('div');
    accountInner.classList.add('footerinnerdiv');

    const accountIcon = document.createElement('i');
    accountIcon.classList.add('fa');
    accountIcon.classList.add('fa-credit-card');
    accountIcon.classList.add('footericon');

    const accountLabel = document.createElement('div');
    accountLabel.textContent = 'Bankszámlaszám';

    accountInner.appendChild(accountIcon);
    accountInner.appendChild(accountLabel);

    const accountNum = document.createElement('div');
    accountNum.id = 'accountnum';
    const associationinfo = getAssociationInfo();
    accountNum.textContent = associationinfo.accountnum;

    accountDiv.appendChild(accountInner);
    accountDiv.appendChild(accountNum);

    return accountDiv;
}

function getAssociationInfo() {
    let associationInfo = {
        "name": "Érbetegek Jövőjéért Alapítvány",
        "address": "1115 Budapest, Tétényi út 12-16.",
        "phone": "+36 30 123 4567",
        "email": "info@alapitvany.com",
        "accountnum": "12011351 - 02046180 - 00100004"
    };

    return associationInfo;
}