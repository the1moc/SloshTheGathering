webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1);
__webpack_require__(0);
__webpack_require__(3);
var boot_1 = __webpack_require__(9);
var preload_1 = __webpack_require__(10);
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this, 1600, 900, Phaser.AUTO, "game") || this;
        _this.state.add("boot", boot_1.default);
        _this.state.add("preload", preload_1.default);
        _this.state.start("boot");
        return _this;
    }
    return Game;
}(Phaser.Game));
window.onload = function () {
    var game = new Game();
};


/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1);
__webpack_require__(0);
__webpack_require__(3);
var Boot = /** @class */ (function (_super) {
    __extends(Boot, _super);
    function Boot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Boot.prototype.create = function () {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.state.start("preload");
    };
    return Boot;
}(Phaser.State));
exports.default = Boot;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(0);
var globals_1 = __webpack_require__(11);
var Preload = /** @class */ (function (_super) {
    __extends(Preload, _super);
    function Preload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Preload.prototype.preload = function () {
        this.game.load.image("menu_background", __webpack_require__(12));
        this.game.load.image("menu_title", __webpack_require__(13));
        this.game.load.audio("menu_music", __webpack_require__(14));
    };
    Preload.prototype.create = function () {
        var menuBackground = this.game.add.image(0, 0, "menu_background");
        var menuTitle = this.game.add.image(100, 100, "menu_title");
        menuBackground.height = globals_1.Global.GAME_HEIGHT;
        menuBackground.width = globals_1.Global.GAME_WIDTH;
        var music = this.game.add.audio("menu_music");
        music.play();
    };
    return Preload;
}(Phaser.State));
exports.default = Preload;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Global;
(function (Global) {
    Global.GAME_HEIGHT = 900;
    Global.GAME_WIDTH = 1600;
})(Global = exports.Global || (exports.Global = {}));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/menu_background.bmp";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/menu_title.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/dark_fallout.ogg";

/***/ })
],[4]);
//# sourceMappingURL=bundle.js.map