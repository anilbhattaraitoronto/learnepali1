var i = 0;
var j = 0;
const vowels = ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ', 'अं', 'अ:'];
const romanizedVowels = ['a', 'aa', 'i', 'ee', 'u', 'oo', 'eh', 'eih', 'o', 'au', 'ahm', 'aha'];
const syllables = ['क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'स', 'ष', 'श', 'ह', 'क्ष', 'त्र', 'ज्ञ'];
const romanizedSyllables = ['ka', 'kha', 'ga', 'gha', 'ng', 'cha', 'chha', 'ja', 'jha', 'yan', 'ta', 'tha', 'da', 'dha', 'ana', 'taa', 'thaa', 'daa', 'dhaa', 'na', 'pa', 'pha', 'ba', 'bha', 'ma', 'ya', 'ra', 'la', 'wa', 'sa', 'shaa', 'sha', 'ha', 'chya', 'tra', 'gyan'];

const vowelButton = document.querySelector('#vowel-button');
const syllableButton = document.querySelector('#syllable-button');

const vowelSection = document.querySelector('#vowels');
const syllableSection = document.querySelector('#syllables')
const vowelList = document.querySelectorAll('#vowels div');
const syllableList = document.querySelectorAll('#syllables div');

vowelButton.addEventListener('click', function (event) {
    j = 0;
    vowelSection.style.display = 'grid';
    syllableSection.style.display = 'none';
    const newDiv = document.createElement('div');
    newDiv.classList.add('vowel-list');
    newDiv.textContent = vowels[i] + " " + romanizedVowels[i];
    vowelSection.appendChild(newDiv);
    i++;
    if (i == vowels.length) {
        i = 0;
    }
});

syllableButton.addEventListener('click', function (event) {
    i = 0;
    syllableSection.style.display = "grid";
    vowelSection.style.display = 'none';
    const newDiv = document.createElement('div');
    newDiv.classList.add('syllable-list')
    newDiv.textContent = syllables[j];
    syllableSection.appendChild(newDiv);
    j++;
    if (j === syllables.length) {
        j = 0;
    }
})




