import "p2";
import "phaser";
import "pixi";

class Game extends Phaser.Game{

    protected game: Phaser.Game;


    constructor(config: Phaser.IGameConfig) {
        super(config);
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, "game", { preload: this.preload, create: this.create });
    }

    public preload() {

    }

   public create() {

    }

}

window.onload = () => {
    const game = new Game();

};
