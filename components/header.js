import {displayLogoWithText, displayDonateButton, preventFromClick} from './global.js';

export default function createHeader() {
    const header = document.getElementById('header');

    // menu icon
    const menuDiv = displayMenuIcon();
    header.appendChild(menuDiv);
    // logo
    const logoImg = displayLogoWithText('headerlogo');
    const logoDiv = document.createElement('div');
    logoDiv.id = 'headerlogodiv';
    const logoLink = document.createElement('a');
    logoLink.href = './index.html';
    logoLink.appendChild(logoImg);

    const page = window.location.pathname.match(/[^\/]+$/)[0];

    logoLink.removeEventListener("click", preventFromClick);
    if (page == "index.html") {
        logoLink.addEventListener("click", preventFromClick);
    }

    logoDiv.appendChild(logoLink);
    header.appendChild(logoDiv);
    // donate button
    const donateDiv = displayDonateButton('hideifsmall');
    header.appendChild(donateDiv);
}

    // --- 1. Menü ikon div ---
    //   <div>
    //         <i id="menuicon" class="fa fa-bars" onclick="operateSideBar()"></i>
    //   </div>
    //
function displayMenuIcon() {
    const menuDiv = document.createElement('div');
    const icon = document.createElement('i');
    icon.id = 'menuicon';
    icon.classList.add('fa');
    icon.classList.add('fa-bars');
    icon.onclick = operateSideBar;
    menuDiv.appendChild(icon);

    return menuDiv;
}

// sidebar open-close logic
let sideBarOpen = false;

function operateSideBar() {
    if(sideBarOpen) {
        _closeSidebar();
    }
    else {
        _openSidebar();
    }
}

function _openSidebar() {
    let menuIcon = document.querySelector("#menuicon");
    menuIcon.classList.remove("close");
    menuIcon.classList.add("open");
    let sideBar = document.querySelector("#sidebar");
    sideBar.classList.remove("closed");
    sideBar.classList.add("opened");
    sideBarOpen = true;
}

function _closeSidebar() {
    let menuIcon = document.querySelector("#menuicon");
    menuIcon.classList.remove("open");
    menuIcon.classList.add("close");
    let sideBar = document.querySelector("#sidebar");
     sideBar.classList.remove("opened");
    sideBar.classList.add("closed");
    sideBarOpen = false;
}