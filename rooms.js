let section = document.querySelector(".room-container");
document.getElementById('currentYear').textContent = new Date().getFullYear();

let allRooms = [];
let roomTypes = [];

Promise.all([
    fetch("https://hotelbooking.stepprojects.ge/api/Rooms/GetAll"),
    fetch("https://hotelbooking.stepprojects.ge/api/Rooms/GetRoomTypes")
])
.then(async ([roomsResponse, typesResponse]) => {
    if (!roomsResponse.ok || !typesResponse.ok) {
        throw new Error("Failed to fetch data");
    }

    const roomsData = await roomsResponse.json();
    const typesData = await typesResponse.json();
    
    allRooms = roomsData;
    roomTypes = typesData;
    
    populateRoomTypeFilter(typesData);
    
    populateRooms(roomsData); 
})
.catch((error) => {
    console.error("Error fetching data:", error);
    section.innerHTML = "<p>Failed to load rooms. Please try again later.</p>";
});

function populateRoomTypeFilter(types) {
    const roomTypeSelect = document.getElementById('roomType');
    roomTypeSelect.innerHTML = '<option value="">All</option>';
    
    types.forEach(type => {
        const option = document.createElement('option');
        option.value = type.name;
        option.textContent = type.name;
        roomTypeSelect.appendChild(option);
    });
}

function applyFilters() {
    const roomType = document.getElementById('roomType').value;
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    const guests = parseInt(document.getElementById('guests').value);

    const filtered = allRooms.filter(room => {
        const type = roomTypes.find(t => t.id === room.roomTypeId);
        const typeMatch = !roomType || type?.name === roomType;
        const guestMatch = room.maximumGuests >= guests;
        return typeMatch && guestMatch;
    });

    populateRooms(filtered);
}

function resetFilters() {
    document.getElementById('roomType').value = '';
    document.getElementById('checkIn').value = '';
    document.getElementById('checkOut').value = '';
    document.getElementById('guests').value = 1;
    populateRooms(allRooms);
}

function populateRooms(rooms) {
    section.innerHTML = '';
    if (rooms.length === 0) {
        section.innerHTML = "<p>No rooms found.</p>";
    } else {
        rooms.forEach(item => {
            section.innerHTML += cardCode(item);
        });
    }
}

function cardCode(item) {
    let availabilityText = item.available ? "Available" : "Not Available";
    let availabilityColor = item.available ? "rgba(5, 153, 5, 0.88)" : "red";

    return `
    <div class="room-card">
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
                <h1 class="name">${item.name}</h1>
                <h5>Maximum Guests: ${item.maximumGuests}</h5>
                <h5>Availability: ${availabilityText}</h5>
                <p>Price Per Night: ${item.pricePerNight}$</p>
            <a onclick="gotoDetails('${item.id}')" class="button">Book Now</a>
        </div>
    </div>`;
}

function gotoDetails(roomId) {
    window.location.href = `details.html?id=${roomId}`;
}

document.getElementById('bars').addEventListener('click', function() {
  let menu = document.querySelector('.main-header');
  menu.classList.toggle('active');
  this.classList.toggle('fa-bars');
  this.classList.toggle('fa-times');
});

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

