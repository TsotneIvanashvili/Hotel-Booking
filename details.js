
let url = window.location.href; 
let roomId = url.split('id=')[1]; 
let section = document.querySelector(".room-container")

fetch(`https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom/${roomId}`)
    .then(response => response.json())
    .then(room => {
        section.innerHTML += roomCode(room);

    })
    .catch(() => {
        console.log("Connection Error");
        
    });


    

    function roomCode (room){

        return `    <div class="meoreDiv">
        <img class = "roomImg" src="${room.images[0]?.source}" alt="">
        <div class="reservation">
        <h1>Reservation</h1>
        <p class = "priceName">${room.name} $${room.pricePerNight} a night</p>
            <label>Check-In</label>
            <input type="datetime-local">

            <label>Check-Out</label>
            <input type="datetime-local">

            <label>Customer Name</label>
            <input type="text" placeholder = "Please Enter Your Name">

            <label>Customer Tel:Phone</label>
            <input type="text" placeholder = " Please Enter Your Phone Number">
            <button class = "book">BOOK NOW</button>
        </div>
        </div>`;
        
    }

