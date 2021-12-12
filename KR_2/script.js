var op; //выбранный оператор
function func() {
  var result = '';
  switch (op) {
    case '1':
      result += '1';
      document.getElementById("num1").innerHTML = result;
      break;
    case '2':
      result += '2';
      document.getElementById("num1").innerHTML = result;
      break;
    case '3':
      result += '3';
      document.getElementById("num1").innerHTML = result;
      break;
    case '4':
      result += '4';
      document.getElementById("num1").innerHTML = result;
      break;
    case '5':
      result += '5';
      document.getElementById("num1").innerHTML = result;
      break;
    case '6':
      result += '6';
      document.getElementById("num1").innerHTML = result;
      break;
    case '7':
      result += '7';
      document.getElementById("num1").innerHTML = result;
      break;
    case '8':
      result += '8';
      document.getElementById("num1").innerHTML = result;
      break;
    case '9':
      result += '9';
      document.getElementById("num1").innerHTML = result;
      break;
    case '0':
      result += '0';
      document.getElementById("num1").innerHTML = result;
      break;
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2) {
        result = num1 / num2;
      } else {
        result = 'бесконечность';
      }
      break;
    default:
      result = 'выберите операцию';
  }

  document.getElementById("result").innerHTML = result;
}