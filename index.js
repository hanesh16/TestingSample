let head = document.querySelector("header");
let nav = document.createElement("nav");
nav.className = "nav-bar";

//Creating Unordered List
let list = document.createElement("ul");
list.className = "nav-list";

//Creating list elements
let item1 = document.createElement("li");
item1.className = "item";
let item2 = document.createElement("li");
item2.className = "item";
let item3 = document.createElement("li");
item3.className = "item";
let item4 = document.createElement("li");
item4.className = "item";
let item5 = document.createElement("li");
item5.className = "item";

//Creating links for different sections
let home = document.createElement("a");
home.className = "link";
home.setAttribute("href", "#");
let about = document.createElement("a");
about.className = "link";
about.setAttribute("href", "#");
let prevwork = document.createElement("a");
prevwork.className = "link";
prevwork.setAttribute("href", "#");
let project = document.createElement("a");
project.className = "link";
project.setAttribute("href", "#");
let contact = document.createElement("a");
contact.className = "link";
contact.setAttribute("href", "#");

//creatings icons for each section
let img1 = document.createElement("img");
img1.className = "image1 cimage";
img1.setAttribute("src", "./icons/home.png");
let img2 = document.createElement("img");
img2.className = "image2 cimage";
img2.setAttribute("src", "./icons/about.png");
let img3 = document.createElement("img");
img3.className = "image3 cimage";
img3.setAttribute("src", "./icons/laptop.png");
let img4 = document.createElement("img");
img4.className = "image4 cimage";
img4.setAttribute("src", "./icons/project.png");
let img5 = document.createElement("img");
img5.className = "image5 cimage";
img5.setAttribute("src", "./icons/contact.png");

//Creating text for each section
let span1 = document.createElement("span");
span1.className = "text1 ctext";
let span2 = document.createElement("span");
span2.className = "text2 ctext";
let span3 = document.createElement("span");
span3.className = "text3 ctext";
let span4 = document.createElement("span");
span4.className = "text4 ctext";
let span5 = document.createElement("span");
span5.className = "text5 ctext";

span1.innerText = "Home";
span2.innerText = "About";
span3.innerText = "PreviousWork";
span4.innerText = "Projects";
span5.innerText = "Contact";

//Inserting personal Picutre
let image = document.createElement("img");
image.src = "./images/honey.jpg";
image.alt = "Picture of Hanesh Koganti";
image.className = "myimage";

let git = document.createElement("img");
git.className = "git icons";
git.src = "./icons/git.png";
let mail = document.createElement("img");
mail.className = "mail icons";
mail.src = "./icons/mail.png";
let linkdin = document.createElement("img");
linkdin.className = "linkdin icons";
linkdin.src = "./icons/Linkedin.png";

//Appending icons in Anchor tag
home.appendChild(img1);
about.appendChild(img2);
prevwork.appendChild(img3);
project.appendChild(img4);
contact.appendChild(img5);

// Appending text in Anchor tag
home.appendChild(span1);
about.appendChild(span2);
prevwork.appendChild(span3);
project.appendChild(span4);
contact.appendChild(span5);

//Appendig Anchor tag in list
item1.appendChild(home);
item2.appendChild(about);
item3.appendChild(prevwork);
item4.appendChild(project);
item5.appendChild(contact);

//Appending elements in Unordered list
list.appendChild(item1);
list.appendChild(item2);
list.appendChild(item3);
list.appendChild(item4);
list.appendChild(item5);

nav.appendChild(image);
nav.appendChild(list);
nav.append(git);
nav.append(mail);
nav.append(linkdin);
head.appendChild(nav);
