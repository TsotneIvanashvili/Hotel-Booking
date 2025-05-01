
let url = window.location.href;
let roomId = url.split('id=')[1];
let section = document.querySelector(".room-container");

fetch(`https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom/${roomId}`)
    .then(response => response.json())
    .then(room => {
        section.innerHTML += roomCode(room);

        const bookButton = section.querySelector('.book');
        bookButton.addEventListener('click', function() {
            const reservationDiv = this.closest('.reservation');
            const inputs = reservationDiv.querySelectorAll('input');
            const [checkIn, checkOut, name, phone] = Array.from(inputs).map(input => input.value);

            if (!checkIn || !checkOut || !name || !phone) {
                alert('Please fill in all fields');
                return;
            }

            try {
                const booking = {
                    roomId: roomId,
                    roomName: room.name,
                    price: room.pricePerNight,
                    checkIn: checkIn,
                    checkOut: checkOut,
                    customerName: name,
                    customerPhone: phone,
                    image: room.images[0]?.source,
                    isAvailable: false
                };

                let bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
                bookings.push(booking);
                localStorage.setItem('bookings', JSON.stringify(bookings));

                let rooms = JSON.parse(localStorage.getItem('rooms') || '[]');
                const roomIndex = rooms.findIndex(r => r.id === roomId);
                if (roomIndex !== -1) {
                    rooms[roomIndex].available = false;
                    localStorage.setItem('rooms', JSON.stringify(rooms));
                }

                alert(`${room.name} Booked Successfully!`);

                inputs.forEach(input => input.value = '');
                
            } catch (error) {
                console.error('Error:', error);
                alert('Failed to book room. Please try again.');
            }
        });
    })
    .catch(() => {
        console.log("Connection Error");
    });

function roomCode(room) {
    return `
        <div class="meoreDiv">
            <img class="roomImg" src="${room.images[0]?.source}" alt="">
            <div class="reservation">
                <h1>Reservation</h1>
                <p class="priceName">${room.name} $${room.pricePerNight} a night</p>
                <label>Check-In</label>
                <input type="datetime-local">
                <label>Check-Out</label>
                <input type="datetime-local">
                <label>Customer Name</label>
                <input type="text" placeholder="Please Enter Your Name">
                <label>Customer Tel:Phone</label>
                <input type="number"  placeholder="Please Enter Your Phone Number">
                <button class="book">BOOK NOW</button>
            </div>
        </div>`;
}

document.getElementById('bars').addEventListener('click', function() {
    const menu = document.querySelector('.main-header');
    menu.classList.toggle('active');
    this.classList.toggle('fa-bars');
    this.classList.toggle('fa-times');
});

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