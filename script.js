let slidesContainer = document.querySelector(".slide-list");
let slides = document.querySelectorAll(".slide");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 1;
const slideCount = slides.length;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slideCount - 1].cloneNode(true);
slidesContainer.appendChild(firstClone);
slidesContainer.insertBefore(lastClone, slides[0]);

const slideWidth = slides[0].clientWidth;
slidesContainer.style.transform = `translateX(-${slideWidth * active}px)`;

function reloadSlider() {
    slidesContainer.style.transition = "transform 1s ease";
    slidesContainer.style.transform = `translateX(-${slideWidth * active}px)`;

    slidesContainer.addEventListener("transitionend", () => {
        if (active >= slideCount + 1) {
            slidesContainer.style.transition = "none";
            active = 1;
            slidesContainer.style.transform = `translateX(-${slideWidth * active}px)`;
        } else if (active <= 0) {
            slidesContainer.style.transition = "none";
            active = slideCount;
            slidesContainer.style.transform = `translateX(-${slideWidth * active}px)`;
        }
    });
}

next.onclick = function() {
    if (active <= slideCount) {
        active += 1;
        reloadSlider();
    }
};

prev.onclick = function() {
    if (active > 0) {
        active -= 1;
        reloadSlider();
    }
};

let autoSlide = setInterval(() => next.click(), 2000);



// Contact
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const formData = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };
    alert("Message sent sucessfulyy");
    console.log(formData);
    contactForm.reset();
});


// Services
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const serviceId = card.getAttribute('data-service');
        window.location.href = `service-details.html?service=${serviceId}`;
    });
});


function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const serviceId = card.getAttribute('data-service');
        window.location.href = `service-details.html?service=${serviceId}`;
    });
});


// Footer dynamic year
document.getElementById("currentYear").textContent = new Date().getFullYear();