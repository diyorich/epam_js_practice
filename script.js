// // String+boolean
// var empty = ''
// var not_empty = 'not empty'
// var bool = true
// var minus = empty + bool
// alert(empty + bool) // result is "true"
// alert(not_empty + bool) // result is "notemptytrue"



// //String+number
// var empty_string = ''
// var full_string = 'str'
// var number = 1
// alert(empty_string + number) //result is "1"
// alert(full_string + number) //result is "str1"

// //Number+boolean
// var numberchik = 2
// var bool_true = true
// var bool_false = false
// alert(numberchik + bool_true) // result is integer 3
// alert(numberchik + bool_false) // result is integer 2
// // String*boolean



// // String*number 
// var string_to_multiple = 'string'
// var num = 2
// alert(string_to_multiple * num) //result is NaN


// // Number*boolean
// let num1 = 2;
// let bool1 = true
// alert(num1 * bool1) //result is 1

// let num2 = 2;
// let bool2 = false
// alert(num2 * bool2) // result is o


// String/boolean
// let string1 = 'string'
// let boolean_2 = true
// alert(string1 / boolean_2) // result is NaN


// let string2 = 'string'
// let boolean_3 = false
// alert(string2/boolean_3) // result is NaN


// // String/number

// let string3 = 'string'
// let number3 = 4
// alert(string3 / number3)  // result is NaN

// let string4 = 'string'
// let number4 = 0
// alert(string4 /number4) // resule is NaN



// // Явное преобразование в number

// let some_string = 's'
// alert(Number(some_string)) //result is NaN

// let some_stringfree = ''
// alert(Number(some_stringfree)) //result is 0

// let some_string0 = '0'
// alert(Number(some_string0)) //result is 0

// let some_string1 = '1'
// alert(Number(some_string1)) // result is 1

// let some_bool = true
// alert(Number(some_bool)) //result is 1

// let some_bool_false = false
// alert(Number(some_bool_false)) //result is 0
 
// // Явное преобразование в string

// let some_number = 0
// alert(String(some_number)) // result is "0"

// let some_string = ''
// alert(String(some_string))

// let some_bool1 = true
// let some_bool0 = false
// alert(String(some_bool1)) //result is "true"
// alert(String(some_bool0)) //result is "false"


// // Явное преобразование в boolean
// let translate_num1 = 1
// let translate_num0 = 0
// let transalate_negnum = -1
// let transalate_num2 = 2


// let string1234 = 'aslkj'
// let string_num = '1'
// let empty_string = ''


// alert(Boolean(translate_num1)) // result is true
// alert(Boolean(translate_num0)) // result is false
// alert(Boolean(transalate_negnum)) //result is true
// alert(Boolean(transalate_num2)) //result is true

// alert(Boolean(string1234)) // result is true
// alert(Boolean(string_num)) // result is true
// alert(Boolean(empty_string)) // result is false



let car = {
    color: "black",
    power: function showPower(){
        alert('This is car power!');
    }
}

car.color = "green"

alert(car.color)

car.power()



function sum_a_p() {
    var pears = prompt('Укажите количество груш:')
    var apples = prompt('Укажите количество яблок:')
   alert(+pears + +apples) 
}

sum_a_p()



var your_name = prompt('Введите ваше имя')

function hey(name=false) {
    if (name == false){
        alert('Нет такого имени')
    }
    else{
        alert('Привет ' + name)
    }
}

hey(your_name)

//////

function argument(argument) {
    alert(typeof(argument))
}

argument(false)

/////

function is_simple(number) {
    simple = true
    for (i = 1; i < number; i++) {
        if (i == 1 || i == number){
            continue;
        }   
        else if (number % i == 0) {
            simple = false
        }
        
    }
    
    if (simple == true) {
        console.log('Простое')
    }
    else {
        console.log('Составное (Не простое)')
    }
    
}

is_simple(111)

