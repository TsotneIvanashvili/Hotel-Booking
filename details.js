
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


    // Toggle menu on burger icon click
document.getElementById('bars').addEventListener('click', function() {
    const menu = document.querySelector('.main-header');
    menu.classList.toggle('active');
    this.classList.toggle('fa-bars');
    this.classList.toggle('fa-times');
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const menu = document.querySelector('.main-header');
    const bars = document.getElementById('bars');
    const burgerContainer = document.querySelector('.burger-container');
    if (!menu.contains(event.target) && !burgerContainer.contains(event.target)) {
        menu.classList.remove('active');
        bars.classList.add('fa-bars');
        bars.classList.remove('fa-times');
    }
  });
  
  // Close menu when clicking a link (mobile)
  document.querySelectorAll('.head').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('.main-header');
        if (window.innerWidth <= 768) {
            menu.classList.remove('active');
            document.getElementById('bars').classList.add('fa-bars');
            document.getElementById('bars').classList.remove('fa-times');
        }
    });
  });