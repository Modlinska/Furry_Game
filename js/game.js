var Coin = require("./coin.js");
var Furry = require('./furry.js');

function Game() {

    this.board = document.querySelectorAll("#board div"); // cała planasza
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;
    // połozenie furrego z apomoca wspolzednych x i y a planaz ma pola numerowane od 0 do 99
    // ponizasza funkcja przelicza w ktorym miejscu planszy ma byc
    this.index = function (x, y) {
        return x + (y * 10);
    };
    this.showFurry = function (x, y) {
        this.hideVisibleFurry();
        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');

    }
    this.showCoin = function (x, y) {
        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
    }
    this.startGame = setInterval(function () {
        self.moveFurry();
    }, 250);

    var self = this;

    this.moveFurry = function () {
        if (this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
        } else if (this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
        } else if (this.furry.direction === "top") {
            this.furry.y = this.furry.y - 1;
        } else if (this.furry.direction === "down") {
            this.furry.y = this.furry.y + 1;
        }
        this.gameOver();
        this.showFurry();
        this.showCoin();
        document.addEventListener('keydown', function (event) {
            self.turnFurry(event);
        });
        this.checkCoinCollision();

    }

    this.hideVisibleFurry = function () {

        var prevFurry = document.querySelector('.furry');
        if (prevFurry != null) {
            prevFurry.classList.remove('furry');
        }
    }

    this.turnFurry = function (event) {
        switch (event.keyCode) {
            case 37:
                this.furry.direction = "left";
                break;
            case 38:
                this.furry.direction = "top";
                break;
            case 39:
                this.furry.direction = "right";
                break;
            case 40:
                this.furry.direction = "down";
                break;
        }
    }

    this.checkCoinCollision = function () {

        if (this.coin.x === this.furry.x && this.coin.y === this.furry.y) {
            var coinToremove = document.querySelector('.coin');
            coinToremove.classList.remove('coin');
            this.score++;
            var scoreCounter = document.querySelector("#score strong");
            scoreCounter.innerText = this.score;
            this.coin = new Coin();
            this.showCoin();
        }
    }

    this.gameOver = function () {
        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
            clearInterval(this.startGame);
            this.hideVisibleFurry();
            document.getElementById('over').classList.remove('invisible');
            document.querySelector('.score').innerText = "YOUR SCORE: " + this.score;
        }
    }
}

module.exports = Game;