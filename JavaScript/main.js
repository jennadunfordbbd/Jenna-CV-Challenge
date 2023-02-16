console.log("Hello");

const homePage =
  "<article><p>My name is Jenna Dunford. I am a software developer and digital artist. I enjoy video games, programming and art.</p><p>Welcome to my CV</p></article><div class='profilePicHolder'><img class='profileImage' src='../Images/profilePic.jpg' alt='A photo of myself'></div>";
const aboutPage = "<article>This is the about page.</article>";
const experiencePage = "<article>This is my experience</article>";
const softwareProjectsPage =
  "<article>Here are the projects I have done and the repositories where you can find them</article>";
const artworkPage = "<article>Here is some of my art</article>";

document.getElementById("pageContent").innerHTML = homePage;

function displayEachPage(pageNumber) {
  switch (pageNumber) {
    case 0:
      document.getElementById("pageContent").innerHTML = homePage;
      break;
    case 1:
      document.getElementById("pageContent").innerHTML = aboutPage;
      break;
    case 2:
      document.getElementById("pageContent").innerHTML = experiencePage;
      break;
    case 3:
      document.getElementById("pageContent").innerHTML = softwareProjectsPage;
      break;
    case 4:
      document.getElementById("pageContent").innerHTML = artworkPage;
      break;
  }
}
