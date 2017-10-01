import "phaser";
import {Global} from "../globals";

export default class Preload extends Phaser.State {
  public preload(): void {
      this.game.load.image("menu_background", require("assets/menu_background.bmp"));
      this.game.load.image("menu_title", require("assets/menu_title.png"));
      this.game.load.image("play_button", require("assets/play_button.png"));
      this.game.load.audio("menu_music", require("assets/dark_fallout.ogg"));
      this.game.load.image("menu_logo", require("assets/menu_logo.png"));
  }

  public create(): void {
      this.game.state.start("menu");
  }
}
