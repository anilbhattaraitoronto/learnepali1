var i = 0;
var j = 0;
const vowels = ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ', 'अं', 'अ:'];
const romanizedVowels = ['a', 'aa', 'i', 'ee', 'u', 'oo', 'eh', 'eih', 'o', 'au', 'ahm', 'aha'];
const syllables = ['क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'स', 'ष', 'श', 'ह', 'क्ष', 'त्र', 'ज्ञ'];
const romanizedSyllables = ['ka', 'kha', 'ga', 'gha', 'nga', 'cha', 'chha', 'ja', 'jha', 'yan', 'ta', 'tha', 'da', 'dha', 'ana', 'ta', 'tha', 'da', 'dha', 'na', 'pa', 'pha', 'ba', 'bha', 'ma', 'ya', 'ra', 'la', 'wa', 'sa', 'sha', 'sha', 'ha', 'chya', 'tra', 'gya'];

const conjugatedSyllables = [
    ['क', 'का', 'कि', 'की', 'कु', 'कू', 'के', 'कै', 'को', 'कौ', 'कं', 'क:'],
    ['ख', 'खा', 'खि', 'खी', 'खु', 'खू', 'खे', 'खै', 'खो', 'खौ', 'खं', 'ख:'],
    ['ग', 'गा', 'गि', 'गी', 'गु', 'गू', 'गे', 'गै', 'गो', 'गौ', 'गं', 'ग:'],
    ['घ', 'घा', 'घि', 'घी', 'घु', 'घू', 'घे', 'घै', 'घो', 'घौ', 'घं', 'घ:'],
    ['ङ', 'ङा', 'ङि', 'ङी', 'ङु', 'ङू', 'ङे', 'ङै', 'ङो', 'ङौ', 'ङं', 'ङ:'],

    ['च', 'चा', 'चि', 'ची', 'चु', 'चू', 'चे', 'चै', 'चो', 'चौ', 'चं', 'च:'],
    ['छ', 'छा', 'छि', 'छी', 'छु', 'छू', 'छे', 'छै', 'छो', 'छौ', 'छं', 'छ:'],
    ['ज', 'जा', 'जि', 'जी', 'जु', 'जू', 'जे', 'जै', 'जो', 'जौ', 'जं', 'ज:'],
    ['झ', 'झा', 'झि', 'झी', 'झु', 'झू', 'झे', 'झै', 'झो', 'झौ', 'झं', 'झ:'],
    ['ञ', 'ञा', 'ञि', 'ञी', 'ञु', 'ञू', 'ञे', 'ञै', 'ञो', 'ञौ', 'ञं', 'ञ:'],

    ['ट', 'टा', 'टि', 'टी', 'टु', 'टू', 'टे', 'टै', 'टो', 'टौ', 'टं', 'ट:'],
    ['ठ', 'ठा', 'ठि', 'ठी', 'ठु', 'ठू', 'ठे', 'ठै', 'ठो', 'ठौ', 'ठं', 'ठ:'],
    ['ड', 'डा', 'डि', 'डी', 'डु', 'डू', 'डे', 'डै', 'डो', 'डौ', 'डं', 'ड:'],
    ['ढ', 'ढा', 'ढि', 'ढी', 'ढु', 'ढू', 'ढे', 'ढै', 'ढो', 'ढौ', 'ढं', 'ढ:'],
    ['ण', 'णा', 'णि', 'णी', 'णु', 'णू', 'णे', 'णै', 'णो', 'णौ', 'णं', 'ण:'],

    ['त', 'ता', 'ति', 'ती', 'तु', 'तू', 'ते', 'तै', 'तो', 'तौ', 'तं', 'त:'],
    ['थ', 'था', 'थि', 'थी', 'थु', 'थू', 'थे', 'थै', 'थो', 'थौ', 'थं', 'थ:'],
    ['द', 'दा', 'दि', 'दी', 'दु', 'दू', 'दे', 'दै', 'दो', 'दौ', 'दं', 'द:'],
    ['ध', 'धा', 'धि', 'धि', 'धु', 'धू', 'धे', 'धै', 'धो', 'धौ', 'धं', 'ध:'],
    ['न', 'ना', 'नि', 'नी', 'नु', 'नू', 'ने', 'नै', 'नो', 'नौ', 'नं', 'न:'],

    ['प', 'पा', 'पि', 'पी', 'पु', 'पू', 'पे', 'पै', 'पो', 'पौ', 'पं', 'प:'],
    ['फ', 'फा', 'फि', 'फी', 'फु', 'फू', 'फे', 'फै', 'फो', 'फौ', 'फं', 'फ:'],
    ['ब', 'बा', 'बि', 'बी', 'बु', 'बू', 'बे', 'बै', 'बो', 'बौ', 'बं', 'ब:'],
    ['भ', 'भा', 'भि', 'भी', 'भु', 'भू', 'भे', 'भै', 'भो', 'भौ', 'भं', 'भ:'],
    ['म', 'मा', 'मि', 'मी', 'मु', 'मू', 'मे', 'मै', 'मो', 'मौ', 'मं', 'म:'],

    ['य', 'या', 'यि', 'यी', 'यु', 'यू', 'ये', 'यै', 'यो', 'यौ', 'यं', 'य:'],
    ['र', 'रा', 'रि', 'री', 'रु', 'रू', 'रे', 'रै', 'रो', 'रौ', 'रं', 'र:'],
    ['ल', 'ला', 'लि', 'ली', 'लु', 'लू', 'ले', 'लै', 'लो', 'लौ', 'लं', 'ल:'],
    ['व', 'वा', 'वि', 'वी', 'वु', 'वू', 'वे', 'वै', 'वो', 'वौ', 'वं', 'व:'],
    ['स', 'सा', 'सि', 'सी', 'सु', 'सू', 'से', 'सै', 'सो', 'सौ', 'सं', 'स:'],

    ['ष', 'ष', 'षि', 'षी', 'षु', 'षू', 'षे', 'षै', 'षो', 'षौ', 'षं', 'ष:'],
    ['श', 'शा', 'शि', 'शी', 'शु', 'शू', 'शे', 'शै', 'शो', 'शौ', 'शं', 'श:'],
    ['ह', 'हा', 'हि', 'ही', 'हु', 'हू', 'हे', 'है', 'हो', 'हौ', 'हं', 'ह:'],
    ['क्ष', 'क्षा', 'क्षि', 'क्षी', 'क्षु', 'क्षू', 'क्षे', 'क्षै', 'क्षो', 'क्षौ', 'क्षं', 'क्ष:'],
    ['त्र', 'त्रा', 'त्रि', 'त्री', 'त्रु', 'त्रू', 'त्रे', 'त्रै', 'त्रो', 'त्रौ', 'त्रं', 'त्र:'],
    ['ज्ञ', 'ज्ञा', 'ज्ञि', 'ज्ञी', 'ज्ञु', 'ज्ञू', 'ज्ञे', 'ज्ञै', 'ज्ञो', 'ज्ञौ', 'ज्ञं', 'ज्ञ:'],
];
//looping through nested array
// for (i = 0; i < 36; i++) {
//     for (j = 0; j < 12; j++) {

//         console.log(conjugatedSyllables[i][j])
//     }
// }

//date/time

const now = Date();
const datePara = document.querySelector('#date-time');

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
    // while (syllableList.firstChild) {
    //     syllableList.removeChild(syllableList.firstChild)
    // };
    // while (vowelList.firstChild) {
    //     vowelList.removeChild(vowelList.firstChild);
    // };
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
    // while (syllableList.firstChild) {
    //     syllableList.removeChild(syllableList.firstChild)
    // };
    // while (vowelList.firstChild) {
    //     vowelList.removeChild(vowelList.firstChild);
    // };
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
});