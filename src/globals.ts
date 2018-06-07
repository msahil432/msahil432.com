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
                    {name:"Twitter",  link:"https://twitter.com/msahil432"}
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
  
}