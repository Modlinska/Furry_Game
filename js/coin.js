// konstruktor monety
function Coin() {
    this.x = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    this.y = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
}
module.exports=Coin;