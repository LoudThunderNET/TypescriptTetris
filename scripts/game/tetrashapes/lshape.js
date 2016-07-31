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
            var LShape = (function (_super) {
                __extends(LShape, _super);
                function LShape() {
                    _super.apply(this, arguments);
                }
                LShape.prototype.CanRotate = function (direction) {
                    var self = this;
                    return this.Squares.every(function (e, i, a) {
                        switch (self.Position) {
                            case 0:
                                if (i == 0) {
                                    return self.IsCellFree(e.Left + 1, e.Top + 1, e.UniqueID);
                                }
                                else if (i == 2) {
                                    return (e.Left > 0) && self.IsCellFree(e.Left - 1, e.Top - 1, e.UniqueID);
                                }
                                else if (i == 3) {
                                    return (e.Left > 2) && self.IsCellFree(e.Left - 2, e.Top, e.UniqueID);
                                }
                                else
                                    return;
                            case 1:
                                if (i == 0) {
                                    return self.IsCellFree(e.Left - 1, e.Top + 1, e.UniqueID);
                                }
                                else if (i == 2) {
                                    return (e.Top > 0) && self.IsCellFree(e.Left + 1, e.Top - 1, e.UniqueID);
                                }
                                else if (i == 3) {
                                    return (e.Top >= 2) && self.IsCellFree(e.Left, e.Top - 2, e.UniqueID);
                                }
                                else
                                    return;
                            case 2:
                                if (i == 0) {
                                    return self.IsCellFree(e.Left - 1, e.Top - 1, e.UniqueID);
                                }
                                else if (i == 2) {
                                    return (e.Left < Tetris.Core.Constants.MaxMainFieldWidth) && self.IsCellFree(e.Left + 1, e.Top + 1, e.UniqueID);
                                }
                                else if (i == 3) {
                                    return (e.Left <= Tetris.Core.Constants.MaxMainFieldWidth - 2) && self.IsCellFree(e.Left + 2, e.Top, e.UniqueID);
                                }
                                else
                                    return;
                            case 3:
                                if (i == 0) {
                                    return self.IsCellFree(e.Left + 1, e.Top - 1, e.UniqueID);
                                }
                                else if (i == 2) {
                                    return (e.Top < Tetris.Core.Constants.MaxMainFieldHeight) && self.IsCellFree(e.Left - 1, e.Top + 1, e.UniqueID);
                                }
                                else if (i == 3) {
                                    return (e.Top <= Tetris.Core.Constants.MaxMainFieldHeight - 2) && self.IsCellFree(e.Left, e.Top + 2, e.UniqueID);
                                }
                                else
                                    return;
                        }
                    });
                };
                LShape.prototype.Rotate = function (direction) {
                    var self = this;
                    if (this.CanRotate(direction)) {
                        this.Squares.forEach(function (e, i, a) {
                            switch (self.Position) {
                                case 0:
                                    if (i == 0) {
                                        e.Left++;
                                        e.Top++;
                                    }
                                    else if (i == 2) {
                                        e.Left--;
                                        e.Top--;
                                    }
                                    else if (i == 3) {
                                        e.Left -= 2;
                                    }
                                    break;
                                case 1:
                                    if (i == 0) {
                                        e.Left--;
                                        e.Top++;
                                    }
                                    else if (i == 2) {
                                        e.Left++;
                                        e.Top--;
                                    }
                                    else if (i == 3) {
                                        e.Top -= 2;
                                    }
                                    break;
                                case 2:
                                    if (i == 0) {
                                        e.Left--;
                                        e.Top--;
                                    }
                                    else if (i == 2) {
                                        e.Left++;
                                        e.Top++;
                                    }
                                    else if (i == 3) {
                                        e.Left += 2;
                                    }
                                    break;
                                case 3:
                                    if (i == 0) {
                                        e.Left++;
                                        e.Top--;
                                    }
                                    else if (i == 2) {
                                        e.Left--;
                                        e.Top++;
                                    }
                                    else if (i == 3) {
                                        e.Top += 2;
                                    }
                                    break;
                            }
                        });
                        this.Position = (this.Position = 3) ? 0 : this.Position + 1;
                        return true;
                    }
                    return false;
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
        })(TetraShapes = Game.TetraShapes || (Game.TetraShapes = {}));
    })(Game = Tetris.Game || (Tetris.Game = {}));
})(Tetris || (Tetris = {}));
//# sourceMappingURL=C:/Users/galax_000/Documents/Visual Studio 2015/Projects/Tetris/Tetris/scripts/game/tetrashapes/lshape.js.map