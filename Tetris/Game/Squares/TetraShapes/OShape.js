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
            var TetraShapes;
            (function (TetraShapes) {
                var OShape = (function (_super) {
                    __extends(OShape, _super);
                    function OShape() {
                        _super.apply(this, arguments);
                    }
                    OShape.prototype.CanRotate = function (direction) {
                        return true;
                    };
                    OShape.prototype.ChangePositionOnRotate = function (direction) { };
                    OShape.prototype.ConstructShape = function (mainFiled, startLeft, startTop) {
                        this.Squares = this.ShapeFabric.GetSquares(this.HtmlContainer, 1, 0, this.MainField, 4);
                        this.Squares[0].Left = startLeft + 0;
                        this.Squares[0].Top = startTop + 0;
                        this.Squares[1].Left = startLeft + 1;
                        this.Squares[1].Top = startTop + 0;
                        this.Squares[2].Left = startLeft + 1;
                        this.Squares[2].Top = startTop + 1;
                        this.Squares[3].Left = startLeft + 0;
                        this.Squares[3].Top = startTop + 1;
                    };
                    return OShape;
                }(ShapeBase));
                TetraShapes.OShape = OShape;
            })(TetraShapes = Squares.TetraShapes || (Squares.TetraShapes = {}));
        })(Squares = Game.Squares || (Game.Squares = {}));
    })(Game = Tetris.Game || (Tetris.Game = {}));
})(Tetris || (Tetris = {}));
//# sourceMappingURL=OShape.js.map