sidebaritems = [
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
    "title": "Hírek",
    "page": "./news.html"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('sidebarlist');

  // fetch('./data/sidebaritems.json')
  //   .then(response => response.json())
  //   .then(data => {
  //     data.sidebaritems.forEach(item => {
  //       const li = document.createElement('li');
  //       const a = document.createElement('a');
  //       a.classList.add('sidebaritem');
  //       a.href = item.page;
  //       a.textContent = item.title;
  //       li.appendChild(a);
  //       list.appendChild(li);
  //     });
  //   })
  //   .catch(err => console.error('Hiba a JSON beolvasásakor:', err));

  sidebaritems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.classList.add('sidebaritem');
    a.href = item.page;
    a.textContent = item.title;
    li.appendChild(a);
    list.appendChild(li);
  });
});

// HTML
// < li >
//     <a class="sidebaritem" href="page">title</a>
//  </li > -->
//