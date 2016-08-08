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
                var ZShape = (function (_super) {
                    __extends(ZShape, _super);
                    function ZShape(mainField, fabric, htmlParent, startLeft, startTop) {
                        _super.call(this, mainField, fabric, htmlParent, startLeft, startTop);
                        this.MaxAvailablePositions = 1;
                    }
                    ZShape.prototype.CanRotate = function (direction) {
                        var sq0 = this.Squares[0];
                        var sq1 = this.Squares[1];
                        var sq3 = this.Squares[3];
                        switch (this.Position) {
                            case 0:
                                return (sq0.Top < Tetris.Core.Constants.MaxMainFieldHeight - 2) && this.IsCellFree(sq0.Left, sq0.Top + 2, sq0.UniqueID)
                                    && (sq3.Left >= 2) && this.IsCellFree(sq3.Left - 2, sq3.Top, sq3.UniqueID);
                            case 1:
                                return (sq0.Top >= 2) && this.IsCellFree(sq0.Left, sq0.Top - 2, sq0.UniqueID)
                                    && (sq1.Left < Tetris.Core.Constants.MaxMainFieldWidth - 2) && this.IsCellFree(sq1.Left + 2, sq1.Top, sq1.UniqueID);
                        }
                    };
                    ZShape.prototype.ChangePositionOnRotate = function (direction) {
                        switch (this.Position) {
                            case 0:
                                this.Squares[0].Top += 2;
                                this.Squares[3].Left -= 2;
                                break;
                            case 1:
                                this.Squares[0].Top -= 2;
                                this.Squares[3].Left += 2;
                                break;
                        }
                    };
                    ZShape.prototype.ConstructShape = function (mainFiled, startLeft, startTop) {
                        this.Squares = this.ShapeFabric.GetSquares(this.HtmlContainer, startLeft, startTop, this.MainField, 4);
                        this.Squares[0].Left = startLeft + 0;
                        this.Squares[0].Top = startTop + 0;
                        this.Squares[1].Left = startLeft + 1;
                        this.Squares[1].Top = startTop + 0;
                        this.Squares[2].Left = startLeft + 1;
                        this.Squares[2].Top = startTop + 1;
                        this.Squares[3].Left = startLeft + 2;
                        this.Squares[3].Top = startTop + 1;
                    };
                    return ZShape;
                }(ShapeBase));
                TetraShapes.ZShape = ZShape;
            })(TetraShapes = Squares.TetraShapes || (Squares.TetraShapes = {}));
        })(Squares = Game.Squares || (Game.Squares = {}));
    })(Game = Tetris.Game || (Tetris.Game = {}));
})(Tetris || (Tetris = {}));
//# sourceMappingURL=ZShape.js.map