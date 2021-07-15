"use strict";

const listItems = [
  {
    id: 1,
    headline: "article 1",
    text: "text article 1",
    imgUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    headline: "article 2",
    text: "text article 2",
    imgUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    headline: "article 3",
    text: "text article 3",
    imgUrl: "https://via.placeholder.com/150",
  },
];

const modalClose = document.getElementById("modalClose");
modalClose.addEventListener("click", function () {
  document.getElementById("selected-article").classList.remove("show");
});

function modalShow(elementID) {
  const articleSelected = document.getElementById("modalContent");
  const artId = elementID - 1;
  const articleClone = document.querySelector("#articles").childNodes[artId];
  console.log(articleClone);
  articleSelected.appendChild(articleClone.cloneNode(true));
  document.getElementById("selected-article").classList.add("show");
}

function addElement(el) {
  const newArticle = document.createElement("div");

  const newArticleHeader = document.createElement("h2");
  const newArticleHeaderText = document.createTextNode(el.text);
  newArticleHeader.appendChild(newArticleHeaderText);

  const newArticleBody = document.createElement("p");
  const newArticleBodyText = document.createTextNode(el.text);
  newArticleBody.appendChild(newArticleBodyText);

  const newArticleImg = document.createElement("img");
  newArticleImg.className = "image";
  newArticleImg.src = el.imgUrl;

  const newArticleButton = document.createElement("button");
  const newArticleButtonText = document.createTextNode(el.text);
  newArticleButton.appendChild(newArticleButtonText);

  newArticleButton.addEventListener("click", function () {
    document.getElementById("modalContent").textContent = null;

    modalShow(el.id);
  });

  newArticle.appendChild(newArticleHeader);
  newArticle.appendChild(newArticleBody);
  newArticle.appendChild(newArticleImg);
  newArticle.appendChild(newArticleButton);

  const articlesContainer = document.getElementById("articles");
  articlesContainer.appendChild(newArticle);
}

listItems.forEach((element) => {
  console.log(element.headline, element.text, element.imgUrl);
  addElement(element);
  //element.classList.toggle("test");
  //element.innerHTML = "<b>test</b>";
});
