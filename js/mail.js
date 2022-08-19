
function success() {
  let thank = document.querySelector(".msg-pop-up")
  thank.style.display = "block"
  setTimeout(() => {
    thank.style.display = "none"
  },2000)
}

function failure() {
  let fail = document.querySelector(".failed-msgpop")
  fail.style.display = "block"
  setTimeout(() => {
    fail.style.display = "none"
  },2000)
}

