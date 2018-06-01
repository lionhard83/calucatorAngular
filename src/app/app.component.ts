import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'app';
  public subtitle: string = 'ciao sono qui';
  private param1: number;
  private param2: number;
  public param: string = "param";
  public result: number = 0;
  public operator: string;

  reset(){
    this.param = "";
    this.param1 = null;
    this.param2 = null;
    this.operator = null;
  }

  setOperator(operator: string) {
    console.log(this.param);
    console.log(Number(this.param));
    console.log(isNaN(Number(this.param)));
    if (isNaN(Number(this.param))) return;
    this.param1 = Number(this.param);
    this.param = "";
    this.operator = operator;
    console.log(this.param);
    console.log(this.param1);
  }

  calculate():void {

      console.log(this.param1);
      console.log(this.param2);
      if (isNaN(Number(this.param))) return;
      this.param2 = Number(this.param);
      this.param = "";
      let x:number = Number(this.param1);
      let y:number = Number(this.param2);
      if (this.operator === '*') {
        this.result=x*y 
      } else if (this.operator === '/') {
        this.result = x/y;
      } else if (this.operator === '+') {
        this.result = x+y;
      } else {
        this.result = x-y;
      }
      this.reset();
  }

}
