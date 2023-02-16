console.log("Hello");

const homePage =
  "<article class='center'><p>My name is Jenna Dunford. I am a software developer and digital artist. I enjoy video games, programming and art.</p><p>Welcome to my CV</p></article><div class='profilePicHolder'><imgclass='generalImage'  onclick='displayEachPage(4)' alt='example artwork 1'src='../Images/Untitled-Artwork.png'/><img class='generalImage'  onclick='displayEachPage(4)' alt='example artwork 2' src='../Images/Untitled-Artwork 1.png'/><img class='generalImage'  onclick='displayEachPage(4)' alt='example artwork 3' src='../Images/Untitled-Artwork 2.png'/><img class='generalImage'  onclick='displayEachPage(4)' alt='example artwork 4' src='../Images/Untitled-Artwork 4.png'/><img class='profileImage' src='../Images/profilePic.jpg' alt='A photo of myself'/><img class='generalImage' alt='example artwork 5'  onclick='displayEachPage(4)' src='../Images/Untitled-Artwork 5.png'/><img class='generalImage' alt='example artwork 6'  onclick='displayEachPage(4)' src='../Images/Untitled-Artwork 6.png'/><img class='generalImage'  onclick='displayEachPage(4)' src='../Images/Hilda-And-Woff-.png' alt='General image 7'/></div>";
const aboutPage =
  "<div class='aboutDivider'><section><article class='aboutArticle'><h3>A Little Bit About Me</h3><p>I was born in raised in beautiful, sunny, humid KZN, Durban. From a young age I loved being creative in everything I did, I had a keen interest in artwork, writing, music and video games.</p><p> Attending Westville Girls High School, I discovered my love for programming and software development, and it became something that I was eager to pursue.</p><p>I believe that my love for creativity, literature and art is firmly intertwined with my interest in programming. I can express myself artistically through both - especially in situations of problem solving when creative thinking is key.</p><p>One of my more recent interests in animation - where every frame needs to be perfectly constructed in order to show a complete movement or scene. There is so much complexity and thought given to things like physics and the mathematics of perspective and angles when considering an animation.</p><p>I think back to the era of the Renaissance, where the most celebrated engineers and mathematicians were also brilliant painters and sculptures. As a society today we prefer to separate STEM fields from more artistic ones. I think that this is a sad mistake, and that both are more alike than people realize. Their similarities should beembraced in everything we do.</p><p>I am looking forward to a career in software development, where I can also practice and continue to learn about the creative subjects I love, in the hopes that it will make me a better programmer and engineer.</p></article></section><section class='aboutShow'><aside> <img class='aboutImage' alt='Myself standing by a lighthouse on a beach in Durban.' src='../Images/beach.jpg'/></aside></section></div>";
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
