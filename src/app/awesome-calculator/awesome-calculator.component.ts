import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-awesome-calculator',
  templateUrl: './awesome-calculator.component.html',
  styleUrls: ['./awesome-calculator.component.css']
})
export class AwesomeCalculatorComponent implements OnInit {

  firstNumber : number = 0;
  secondNumber :number = 0;
  result: number = 0;
  operator = "+";


  constructor() {
  }

  ngOnInit(): void {
  }

  add() {
    this.result = this.firstNumber + this.secondNumber;
  }

  sub() {
    this.result = this.firstNumber - this.secondNumber;

  }

  mul() {
    this.result = this.firstNumber * this.secondNumber;
  }

  div(){
    this.result = this.firstNumber/this.secondNumber;
  }

  onFirstChange(value){
    this.firstNumber = value;
  }
  onSecondChange(value){
    this.secondNumber = value;
  }
  onOperatorChange(value){
    this.operator = value;
  }
  calculate(){
    switch (this.operator){
      case "+":
        this.add();
        break;
      case "-":
        this.sub();
        break;
      case "*":
        this.mul();
        break;
      case "/":
        this.div();

    }

  }
}
