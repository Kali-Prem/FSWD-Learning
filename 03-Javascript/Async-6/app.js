// GitHub Profile Finder
// API: https://api.github.com/users/username

const api = "https://api.github.com/users/";

// DOM elements
const usernameInput = document.getElementById("username");
const searchBtn = document.getElementById("searchBtn");
const profileCard = document.getElementById("profile");
const avatarEl = document.getElementById("avatar");
const nameEl = document.getElementById("name");
const bioEl = document.getElementById("bio");
const followersEl = document.getElementById("followers");
const followingEl = document.getElementById("following");
const reposEl = document.getElementById("repos");
const profileLink = document.getElementById("profileLink");
const messageEl = document.getElementById("message");

// Fetch user data from GitHub API
async function getUser(username) {
  const response = await fetch(api + username);

  if (!response.ok) {
    // 404 = user not found, anything else = API/network problem
    throw new Error(response.status === 404 ? "not-found" : "failed");
  }

  return response.json();
}

// Fill the profile card with the API data
function showProfile(user) {
  avatarEl.src = user.avatar_url;
  nameEl.textContent = user.name || user.login;
  bioEl.textContent = user.bio || "No bio available.";

  followersEl.textContent = user.followers;
  followingEl.textContent = user.following;
  reposEl.textContent = user.public_repos;

  // "View Profile" opens the real GitHub profile in a new tab
  profileLink.href = user.html_url;

  profileCard.classList.add("active");
}

// Search button click handler
async function searchUser() {
  const username = usernameInput.value.trim();

  if (username === "") {
    messageEl.textContent = "Please enter a username.";
    return;
  }

  messageEl.textContent = "Loading...";

  try {
    const user = await getUser(username);
    messageEl.textContent = "";
    showProfile(user);
  } catch (error) {
    profileCard.classList.remove("active");
    messageEl.textContent =
      error.message === "not-found"
        ? "User not found. Please check the username."
        : "Something went wrong. Please try again.";
  }
}

searchBtn.addEventListener("click", searchUser);

// Search with Enter key
usernameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchUser();
  }
});

