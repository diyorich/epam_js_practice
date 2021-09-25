// // // String+boolean
// // var empty = ''
// // var not_empty = 'not empty'
// // var bool = true
// // var minus = empty + bool
// // alert(empty + bool) // result is "true"
// // alert(not_empty + bool) // result is "notemptytrue"



// // //String+number
// // var empty_string = ''
// // var full_string = 'str'
// // var number = 1
// // alert(empty_string + number) //result is "1"
// // alert(full_string + number) //result is "str1"

// // //Number+boolean
// // var numberchik = 2
// // var bool_true = true
// // var bool_false = false
// // alert(numberchik + bool_true) // result is integer 3
// // alert(numberchik + bool_false) // result is integer 2
// // // String*boolean



// // // String*number 
// // var string_to_multiple = 'string'
// // var num = 2
// // alert(string_to_multiple * num) //result is NaN


// // // Number*boolean
// // let num1 = 2;
// // let bool1 = true
// // alert(num1 * bool1) //result is 1

// // let num2 = 2;
// // let bool2 = false
// // alert(num2 * bool2) // result is o


// // String/boolean
// // let string1 = 'string'
// // let boolean_2 = true
// // alert(string1 / boolean_2) // result is NaN


// // let string2 = 'string'
// // let boolean_3 = false
// // alert(string2/boolean_3) // result is NaN


// // // String/number

// // let string3 = 'string'
// // let number3 = 4
// // alert(string3 / number3)  // result is NaN

// // let string4 = 'string'
// // let number4 = 0
// // alert(string4 /number4) // resule is NaN



// // // Явное преобразование в number

// // let some_string = 's'
// // alert(Number(some_string)) //result is NaN

// // let some_stringfree = ''
// // alert(Number(some_stringfree)) //result is 0

// // let some_string0 = '0'
// // alert(Number(some_string0)) //result is 0

// // let some_string1 = '1'
// // alert(Number(some_string1)) // result is 1

// // let some_bool = true
// // alert(Number(some_bool)) //result is 1

// // let some_bool_false = false
// // alert(Number(some_bool_false)) //result is 0
 
// // // Явное преобразование в string

// // let some_number = 0
// // alert(String(some_number)) // result is "0"

// // let some_string = ''
// // alert(String(some_string))

// // let some_bool1 = true
// // let some_bool0 = false
// // alert(String(some_bool1)) //result is "true"
// // alert(String(some_bool0)) //result is "false"


// // // Явное преобразование в boolean
// // let translate_num1 = 1
// // let translate_num0 = 0
// // let transalate_negnum = -1
// // let transalate_num2 = 2


// // let string1234 = 'aslkj'
// // let string_num = '1'
// // let empty_string = ''


// // alert(Boolean(translate_num1)) // result is true
// // alert(Boolean(translate_num0)) // result is false
// // alert(Boolean(transalate_negnum)) //result is true
// // alert(Boolean(transalate_num2)) //result is true

// // alert(Boolean(string1234)) // result is true
// // alert(Boolean(string_num)) // result is true
// // alert(Boolean(empty_string)) // result is false



// let car = {
//     color: "black",
//     power: function showPower(){
//         alert('This is car power!');
//     }
// }

// car.color = "green"

// alert(car.color)

// car.power()



// function sum_a_p() {
//     var pears = prompt('Укажите количество груш:')
//     var apples = prompt('Укажите количество яблок:')
//    alert(+pears + +apples) 
// }

// sum_a_p()



// var your_name = prompt('Введите ваше имя')

// function hey(name=false) {
//     if (name == false){
//         alert('Нет такого имени')
//     }
//     else{
//         alert('Привет ' + name)
//     }
// }

// hey(your_name)

// //////

// function argument(argument) {
//     alert(typeof(argument))
// }

// argument(false)

// /////

// function is_simple(number) {
//     simple = true
//     for (i = 1; i < number; i++) {
//         if (i == 1 || i == number){
//             continue;
//         }   
//         else if (number % i == 0) {
//             simple = false
//         }
        
//     }
    
//     if (simple == true) {
//         console.log('Простое')
//     }
//     else {
//         console.log('Составное (Не простое)')
//     }
    
// }

// is_simple(111)




// //////// ARRAYS and CYCLES


// let films = ['Breaking bad', '007', 'King Arthur', 'Merlin']

// for (i = 0; i != films.length; i++) {
//     console.log(films[i])
// }


// let car_makers = ['BMW', 'chevrolet', 'Hyundai']

// car_makers = String(car_makers)
// car_makers = Array(car_makers)



// let familiar = ['Ivan', 'Avon', 'Savon', 'Devon', 'Jojo']

// for (i = 0; i != familiar.length; i++) {
//     familiar[i] = familiar[i] + 'hello'
// }



// let boolean_array = [1, 0, 1, 1, 1, 1, 0, 0]

// boolean_array = Boolean(boolean_array)



// // Some shitty code to sort array

// let array_to_sort = [1,6,7,8,3,4,5,6]

// let unsorted = 1

// while(unsorted > 0) {
    
//     unsorted--
//     for (i = 0; i < array_to_sort.length; i++) {
//         let current = array_to_sort[i]
//         let next = array_to_sort[i+1]
//         if (i == array_to_sort) {
//             break
//         }
//         else if (array_to_sort[i + 1] < array_to_sort[i]) {
//             array_to_sort[i] = next
//             array_to_sort[i+1] = current
//             unsorted++
//         }
//         else{
//             continue
//         }
//     }
// }
// console.log(array_to_sort)






// let array_to_filter = [1,6,7,8,3,4,5,6]
// for (i=0; i < array_to_filter.length; i++) {
//     if (array_to_filter[i] < 3) {
//         array_to_filter.splice(i, i+1)
//     }
// }

// console.log(array_to_filter)



// let array_to_filter1 = [1,6,7,8,3,4,5,6, 9, 9, 19, 3]
// function indexFinder(array, number){
//     for (i = 0; i < array.length; i++) {
//         if (array[i] == number) {
//             console.log(i)
//         } 
//     }
// }

// indexFinder(array_to_filter1, 6)



// let numer = 50
// while (numer >= 10) {
//     console.log(numer)
//     numer--
// }


i = 0
while (i < 100000000){
    if(is_simple(i) == true){
        console.log(i)
    
    }
    else{
        continue
    }
    i++
}

odd = 1
while(odd < 100000){
    console.log(odd)
    odd += 2
}











