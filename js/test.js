function Furry() {
    this.x = 0;
    this.y = 0;
    this.direction = "right";
}

function Coin() {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
}

// GAME
var Game = function() {
    this.board = document.querySelectorAll("#board div");
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;
    this.index = function(x,y) {
        return x + (y * 10);
    }

    this.showFurry = function() {
        this.board[ this.index(this.furry.x,this.furry.y) ].classList.add('furry');

    }
    this.showCoin = function() {
        this.board[ this.index(this.coin.x,this.coin.y) ].classList.add('coin');
    }

    var self = this;

// Ruszanie furry'ego
    this.moveFurry = function() {
        if (self.furry.direction === "right") {
            self.furry.x = self.furry.x + 1;
        }
        else if (self.furry.direction === "left") {
            self.furry.x = self.furry.x - 1;
        }
        else if (self.furry.direction === "up") {
            self.furry.y = self.furry.y - 1;
        }
        else if (self.furry.direction === "down") {
            self.furry.y = self.furry.y + 1;
        }
        self.showFurry();
        this.hideVisibleFurry();
    }

    this.startGame = function() {
        this.idSetInterval = setInterval(function(){
            self.moveFurry();
        }, 400);
    }

    this.hideVisibleFurry = function() {
        var div = document.querySelector(".furry");
        div.classList.remove('furry');
    }


    this.turnFurry = function(event) {
        switch (event.which) {
            case 37:
                this.furry.direction = 'left';
                break;
            case 38:
                this.furry.direction = 'up';
                break;
            case 39:
                this.furry.direction = 'right';
                break;
            case 40:
                this.furry.direction = 'down';
        }
    }
    document.addEventListener('keydown', this.turnFurry);
}



var game = new Game();
game.startGame();
game.showFurry();
game.showCoin();
game.moveFurry();
game.turnFurry(); //nie reaguje na przyciski