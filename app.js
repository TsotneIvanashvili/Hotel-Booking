let section = document.querySelector(".room-container");

fetch("https://hotelbooking.stepprojects.ge/api/Rooms/GetAll")
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
        section.innerHTML += cardCode(item);
    });
  })
  .catch(() => console.error("Connection error"));

function cardCode(item) {
    return `<div class="card" style="width: 18rem;">
  <img src="${item.images[0]?.source}" class="card-img-top" alt="...">
  <div class="card-body">
    <h4 class="card-title">${item.name}</h4>
    <p>Price per night: $${item.pricePerNight}</p>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a onclick="gotoDetails('${item.id}')" class="btn btn-primary">View Details</a>
  </div>
</div>`;
}



function gotoDetails(roomId) {
    window.location.href = `details.html?id=${roomId}`;
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
  if (!menu.contains(event.target) && !bars.contains(event.target)) {
      menu.classList.remove('active');
      bars.classList.add('fa-bars');
      bars.classList.remove('fa-times');
  }
});

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