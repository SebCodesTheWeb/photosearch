# Image Search App in 10 MINUTES
Hi there!

## I made an image search app that in 10 MINUTES, can search a list of images using a keyword from the Unsplash API.

Checkout the deployed project here: 
https://photosearch-unsplash.netlify.app/

Watch the YouTube video: 

https://www.youtube.com/watch?v=7EArFLOI8ek


## Hello, and welcome to my blog! 😊
In this video, I make  a photo search app, that takes in a keyword and return 10 images that is taken from the unsplash.com API. The user can search with any keyword and scroll through to the next / previous page. This is a challenge, and my fourth attempt when I finally managed to code the app in less than 10 minutes!

## --How it works--

It's quite simple. I align everything using css grid, and have 10 empty images when the website first loades. I use a css background pattern and some hover effect to make everything look nice. When the user types in a keyword and clicks on submit the code makes a request to the unsplash api, and returns a list of urls related to that keyword. It then sets the src attribute of those images to the urls returned.

The fetch call looks like this:

```javascript
function displayImages(keyword, page) {
    fetch(`https://apis.scrimba.com/unsplash/search/photos?query=${keyword}&page=${page}`)
        .then(res => res.json())
        .then(data => {
            for(let i = 0; i < 10; i++) {
                images[i].setAttribute("src", `${data.results[i].urls.small}`)
            }
        })
}
``` 
And that's more or less it, the only hard part is making everything come together in 10 minutes ;)

--Changes made after video--
I made a two changes after the video so it would look just a bit better

1. Set the default visibility for the images to hidden to remove weird black dots that appeared
2. Added media queries to change the amount of columns from 5 to 3 then 2 and lastly 1 depending on screen size

## --About me--

Hello! My name is Sebastian, and I'm a high-school student from Sweden. I have dabbled with some front-end development for the past few months. And since Christmas brake finally arrived, I've decided to start a challenge for myself! I'm going to code for the coming 20 days.

I'm following the front-end career path at Scrimba and I'm currently at module 8 (Flexbox, Grid and Fetch)

By the end of the 20 days I'm hoping to have finished the front-end career path and have started with some backend Node.js development. I will be documenting my progress for the coming days, and filming myself on my Youtube-channel, so feel free to follow along my journey and learn with me!

## --Social Media--

- Follow my Blog: https://dev.to/sebcodestheweb
- Youtube: www.youtube.com/channel/UCikWIcChAOSwoc2qpbZ6iIA
- Reddit: https://www.reddit.com/user/zenrigod
- Instagram: https://www.instagram.com/sebcodestheweb/
- Github: https://github.com/SebCodesTheWeb
