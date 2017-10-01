import "p2";
import "phaser";
import "pixi";
import {Global} from "../globals";

// State - The main menu for the game
export default class Menu extends Phaser.State {

    menuBackground: Phaser.Image;
    menuTitle: Phaser.Image;
    menuLogo: Phaser.Image;
    playButtonMusic: Phaser.Sound;
    menuMusic: Phaser.Sound;

    public create(): void {
      this.menuBackground = this.game.add.image(0, 0, "menu_background");
      this.menuTitle = this.game.add.image(100, 100, "menu_title");
      this.menuLogo = this.game.add.image(1100, 100, "menu_logo");
      this.menuBackground.height = Global.GAME_HEIGHT;
      this.menuBackground.width = Global.GAME_WIDTH;
      this.playButtonMusic = this.game.add.audio("play_button_press");

      // Play button with callback
      this.game.add.button(100, 450, "play_button", (): void => {
          this.playButtonMusic.play();
      });

      this.menuMusic = this.game.add.audio("menu_music");
      this.playMenuMusic();
    }

    // Play the menu music
    private playMenuMusic(): void {
      this.menuMusic.volume = 0.3;
      this.menuMusic.play();
    }
}
