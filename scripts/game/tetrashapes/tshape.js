/// <reference path="../../core/emuns/backgroundcolor.ts" />
/// <reference path="../../core/fabric/monocolorshapefabric.ts" />
/// <reference path="../../core/square.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BackgroundColor = Tetris.Core.Enums.BackgroundColor;
var Square = Tetris.Core.Square;
var monoColorSquare = Tetris.Game.Squares.MonoColorSquare;
var Tetris;
(function (Tetris) {
    var Game;
    (function (Game) {
        var TetraShapes;
        (function (TetraShapes) {
            var TShape = (function (_super) {
                __extends(TShape, _super);
                function TShape() {
                    _super.apply(this, arguments);
                }
                TShape.prototype.CanRotate = function (direction) {
                    var self = this;
                    return this.Squares.every(function (e, i, a) {
                        switch (self.Position) {
                            case 0:
                                if (i == 3) {
                                    return (e.Left < Tetris.Core.Constants.MaxMainFieldWidth)
                                        && (e.Top > 0)
                                        && self.IsCellFree(e.Left + 1, e.Top - 1, e.UniqueID);
                                }
                                else
                                    return true;
                            case 1:
                                if (i == 2) {
                                    return (e.Left < Tetris.Core.Constants.MaxMainFieldWidth)
                                        && (e.Top < Tetris.Core.Constants.MaxMainFieldHeight)
                                        && self.IsCellFree(e.Left + 1, e.Top + 1, e.UniqueID);
                                }
                                else
                                    return true;
                            case 2:
                                if (i == 0) {
                                    return (e.Left > 0)
                                        && (e.Top < Tetris.Core.Constants.MaxMainFieldHeight)
                                        && self.IsCellFree(e.Left - 1, e.Top + 1, e.UniqueID);
                                }
                                else
                                    return true;
                            case 3:
                                return e.Top > 0 && e.Top < Tetris.Core.Constants.MaxMainFieldHeight
                                    && e.Left > 0 && e.Left < Tetris.Core.Constants.MaxMainFieldWidth
                                    && self.IsCellFree(e.Left, e.Top + 1, e.UniqueID)
                                    && self.IsCellFree(e.Left - 1, e.Top - 1, e.UniqueID)
                                    && self.IsCellFree(e.Left - 1, e.Top + 1, e.UniqueID);
                        }
                    });
                };
                TShape.prototype.Rotate = function (direction) {
                    var self = this;
                    if (this.CanRotate(direction)) {
                        this.Squares.forEach(function (e, i, a) {
                            switch (self.Position) {
                                case 0:
                                    if (i == 3) {
                                        e.Left++;
                                        e.Top--;
                                    }
                                    break;
                                case 1:
                                    if (i == 2) {
                                        e.Left++;
                                        e.Top++;
                                    }
                                    break;
                                case 2:
                                    if (i == 0) {
                                        e.Left--;
                                        e.Top++;
                                    }
                                    break;
                                case 3:
                                    if (i == 0) {
                                        e.Top++;
                                    }
                                    else if (i == 2) {
                                        e.Top--;
                                        e.Left--;
                                    }
                                    else if (i == 3) {
                                        e.Top++;
                                        e.Left--;
                                    }
                                    break;
                            }
                        });
                        this.Position = (this.Position = 3) ? 0 : this.Position + 1;
                        return true;
                    }
                    return false;
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
            }(Tetris.Core.ShapeBase));
            TetraShapes.TShape = TShape;
        })(TetraShapes = Game.TetraShapes || (Game.TetraShapes = {}));
    })(Game = Tetris.Game || (Tetris.Game = {}));
})(Tetris || (Tetris = {}));
//# sourceMappingURL=C:/Users/galax_000/Documents/Visual Studio 2015/Projects/Tetris/Tetris/scripts/game/tetrashapes/tshape.js.map