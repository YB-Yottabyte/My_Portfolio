// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Sai Rithwik",
  middleName: "",
  lastName: "Kukunuri",
  message: "Academic excellence is not just a goal but a journey of continuous learning, growth, and innovation.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/YB-Yottabyte",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/sai-rithwik-kukunuri-b5084527b",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/SaiRithwik2028",
      
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("./Rithwik_circle.png"),
  imageSize: 375,
  message:
    "I'm Sai Rithwik, a high school senior with a passion for coding. I've taught myself programming and have a strong foundation in various languages. Looking ahead, I'm eager to pursue a degree in Computer Science to further expand my skills and explore new opportunities in the tech industry.",
  resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};


const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "YB-Yottabyte", //i.e."johnDoe12Gh"
  reposLength: 2,
  specificRepos: ["repository-3"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/Rithwik_circle.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/Rithwik_circle.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"375px",
    height:"375px"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "HTML/CSS", value: 90 },
    { name: "CSS", value: 75 },
    { name: "JavaScript", value: 85 },
    { name: "React", value: 65 },
    { name: "MongoDB", value: 65 },
    { name: "SQL", value: 90 },
  ],
  softSkills: [
    { name: "Java", value: 80 },
    { name: "Python", value: 90 },
    { name: "C#", value: 75 },
    { name: "R", value: 85 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch With Me!",
  message:
    "© 2024 Sai Rithwik Kukunuri",
};

const experiences = {
  show: false,
  heading: "Experiences",
}

// Blog SECTION
// const blog = {
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
