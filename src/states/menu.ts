import "p2";
import "phaser";
import "pixi";
import {Global} from "../globals";

export default class Menu extends Phaser.State {
    public create(): void {
      let menuBackground = this.game.add.image(0, 0, "menu_background");
      menuBackground.height = Global.GAME_HEIGHT;
      menuBackground.width = Global.GAME_WIDTH;

      let menuTitle = this.game.add.image(100, 100, "menu_title");
      let menuLogo = this.game.add.image(1100, 100, "menu_logo");
      let playButton = this.game.add.button(100, 450, "play_button");
      let music = this.game.add.audio("menu_music");
      music.play();
    }
}
