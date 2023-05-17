const waterFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the water form
  const date = document.querySelector('#waterDate').value.trim();
  const ounces = document.querySelector('#ounces').value.trim();

  if (date && ounces) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/water', {
      method: 'POST',
      body: JSON.stringify({ date, ounces }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, show the message below
      alert('Water entry added successfully!');
    } else {
      // If the request fails, display the error message
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.water-form')
  .addEventListener('submit', waterFormHandler);
