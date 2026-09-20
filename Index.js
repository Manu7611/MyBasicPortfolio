const NavHome = document.getElementById("NavHome");
const NavAbout = document.getElementById("NavAbout");
const Project = document.getElementById("GroupProject");
const Home = document.getElementById("GroupHome");
const About = document.getElementById("GroupAbout");
let Variable = true
Project.style.display = "none";
About.style.display = "none";
Home.style.display = "block";
function Homes() {
    Project.style.display = "none";
    About.style.display = "none";
    Home.style.display = "block";
}
function Projects() {
    Project.style.display = "block";
    About.style.display = "none";
    Home.style.display = "none";
}
function Abouts() {
    Project.style.display = "none";
    About.style.display = "block";
    Home.style.display = "none";
}
