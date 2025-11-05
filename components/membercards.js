import { readFromJSON } from '../code/readfromjson.js';

export default async function createMemberCards() {

    const url = new URL('../data/members.json', import.meta.url);
    const data = await readFromJSON(url);
    const memberList = data.members;

    const cardsDiv = document.getElementById('membercards');

    memberList.forEach(member => {
        const photoUrl = new URL(member.photo, import.meta.url);
        const card = displayCard(photoUrl, member.name, member.title);
        cardsDiv.appendChild(card);
    });
}

// egy kártya
// <div class="membercard">
//     <img class="memberphoto" src="images/maledoctor.png" alt="Dr. Teszt Elek">
//     <div class="memberphotolabel">
//          <div class="membername">Dr. Teszt Elek</div>
//          <div class="membertitle">Elnök</div>
//     </div>
// </div>
// 
function displayCard(src, name, title) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add("membercard");

    const photoImg = document.createElement('img');
    photoImg.classList.add("memberphoto");
    photoImg.src = src;
    photoImg.alt = name;
    cardDiv.appendChild(photoImg);

    const labelDiv = document.createElement('div');
    labelDiv.classList.add("memberphotolabel");

    const nameDiv = document.createElement('div');
    nameDiv.classList.add("membername");
    nameDiv.textContent = name;
    labelDiv.appendChild(nameDiv);

    const titleDiv = document.createElement('div');
    titleDiv.classList.add("membertitle");
    titleDiv.textContent = title;  
    labelDiv.appendChild(titleDiv);

    cardDiv.appendChild(labelDiv);

    return cardDiv;
}