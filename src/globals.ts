import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  public myname: string = 'Sahil Malik';
  public mytag: string = "Getting Things Done!";
  public mylinks: Array<{name: string, link: string}> =
                  [
                    {name:"Home",     link:"#"},
                    {name:"Github",   link:"https://github.com/msahil432"},
                    {name:"LinkedIn", link:"https://linkedin.com/in/msahil432"},
                    {name:"Twitter",  link:"https://twitter.com/msahil432"},
                    {name:"Download Resume",  link:"https://docs.google.com/document/d/113MXj2Hr4lWbFgM0MxR1oPWEg_jPWYu8nqU37IhO2T4/edit?usp=sharing"}
                  ];
  public myExp : Array<{company: string, time: string, details: string}> = 
                  [
                    {
                      company: "Software Intern, MyMovieRack.com", time: "July 2017 - 6 Weeks",
                      details:"Worked on two things, First comprised of a Java Servlet built using Jetty and finally deployed on AWS Instance. Second was a chrome Extension employing Bootstrap, Jquery but it was not published."
                    }
                  ];
  public myEdu : Array<{institute: string, degree: string, time: string, details: string}> = 
                  [
                    {
                      institute: "Maharaja Agrasen Institute of Technology, Delhi", degree: "B. Tech - CSE ", time : "2016-19 - Lateral Entry",
                      details: "Affialted to Guru Gobind Singh Indraprastha University, Delhi. 74% aggregate."
                    },
                    {
                      institute: "Guru Nanak Dev Institute of Technology, Delhi", degree: "Polytechnic Diploma - Computer Engg.", time : "2013-16",
                      details: "Passed with Merit (80%), A Delhi Union Territory government owned college, affiliated to Board of Technical Education, Delhi for Polytechnic Diploma."
                    },
                    {
                      institute: "T.N. Public School, Krishan Vihar, Delhi", degree: "10th Class", time : "2013",
                      details: "Scored 9.8 CGPA, a private school affiliated to Central Board of Secondary Education, India."
                    }
                  ];
  
  public myQua : Array<{name: string, details: string}> = 
                  [
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

  public myMem : Array<{name: string, time: string}> =
                  [
                    {name: "Google Play Developer", time: ""},
                    {name: "Beta Tester of many things: Windows Insider, Google Play Apps, etc.", time: ""}
                  ];

  public myPro : Array<{name: string, slogan: string, time: string, details: string, tech: Array<string>}> = 
                  [
                    {
                      name:"Click-Away : Android Developer", slogan:"Now, Your safekeepers are just a click away", time: "Feb 2017", 
                      details:"Built with one other friend within 24 hours, during Hackathon event of Delhi Technical University, HackDTU.",
                      tech :[""]
                    },
                    {
                      name:"", slogan:"", time: "",
                      details:"", 
                      tech :[""]
                    },
                    {
                      name:"", slogan:"", time: "",
                      details:"", 
                      tech :[""]
                    },
                    {
                      name:"", slogan:"", time: "", 
                      details:"",
                      tech :[""]
                    },
                    {
                      name:"", slogan:"", time: "", 
                      details:"",
                      tech :[""]
                    },
                    {
                      name:"", slogan:"", time: "", 
                      details:"",
                      tech :[""]
                    },
                    {
                      name:"", slogan:"", time: "", 
                      details:"",
                      tech :[""]
                    }
                  ];
}