
// Задание 6.2
/* ("Пожалуйста, введите любое число, но не больше 1 000:")*/

function getNam (nam) { 
    if (nam <= 1) {
        return (nam + " Не является простым числом")
    } else if (nam == 2) {
        return (nam + " Является простым числом")
    }  else if (nam > 1000) {
        return "Ой, данные неверны"
    } else {
        for (let i = 2; i<nam; i++)
        if (nam%i == 0) {
            return (nam + " Не является простым числом")
        } else {
            return `${nam} Является простым числом`
        }
    }
}

console.log (getNam (-19))

 