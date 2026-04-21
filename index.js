const input = document.querySelector('#state-input')
const button = document.querySelector('#fetch-button')
const display = document.querySelector('#alerts-display')
const errorDiv = document.querySelector('#error-message')

button.addEventListener('click', () => {
  const state = input.value.trim()

  // Clear previous display
  display.textContent = ''

  fetch(`https://api.weather.gov/alerts/active?area=${state}`)
    .then(response => response.json())
    .then(data => {
      // Hide error message on success
      errorDiv.classList.add('hidden')
      errorDiv.textContent = ''

      const alerts = data.features

      // Display number of alerts
      display.textContent = `Weather Alerts: ${alerts.length}`

      // Display each alert
      alerts.forEach(alert => {
        const p = document.createElement('p')
        p.textContent = alert.properties.headline
        display.appendChild(p)
      })

      // Clear input field
      input.value = ''
    })
    .catch(error => {
      // Show error message
      errorDiv.classList.remove('hidden')
      errorDiv.textContent = error.message
    })
})