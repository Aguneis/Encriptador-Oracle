const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const btnEncrypt = document.getElementById("btn-encrypt");
const btnDecrypt = document.getElementById("btn-decrypt");
const btnCopy = document.getElementById("btn-copy");
const outputNotMessage = document.querySelector(".output__message");
const outputImg = document.querySelector(".output__img");

const encryptVocals = [
  ["a", "ai"],
  ["e", "enter"],
  ["i", "imes"],
  ["o", "ober"],
  ["u", "ufat"],
];

const encrypt = (str, x) => {
  let textTodecrypt = str.toLowerCase();
  for (let i = 0; i < encryptVocals.length; i++) {
    if (textTodecrypt.includes(encryptVocals[i][x])) {
      textTodecrypt = textTodecrypt.replaceAll(
        encryptVocals[i][x],
        encryptVocals[i][x ? 0 : 1]
      );
    }
  }
  return textTodecrypt;
};

const showNotText = () => {
  outputNotMessage.classList.remove("hidden");
  btnCopy.classList.add("hidden");
  outputImg.classList.remove("hidden");
};

const showEncryptedText = () => {
  outputNotMessage.classList.add("hidden");
  btnCopy.classList.remove("hidden");
  outputImg.classList.add("hidden");
};

const copyText = (e) => {
  const inputHidden = document.createElement("input");
  inputHidden.setAttribute("value", e.textContent);
  document.body.appendChild(inputHidden);
  inputHidden.select();
  document.execCommand("copy");
  document.body.removeChild(inputHidden);
};

const cleanInput = () => {
  inputText.value = "";
};

const cleanOutputText = () => {
  outputText.textContent = "";
};

btnEncrypt.addEventListener("click", () => {
  if (!inputText.value) {
    showNotText();
    cleanOutputText();
  } else {
    cleanOutputText();
    const encryptedText = encrypt(inputText.value, (x = 0));
    const text = document.createTextNode(`${encryptedText}`);
    outputText.appendChild(text);
    cleanInput();
    showEncryptedText();
  }
});

btnDecrypt.addEventListener("click", () => {
  if (!inputText.value) {
    showNotText();
    cleanOutputText();
  } else {
    cleanOutputText();
    const decryptText = encrypt(inputText.value, (x = 1));
    const text = document.createTextNode(`${decryptText}`);
    outputText.appendChild(text);
    cleanInput();
    showEncryptedText();
  }
});

btnCopy.addEventListener("click", () => {
  copyText(outputText);
});
