function randMax(max) {
    return Math.trunc(1E9 * Math.random()) % max;
}

var reel = {
    symbols: [
        "♠", "♥", "♦", "♣", "☺", "★", "☾", "☀"
    ],
    spin() {
        if (this.position == null) {
            this.position = randMax(
                this.symbols.length - 1
            );
        }
        this.position = (
            this.position + 100 + randMax(100)
        ) % this.symbols.length;
    },
    display() {
        if (this.position == null) {
            this.position = randMax(
                this.symbols.length - 1
            );
        }
        return this.symbols[this.position];
    }
};

var slotMachine = {
    reels: [ Object.create(reel), Object.create(reel), Object.create(reel)],
    spin() {
        this.reels.forEach(function spinReel(reel){
            reel.spin();
        });
    },
    display() {
        let symbolArr = [[],[],[]];
        this.reels.forEach(function displayReel(reel){
            symbolArr[1].push(reel.display());
        });
        for (let i = 0; i < 3; i++) {
            let index = this.reels[0].symbols.indexOf(symbolArr[1][i]);
            if (index === 0) {
                index = 7;
            } else {
                index--;
            }
            symbolArr[0].push(this.reels[0].symbols[index]);
        }
        for (let i = 0; i < 3; i++) {
            let index = this.reels[0].symbols.indexOf(symbolArr[1][i]);
            if (index === 7) {
                index = 0;
            } else {
                index++;
            }
            symbolArr[2].push(this.reels[0].symbols[index]);
        }
        console.log(symbolArr[0].join(" | ") + "\n" + symbolArr[1].join(" | ") + "\n" + symbolArr[2].join(" | ") + "\n");
    }
};

slotMachine.spin();
slotMachine.display();
// ☾ | ☀ | ★
// ☀ | ♠ | ☾
// ♠ | ♥ | ☀

slotMachine.spin();
slotMachine.display();
// ♦ | ♠ | ♣
// ♣ | ♥ | ☺
// ☺ | ♦ | ★
