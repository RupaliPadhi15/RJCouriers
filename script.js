function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

function trackShipment(event) {
  event.preventDefault();

  const name = document.getElementById("custName").value;
  const id = document.getElementById("custId").value;
  const details = document.getElementById("custDetails").value;
  const trackingId = document.getElementById("trackingId").value;
  const result = document.getElementById("track-result");

  let statusMessage;

  // simple mock tracking system
  if (trackingId === "12345") {
    statusMessage = "Delivered ✅ (29-Aug-2025)";
  } else if (trackingId === "67890") {
    statusMessage = "Out for Delivery 🚚 (Expected today)";
  } else {
    statusMessage = "In Transit 📦 (Expected in 2 days)";
  }

  result.innerHTML = `
    <h3>Tracking Result</h3>
    <p><strong>Customer:</strong> ${name} (ID: ${id})</p>
    <p><strong>Contact:</strong> ${details}</p>
    <p><strong>Tracking ID:</strong> ${trackingId}</p>
    <p><strong>Status:</strong> ${statusMessage}</p>
  `;
}
