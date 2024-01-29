const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const btnSearch = document.getElementById("btn__search");
const inputWord = document.getElementById("input__word");
const resultEl = document.querySelector(".result");

btnSearch.addEventListener("click", findWord);

async function findWord() {
  try {
    const word = inputWord.value;
    const data = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    ).then((response) => response.json());

    resultEl.innerHTML = `
    <div>
        <div class="word">
            <h2>${word} - ${data[0].meanings[0].partOfSpeech}</h2>
            <div class="pronunciation">
                <p>Pronunciation: ${data[0].phonetic}</p>
                <audio controls>
                    <source src="${data[0].phonetics[0].audio}">
                </audio>
            </div>
            <p id="meaning">${data[0].meanings[0].definitions[0].definition}.</p>
        </div>
    </div>
    `;
  } catch (error) {

    resultEl.innerHTML = `
    
    <h2>Could not find your word.</h2>
    
    `
  }


  deleteWord();
}

function deleteWord() {
  inputWord.value = "";
}
