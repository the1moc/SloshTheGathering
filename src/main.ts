import "p2";
import "phaser";
import "pixi";

class PlaceholderGame {

    protected game: Phaser.Game;

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, "game", { preload: this.preload, create: this.create });
    }

    public preload() {
        const x = "esdy";
    }

   public create() {
        const y = "yeh";
    }

}

window.onload = () => {

    const game = new PlaceholderGame();

};
