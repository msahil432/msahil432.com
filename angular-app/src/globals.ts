import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  public notified: boolean = false;
  public myname: string = 'Sahil Malik';
  public mytag: string = "Getting Things Done!";
  public myMoto: string = "Everything can be improved. Similarly, Every Code can be Optimised.";
  public myQualities: Array<string> = [
    "Hard Working", "Can Work under Pressure", "Tech Savy", "Honest", "Friendly and Team Member", "Loves Astrophysics"
  ];
  public mySocio: Array<{name: string, link:string}> = [
                    {name:"LinkedIn", link:"https://linkedin.com/in/msahil432"},
                    {name:"Stack Overflow", link:"https://stackoverflow.com/users/5634251/sahil-malik"},
                    {name:"Github", link:"https://github.com/msahil432"},
                    {name:"Gitlab", link:"https://gitlab.com/msahil432"},
                    {name:"Twitter", link:"https://twitter.com/msahil432"}
                  ];
  public mylinks: Array<{name: string, link: string}> =[
                    {name:"Back to Top", link:"#"},
                    {name:"Download Resume", link:"https://docs.google.com/document/d/113MXj2Hr4lWbFgM0MxR1oPWEg_jPWYu8nqU37IhO2T4/edit?usp=sharing"},
                    {name:"Download CV", link:"https://docs.google.com/document/d/1L_szbFSCBKEmo5lwnbod18iauyczcnRUFhuXXp4h19o/edit?usp=sharing"},
                  ];
  public myExp : Array<{company: string, time: string, details: string}> = 
                  [
                    {
                      company: "Android Intern, PenPencil", time: "July 2018 - 8 Weeks",
                      details:"Worked as Android Application Developer for In-Office internship of 8 Weeks, with a stipend of Rs. 5000. Worked on 3 Android Projects."
                    },
                    {
                      company: "Software Intern, MyMovieRack.com", time: "July 2017 - 6 Weeks",
                      details:"Worked on two things, First comprised of a Java Servlet built using Jetty and finally deployed on AWS Instance. Second was a chrome Extension employing Bootstrap, Jquery but it was not published."
                    }
                  ];
  public myEdu : Array<{institute: string, degree: string, time: string, details: string}> = 
                  [
                    {
                      institute: "Maharaja Agrasen Institute of Technology, Delhi", degree: "Bachelor of Technology - Computer Science & Engineering ", time : "2016 - 2019",
                      details: "Affialted to Guru Gobind Singh Indraprastha University, Delhi. 74% aggregate."
                    },
                    {
                      institute: "Guru Nanak Dev Institute of Technology, Delhi", degree: "Polytechnic Diploma - Computer Engineering.", time : "2013 - 2016",
                      details: "Passed with Merit (80%), Delhi National Capital Territory, Delhi Government owned college, affiliated to Board of Technical Education, Delhi for Polytechnic Diploma and Degrees."
                    },
                    {
                      institute: "T.N. Public School, Krishan Vihar, Delhi", degree: "Secondary Education, Matriculation (10th Class)", time : "Completed in 2013",
                      details: "Scored 9.8 CGPA, a private school affiliated to Central Board of Secondary Education, India."
                    }
                  ];
  
  public myQua : Array<{name: string, details: string}> = 
                  [
                    {
                      name: "Android Kotlin Developer, Udemy",
                      details: "18 Hours of course by Hussein Al. Rubaye, in June 2018"
                    },
                    {
                      name: "Android O & Java - Mobile App Development | Beginning to End, Udemy",
                      details: "Completed 21 Hours of course by Philipp Muellauer, in Aug 2018"
                    },
                    {
                      name: "Core Java Certification, UC3Mx IT.1 : Edx.org",
                      details: "Scored 71% in June 2017."
                    },
                    {
                      name: "Industrial Training : MileStone Achievers Pvt. Ltd.",
                      details: "Industrial Training in Advance Java in Jan - Feb 2016, as for Diploma requirements."
                    }
                  ];

  public myAwa : Array<{name: string, details: string}> = 
                  [
                    {
                      name: "Associate Member : Techsurge & Mridang 2018",
                      details: "Techsurge & Mridang is the annual fest of MAIT. My role was event head in two events and event coordinator in three events."
                    },
                    {
                      name: "Runner Up : VIPS Hackathon 2017",
                      details: "Team of 3, presented Android Application and finished second in the Hackathon."
                    }
                  ];

  public myExc : Array<{name: string, details: string}> = 
                  [
                    {
                      name: "Event Head, HackMAIT : Techsurge & Mridang 2018",
                      details: "Prizes worth total 25K, Sponsored by Coding Blocks. 7 Teams participated in 6 hour Hackathon."
                    },
                    {
                      name: "Event Head, House of Quizzes: Techsurge & Mridang 2018",
                      details: "Non Technical event based for TV shows."
                    },
                    {
                      name: "Event Coordinator of 3 events : Techsurge & Mridang 2018",
                      details: "Events were: Nostalgia Reloaded, Blur Gaming, LogoQuiz"
                    },
                    {
                      name: "Event Coordinator, Coding Hell : GNDIT Fest 2016",
                      details: "Multiple Choice Questionnaire consisting of Logical, Reasoning and Coding questions."
                    }
                  ];

  public myMem : Array<{name: string, time: string}> =[
                    {name: "Google Play Developer", time: ""},
                    {name: "Beta Testing Groups", time: ""}
                  ];

  public myPro : Array<{name: string, role: string, slogan: string, time: string, details: string, link: String, tech: Array<string>}> = [
                    {
                      name:"PenPencil - Internship", role: "Android Developer", slogan:"In Office Internship with stipend",
                      time: "Aug 2018 - Sept 2018", link: "https://drive.google.com/open?id=1iGH9i8jvS92_jgNQITqTXjQvhDHsA1bu",
                      details:"Worked on two Applications: ABI Champions And an E-Commerce Application",
                      tech :["Java", "Android", "Google Location API", "SQLite", "XML", "UX", "Kotlin", "Android Jetpack"]
                    },
                    {
                      name:"Click-Away", role: "Android Developer", slogan:"Now, Your safekeepers are just a click away",
                      time: "Feb 2017", link: "https://play.google.com/store/apps/details?id=msahil432.click_away",
                      details:"Built with one other friend within 24 hours, during Hackathon event of Delhi Technical University, HackDTU.",
                      tech :["Java", "Android", "Google Location API", "SQLite","NodeJS", "MongoDB", "Javascript", "Heroku", "XML", "UX"]
                    },
                    {
                      name:"MyMovieRack.com", role: "Intern", slogan:"Paid Internship", 
                      time: "July 2017 - August 2017", link : "https://drive.google.com/open?id=0B6HsKe5HQiFyRkpHVjNheG12NEU",
                      details:"Worked on two things, First comprised of a Java Servlet built using Jetty and finally deployed on AWS Instance. Second was a chrome Extension employing Bootstrap, Jquery but it was not published.",
                      tech :["Java", "AWS", "Git", "Jetty", "Tomcat", "Javascript", "JQuery", "YouTube API", "IntelliJ IDEA"]
                    },
                    {
                      name:"ML.Player", role:"Software Engineer", slogan:"The Player which Adapts", 
                      time: "Jan 2016 - March 2017",  link : "#",
                      details:"A Desktop Application written in Java for Music, with Welcome, Reset and Playlist (using XML) capabilities. Developed as a portable application so that all OS are supported. It was submitted as Final Project in Polytechnic Diploma at GNDIT.", 
                      tech :["Java", "Swing", "JDOM", "XML", "UX"]
                    },
                    {
                      name:"CricChat Bot", role : "Software Developer", slogan:"Fastest Scores", 
                      time: "June 2016",  link : "https://m.me/fastestscores",
                      details:"A few Facebook Messenger Bots were created to learn then newly launched platform of facebook. Created using Node.JS with MongoDB and Heroku Hosting.", 
                      tech :["NodeJS", "MongoDB","Heroku"]
                    },
                    {
                      name:"QuizApp", role : "Backend Developer", slogan:"", 
                      time: "Jan 2017",  link : "#",
                      details:"A Web Application created with Meteor.JS for Coding Blocks’ Hackathon at IIT, Delhi in 2016. As the name suggests, it was created for playing quizzes. There were total 3 members in the team, from which I did the backend part.", 
                      tech :["MeteorJS", "MongoDB", "Javascript"]
                    },
                    {
                      name:"Android Messages Organizer", role:"Android Developer", slogan:"SMS made easy",
                      time: "Currently Working",  link : "#",
                      details:"Will be used to categorize SMS into various categories based on content using Machine Learning at Server, along with a Web Interface for accessing SMS online. There are other features too like timed SMS, OTP Copy, etc. Being created with one friend who manages Backend in Node.JS with MongoDB and Heroku Hosting.", 
                      tech :["Android", "Java", "SQLite", "XML", "NodeJS", "HTML", "RestAPI", "ExpressJS", "MongoDB", "Heroku"]
                    },
                    {
                      name:"msahil432.com", role: "Web Engineer", slogan:"Online Profile",
                      time: "Currrently Working",  link : "http://www.msahil432.com",
                      details:"Building as Online CV using Angular along with Express for RestAPI.", 
                      tech :["Angular", "NodeJS", "ExpressJS", "Javascript", "SEO", "HTML", "CSS", "Material Design", "AWS", "Web Hosting"]
                    }
                  ];
}