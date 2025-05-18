// script.js

function processBooking() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const checkin = new Date(document.getElementById("checkin").value);
  const checkout = new Date(document.getElementById("checkout").value);
  const roomType = document.getElementById("room").value;

  // Validate input
  if (!name || !email || !checkin || !checkout || !roomType) {
    alert("Please fill out all fields.");
    return;
  }

  if (checkin >= checkout) {
    alert("Check-out date must be after check-in date.");
    return;
  }

  // Calculate number of nights
  const timeDiff = checkout - checkin;
  const days = Math.ceil(timeDiff / (1000 * 3600 * 24));

  // Room pricing
  const roomPrices = {
    single: 1000,
    double: 1800,
    deluxe: 2500,
  };

  const rate = roomPrices[roomType];
  const total = rate * days;

  // Show summary
  const summaryHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Room Type:</strong> ${roomType.charAt(0).toUpperCase() + roomType.slice(1)}</p>
    <p><strong>Check-In:</strong> ${checkin.toDateString()}</p>
    <p><strong>Check-Out:</strong> ${checkout.toDateString()}</p>
    <p><strong>Number of Nights:</strong> ${days}</p>
    <p><strong>Total Bill:</strong> ₹${total}</p>
  `;

  document.getElementById("bookingSummary").innerHTML = summaryHTML;
}
