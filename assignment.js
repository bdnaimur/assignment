


// Task One(01):
function kilometerToMeter(a) {
    if (Number(a) && a > 0) {
        var kiloMeter = 1000;
        var meter = kiloMeter * a;
        return meter;
    }
    else {
        return 'Does NOT fit!';
    }
}
var result1 = kilometerToMeter(10.5);
console.log(result1);


// Task two(02):
function budgetCalculator(x, y, z) {
    if ((parseInt(x) || parseInt(y) || parseInt(z)) && ((x > -1 || y > -1 || z > -1))) {
        var watchPrice = 50;
        var phonePrice = 100;
        var laptopPrice = 500;
        var totalWatchPrice = watchPrice * x;
        var totalPhonePrice = phonePrice * y;
        var totalLaptopPrice = laptopPrice * z;
        var sumTotal = totalWatchPrice + totalPhonePrice + totalLaptopPrice;
        return sumTotal;
    }
    else {
        return 'Does NOT fit!';
    }
}
var result2 = budgetCalculator("5", '0', 50);
console.log(result2);


// Task three(03):
function hotelCost(p) {
    if (parseInt(p) && p > 0) {
        var firstTen = 100;
        var firstTenSum = 0;
        var secondTen = 80;
        var secondTenSum = 0;
        var restDays = 50;
        var restDaysSum = 0;
        for (var i = 1; i <= p; i++) {
            if (i < 11) {
                firstTenSum += firstTen;
            }
            else if (i < 21 && i > 10) {
                secondTenSum += secondTen;
            }
            else {
                restDaysSum += restDays;
            }
        }
        var grandSum = firstTenSum + secondTenSum + restDaysSum;
        return grandSum;
    }
    else {
        return 'Does NOT fit!';
    }
}
var result3 = hotelCost('21');
console.log(result3);


// Task four(04):
var arry = ["Amina", "Bakul", "AbulMalAbdulMuhit", "Roydunian", "Mahfuz", "JituMiaVia"];
function megaFriend(x) {
    var checkArray = Array.isArray(x);
    if (checkArray == true && x.length > 0) {
        var largest = x[0];
        var count = largest.length;
        for (var i = 0; i < x.length; i++) {
            var element = x[i];
            var elementLength = element.length;
            if (count < elementLength) {
                count = elementLength;
                largest = element;
            }
        }
        return largest;
    }
    else {
        return "Please insert a correct array as variable.";
    }

}
var result4 = megaFriend(["Raisan", "Kibrain", "Ramjan", "Adnan", "JahirulIslam", "MarkJukerBagF"]);
console.log(result4);


