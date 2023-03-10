let submitButton = document.querySelector('.submit');
let initialCard = document.querySelector('.initial-card');
let rateAgainButton = document.querySelector('.rate-again');
let thankyouCard = document.querySelector('.thankyou-card');
let stars = document.querySelectorAll('.star')
let selectedRating = document.querySelector('.selected-rating')

submitButton.addEventListener('click', () => {
    initialCard.classList.add('hidden')
    thankyouCard.classList.remove('hidden')
})

rateAgainButton.addEventListener('click', () => {
    initialCard.classList.remove('hidden')
    thankyouCard.classList.add('hidden')
})

stars.forEach((star) => {
    star.addEventListener('click', () => {
        selectedRating.innerHTML = star.innerHTML

    })

})