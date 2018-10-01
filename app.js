var i = 0;
var j = 0;
const vowels = ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ', 'अं', 'अ:'];
const romanizedVowels = ['a', 'aa', 'i', 'ee', 'u', 'oo', 'eh', 'eih', 'o', 'au', 'ahm', 'aha'];
const syllables = ['क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'स', 'ष', 'श', 'ह', 'क्ष', 'त्र', 'ज्ञ'];
const romanizedSyllables = ['ka', 'kha', 'ga', 'gha', 'nga', 'cha', 'chha', 'ja', 'jha', 'yan', 'ta', 'tha', 'da', 'dha', 'ana', 'ta', 'tha', 'da', 'dha', 'na', 'pa', 'pha', 'ba', 'bha', 'ma', 'ya', 'ra', 'la', 'wa', 'sa', 'sha', 'sha', 'ha', 'chya', 'tra', 'gyan'];

//play buttons
const startButton = document.querySelector('#start-button');
const vowelButton = document.querySelector('#vowel-button');
const syllableButton = document.querySelector('#syllable-button');

//nav buttons 
const homeButton = document.querySelector("#home-nav");
const blogsButton = document.querySelector("#blogs-nav");
const languageButton = document.querySelector("#language-nav");

//sections to be targetted
const startPlaying = document.querySelector('#start-playing');
const learnVowels = document.querySelector('#learn-vowels');
const learnSyllables = document.querySelector('#learn-syllables');
const vowelSection = document.querySelector('#vowels');
const syllableSection = document.querySelector('#syllables')
const vowelList = document.querySelector('#vowels');
const syllableList = document.querySelector('#syllables');
const blogsList = document.querySelector('#blogs');
const languageDescription = document.querySelector('#language');


startButton.addEventListener('click', function (event) {
    while (syllableList.firstChild) {
        syllableList.removeChild(syllableList.firstChild)
    };
    while (vowelList.firstChild) {
        vowelList.removeChild(vowelList.firstChild);
    };
    i = 0;
    j = 0;
    startPlaying.style.display = 'none';
    learnVowels.style.display = 'block';
    vowelList.style.display = 'grid';
    blogsList.style.display = 'none';
});

homeButton.addEventListener('click', function (event) {
    startPlaying.style.display = "block";
    languageDescription.style.display = 'none';
    blogsList.style.display = 'none';
    learnVowels.style.display = 'none';
    learnSyllables.style.display = 'none';
    vowelSection.style.display = 'none';
    syllableSection.style.display = 'none';
    vowelList.style.display = 'none';
    syllableList.style.display = 'none';
});

blogsButton.addEventListener('click', function (event) {
    while (syllableList.firstChild) {
        syllableList.removeChild(syllableList.firstChild)
    };
    while (vowelList.firstChild) {
        vowelList.removeChild(vowelList.firstChild);
    };
    languageDescription.style.display = 'none';
    blogsList.style.display = 'block';
    startPlaying.style.display = "none";
    learnVowels.style.display = 'none';
    learnSyllables.style.display = 'none';
    vowelSection.style.display = 'none';
    syllableSection.style.display = 'none';
    vowelList.style.display = 'none';
    syllableList.style.display = 'none';
})

languageButton.addEventListener('click', function (event) {
    while (syllableList.firstChild) {
        syllableList.removeChild(syllableList.firstChild)
    };
    while (vowelList.firstChild) {
        vowelList.removeChild(vowelList.firstChild);
    };
    languageDescription.style.display = 'block';
    blogsList.style.display = 'none';
    startPlaying.style.display = "none";
    learnVowels.style.display = 'none';
    learnSyllables.style.display = 'none';
    vowelSection.style.display = 'none';
    syllableSection.style.display = 'none';
    vowelList.style.display = 'none';
    syllableList.style.display = 'none';
});
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
    const varnaSpan = document.createElement('span');
    varnaSpan.classList.add('vowel-varna-letters');
    varnaSpan.textContent = vowels[i];
    const romanizedSpan = document.createElement('span');
    romanizedSpan.classList.add('vowel-romanized-letters');
    romanizedSpan.textContent = romanizedVowels[i];
    newDiv.appendChild(varnaSpan);
    newDiv.appendChild(romanizedSpan);
    // newDiv.textContent = vowels[i] + " " + romanizedVowels[i];
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
    const varnaSpan = document.createElement('span');
    varnaSpan.classList.add('syllable-varna-letters');
    varnaSpan.textContent = syllables[j];
    const romanizedSpan = document.createElement('span');
    romanizedSpan.classList.add('syllable-romanized-letters');
    romanizedSpan.textContent = romanizedSyllables[j];
    newDiv.appendChild(varnaSpan);
    newDiv.appendChild(romanizedSpan);
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




