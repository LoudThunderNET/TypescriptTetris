var BackGroundColor = Tetris.Core.Enums.BackgroundColor;
var Tetris;
(function (Tetris) {
    var Game;
    (function (Game) {
        var Fabric;
        (function (Fabric) {
            var MonocolorShapeFabric = (function () {
                function MonocolorShapeFabric() {
                }
                MonocolorShapeFabric.prototype.GetSquares = function (parentHtml, initLeft, initTop, mainField, amount) {
                    var backgroundColorIndex = Math.round((Math.random() * 135));
                    var enumIndex = 0;
                    var color;
                    for (var i in BackGroundColor) {
                        if (enumIndex === backgroundColorIndex) {
                            color = parseInt(i);
                            if (!isNaN(color)) {
                                break;
                            }
                        }
                        enumIndex++;
                    }
                    var uniqueID = Math.random();
                    var squares = new Array(amount);
                    for (var i = 0; i < amount; i++) {
                        squares[i] = new MonoColorSquare(color, parentHtml, initLeft, initTop, uniqueID, mainField);
                        squares[i].Index = i;
                    }
                    return squares;
                };
                return MonocolorShapeFabric;
            }());
            Fabric.MonocolorShapeFabric = MonocolorShapeFabric;
        })(Fabric = Game.Fabric || (Game.Fabric = {}));
    })(Game = Tetris.Game || (Tetris.Game = {}));
})(Tetris || (Tetris = {}));
//# sourceMappingURL=monocolorshapefabric.js.map