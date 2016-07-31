var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Tetris;
(function (Tetris) {
    var Game;
    (function (Game) {
        var TetraShapes;
        (function (TetraShapes) {
            var ZShape = (function (_super) {
                __extends(ZShape, _super);
                function ZShape() {
                    _super.apply(this, arguments);
                }
                ZShape.prototype.CanRotate = function (direction) {
                    var self = this;
                    return this.Squares.every(function (e, i, a) {
                        switch (self.Position) {
                            case 0:
                                if (i == 0) {
                                    return (e.Top < Tetris.Core.Constants.MaxMainFieldHeight - 2) && self.IsCellFree(e.Left, e.Top + 2, e.UniqueID);
                                }
                                else if (i == 3) {
                                    return (e.Left >= 2) && self.IsCellFree(e.Left - 2, e.Top, e.UniqueID);
                                }
                                else
                                    return true;
                            case 1:
                                if (i == 0) {
                                    return (e.Top >= 2) && self.IsCellFree(e.Left, e.Top - 2, e.UniqueID);
                                }
                                else if (i == 1) {
                                    return (e.Left < Tetris.Core.Constants.MaxMainFieldWidth - 2) && self.IsCellFree(e.Left + 2, e.Top, e.UniqueID);
                                }
                                else
                                    return true;
                        }
                    });
                };
                ZShape.prototype.Rotate = function (direction) {
                    var self = this;
                    if (this.CanRotate(direction)) {
                        this.Squares.forEach(function (e, i, a) {
                            switch (self.Position) {
                                case 0:
                                    if (i == 0) {
                                        e.Top += 2;
                                    }
                                    else if (i == 3) {
                                        e.Left -= 2;
                                    }
                                    break;
                                case 1:
                                    if (i == 0) {
                                        e.Top -= 2;
                                    }
                                    else if (i == 1) {
                                        e.Left += 2;
                                    }
                                    break;
                            }
                        });
                        this.Position = (this.Position > 1) ? 0 : this.Position + 1;
                        return true;
                    }
                    return false;
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
        })(TetraShapes = Game.TetraShapes || (Game.TetraShapes = {}));
    })(Game = Tetris.Game || (Tetris.Game = {}));
})(Tetris || (Tetris = {}));
//# sourceMappingURL=C:/Users/galax_000/Documents/Visual Studio 2015/Projects/Tetris/Tetris/scripts/game/tetrashapes/zshape.js.map