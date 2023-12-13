function Calculator() {
    this.read = function(value1, value2) {
      this.value1 = value1
      this.value2 = value2
    }
  
    this.sum = function() {
      return this.value1 + this.value2
    }
  
    this.mul = function() {
      return this.value1 * this.value2
    }
  }

  let calculator = new Calculator()
calculator.read(5, 2)

console.log('Сумма: ' + calculator.sum())
console.log('Произведение: ' + calculator.mul())

// ----------------------------вариант с prompt----------------------------------------
// function Calculator() {
//     this.read = function() {
//       this.firstValue = +prompt('Введите первое значение:', 0);
//       this.secondValue = +prompt('Введите второе значение:', 0);
//     }
  
//     this.sum = function() {
//       return this.firstValue + this.secondValue;
//     }
  
//     this.mul = function() {
//       return this.firstValue * this.secondValue;
//     }
//   }

//   let calculator = new Calculator()
//   calculator.read()
  
//   console.log('Сумма: ' + calculator.sum())
//   console.log('Произведение: ' + calculator.mul())