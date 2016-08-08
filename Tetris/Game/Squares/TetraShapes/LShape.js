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
                var LShape = (function (_super) {
                    __extends(LShape, _super);
                    function LShape(mainField, fabric, htmlParent, startLeft, startTop) {
                        _super.call(this, mainField, fabric, htmlParent, startLeft, startTop);
                        this.MaxAvailablePositions = 3;
                    }
                    LShape.prototype.CanRotate = function (direction) {
                        var zero = this.Squares[0];
                        var two = this.Squares[2];
                        var three = this.Squares[3];
                        switch (this.Position) {
                            case 0:
                                return this.IsCellFree(zero.Left + 1, zero.Top + 1, zero.UniqueID) &&
                                    (two.Left > 0) && this.IsCellFree(two.Left - 1, two.Top - 1, two.UniqueID) &&
                                    (three.Left >= 2) && this.IsCellFree(three.Left - 2, three.Top, three.UniqueID);
                            case 1:
                                return this.IsCellFree(zero.Left - 1, zero.Top + 1, zero.UniqueID) &&
                                    (two.Top > 0) && this.IsCellFree(two.Left + 1, two.Top - 1, two.UniqueID) &&
                                    (three.Top >= 2) && this.IsCellFree(three.Left, three.Top - 2, three.UniqueID);
                            case 2:
                                return this.IsCellFree(zero.Left - 1, zero.Top - 1, zero.UniqueID) &&
                                    (two.Left < Tetris.Core.Constants.MaxMainFieldWidth) && this.IsCellFree(two.Left + 1, two.Top + 1, two.UniqueID) &&
                                    (three.Left <= Tetris.Core.Constants.MaxMainFieldWidth - 2) && this.IsCellFree(three.Left + 2, three.Top, three.UniqueID);
                            case 3:
                                return this.IsCellFree(zero.Left + 1, zero.Top - 1, zero.UniqueID) &&
                                    (two.Top < Tetris.Core.Constants.MaxMainFieldHeight) && this.IsCellFree(two.Left - 1, two.Top + 1, two.UniqueID) &&
                                    (three.Top <= Tetris.Core.Constants.MaxMainFieldHeight - 2) && this.IsCellFree(three.Left, three.Top + 2, three.UniqueID);
                        }
                    };
                    LShape.prototype.ChangePositionOnRotate = function (direction) {
                        switch (this.Position) {
                            case 0:
                                this.Squares[0].Left++;
                                this.Squares[0].Top++;
                                this.Squares[2].Left--;
                                this.Squares[2].Top--;
                                this.Squares[3].Left -= 2;
                                break;
                            case 1:
                                this.Squares[0].Left--;
                                this.Squares[0].Top++;
                                this.Squares[2].Left++;
                                this.Squares[2].Top--;
                                this.Squares[3].Top -= 2;
                                break;
                            case 2:
                                this.Squares[0].Left--;
                                this.Squares[0].Top--;
                                this.Squares[2].Left++;
                                this.Squares[2].Top++;
                                this.Squares[3].Left += 2;
                                break;
                            case 3:
                                this.Squares[0].Left++;
                                this.Squares[0].Top--;
                                this.Squares[2].Left--;
                                this.Squares[2].Top++;
                                this.Squares[3].Top += 2;
                                break;
                        }
                    };
                    LShape.prototype.ConstructShape = function (mainFiled, startLeft, startTop) {
                        this.Squares = this.ShapeFabric.GetSquares(this.HtmlContainer, 1, 0, this.MainField, 4);
                        this.Squares[0].Left = startLeft + 1;
                        this.Squares[0].Top = startTop + 0;
                        this.Squares[1].Left = startLeft + 1;
                        this.Squares[1].Top = startTop + 1;
                        this.Squares[2].Left = startLeft + 1;
                        this.Squares[2].Top = startTop + 2;
                        this.Squares[3].Left = startLeft + 2;
                        this.Squares[3].Top = startTop + 2;
                    };
                    return LShape;
                }(ShapeBase));
                TetraShapes.LShape = LShape;
            })(TetraShapes = Squares.TetraShapes || (Squares.TetraShapes = {}));
        })(Squares = Game.Squares || (Game.Squares = {}));
    })(Game = Tetris.Game || (Tetris.Game = {}));
})(Tetris || (Tetris = {}));
//# sourceMappingURL=LShape.js.map