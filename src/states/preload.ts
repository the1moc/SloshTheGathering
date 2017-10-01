import "phaser";
import {Global} from "../globals";

export default class Preload extends Phaser.State {
  public preload(): void {
      this.game.load.image("menu_background", require("assets/menu_background.bmp"));
      this.game.load.image("menu_title", require("assets/menu_title.png"));
      this.game.load.image("play_button", require("assets/play_button.png"));
      this.game.load.audio("menu_music", require("assets/menu_music.mp3"));
      this.game.load.image("menu_logo", require("assets/menu_logo.png"));
      this.game.load.audio("play_button_press", require("assets/play_button.mp3"));
  }

  public create(): void {
      this.game.state.start("menu");
  }
}
