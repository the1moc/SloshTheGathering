import "p2";
import "phaser";
import "pixi";
import {Global} from "../globals";

export default class Boot extends Phaser.State {
    public create(): void {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.state.start("preload");
    }
}
