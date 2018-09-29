var i = 0;
const vowels = ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ', 'अं', 'अ:'];
const romanizedVowels = ['a', 'aa', 'i', 'ee', 'u', 'oo', 'eh', 'eih', 'o', 'au', 'ahm', 'aha'];
const playButton = document.querySelector('#play-button');
playButton.addEventListener('click', function (event) {
    const newSection = document.querySelector('#vowels1');
    const newDiv = document.createElement('div');
    newDiv.textContent = vowels[i] + " | " + romanizedVowels[i];
    newSection.appendChild(newDiv);
    i++;
    if (i == vowels.length) {
        i = 0;
    }
});



