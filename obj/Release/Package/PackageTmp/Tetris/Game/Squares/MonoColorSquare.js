var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Tetris;
(function (Tetris) {
    var Game;
    (function (Game) {
        var Squares;
        (function (Squares) {
            var MonoColorSquare = (function (_super) {
                __extends(MonoColorSquare, _super);
                function MonoColorSquare(color, parentHtml, initLeft, initTop, uniqueID, mainField) {
                    _super.call(this, parentHtml, initLeft, initTop, uniqueID, mainField);
                    this.BackgroundColor = color;
                    this.InstatiateHtml();
                }
                MonoColorSquare.prototype.InstatiateHtml = function () {
                    var heximalColor = this.BackgroundColor.toString(16);
                    this.HtmlElement = $('<div>')
                        .addClass('sqr')
                        .css('background-color', '#' + '000000'.substr(0, 6 - heximalColor.length) + heximalColor)
                        .css('display', 'none')
                        .appendTo($(this.parentHtml));
                };
                return MonoColorSquare;
            }(Tetris.Core.Square));
            Squares.MonoColorSquare = MonoColorSquare;
        })(Squares = Game.Squares || (Game.Squares = {}));
    })(Game = Tetris.Game || (Tetris.Game = {}));
})(Tetris || (Tetris = {}));
//# sourceMappingURL=monocolorsquare.js.map