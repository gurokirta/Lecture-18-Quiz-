"use strict";

// Task #1
// რამდენი ტიპის მონაცემები გვაქვს ჯავასკრიპტში. ჩამოთვალეთ ისინი.(5ქ)
// JS-ში გვაქვს 5 სახის ტიპი - string,number,boolean,NaN,Null;

// Task #2
// რა სხვაობაა კომპილაციასა და ინტერპრეტაციას შორის?(10ქ)
// 🤝 - არმახსოვს 🤣;

// Task #3
// რა სხვაობაა == და === შორის?(5ქ)
// == ვიიყენებთ შედარებისას , === გატოლებისას

// Task #4
// დაწერეთ როგორ ჩაიწერება ლოგიკური ოპერაციები კონიუნქცია(“და”)
// და დიზუნქცია(“ან”) პროგრამულ ენაში? (5ქ)
// და - && ; ან - ||;

// Task #5
// რას დაბეჭდავს ეს ოპერაცია?(5ქ)
// პასუხია 128 (დ);

// Task #6
// რას დაბეჭდავს ეს ოპერაცია?(5ქ)
// პასუხია 128(დ)

// Task #7
// რას დაბეჭდავს ეს კოდი იმ შემთხვევაში თუ მომხამრებელი
// შეიყვანს 1000ს? 2000ს? 3000ს? ნებისმიერ სხვა რიცხვს? (15ქ) (იხილეთ ატვირთული ფოტო)
// პასუხი თუ შეიყვანს 1000 დაბეჭდვს
// თქვენ გაქვთ შემოსავალი 1000
// ხოლო სხვა შემთხვევაში დაბეჭდავს
// თქვენ გაქვთ არასწორი შემოსავალი

// Task #8
// დაწერეთ პროგრამა, რომელიც დაგიბეჭდავთ 50დან 100ის ჩათვლით (50<x<=100)
// ყველა რიცხვს, რომელიც არის 5ის და 10ის ჯერადი. (20ქ)

// var number_one = prompt("შეიყვანეთ რიცხვი 50-დან 100-ჩათვლით");
// // var number_one = 100;

// for (var i = 1; i <= parseInt(number_one); i++) {
//   if (i % 5 === 0 && i % 10 === 0) {
//     console.log(i);
//   }
// }

// Task #10
// Სთხოვეთ მომხმარებელს შემოიტანოს რიცხვი 0დან 100მდე. თუ რიცხვი მეტია 100ზე ან ნაკლებია 0ზე, სთხოვეთ ახლიდან შემოტანა.
// ეს იქამდე აკეთეთ სანამ სწორად არ შემოიტანს.
// დათვალეთ ამ რიცხვამდე ყველა რიცხვის ჯამი და საშუალო არითმეტიკული. (ანუ მაგალითად თუ შემოიყვანა 10,
//  დათვალეთ 1+2+3+4+5+6+7+8+9, ხოლო არითმეტიკულია ეს ჯამი გაყავით რაოდენობაზე)(30ქ)

// var number_one = parseInt(prompt("შეიყვანეთ რიცხვი 0დან 100მდე"));
// var number_one = 11;
// var counter = 0;
// var sum = 0;
// while (parseInt(number_one) < 0 || parseInt(number_one) > 100) {
//   prompt("შეიყვანეთ რიცხვი 0დან 100მდე");
// }

// for (var i = 1; i < parseInt(number_one); i++) {
//   counter++;
//   sum += i;
// }
// // console.log(sum);

// var numAvg = sum / counter;

// console.log(numAvg);
