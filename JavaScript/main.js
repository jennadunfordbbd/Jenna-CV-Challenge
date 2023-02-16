console.log("Hello");

const homePage =
  "<article class='center'><p>My name is Jenna Dunford. I am a software developer and digital artist. I enjoy video games, programming and art.</p><p>Welcome to my CV!</p></article><div class='profilePicHolder'><imgclass='generalImage'  onclick='displayEachPage(4)' alt='example artwork 1'src='../Images/Untitled-Artwork.png'/><img class='generalImage'  onclick='displayEachPage(4)' alt='example artwork 2' src='../Images/Untitled-Artwork 1.png'/><img class='generalImage'  onclick='displayEachPage(4)' alt='example artwork 3' src='../Images/Untitled-Artwork 2.png'/><img class='generalImage'  onclick='displayEachPage(4)' alt='example artwork 4' src='../Images/Untitled-Artwork 4.png'/><img class='profileImage' src='../Images/profilePic.jpg' alt='A photo of myself'/><img class='generalImage' alt='example artwork 5'  onclick='displayEachPage(4)' src='../Images/Untitled-Artwork 5.png'/><img class='generalImage' alt='example artwork 6'  onclick='displayEachPage(4)' src='../Images/Untitled-Artwork 6.png'/><img class='generalImage'  onclick='displayEachPage(4)' src='../Images/Hilda-And-Woff-.png' alt='General image 7'/></div>";
const aboutPage =
  "<div class='aboutDivider'><section><article class='aboutArticle'><h3>A Little Bit About Me</h3><p>I was born in raised in beautiful, sunny, humid KZN, Durban. From a young age I loved being creative in everything I did, I had a keen interest in artwork, writing, music and video games.</p><p> Attending Westville Girls High School, I discovered my love for programming and software development, and it became something that I was eager to pursue.</p><p>I believe that my love for creativity, literature and art is firmly intertwined with my interest in programming. I can express myself artistically through both - especially in situations of problem solving when creative thinking is key.</p><p>One of my more recent interests in animation - where every frame needs to be perfectly constructed in order to show a complete movement or scene. There is so much complexity and thought given to things like physics and the mathematics of perspective and angles when considering an animation.</p><p>I think back to the era of the Renaissance, where the most celebrated engineers and mathematicians were also brilliant painters and sculptures. As a society today we prefer to separate STEM fields from more artistic ones. I think that this is a sad mistake, and that both are more alike than people realize. Their similarities should be embraced in everything we do.</p><p>I am looking forward to a career in software development, where I can also practice and continue to learn about the creative subjects I love, in the hopes that it will make me a better programmer and engineer.</p></article></section><section class='aboutShow'><aside> <img class='aboutImage' alt='Myself standing by a lighthouse on a beach in Durban.' src='../Images/beach.jpg'/></aside></section></div>";
const experiencePage =
  "<section><article><h3>My Experience</h3><ol><li>High School Years</li><ul><li>I worked as a library monitor and was on the Learner Management Team in my matric year where myself and other nominated students helped to organize events and fundraising projects within the school.</li><li>During my grade 11 year I worked as a table runner in a restaurant that was called Chez Nous, which has unfortunately since been closed.</li><li>For a week I helped to manage a second hand bookstore.</li></ul><li>University Years</li><ul><li> I've done tutoring for Information Technology for the company TeachMe2. My responsibilities included preparing lessons and aiding my students in their difficulties.</li><li>I worked on the POC of the MVP for the All4SA project at BBD</li></ul></ol></article></section>";
const softwareProjectsPage =
  "<h3 class='center'>Software Projects</h3><section class='projectsDivider'><section class='projectSection'><h4>Little Witch Character Creator</h4><article><p>A very small experiment in character customization in Unity.</p><p>Created using C# and Unity.</p><a target='_blank' href='https://pancakes2000.itch.io/little-witch-character-creator'>Check out this project</a></article></section><section class='projectSection'><h4>Game Jam Game: Aurora</h4><article><p>A game made by myself and my partner during The Campus Game Jame 2022.</p><p>Created using C# and Unity.</p><p><a target='_blank' href='https://spicyramenproductions.itch.io/aurora-by-spicy-ramen'>Check out this project</a></p></article></section><section class='projectSection'><h4>Dynamic Game of Snakes and Ladders</h4><article><p>A game of snakes and ladders that can play itself.</p><p>Languages used: C++</p><p><a target='_blank' href='https://github.com/jennadunford/ELEN2020-SnakesAndLadders'>Check out this project</a></p></article></section><section class='projectSection'><h4>Vehicle Energy Usage Comparisons</h4><article><p>An app that compares energy consuption of fuel vs electricity.</p><p>Created with JavaScript, HTML, CSS, C++, WebAssembly</p><p><a target='_blank' href='https://pancakes2000.itch.io/little-witch-character-creator'>Check out this project</a></p></article></section></section>";
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
