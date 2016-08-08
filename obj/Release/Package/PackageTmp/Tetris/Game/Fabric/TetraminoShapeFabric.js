var Tetris;
(function (Tetris) {
    var Game;
    (function (Game) {
        var Fabric;
        (function (Fabric) {
            var TetraminoShapeFabric = (function () {
                function TetraminoShapeFabric(squareFabric) {
                    this._squaresFabric = squareFabric;
                }
                TetraminoShapeFabric.prototype.GetShape = function (parentHtml, initLeft, initTop, mainField) {
                    var shape = null;
                    var shapeNumber = Math.round(Math.random() * 7);
                    switch (shapeNumber) {
                        case 1:
                            shape = new Game.Squares.TetraShapes.SShape(mainField, this._squaresFabric, parentHtml, initLeft, initTop);
                            break;
                        case 2:
                            shape = new Game.Squares.TetraShapes.ZShape(mainField, this._squaresFabric, parentHtml, initLeft, initTop);
                            break;
                        case 3:
                            shape = new Game.Squares.TetraShapes.LShape(mainField, this._squaresFabric, parentHtml, initLeft, initTop);
                            break;
                        case 4:
                            shape = new Game.Squares.TetraShapes.TShape(mainField, this._squaresFabric, parentHtml, initLeft, initTop);
                            break;
                        case 5:
                            shape = new Game.Squares.TetraShapes.OShape(mainField, this._squaresFabric, parentHtml, initLeft, initTop);
                            break;
                        case 6:
                            shape = new Game.Squares.TetraShapes.IShape(mainField, this._squaresFabric, parentHtml, initLeft, initTop);
                            break;
                        case 0:
                        case 7:
                            shape = new Game.Squares.TetraShapes.JShape(mainField, this._squaresFabric, parentHtml, initLeft, initTop);
                            break;
                    }
                    return shape;
                };
                return TetraminoShapeFabric;
            }());
            Fabric.TetraminoShapeFabric = TetraminoShapeFabric;
        })(Fabric = Game.Fabric || (Game.Fabric = {}));
    })(Game = Tetris.Game || (Tetris.Game = {}));
})(Tetris || (Tetris = {}));
//# sourceMappingURL=TetraminoShapeFabric.js.map