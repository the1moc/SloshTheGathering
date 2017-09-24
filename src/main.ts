import "p2";
import "phaser";
import "pixi";
import Boot from "./states/boot";
import Preload from "./states/preload";

class Game extends Phaser.Game{

    constructor() {
        super(1600, 900, Phaser.AUTO, "game");
        this.state.add("boot", Boot);
        this.state.add("preload", Preload);
        this.state.start("boot");
    }

}

window.onload = () => {
    const game = new Game();

};
