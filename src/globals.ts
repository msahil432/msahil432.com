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
  public myExp : Array<{company: string, position: string, details: string}> = 
                  [
                    {
                      company: "MyMovieRack.com", position: "Software Intern", 
                      details:"6 Weeks <i>Paid</i> Internship in July 2017. Worked on two things, First comprised of a Java Servlet built using Jetty and finally deployed on AWS Instance. Second was a chrome Extension employing Bootstrap, Jquery but it was not published."
                    }
                  ];
  public myEdu : Array<{institute: string, degree: string, details: string}> = 
                  [];
  
}