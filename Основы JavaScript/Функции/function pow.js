function pow(a, b) {
    let result = a;
  
    for (let i = 1; i < b; i++) {
      result *= a;
    }
    return result;
  }
  
  let a = prompt("x?", '');
  let b = prompt("n?", '');
  
  if (b >= 1 && b % 1 == 0) {
    alert( pow(a, b) );
  } else {
    alert(`Степень ${b} не поддерживается, используйте натуральное число`);
  }