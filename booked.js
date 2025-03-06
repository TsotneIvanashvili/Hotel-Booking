document.addEventListener('DOMContentLoaded', () => {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    const tableBody = document.querySelector('#bookingsList tbody');

    const deleteBooking = (button) => {
        if (confirm('Are you sure you want to delete this booking?')) {
            const row = button.closest('tr');
            const index = parseInt(row.getAttribute('data-index'));
            
            // Remove from localStorage
            const bookingId = bookings[index].roomId;
            bookings.splice(index, 1);
            localStorage.setItem('bookings', JSON.stringify(bookings));
            
            // Remove from DOM
            row.remove();
            
            // Update availability in other tabs
            localStorage.setItem('availabilityUpdate', Date.now());
            
            alert('Room deleted successfully!');
            
            if (bookings.length === 0) {
                renderBookings();
            }
        }
    };

    const renderBookings = () => {
        if (bookings.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="8" class="no-bookings">
                        <i class="fas fa-calendar-times"></i>
                        <p>No rooms booked yet. Start exploring our rooms!</p>
                        <a class="explr" href="./index.html"><button>Explore</button></a>
                    </td>
                </tr>
            `;
        } else {
            tableBody.innerHTML = ''; // Clear existing rows
            bookings.forEach((booking, index) => {
                tableBody.innerHTML += `
                    <tr data-index="${index}">
                        <td data-label="Room Name">${booking.roomName}</td>
                        <td data-label="Image"><img src="${booking.image}" alt="${booking.roomName}"></td>
                        <td data-label="Price">$${booking.price}</td>
                        <td data-label="Check-In">${new Date(booking.checkIn).toLocaleDateString()}</td>
                        <td data-label="Check-Out">${new Date(booking.checkOut).toLocaleDateString()}</td>
                        <td data-label="Customer Name">${booking.customerName}</td>
                        <td data-label="Customer Phone">${booking.customerPhone}</td>
                        <td data-label="Action">
                            <button class="delete-btn" data-booking-id="${booking.roomId}">
                                <i class="fas fa-trash"></i> Delete
                            </button>
                        </td>
                    </tr>
                `;
            });

            // Add event listeners to delete buttons
            document.querySelectorAll('.delete-btn').forEach(button => {
                button.addEventListener('click', () => deleteBooking(button));
            });
        }
    };

    // Initial render
    renderBookings();
});

// Rest of your existing JS code remains unchanged...
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