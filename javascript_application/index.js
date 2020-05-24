var body=document.getElementById("root"); //parent

// create elements
//var h1=document.createElement("h1"); //child
//h1.textContent="Resume";
// h1 is child of body tag
//body.appendChild(h1);

// create section with main calss
var main=document.createElement("section"); //child
main.classList.add("main");
body.appendChild(main);

// creating leftside article
{/* <article class="leftSide">  // its a child of main */}
var leftSide=document.createElement("article");
leftSide.classList.add("leftSide");
main.appendChild(leftSide);

{/* <section class="image"> // child of leftSide article */}
var image=document.createElement("section");
image.classList.add("image");
leftSide.appendChild(image);

{/* <img src="images/profile.jpg" alt="rajesh profile"> */}
var img=document.createElement("img");
img.src="Sambasivarao.jpg";
img.alt="msr profile";
image.appendChild(img);

// add hr to the child of leftside
leftSide.appendChild(document.createElement("hr"));

{/* <section class="details"> -->
                <h2>Rajesh</h2> // child of details
                <h4>8998734533</h4> // child of details
                <h4>rajesh@gmail.com</h4> // child of details
            </section>
</section> */}

var details=document.createElement("section");
details.classList.add("details");
leftSide.appendChild(details);

// careting h2 tag
var name1=document.createElement("h2");
name1.textContent="Sambasivarao Marrapu";
details.appendChild(name1);
// mobile number
var mobile=document.createElement("h4");
mobile.textContent="9848209419";
details.appendChild(mobile);
// email
var email=document.createElement("h4");
email.textContent="sambamarrapu@gmail.com";
details.appendChild(email);

var address=document.createElement("section");
address.classList.add("address");
leftSide.appendChild(address);

// father name
var fname=document.createElement("p");
fname.textContent="S/o Simhachalam";
address.appendChild(fname);

// village
var village=document.createElement("p");
village.textContent="Appanaveedu";
address.appendChild(village);
// mandal
var mandal=document.createElement("p");
mandal.textContent="Pedapadu";
address.appendChild(mandal);
// dist
var dist=document.createElement("p");
dist.textContent="Krishna- 521105";
address.appendChild(dist);

/* right side */
var rightSide=document.createElement("article");
rightSide.classList.add("rightSide");
main.appendChild(rightSide);

var cobj=document.createElement("section");
cobj.classList.add("cobj");
rightSide.appendChild(cobj);

// father name
var chead=document.createElement("h2");
chead.textContent="Career Objective :";
cobj.appendChild(chead);


var ctext=document.createElement("p");
ctext.textContent="To get myself exposed to the competitive and challenging work environment in the core sector and enhance my existing knowledge and skills to groom myself as the complete professional and firm.";
cobj.appendChild(ctext);



var exp=document.createElement("section");
exp.classList.add("exp");
rightSide.appendChild(exp);


var exphead=document.createElement("h2");
exphead.textContent="Experience :";
exp.appendChild(exphead);

var ctext1=document.createElement("p");
ctext1.textContent="* WEST INVENTA INFOTECH LTD, Eluru (June 1999 -  Nov 2004)";
exp.appendChild(ctext1);

var ctext2=document.createElement("p");
ctext2.textContent="* SBS TECHNOLOGIES, Eluru (Jan 2005 – sept 2007)";
exp.appendChild(ctext2);

var ctext3=document.createElement("p");
ctext3.textContent="* Guest faculty for c++, OOPS through Java and Advanced Java in AKRG Nallajerla, W.G.Dt (Oct 2007 – Aug 2008)";
exp.appendChild(ctext3);

var ctext4=document.createElement("p");
ctext4.textContent="* Guest faculty for DBMS in Global Institute of Management and Technology , Bommuluru, Krishna Dt. (Sept 2008 – Mar 2009)";
exp.appendChild(ctext4);

var ctext5=document.createElement("p");
ctext5.textContent="* Assistant Professor,  VESTAL INSTITUTIONS, ELURU (Apr 2009 – Aug 2010)";
exp.appendChild(ctext5);

var ctext6=document.createElement("p");
ctext6.textContent="* Currently working as a  Assistant Professor in Usha Rama College of Engg & Tech from Sept 2010 to till date";
exp.appendChild(ctext6);


var edu=document.createElement("section");
edu.classList.add("edu");
rightSide.appendChild(edu);


var eduhead=document.createElement("h2");
eduhead.textContent="Education Qualification :";
edu.appendChild(eduhead);


var edutext1=document.createElement("p");
edutext1.textContent="* Diploma in Metallurgical Engineering from State Board of Technical Education, Hyderabad in 1990";
edu.appendChild(edutext1);

var edutext2=document.createElement("p");
edutext2.textContent="* Associate Member Of Indian Institute of Metals (AMIIM), Calcutta(Equivalent to BE (Mechanical), Recognized by Andhra University) in 1994";
edu.appendChild(edutext2);

var edutext3=document.createElement("p");
edutext3.textContent="* M.Tech (Computer Science and Engineering) from Acharya Nagarjuna University, Guntur  in 2010";
edu.appendChild(edutext3);

var tech=document.createElement("section");
tech.classList.add("tech");
rightSide.appendChild(tech);


var techhead=document.createElement("h2");
techhead.textContent="Technical Skills :";
tech.appendChild(techhead);

var techtext1=document.createElement("p");
techtext1.textContent="* C Language,Data Structures using C,C++,JAVA,C#";
tech.appendChild(techtext1);

var techtext2=document.createElement("p");
techtext2.textContent="* Core Java,J2EE,J2ME,Web Technologies (HTML,CSS,JAVA SCRIPT,VBSCRIPT,SERVLETS,JDBC,JSP,STRUTS,PHP),ORACLE,MYSQL";
tech.appendChild(techtext2);

var techtext3=document.createElement("p");
techtext3.textContent="* OPERATING SYSTEM, COMPUTER NETWORKS, DBMS , MIDDLEWARE TECHNOLOGIES";
tech.appendChild(techtext3);

var ach=document.createElement("section");
ach.classList.add("tech");
rightSide.appendChild(ach);


var achhead=document.createElement("h2");
achhead.textContent="Achievements :";
ach.appendChild(achhead);

var achtext1=document.createElement("p");
achtext1.textContent="* Got Best Teacher Award Two times ";
ach.appendChild(achtext1);

var achtext2=document.createElement("p");
achtext2.textContent="* 100% Pass Percantage in JNTUK University Examination in OSS subject ";
ach.appendChild(achtext2);

