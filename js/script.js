// javascript starts here
//Variables
const searchbar = document.querySelector(".searchbar-container");
const profilecontainer = document.querySelector(".profile-container");
const root = document.documentElement.style;
const get = (param) => document.getElementById(`${param}`);

//API
const url = "https://api.github.com/users/";
const noresults = get("no-results");
const btnmode = get("btn-search");
const darkmode = get("dark-mode");
const modeicon = get("mode-icon");
const btnsubmit = get("submit");
const input = get("searchbar");
const avatar = get("avatar");
const userName = get("name");
const user = get("user");
const date = get("date");
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const bio = get("bio");
const repos = get("repos");
const followers = get("followers");
const following = get("following");
const user_location = get("location");
const page = get("page");
const twitter = get("twitter");
const company = get("company");




// TODO: select all the elements on which we have to add listener

// TODO: add dark mode toggler code

// TODO: add api and key in js file and comment it
