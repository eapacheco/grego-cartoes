// State control constants
const GREEK = 0
const PORTUGUESE = 1

// State control variables
let index = 0

// Define container
const portugueseBox = document.querySelector('.portuguese-box')
const portugueseWord = document.querySelector(".portuguese-word")
const greekBox = document.querySelector(".greek-box")
const greekWord = document.querySelector(".greek-word")
const greekSub1 = document.querySelector(".greek-sub1")
const greekSub2 = document.querySelector(".greek-sub2")
const flipCardInner = document.querySelector(".flip-card-inner")
const previousButton = document.querySelector(".caret-btn-prev")
const nextButton = document.querySelector(".caret-btn-next")

// Words control
previousButton.onclick = () => setTimeout(() => {
    index = index == 0 ? words.length - 1 : index - 1
    writeWords()
},
    // Wait for translation to hide back
    portugueseBox.style.display == "flex" ? 600 : 0)

// Words control
nextButton.onclick = () => setTimeout(() => {
    index = index == words.length - 1 ? 0 : index + 1
    writeWords()
},
    // Wait for translation to hide back
    portugueseBox.style.display == "flex" ? 600 : 0)

// Switch language after each transition
flipCardInner.addEventListener("transitionstart", () => setTimeout(() => {
    greekBox.style.display = greekBox.style.display == "flex" ? "none" : "flex"
    portugueseBox.style.display = portugueseBox.style.display == "flex" ? "none" : "flex"
}, 100))

/**
 * SEE: Constants and initial state variables were defined in init_vars.js
 */

init()

// Define initial state
function init() {
    words = shuffle(words)
    writeWords()
}

// Hide / Show pages given the current state index
function writeWords() {
    let currentWord = words[index]

    // Write dynamic data
    portugueseWord.textContent = currentWord.portuguese
    greekWord.textContent = currentWord.greek
    greekSub1.textContent = currentWord.sub1
    greekSub2.textContent = currentWord.sub2

    // Commas are not displayed for Conjunctions
    document.querySelectorAll('.commas').forEach((ele) => ele.style.display = currentWord.clazz == Conjuction ? "none" : "flex")
}

// Shuffle array
function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5)
}