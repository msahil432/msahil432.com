import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  public myname: string = 'Sahil Malik';
  public mytag: string = "Getting Things Done!";
  public mylinks: Array<{name: string, link: string}> =
                  [
                    {name:"Home",     link:"#"},
                    {name:"Github",   link:"github.com/msahil432"},
                    {name:"LinkedIn", link:"linkedin.com/in/msahil432"},
                    {name:"Twitter",  link:"twitter.com/msahil432"}
                  ];
}