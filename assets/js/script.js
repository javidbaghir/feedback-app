const btn = document.querySelector("#btn");
const ratingsContainer = document.querySelector("#ratings-container");
const container = document.querySelector("#container");
const containerAnswer = document.querySelector("#container-answer");
const ratingAnswer = document.querySelector("#rating-answer");
const rating = document.querySelectorAll('.rating')

let selected = "";

ratingsContainer.addEventListener("click", function (e) {
  const obj = e.target.closest("button");
  

  if (obj) {
    for(let r of rating){
        r.classList.remove('active')
      }

      obj.classList.add('active');
      selected = obj.dataset.rating;
  }

});

btn.addEventListener("click", function (e) {
  container.classList.add("hidden");
  containerAnswer.classList.remove("hidden");
  if (selected === "") {
    alert("Alex deyir bos gonderme")
  } else {
    ratingAnswer.textContent = selected;
  }
});
