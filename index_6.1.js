
// Задание 6.1
let arr = [2, 21, {}, NaN, -82, 0, "  ", null, "##!", -2.993e8, false, 4.659];
eveNum = 0;
unevenNam = 0;
notNam = 0;
elNol = 0;

function evenNumber() {
for (let i = 0; i<arr.length; i++) {
    console.log (typeof arr[i])
   if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
      if (arr[i]%2 == 0) {
        eveNum++;
      }
      else if (arr[i]%2 != 0) {
        unevenNam++;
      }
    } 
    else if (arr[i] == 0) {
      elNol++;
    }
      else {
        notNam++;
    }
}


    console.log ("В массиве четных чисел: " + eveNum);
    console.log ("В массиве нечетных чисел: " + unevenNam);
    console.log ("В массиве нулевых элементов: " + elNol);
    console.log ("Не являющихся числом в массиве: " + notNam);

  }
  evenNumber();