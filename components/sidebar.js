import {displayDonateButton} from './global.js';

export default function createSideBar(pageId) {
  const sidebar = document.getElementById('sidebar');

  const menuList = displayMenuList(pageId);
  sidebar.appendChild(menuList);

  // donate button
  const donateDiv = displayDonateButton('sidebardonatediv');
  const donateBtn = donateDiv.querySelector('button');
  const donateIcon = displayDonateIcon();
  donateBtn.id = 'sidebardonate';
  donateBtn.textContent = null;
  donateBtn.appendChild(donateIcon);
  sidebar.appendChild(donateDiv);
}

function displayMenuList(pageId) {
    const menuUl = document.createElement('ul');
    menuUl.id = 'sidebarlist';

    const sidebaritems = getSideBarItems();
    sidebaritems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.classList.add('sidebaritem');
        if(a.classList.contains('current')) {
            a.classList.remove('current');
        }
        a.href = item.page;
        a.textContent = item.title;
        a.removeEventListener("click", _preventFromClick);
        if(item.id == pageId) {
            a.classList.add('current');
            a.addEventListener("click", _preventFromClick);
        }
        li.appendChild(a);
        menuUl.appendChild(li);
    });

    return menuUl;
}

function displayDonateIcon() {
    const donateIcon = document.createElement('i');
    donateIcon.id = 'donateicon';
    donateIcon.classList.add('fa');
    donateIcon.classList.add('fa-handshake-o');

    return donateIcon;
}

function _preventFromClick(event) {
    event.preventDefault();
}


function getSideBarItems() {
    const sidebaritems = [
        {
            "id": 0,
            "title": "Főoldal",
            "page": "./index.html"
        },
        {
            "id": 1,
            "title": "Rólunk",
            "page": "./about.html"
        },
        {
            "id": 2,
            "title": "Érdekességek",
            "page": "./interesting.html"
        },
        {
            "id": 3,
            "title": "Visszajelzések",
            "page": "./feedback.html"
        }
    ];

    return sidebaritems;
}