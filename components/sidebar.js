import {displayDonateButton, preventFromClick} from './global.js';
import { readFromJSON } from '../code/readfromjson.js';

export default async function createSideBar(pageId) {
  const sidebar = document.getElementById('sidebar');

  const menuList = await displayMenuList(pageId);
  sidebar.appendChild(menuList);

  // donate button
  const donateDiv = displayDonateButton('sidebardonatediv');
  const donateBtn = donateDiv.querySelector('button');
  const donateLink = donateDiv.querySelector('a');
  const donateIcon = displayDonateIcon();
  donateBtn.id = 'sidebardonate';
  donateLink.textContent = null;
  donateLink.appendChild(donateIcon);
  sidebar.appendChild(donateDiv);
}

async function displayMenuList(pageId) {
    const menuUl = document.createElement('ul');
    menuUl.id = 'sidebarlist';

    const url = new URL('../data/sidebaritems.json', import.meta.url);
    const data = await readFromJSON(url);
    const sidebaritems = data.sidebaritems;

    sidebaritems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.classList.add('sidebaritem');
        if(a.classList.contains('current')) {
            a.classList.remove('current');
        }
        a.href = item.page;
        a.textContent = item.title;
        a.removeEventListener("click", preventFromClick);
        if(item.id == pageId) {
            a.classList.add('current');
            a.addEventListener("click", preventFromClick);
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