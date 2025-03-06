let section = document.querySelector(".hotel-container");


fetch("https://hotelbooking.stepprojects.ge/api/Hotels/GetAll")
.then(response => response.json())
.then( data => data.forEach(item => {
    section.innerHTML += hotelCode(item);
}))
.catch(() => console.error("Connection error"));


function hotelCode(item){
    return `<div class="hotels">
                <img class = "hotel-img" src="${item.featuredImage}" alt="">
                <h1>${item.name}</h1>
                <button onclick="window.location.href='rooms.html'" id = "hotel-button">View Rooms</button>
            </div>`
}