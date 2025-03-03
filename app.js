let section = document.querySelector(".room-container");

fetch("https://hotelbooking.stepprojects.ge/api/Rooms/GetAll")
  .then(response => response.json())
  .then(data => {
    // Limit the data to the first 9 items
    let limitedData = data.slice(0, 9);
    
    limitedData.forEach(item => {
        section.innerHTML += cardCode(item);
    });
  })
  .catch(() => console.error("Connection error"));

  function cardCode(item) {

    let availabilityText = item.available ? "Available" : "Not Available";
    let availabilityColor = item.available ? "rgba(5, 153, 5, 0.88)" : "red";

    return `<div class="room-card">
        <img class="cardImg" src="${item.images[0]?.source}" alt="">
        <div class="main-txt">
            <div class="txt">
                <h3>${item.name}</h3>
            </div>
            <div class="price"> 
                <p>${item.pricePerNight}$</p>
                <p>a night</p>
            </div>
        </div>
        <div class="hover-content">
                <h1 class = "name">${item.name}</h1>
                <h6>Maximum Guests: ${item.maximumGuests}</h6>
                <h3 style = "color: ${availabilityColor}">Availability: ${availabilityText}</h3>
                <p>Price Per Night: ${item.pricePerNight}$</p>
            <a onclick="gotoDetails('${item.id}')" class="button">Book Now</a>
        </div>
    </div>`;


}

function gotoDetails(roomId) {
    window.location.href = `details.html?id=${roomId}`;
}

// Toggle menu on burger icon click
document.getElementById('bars').addEventListener('click', function() {
  let menu = document.querySelector('.main-header');
  menu.classList.toggle('active');
  this.classList.toggle('fa-bars');
  this.classList.toggle('fa-times');
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  let menu = document.querySelector('.main-header');
  let bars = document.getElementById('bars');
  let burgerContainer = document.querySelector('.burger-container');
  if (!menu.contains(event.target) && !burgerContainer.contains(event.target)) {
      menu.classList.remove('active');
      bars.classList.add('fa-bars');
      bars.classList.remove('fa-times');
  }
});

// Close menu when clicking a link (mobile)
document.querySelectorAll('.head').forEach(link => {
  link.addEventListener('click', () => {
      let menu = document.querySelector('.main-header');
      if (window.innerWidth <= 768) {
          menu.classList.remove('active');
          document.getElementById('bars').classList.add('fa-bars');
          document.getElementById('bars').classList.remove('fa-times');
      }
  });
});