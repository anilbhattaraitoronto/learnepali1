var i = 0;
var j = 0;
const vowels = ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ', 'अं', 'अ:'];
const romanizedVowels = ['a', 'aa', 'i', 'ee', 'u', 'oo', 'eh', 'eih', 'o', 'au', 'ahm', 'aha'];
const syllables = ['क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'स', 'ष', 'श', 'ह', 'क्ष', 'त्र', 'ज्ञ'];
const romanizedSyllables = ['ka', 'kha', 'ga', 'gha', 'nga', 'cha', 'chha', 'ja', 'jha', 'yan', 'ta', 'tha', 'da', 'dha', 'ana', 'taa', 'thaa', 'daa', 'dhaa', 'na', 'pa', 'pha', 'ba', 'bha', 'ma', 'ya', 'ra', 'la', 'wa', 'sa', 'shaa', 'sha', 'ha', 'chya', 'tra', 'gyan'];

const vowelButton = document.querySelector('#vowel-button');
const syllableButton = document.querySelector('#syllable-button');
const learnVowels = document.querySelector('#learn-vowels');
const learnSyllables = document.querySelector('#learn-syllables');

const vowelSection = document.querySelector('#vowels');
const syllableSection = document.querySelector('#syllables')
const vowelList = document.querySelector('#vowels');
const syllableList = document.querySelector('#syllables');

vowelButton.addEventListener('click', function (event) {
    while (syllableList.firstChild) {
        syllableList.removeChild(syllableList.firstChild)
    }
    j = 0;
    vowelSection.style.display = 'grid';
    learnSyllables.style.display = 'none';
    syllableSection.style.display = 'none';
    const newDiv = document.createElement('div');
    newDiv.classList.add('vowel-list');
    newDiv.textContent = vowels[i] + " " + romanizedVowels[i];
    vowelSection.appendChild(newDiv);
    i++;
    if (i == 13) {
        i = 0;
        while (vowelList.firstChild) {
            vowelList.removeChild(vowelList.firstChild)
        }
        learnSyllables.style.display = 'block';
        learnVowels.style.display = 'none';

    }
});

syllableButton.addEventListener('click', function (event) {
    while (vowelList.firstChild) {
        vowelList.removeChild(vowelList.firstChild);
    }
    i = 0;
    syllableSection.style.display = "grid";
    vowelSection.style.display = 'none';
    const newDiv = document.createElement('div');
    newDiv.classList.add('syllable-list')
    newDiv.textContent = syllables[j] + " " + romanizedSyllables[j];
    syllableSection.appendChild(newDiv);
    j++;
    if (j === 37) {
        j = 0;
        while (syllableList.firstChild) {
            syllableList.removeChild(syllableList.firstChild)
        };
        learnVowels.style.display = 'block';
        learnSyllables.style.display = 'none';
    }
})




