document.addEventListener('DOMContentLoaded', () => {
    const bookings = JSON.parse(sessionStorage.getItem('bookings') || '[]');
    const tableBody = document.querySelector('#bookingsList tbody');

    if (bookings.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="8" class="no-bookings">
                    <i class="fas fa-calendar-times"></i>
                    <p>No rooms booked yet. Start exploring our rooms!</p>
                    <a class = "explr" href= "./index.html"><button>Explore</button></a>
                </td>
                
            </tr>
        `;
    } else {
        bookings.forEach((booking, index) => {
            tableBody.innerHTML += `
                <tr data-index="${index}">
                    <td>${booking.roomName}</td>
                    <td><img src="${booking.image}" alt="${booking.roomName}"></td>
                    <td>$${booking.price}</td>
                    <td>${new Date(booking.checkIn).toLocaleDateString()}</td>
                    <td>${new Date(booking.checkOut).toLocaleDateString()}</td>
                    <td>${booking.customerName}</td>
                    <td>${booking.customerPhone}</td>
                    <td><button class="delete-btn" data-booking-id="${booking.roomId}">Delete</button></td>
                </tr>
            `;
        });

        // Add event listeners to delete buttons
        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', async () => {
                const bookingId = button.getAttribute('data-booking-id');
                const row = button.closest('tr');
                const index = row.getAttribute('data-index');

                try {
                    // Call the API to delete the booking
                    const response = await fetch(`https://hotelbooking.stepprojects.ge/api/Booking/${bookingId}`, {
                        method: 'DELETE',
                    });

                    if (response.ok) {
                        // Remove the booking from localStorage
                        bookings.splice(index, 1);
                        sessionStorage.setItem('bookings', JSON.stringify(bookings));

                        // Remove the row from the table
                        row.remove();

                        // Show success message
                        alert('Room Successfully Deleted');
                    } else {
                        alert('Failed to delete the room. Please try again.');
                    }
                } catch (error) {
                    console.error('Error deleting booking:', error);
                    alert('An error occurred while deleting the room.');
                }
            });
        });
    }
});

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

