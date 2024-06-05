const search = document.getElementById("search");
const word = document.getElementById("word");
const result = document.querySelector(".result");
const btn = document.getElementById("btn");

search.addEventListener("click", findWord);

async function findWord() {
  var wordEl = word.value;
  console.log(wordEl);
  try {
    const data = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${wordEl}`
    );
    const response = await data.json();
    console.log(response);

    result.innerHTML = `

      <h2 class="word-title">${response[0].word}</h2>
      
      <p class="definition">${response[0].meanings[0].definitions[0].definition}</p>

      <p class="sentence">${response[0].meanings[0].definitions[0].example}</p>

      <div class="extra-details">
        <p>${response[0].phonetic}</p>
        <p>*${response[0].meanings[0].partOfSpeech}*</p>
      </div>
      
    `;
  } catch (error) {
    console.log(error);
  }

  clear();
  Validite();
}

function clear() {
  word.value = "";
}

function Validite() {
  const sentenceEl = document.querySelector(".sentence");
  const sentenceWord = sentenceEl.value;

  if (sentenceWord == undefined) {
    sentenceEl.textContent = "";
  }

  console.log(sentenceWord);
}
