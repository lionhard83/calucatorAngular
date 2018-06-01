import { Circle } from '../Circle';
import { Shape } from '../Shape';
import { Triangle } from '../Triangle';
import { Parallelogram, Square } from '../Parallelogram';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.css']
})
export class ShapeComponent implements OnInit {
  public currentShapeValue: string  = "square";
  public param1: number = 0;
  public param2: number = 0;
  public currentShape: Shape;

  constructor() { }

  ngOnInit() {
    console.log("ciao");
    let circle: Circle = new Circle(3);
    console.log("circle", circle.getArea());
    console.log("circle", circle.getPerimeter());
    this.currentShape = new Square(this.param1);
  }

  generate(){
    if (this.currentShapeValue === 'triangle') {
        this.currentShape = new Triangle(this.param1, this.param2);
    } else if (this.currentShapeValue === 'square'){
      this.currentShape = new Square(this.param1);
    } else if (this.currentShapeValue === 'circle'){
      this.currentShape = new Circle(this.param1);
    } else {
      this.currentShape = new Parallelogram(this.param1, this.param2); 
    }
  }

  setShape(newShape: string):void{
    this.currentShapeValue = newShape;
    console.log("this.currentShape:", this.currentShapeValue);
  }

}
