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
                var JShape = (function (_super) {
                    __extends(JShape, _super);
                    function JShape(mainField, fabric, htmlParent, startLeft, startTop) {
                        _super.call(this, mainField, fabric, htmlParent, startLeft, startTop);
                        this.MaxAvailablePositions = 3;
                    }
                    JShape.prototype.CanRotate = function (direction) {
                        var sq0 = this.Squares[0];
                        var sq2 = this.Squares[2];
                        var sq3 = this.Squares[3];
                        switch (this.Position) {
                            case 0:
                                return sq0.Left < Tetris.Core.Constants.MaxMainFieldWidth && this.IsCellFree(sq0.Left + 1, sq0.Top + 1, sq0.UniqueID) &&
                                    (sq2.Left > 0) && this.IsCellFree(sq2.Left - 1, sq2.Top - 1, sq2.UniqueID) &&
                                    (sq3.Top >= 2) && this.IsCellFree(sq3.Left, sq3.Top - 2, sq3.UniqueID);
                            case 1:
                                return this.IsCellFree(sq0.Left - 1, sq0.Top + 1, sq0.UniqueID) &&
                                    (sq2.Top > 0) && this.IsCellFree(sq2.Left + 1, sq2.Top - 1, sq2.UniqueID) &&
                                    (sq3.Left <= Tetris.Core.Constants.MaxMainFieldWidth - 2) && this.IsCellFree(sq3.Left + 2, sq3.Top, sq3.UniqueID);
                            case 2:
                                return this.IsCellFree(sq0.Left - 1, sq0.Top - 1, sq0.UniqueID)
                                    && (sq2.Left < Tetris.Core.Constants.MaxMainFieldWidth) && this.IsCellFree(sq2.Left + 1, sq2.Top + 1, sq2.UniqueID)
                                    && (sq3.Left <= Tetris.Core.Constants.MaxMainFieldWidth - 2) && this.IsCellFree(sq3.Left + 2, sq3.Top, sq3.UniqueID);
                            case 3:
                                return this.IsCellFree(sq0.Left + 1, sq0.Top - 1, sq0.UniqueID)
                                    && (sq2.Top < Tetris.Core.Constants.MaxMainFieldHeight) && this.IsCellFree(sq2.Left - 1, sq2.Top + 1, sq2.UniqueID)
                                    && (sq3.Top <= Tetris.Core.Constants.MaxMainFieldHeight - 2) && this.IsCellFree(sq3.Left, sq3.Top + 2, sq3.UniqueID);
                        }
                    };
                    JShape.prototype.ChangePositionOnRotate = function (direction) {
                        switch (this.Position) {
                            case 0:
                                this.Squares[0].Left++;
                                this.Squares[0].Top++;
                                this.Squares[2].Left--;
                                this.Squares[2].Top--;
                                this.Squares[3].Top -= 2;
                                break;
                            case 1:
                                this.Squares[0].Left--;
                                this.Squares[0].Top++;
                                this.Squares[2].Left++;
                                this.Squares[2].Top--;
                                this.Squares[3].Left += 2;
                                break;
                            case 2:
                                this.Squares[0].Left--;
                                this.Squares[0].Top--;
                                this.Squares[2].Left++;
                                this.Squares[2].Top++;
                                this.Squares[3].Top += 2;
                                break;
                            case 3:
                                this.Squares[0].Left++;
                                this.Squares[0].Top--;
                                this.Squares[2].Left--;
                                this.Squares[2].Top++;
                                this.Squares[3].Left -= 2;
                                break;
                        }
                    };
                    JShape.prototype.ConstructShape = function (mainFiled, startLeft, startTop) {
                        this.Squares = this.ShapeFabric.GetSquares(this.HtmlContainer, 1, 0, this.MainField, 4);
                        this.Squares[0].Left = startLeft + 1;
                        this.Squares[0].Top = startTop + 0;
                        this.Squares[1].Left = startLeft + 1;
                        this.Squares[1].Top = startTop + 1;
                        this.Squares[2].Left = startLeft + 1;
                        this.Squares[2].Top = startTop + 2;
                        this.Squares[3].Left = startLeft + 0;
                        this.Squares[3].Top = startTop + 2;
                    };
                    return JShape;
                }(ShapeBase));
                TetraShapes.JShape = JShape;
            })(TetraShapes = Squares.TetraShapes || (Squares.TetraShapes = {}));
        })(Squares = Game.Squares || (Game.Squares = {}));
    })(Game = Tetris.Game || (Tetris.Game = {}));
})(Tetris || (Tetris = {}));
//# sourceMappingURL=JShape.js.map