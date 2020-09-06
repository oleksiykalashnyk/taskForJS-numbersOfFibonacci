"use strict";

// Числа Фибаначчи в зависимости от ввтода входящего числа
//Input: 5
//Out: "1 2 3 5 8"

let arr = [1, 2],
    string = "",
    timer,
    askNumber = () => {
        string = +prompt("Введи целое число от 2 до 99", "");
        if (string == "" || isNaN(string) || string == 0 || string % 1 != 0 || string < 2 || string > 99) {
            askNumber();
        }
    },

    fiba = () => {
        askNumber();
        if (string > 2) {
            let counterArray = 1;
            do {
                let pushArr = arr[counterArray - 1] + arr[counterArray];
                counterArray++;
                arr.push(pushArr);
            } while (arr.length < string);
        }
        showArr();
    },

    showArr = () => {
        document.getElementById("fibaText").innerHTML = arr.join("  ");
        let startTimer = setTimeout(() => start(), 500);
    },

    start = () => {
        let askAgain = confirm("Начать с начала?");
        if (askAgain) {
            arr = [1, 2];
            fiba();
        } else {
            arr = [1, 2];
            timer = setTimeout(() => {
                start();
            }, 5000);
        }
    };

fiba();