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
}