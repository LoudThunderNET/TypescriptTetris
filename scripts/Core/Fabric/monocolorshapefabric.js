var BackGroundColor = Tetris.Core.Enums.BackgroundColor;
var MonoColorSquare = Tetris.Game.Squares.MonoColorSquare;
var Tetris;
(function (Tetris) {
    var Core;
    (function (Core) {
        var Fabric;
        (function (Fabric) {
            var MonocolorShapeFabric = (function () {
                function MonocolorShapeFabric() {
                }
                MonocolorShapeFabric.prototype.GetSquares = function (parentHtml, initLeft, initTop, mainField, amount) {
                    var backgroundColorIndex = Math.round((Math.random() * 141));
                    var enumIndex = 0;
                    var color;
                    for (var i in BackGroundColor) {
                        if (enumIndex === backgroundColorIndex) {
                            color = parseInt(i);
                            break;
                        }
                        enumIndex++;
                    }
                    var uniqueID = Math.random();
                    var squares = new Array(amount);
                    for (var i = 0; i < amount; i++) {
                        squares[i] = new MonoColorSquare(color, parentHtml, initLeft, initTop, uniqueID, mainField);
                    }
                    return squares;
                };
                return MonocolorShapeFabric;
            }());
            Fabric.MonocolorShapeFabric = MonocolorShapeFabric;
        })(Fabric = Core.Fabric || (Core.Fabric = {}));
    })(Core = Tetris.Core || (Tetris.Core = {}));
})(Tetris || (Tetris = {}));
//# sourceMappingURL=C:/Users/galax_000/Documents/Visual Studio 2015/Projects/Tetris/Tetris/scripts/Core/Fabric/MonocolorShapeFabric.js.map