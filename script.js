const quoteBtn = document.querySelector("button");
const quoteSection = document.querySelector("section");
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");

quoteSection.style.display = "none";

const quoteData = async () => {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    const randomNo = Math.floor(Math.random() * data.length);
    quoteSection.style.display = "flex";
    quote.textContent = data[randomNo].text;
    author.textContent = "- "+ data[randomNo].author;
};

quoteBtn.addEventListener("click", () => {
    quoteData();
});