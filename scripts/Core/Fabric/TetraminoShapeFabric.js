/// <reference path="ishapefabric.ts" />
/// <reference path="../../game/tetrashapes/ishape.ts" />
/// <reference path="../../game/tetrashapes/lshape.ts" />
/// <reference path="../../game/tetrashapes/oshape.ts" />
/// <reference path="../../game/tetrashapes/sshape.ts" />
/// <reference path="../../game/tetrashapes/tshape.ts" />
/// <reference path="../../game/tetrashapes/zshape.ts" />
var Shapes = Tetris.Game.TetraShapes;
var Tetris;
(function (Tetris) {
    var Core;
    (function (Core) {
        var Fabric;
        (function (Fabric) {
            var TetraminoShapeFabric = (function () {
                function TetraminoShapeFabric(squareFabric) {
                    this._squaresFabric = squareFabric;
                }
                TetraminoShapeFabric.prototype.GetShape = function (parentHtml, initLeft, initTop, mainField) {
                    var shape = null;
                    var shapeNumber = Math.round(Math.random() * 8);
                    switch (shapeNumber) {
                        case 1:
                            shape = new Shapes.SShape(mainField, this._squaresFabric, parentHtml);
                            break;
                        case 2:
                            shape = new Shapes.ZShape(mainField, this._squaresFabric, parentHtml);
                            break;
                        case 3:
                            shape = new Shapes.LShape(mainField, this._squaresFabric, parentHtml);
                            break;
                        case 4:
                            shape = new Shapes.TShape(mainField, this._squaresFabric, parentHtml);
                            break;
                        case 5:
                            shape = new Shapes.OShape(mainField, this._squaresFabric, parentHtml);
                            break;
                        case 6:
                            shape = new Shapes.IShape(mainField, this._squaresFabric, parentHtml);
                            break;
                        case 7:
                            shape = new Shapes.IShape(mainField, this._squaresFabric, parentHtml);
                            break;
                    }
                    return shape;
                };
                return TetraminoShapeFabric;
            }());
            Fabric.TetraminoShapeFabric = TetraminoShapeFabric;
        })(Fabric = Core.Fabric || (Core.Fabric = {}));
    })(Core = Tetris.Core || (Tetris.Core = {}));
})(Tetris || (Tetris = {}));
//# sourceMappingURL=C:/Users/galax_000/Documents/Visual Studio 2015/Projects/Tetris/Tetris/scripts/Core/Fabric/TetraminoShapeFabric.js.map