
let car = {
    color: "black",
    power: function showPower(){
        alert('This is car power!');
    }
}

car.color = "green"

alert(car.color)

car.power()

/////////////////////////

function sum_a_p() {
    var pears = prompt('Укажите количество груш:')
    var apples = prompt('Укажите количество яблок:')
   alert(+pears + +apples) 
}

sum_a_p()

/////////////////////

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