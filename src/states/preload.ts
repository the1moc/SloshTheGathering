import "phaser";
import {Global} from "../globals";

export default class Preload extends Phaser.State {
  public preload(): void {
      this.game.load.image("menu_background", require("assets/menu_background.bmp"));
      this.game.load.image("menu_title", require("assets/menu_title.png"));
      this.game.load.audio("menu_music", require("assets/dark_fallout.ogg"));
  }

  public create(): void {
      let menuBackground = this.game.add.image(0, 0, "menu_background");
      let menuTitle = this.game.add.image(100, 100, "menu_title");
      menuBackground.height = Global.GAME_HEIGHT;
      menuBackground.width = Global.GAME_WIDTH;
      let music = this.game.add.audio("menu_music");
      music.play();
  }
}
