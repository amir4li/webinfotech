const loremText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

const services = {
    service1: {
        title: "Service 1",
        description: loremText,
        imageUrl: "./assets/images/img1.jpg",
    },
    service2: {
        title: "Service 2",
        description: loremText,
        imageUrl: "./assets/images/img1.jpg",
    },
    service3: {
        title: "Service 3",
        description: loremText,
        imageUrl: "./assets/images/img1.jpg",
    }
};


function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function loadServiceContent() {
    const serviceId = getQueryParam("service");
    const serviceContent = document.getElementById('service-content');


    const service = services[serviceId];
    if (service) {
        serviceContent.innerHTML = `
            <h1 class="service-details-title">${service.title}</h1>
            <div class="service-details-container">
                <div class="service-details-content">
                <img src="${service.imageUrl}" alt="${service.title}" class="service-details-image">
                <p class="service-details-description">${service.description}</p>
            </div>
        `;
    } else {
        serviceContent.innerHTML = "<p>Service not found.</p>";
    }
}

window.onload = loadServiceContent;
