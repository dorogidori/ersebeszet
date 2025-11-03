let donateButtonText = "";

fetch('data/constants.json')
    .then(response => response.json())
    .then(data => {
      donateButtonText = data.donateButtonText;
    })
    .catch(err => console.error('Hiba a JSON beolvasásakor:', err));

// export {donateButtonText};