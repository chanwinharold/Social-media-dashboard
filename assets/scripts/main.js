import {Followers, Overviews} from "./data.js";

const switcherBtn = document.querySelector(".switch [type='checkbox']")
const themeLink = document.getElementById("theme")

switcherBtn.onchange = (e) => {
    themeLink.href = e.target.checked ? "./assets/styles/light.css" : "./assets/styles/dark.css";
}

const followersSection = document.querySelector(".section-followers")
const overviewSection = document.querySelector(".section-overview > div")

Followers.forEach(f => {
    followersSection.innerHTML += (`
        <article class="article-followers border-${f.title}">
            <div>
                <img src=${"./assets/images/" + f.image} alt=${f.title + "social media"}>
                <p class="text-lighter">${f.pseudo}</p>
            </div>
            <div>
                <strong class="text-light">${f.count}</strong>
                <em class="text-lighter">${f.type}</em>
            </div>
            <div>
                <em class="${f.growth ? "text-green" : "text-red"} ${f.growth ? "arrow-up" : "arrow-down"}">${f.period}</em>
            </div>
        </article>
    `)
})

Overviews.forEach(ov => {
    overviewSection.innerHTML += (`
        <article class="article-overview">
            <div>
                <span class="text-lighter">${ov.title}</span>
                <img src=${"./assets/images/" + ov.image} alt=${ov.image.replace(".svg", "")}>
            </div>
            <div>
                <strong class="text-light">${ov.count}</strong>
                <em class="${ov.growth ? "text-green" : "text-red"} ${ov.growth ? "arrow-up" : "arrow-down"}">${ov.percent}%</em>
            </div>
        </article>
    `)
})