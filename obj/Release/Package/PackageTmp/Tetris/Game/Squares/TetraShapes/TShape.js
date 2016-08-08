var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BackgroundColor = Tetris.Core.Enums.BackgroundColor;
var Square = Tetris.Core.Square;
var Tetris;
(function (Tetris) {
    var Game;
    (function (Game) {
        var Squares;
        (function (Squares) {
            var TetraShapes;
            (function (TetraShapes) {
                var TShape = (function (_super) {
                    __extends(TShape, _super);
                    function TShape(mainField, fabric, htmlParent, startLeft, startTop) {
                        _super.call(this, mainField, fabric, htmlParent, startLeft, startTop);
                        this.MaxAvailablePositions = 3;
                    }
                    TShape.prototype.CanRotate = function (direction) {
                        var sq0 = this.Squares[0];
                        var sq2 = this.Squares[2];
                        var sq3 = this.Squares[3];
                        switch (this.Position) {
                            case 0:
                                return (sq3.Left < Tetris.Core.Constants.MaxMainFieldWidth)
                                    && (sq3.Top > 0)
                                    && this.IsCellFree(sq3.Left + 1, sq3.Top - 1, sq3.UniqueID);
                            case 1:
                                return (sq2.Left < Tetris.Core.Constants.MaxMainFieldWidth)
                                    && (sq2.Top < Tetris.Core.Constants.MaxMainFieldHeight)
                                    && this.IsCellFree(sq2.Left + 1, sq2.Top + 1, sq2.UniqueID);
                            case 2:
                                return (sq0.Left > 0)
                                    && (sq0.Top < Tetris.Core.Constants.MaxMainFieldHeight)
                                    && this.IsCellFree(sq0.Left - 1, sq0.Top + 1, sq0.UniqueID);
                            case 3:
                                return true;
                        }
                    };
                    TShape.prototype.ChangePositionOnRotate = function (direction) {
                        switch (this.Position) {
                            case 0:
                                this.Squares[3].Left++;
                                this.Squares[3].Top--;
                                break;
                            case 1:
                                this.Squares[2].Left++;
                                this.Squares[2].Top++;
                                break;
                            case 2:
                                this.Squares[0].Left--;
                                this.Squares[0].Top++;
                                break;
                            case 3:
                                this.Squares[0].Top--;
                                this.Squares[0].Left++;
                                this.Squares[2].Top--;
                                this.Squares[2].Left--;
                                this.Squares[3].Top++;
                                this.Squares[3].Left--;
                                break;
                        }
                    };
                    TShape.prototype.ConstructShape = function (mainFiled, startLeft, startTop) {
                        this.Squares = this.ShapeFabric.GetSquares(this.HtmlContainer, 1, 0, this.MainField, 4);
                        this.Squares[0].Left = startLeft + 1;
                        this.Squares[0].Top = startTop + 0;
                        this.Squares[1].Left = startLeft + 1;
                        this.Squares[1].Top = startTop + 1;
                        this.Squares[2].Left = startLeft + 0;
                        this.Squares[2].Top = startTop + 1;
                        this.Squares[3].Left = startLeft + 1;
                        this.Squares[3].Top = startTop + 2;
                    };
                    return TShape;
                }(ShapeBase));
                TetraShapes.TShape = TShape;
            })(TetraShapes = Squares.TetraShapes || (Squares.TetraShapes = {}));
        })(Squares = Game.Squares || (Game.Squares = {}));
    })(Game = Tetris.Game || (Tetris.Game = {}));
})(Tetris || (Tetris = {}));
//# sourceMappingURL=TShape.js.map