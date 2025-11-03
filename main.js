let sideBarOpen = false;

function operateSideBar() {
    if(sideBarOpen) {
        closeSidebar();
    }
    else {
        openSidebar();
    }
}

function openSidebar() {
    let menuIcon = document.querySelector("#menuicon");
    menuIcon.classList.remove("close");
    menuIcon.classList.add("open");
    let sideBar = document.querySelector("#sidebar");
    sideBar.classList.remove("closed");
    sideBar.classList.add("opened");
    sideBarOpen = true;
}

function closeSidebar() {
    let menuIcon = document.querySelector("#menuicon");
    menuIcon.classList.remove("open");
    menuIcon.classList.add("close");
    let sideBar = document.querySelector("#sidebar");
     sideBar.classList.remove("opened");
    sideBar.classList.add("closed");
    sideBarOpen = false;
}