const images = document.querySelectorAll("img");
let currentPage = 1;
let keyword = "";

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    keyword = document.querySelector("#search").value;
    displayImages(keyword, 1)
    document.querySelector(".images").style.visibility = "visible";
})

function displayImages(keyword, page) {
    fetch(`https://apis.scrimba.com/unsplash/search/photos?query=${keyword}&page=${page}`)
        .then(res => res.json())
        .then(data => {
            for(let i = 0; i < 10; i++) {
                images[i].setAttribute("src", `${data.results[i].urls.small}`)
            }
        })
}

document.querySelector("#next").addEventListener("click", function(event) {
    currentPage++;
    displayImages(keyword, currentPage)
})
document.querySelector("#prev").addEventListener("click", function(event) {
    if(currentPage > 1) {
        currentPage--;
        displayImages(keyword, currentPage)

    }
})