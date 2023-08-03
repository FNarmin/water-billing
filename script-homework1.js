//water billing
var code = prompt("write your code\n residentials- r\n commersials - c\n industrials - i");

// parseInt(beginningMeterWithGallons);
// parseInt(endingMeterWithGallons);
    var beginningMeter = prompt ("Please enter beginning meter of water");
    var endingMeter = prompt("Please enter ending meter of water");
    var beginningMeterWithGallons = beginningMeter/10;
    var endingMeterWithGallons = endingMeter/10;
    var endİndigator = 999999999;
    if(code=="r" && beginningMeterWithGallons<endingMeterWithGallons) {
    var price = ((endingMeterWithGallons-beginningMeterWithGallons)*0.0005+5.00);
    alert(price.toFixed(2) + "$");
} else if (code=="r" && beginningMeterWithGallons>endingMeterWithGallons){
    var price = (endingMeterWithGallons + (endİndigator-beginningMeterWithGallons))*0.0005+5.00;
    alert(price.toFixed(2) + "$");
} else if (code=="c" && beginningMeterWithGallons<endingMeterWithGallons && endingMeterWithGallons-beginningMeterWithGallons<=4000000) {
    alert("1000$");
} else if (code=="c" && beginningMeterWithGallons>endingMeterWithGallons && endingMeterWithGallons+(endİndigator-beginningMeterWithGallons)<=4000000) {
    alert("1000$");
} else if (code=="c" && beginningMeterWithGallons<endingMeterWithGallons && endingMeterWithGallons-beginningMeterWithGallons>4000000) {
    var price = ((endingMeterWithGallons-beginningMeterWithGallons)-4000000)*0.00025 + 1000;
    alert(price.toFixed(2) + "$");
} else if (code=="c" && beginningMeterWithGallons>endingMeterWithGallons && endingMeterWithGallons+(endİndigator-beginningMeterWithGallons)>4000000) {
    var price = ((endingMeterWithGallons + (endİndigator-beginningMeterWithGallons))-4000000)*0.00025 + 1000;
    alert (price.toFixed(2)+"$");
} else if (code=="i" && beginningMeterWithGallons<endingMeterWithGallons && endingMeterWithGallons-beginningMeterWithGallons<=4000000) {
    alert ("1000$");
} else if (code =="i" && beginningMeterWithGallons>endingMeterWithGallons && endingMeterWithGallons+(endİndigator-beginningMeterWithGallons)<=4000000) {
    alert ("1000$");
} else if (code == "i" && beginningMeterWithGallons<endingMeterWithGallons && 4_000_000<endingMeterWithGallons-beginningMeterWithGallons<=10_000_000) {
    alert ("2000$");
} else if (code =="i" && beginningMeterWithGallons>endingMeterWithGallons && 4_000_000<endingMeterWithGallons+(endİndigator-beginningMeterWithGallons<=10_000_000)) {
    alert("2000$");
} else if (code =="i" && beginningMeterWithGallons<endingMeterWithGallons && endingMeterWithGallons-beginningMeterWithGallons>10_000_000){
    var price = ((endingMeterWithGallons - beginningMeterWithGallons) - 10_000_000)*0.00025 + 2000;
    alert(price.toFixed(2) + "$");
} else if (code=="i" && beginningMeterWithGallons>endingMeterWithGallons && endingMeterWithGallons+(endİndigator-beginningMeterWithGallons)>10_000_000) {
    var price = ((endingMeterWithGallons+(endİndigator-beginningMeterWithGallons)) - 10_000_000)*0.00025 + 2000;
    alert(price.toFixed(2) + "$");
} else {
    alert("your code is unsuitable,please try again!");
}