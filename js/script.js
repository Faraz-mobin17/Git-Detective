const button = document.querySelector(".btn-search");
const bio = document.querySelector("#bio");
const username = document.querySelector("#name");
const date = document.querySelector("#date");
const repos = document.querySelector("#repos");
const followers = document.querySelector("#followers");
const following = document.querySelector("#following");
const loc = document.querySelector("#location");
const twitter = document.querySelector("#twitter");
const company = document.querySelector("#company");
const page = document.querySelector("#page");
const avatar = document.querySelector("#avatar");
const nosearch = document.querySelector("#no-results");
const avacont = document.querySelector(".avatar-container")

button.addEventListener("click", (e) => {
  e.preventDefault();
  const searchBar = document.querySelector("#searchbar");
  getUser(searchbar.value);
});


// TODO: add api and key in js file and comment it

async function getUser(searchbar) {
  console.log(searchbar);
  try {
    const response = await axios.get(
      `https://api.github.com/users/${searchbar}` // add api to get data
    ); 
    console.log(response);
    username.innerHTML = response.data.name;
    bio.innerHTML = response.data.bio;
    loc.innerHTML = response.data.location;
    followers.innerHTML = response.data.followers;
    following.innerHTML = response.data.following;
    repos.innerHTML = response.data.public_repos;
    company.innerHTML = response.data.company;
    twitter.innerHTML = response.data.twitter_username;
    page.innerHTML = response.data.blog;
    avatar.src = response.data.avatar_url;
    nosearch.innerHTML= "";
  } 
  catch (error) {
    // avacont.innerHTML= "";
    nosearch.innerHTML= "";
    username.innerHTML = "";
    bio.innerHTML ="";
    loc.innerHTML = "";
    followers.innerHTML = "";
    following.innerHTML ="";
    repos.innerHTML = "";
    company.innerHTML = "";
    twitter.innerHTML = "";
    page.innerHTML = "";
    avatar.src = "";

    console.error(error);
  }
}
