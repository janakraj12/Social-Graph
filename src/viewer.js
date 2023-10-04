// Create a social graph viewer using the Google social graph API.
// Import the necessary libraries.
import React, { useState, useEffect } from "react";
import { useGoogleLogin } from "react-google-login";
// Define the main component.
const SocialGraphViewer = () => {
  // Initialize the state variables.
  const [user, setUser] = useState(null);
  const [friends, setFriends] = useState([]);
  // Use the Google social graph API to get the user's friends.
  useEffect(() => {
    const fetchFriends = async () => {
      const response = await fetch(
        "https://people.googleapis.com/v1/people/me/connections?access_token=" +
          user.accessToken
      );
      const data = await response.json();
      setFriends(data.connections);
    };
    if (user) {
      fetchFriends();
    }
  }, [user]);
  // Render the component.
  return (
    <div>
      <h1>Social Graph Viewer</h1>
      {user ? (
        <div>
          <p>You are logged in as {user.name}.</p>
          <ul>
            {friends.map((friend) => (
              <li key={friend.id}>{friend.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <p>Please log in to view your social graph.</p>
          <button onClick={login}>Log in with Google</button>
        </div>
      )}
    </div>
  );
};
// Export the component.
export default SocialGraphViewer;