import { readFromJSON } from '../code/readfromjson.js';

let shownFeedback = 0;
let allFeedbackNum = 0;
let feedbacksToShowNum = 0;
let avgrating = 0;
let allFeedbacks = [];
let feedbacksToShow = [];
let timer = setTimeout(nextfeedback, 8000);

export async function createFeedbackCarusel() {
    const carusel = document.getElementById("feedbackcarusel");

    const prevIcon = displayPrevNextIcon(0);
    const content = displayCaruselContent();
    const nextIcon = displayPrevNextIcon(1);

    carusel.appendChild(prevIcon);
    carusel.appendChild(content);
    carusel.appendChild(nextIcon);

    await getFeedbacks();

    updateCaruselContent();
}

// előző (<), következő (>) gomb
// <i id="previcon" class="fa fa-chevron-left"></i>
//                      vagy
// <i id="nexticon" class="fa fa-chevron-right"></i>
//
function displayPrevNextIcon(num) {
    const icon = document.createElement("i");
    icon.id = num == 0 ? "previcon": "nexticon";
    icon.classList.add("fa");
    icon.classList.add(`fa-chevron-${num == 0 ? "left" : "right"}`);
    icon.onclick = num == 0 ? prevfeedback : nextfeedback;
    return icon;
}

// üres szövegbuborék
// <div id="caruselcontent">
//   <i id="patienticon" class="fa fa-user"></i>
//   <div id="speechbubble">
//      ***
//      <div id="feedbackdiv"> *** </div>
//      <div id="patientname">...</div>
//   </div>
// </div> 
function displayCaruselContent() {
    const caruselContent = document.createElement("div");
    caruselContent.id = "caruselcontent";

    // kommentelő figura
    const patientIcon = document.createElement("i");
    patientIcon.id = "patienticon";
    patientIcon.classList.add("fa");
    patientIcon.classList.add("fa-user");

    caruselContent.appendChild(patientIcon);

    // szövegbuborék
    const speechBubble = document.createElement("div");
    speechBubble.id = "speechbubble";

    const ratingDiv = displayRatingDiv();
    speechBubble.appendChild(ratingDiv);

    const feedbackDiv = displayFeedbackDiv();
    speechBubble.appendChild(feedbackDiv);

    const patientName = document.createElement("div");
    patientName.id = "patientname";
    patientName.textContent = "...";
    speechBubble.appendChild(patientName);

    caruselContent.appendChild(speechBubble);

    return caruselContent;
}

// üres értékelés skála csilagokkal
// <div id="ratinginbubble" class="ratingdiv">
//     <i id="rating1" class="fa fa-star-o"></i>
//     ...
// </div>
//
function displayRatingDiv() {
    const ratingDiv = document.createElement("div");
    ratingDiv.id = "ratinginbubble";
    ratingDiv.classList.add("ratingdiv");

    for (let i = 1; i < 6; i++) {
        const star = document.createElement("i");
        star.id = `rating${i}`;
        star.classList.add("fa");
        star.classList.add("fa-star-o");
        ratingDiv.appendChild(star);
    }

    return ratingDiv;
}

// üres szöveges visszajelzés
// <div id="feedbacktxt">
//      <i class="fa fa-quote-right quotationmark"></i>
//      ...
//      <i class="fa fa-quote-right quotationmark"></i>
// </div>
//
function displayFeedbackDiv() {
    const feedbackDiv = document.createElement("div");
    feedbackDiv.id = "feedbackdiv";

    const feedbackTxt = document.createElement("div");
    feedbackTxt.id = "feedbacktxt";
    const quoteMark = `<i class="fa fa-quote-right quotationmark"></i>`;
    const txt = `...`
    feedbackTxt.innerHTML = `${quoteMark} ${txt} ${quoteMark}`;

    feedbackDiv.appendChild(feedbackTxt);

    return feedbackDiv;
}

async function getFeedbacks() {
    const url = new URL('../data/feedbacks.json', import.meta.url);
    const data = await readFromJSON(url);
    allFeedbacks = data.feedbacks;
    shownFeedback = 0;
    allFeedbackNum = allFeedbacks.length;
    avgrating = getAvgRating();
    feedbacksToShow = allFeedbacks.filter(item => item.display);
    feedbacksToShowNum = feedbacksToShow.length;
}

function getAvgRating() {
    let sum = 0;
    allFeedbacks.forEach(item => {
        sum += item.rating;
    });
    const avg = sum / allFeedbackNum;
    return avg;
}

// automatikus váltás 8 másodpercenként
function updateCaruselContent() {
    const feedbackTxtDiv = document.getElementById("feedbacktxt");
    const quoteMark = `<i class="fa fa-quote-right quotationmark"></i>`;
    feedbackTxtDiv.innerHTML = `${quoteMark} ${feedbacksToShow[shownFeedback].feedback} ${quoteMark}`;

    const patientNameDiv = document.getElementById("patientname");
    const name = feedbacksToShow[shownFeedback].name == "" ? "Ismeretlen páciens" : feedbacksToShow[shownFeedback].name;
    patientNameDiv.textContent = `${name}`;

    updateRating(feedbacksToShow[shownFeedback].rating);

    clearTimeout(timer);
    timer = setTimeout(nextfeedback, 8000);
}

function updateRating(rating) {
    const ratingInt = Math.trunc(rating);
    const ratingDec = rating - ratingInt;

    const icons = ["fa-star-o", "fa-star", "fa-star-half-full"];

    for (let i = 1; i < 6; i++) {
        const star = document.getElementById(`rating${i}`);

        let iconType = i <= ratingInt ? "fa-star" : "fa-star-o";
        if(i-1 == ratingInt && ratingDec >= 0.5){
            iconType = "fa-star-half-full";
        }

        for (let j = 0; j < icons.length; j++) {
            if(star.classList.contains(icons[j])){
                star.classList.replace(icons[j], iconType);
            }
        }
        
    }
}

function prevfeedback() {
    if(shownFeedback > 0) {
        shownFeedback -= 1;
    }
    else {
        shownFeedback = feedbacksToShowNum - 1;
    }
    updateCaruselContent();
}

function nextfeedback() {
    if(shownFeedback < feedbacksToShowNum-1) {
        shownFeedback += 1;
    }
    else {
        shownFeedback = 0;
    }
    updateCaruselContent();
}