const inputField = document.getElementById('profile-input');
const displaySection = document.getElementById('social-connections');

// Function to fetch social connections
function fetchSocialConnections() {
  const profileUrl = inputField.value;
  const apiUrl = https://socialgraph.googleapis.com/lookup?q=${encodeURIComponent(profileUrl)}&edi=1;

  // Make an API request
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Extract and display social connections data
      const connections = data.nodes[profileUrl].nodes;
      displaySection.innerHTML = '<h2>Social Connections:</h2>';
      connections.forEach(connection => {
        displaySection.innerHTML += <p>${connection}</p>;
      });
    })
    .catch(error => {
      console.error('Error fetching social connections:', error);
    });
}

// Attach an event listener to the form or input field
inputField.addEventListener('change', fetchSocialConnections);