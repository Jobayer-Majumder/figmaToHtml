import { topArticleData, bottomArticleData } from "./articleData.js";



const topArticleContainer = document.getElementById('top-articles');

topArticleData.forEach(element => {
    const topSingleArticle = document.createElement('div')
    const createHtml = `
            <img src="${element.img}" alt="">
            <div class="desc-parent">
                <p>${element.tag}</p>
                <h3>${element.title}</h3>
                <p>${element.date}</p>
            </div>
    `
    topSingleArticle.innerHTML = createHtml;
    topSingleArticle.classList = 'top-single-article';
    topArticleContainer.appendChild(topSingleArticle)
});


const bottomArticleContainer = document.getElementById('bottom-articles');

bottomArticleData.forEach(element => {
    const bottomSingleArticle = document.createElement('div')
    const createHtml = `
            <img src="${element.img}" alt="">
            <div class="desc-parent">
                <p>${element.tag}</p>
                <h3>${element.title}</h3>
                <p>${element.date}</p>
            </div>
    `
    bottomSingleArticle.innerHTML = createHtml;
    bottomSingleArticle.classList = 'bottom-single-article';
    bottomArticleContainer.appendChild(bottomSingleArticle)
    console.log(element)
});