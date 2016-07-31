var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Tetris;
(function (Tetris) {
    var Core;
    (function (Core) {
        var Constants;
        (function (Constants) {
            Constants.MaxMainFieldWidth = 30;
            Constants.MaxMainFieldHeight = 60;
        })(Constants = Core.Constants || (Core.Constants = {}));
    })(Core = Tetris.Core || (Tetris.Core = {}));
})(Tetris || (Tetris = {}));
var Tetris;
(function (Tetris) {
    var Game;
    (function (Game) {
        var TetraShapes;
        (function (TetraShapes) {
            var IShape = (function (_super) {
                __extends(IShape, _super);
                function IShape() {
                    _super.apply(this, arguments);
                }
                IShape.prototype.CanRotate = function (direction) {
                    var canRotate = true;
                    var self = this;
                    canRotate = this.Squares.every(function (e, i, a) {
                        switch (self.Position) {
                            case 0:
                                if (i == 0) {
                                    return (e.Left > 0) && self.IsCellFree(e.Left - 1, e.Top + 1, e.UniqueID);
                                }
                                else if (i == 2) {
                                    return (e.Left < Tetris.Core.Constants.MaxMainFieldWidth)
                                        && self.IsCellFree(e.Left - 2, e.Top, e.UniqueID);
                                }
                                else if (i == 3) {
                                    return (e.Left <= Tetris.Core.Constants.MaxMainFieldWidth - 2)
                                        && (e.Top >= 2)
                                        && self.IsCellFree(e.Left - 2, e.Top - 2, e.UniqueID);
                                }
                                else
                                    return true;
                            case 1:
                                if (i == 0) {
                                    return self.IsCellFree(e.Left + 1, e.Top - 1, e.UniqueID);
                                }
                                else if (i == 2) {
                                    return (e.Top < Tetris.Core.Constants.MaxMainFieldHeight)
                                        && self.IsCellFree(e.Left - 1, e.Top + 1, e.UniqueID);
                                }
                                else if (i == 3) {
                                    return (e.Top <= Tetris.Core.Constants.MaxMainFieldHeight - 2)
                                        && self.IsCellFree(e.Left - 2, e.Top + 2, e.UniqueID);
                                }
                                break;
                        }
                        return canRotate;
                    });
                    return canRotate;
                };
                IShape.prototype.Rotate = function (direction) {
                    var self = this;
                    if (this.CanRotate(direction)) {
                        this.Squares.forEach(function (e, i, a) {
                            switch (self.Position) {
                                case 0:
                                    if (i == 0) {
                                        e.Left--;
                                        e.Top++;
                                    }
                                    else if (i == 2) {
                                        e.Left++;
                                        e.Top--;
                                    }
                                    else if (i == 3) {
                                        e.Left += 2;
                                        e.Top -= 2;
                                    }
                                    break;
                                case 1:
                                    if (i == 0) {
                                        e.Left++;
                                        e.Top--;
                                    }
                                    else if (i == 2) {
                                        e.Left--;
                                        e.Top++;
                                    }
                                    else if (i == 3) {
                                        e.Left -= 2;
                                        e.Top += 2;
                                    }
                                    break;
                            }
                        });
                        this.Position = (this.Position == 1) ? 0 : this.Position + 1;
                        return true;
                    }
                    return false;
                };
                IShape.prototype.ConstructShape = function (mainFiled, startLeft, startTop) {
                    this.Squares = this.ShapeFabric.GetSquares(this.HtmlContainer, 1, 0, this.MainField, 4);
                    this.Squares[0].Left = startLeft + 1;
                    this.Squares[0].Top = startTop + 0;
                    this.Squares[1].Left = startLeft + 1;
                    this.Squares[1].Top = startTop + 1;
                    this.Squares[2].Left = startLeft + 1;
                    this.Squares[2].Top = startTop + 2;
                    this.Squares[3].Left = startLeft + 1;
                    this.Squares[3].Top = startTop + 3;
                };
                return IShape;
            }(ShapeBase));
            TetraShapes.IShape = IShape;
        })(TetraShapes = Game.TetraShapes || (Game.TetraShapes = {}));
    })(Game = Tetris.Game || (Tetris.Game = {}));
})(Tetris || (Tetris = {}));
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
var Tetris;
(function (Tetris) {
    var Game;
    (function (Game) {
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
                OShape.prototype.Rotate = function (direction) {
                    return true;
                };
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
        })(TetraShapes = Game.TetraShapes || (Game.TetraShapes = {}));
    })(Game = Tetris.Game || (Tetris.Game = {}));
})(Tetris || (Tetris = {}));
var Tetris;
(function (Tetris) {
    var Core;
    (function (Core) {
        var ShapeBase = (function () {
            function ShapeBase(mainField, fabric, htmlParent, startLeft, startTop) {
                this.Position = 0;
                this.ShapeFabric = fabric;
                this.MainField = mainField;
                this.HtmlContainer = htmlParent;
                this.ConstructShape(mainField, startLeft || 0, startTop || 0);
            }
            ShapeBase.prototype.GetUniqueId = function () {
                if (this.Squares && this.Squares.length > 0) {
                    return this.Squares[0].UniqueID;
                }
                return 0;
            };
            ShapeBase.prototype.Move = function (direction) {
                if (!this.CanMove(direction))
                    return false;
                this.Squares.forEach(function (e, i, a) {
                    e.Move(direction);
                });
            };
            ShapeBase.prototype.CanMove = function (direction) {
                var yesItCan = true;
                var self = this;
                this.Squares.every(function (e, i, a) {
                    return e.CanMove(direction);
                });
                return yesItCan;
            };
            ShapeBase.prototype.Draw = function () {
                this.Squares.forEach(function (e, i, a) {
                    e.SetPositionHtmlElement();
                });
            };
            ShapeBase.prototype.Clear = function () {
                this.Squares.forEach(function (e, i, a) {
                    e.CleanItSelf();
                });
            };
            ShapeBase.prototype.IsCellFree = function (left, top, uniqueId) {
                var cellObj = this.MainField[left][top];
                return (cellObj == null || cellObj.UniqueID == uniqueId);
            };
            return ShapeBase;
        }());
        Core.ShapeBase = ShapeBase;
    })(Core = Tetris.Core || (Tetris.Core = {}));
})(Tetris || (Tetris = {}));
/// <reference path="../../core/shapebase.ts" />
var ShapeBase = Tetris.Core.ShapeBase;
var Tetris;
(function (Tetris) {
    var Game;
    (function (Game) {
        var TetraShapes;
        (function (TetraShapes) {
            var SShape = (function (_super) {
                __extends(SShape, _super);
                function SShape() {
                    _super.apply(this, arguments);
                }
                SShape.prototype.CanRotate = function (direction) {
                    var self = this;
                    return this.Squares.every(function (e, i, a) {
                        switch (self.Position) {
                            case 0:
                                if (i == 0) {
                                    return (e.Left >= 2) && self.IsCellFree(e.Left - 2, e.Top, e.UniqueID);
                                }
                                else if (i == 1) {
                                    return (e.Top < Tetris.Core.Constants.MaxMainFieldHeight - 2)
                                        && self.IsCellFree(e.Left, e.Top + 2, e.UniqueID);
                                }
                                else
                                    return true;
                            case 1:
                                if (i == 0) {
                                    return (e.Left < Tetris.Core.Constants.MaxMainFieldWidth - 2)
                                        && self.IsCellFree(e.Left + 2, e.Top, e.UniqueID);
                                }
                                else if (i == 1) {
                                    return (e.Top >= 2) && self.IsCellFree(e.Left, e.Top - 2, e.UniqueID);
                                }
                                else
                                    return true;
                        }
                    });
                };
                SShape.prototype.Rotate = function (direction) {
                    var self = this;
                    if (this.CanRotate(direction)) {
                        this.Squares.forEach(function (e, i, a) {
                            switch (self.Position) {
                                case 0:
                                    if (i == 0) {
                                        e.Left -= 2;
                                    }
                                    if (i == 1) {
                                        e.Top += 2;
                                    }
                                    break;
                                case 1:
                                    if (i == 0) {
                                        e.Left += 2;
                                    }
                                    if (i == 1) {
                                        e.Top -= 2;
                                    }
                                    break;
                            }
                        });
                        this.Position = (this.Position = 1) ? 0 : this.Position + 1;
                        return true;
                    }
                    return false;
                };
                SShape.prototype.ConstructShape = function (mainFiled, startLeft, startTop) {
                    this.Squares = this.ShapeFabric.GetSquares(this.HtmlContainer, 1, 0, this.MainField, 4);
                    this.Squares[0].Left = startLeft + 2;
                    this.Squares[0].Top = startTop + 0;
                    this.Squares[1].Left = startLeft + 1;
                    this.Squares[1].Top = startTop + 0;
                    this.Squares[2].Left = startLeft + 1;
                    this.Squares[2].Top = startTop + 1;
                    this.Squares[3].Left = startLeft + 0;
                    this.Squares[3].Top = startTop + 1;
                };
                return SShape;
            }(ShapeBase));
            TetraShapes.SShape = SShape;
        })(TetraShapes = Game.TetraShapes || (Game.TetraShapes = {}));
    })(Game = Tetris.Game || (Tetris.Game = {}));
})(Tetris || (Tetris = {}));
var Tetris;
(function (Tetris) {
    var Core;
    (function (Core) {
        var Enums;
        (function (Enums) {
            (function (BackgroundColor) {
                BackgroundColor[BackgroundColor["IndianRed"] = 13458524] = "IndianRed";
                BackgroundColor[BackgroundColor["LightCoral"] = 15761536] = "LightCoral";
                BackgroundColor[BackgroundColor["Salmon"] = 16416882] = "Salmon";
                BackgroundColor[BackgroundColor["DarkSalmon"] = 15308410] = "DarkSalmon";
                BackgroundColor[BackgroundColor["LightSalmon"] = 16752762] = "LightSalmon";
                BackgroundColor[BackgroundColor["Crimson"] = 14423100] = "Crimson";
                BackgroundColor[BackgroundColor["Red"] = 16711680] = "Red";
                BackgroundColor[BackgroundColor["Firebrick"] = 11674146] = "Firebrick";
                BackgroundColor[BackgroundColor["DarkRed"] = 9109504] = "DarkRed";
                // PINK HTML COLOR NAMES
                BackgroundColor[BackgroundColor["Pink"] = 16761035] = "Pink";
                BackgroundColor[BackgroundColor["LightPink"] = 16758465] = "LightPink";
                BackgroundColor[BackgroundColor["HotPink"] = 16738740] = "HotPink";
                BackgroundColor[BackgroundColor["DeepPink"] = 16716947] = "DeepPink";
                BackgroundColor[BackgroundColor["MediumVioletRed"] = 13047173] = "MediumVioletRed";
                BackgroundColor[BackgroundColor["PaleVioletRed"] = 14381203] = "PaleVioletRed";
                // ORANGE HTML COLOR NAMES
                BackgroundColor[BackgroundColor["Coral"] = 16744272] = "Coral";
                BackgroundColor[BackgroundColor["Tomato"] = 16737095] = "Tomato";
                BackgroundColor[BackgroundColor["OrangeRed"] = 16729344] = "OrangeRed";
                BackgroundColor[BackgroundColor["DarkOrange"] = 16747520] = "DarkOrange";
                BackgroundColor[BackgroundColor["Orange"] = 16753920] = "Orange";
                // YELLOW HTML COLOR NAMES
                BackgroundColor[BackgroundColor["Gold"] = 16766720] = "Gold";
                BackgroundColor[BackgroundColor["Yellow"] = 16776960] = "Yellow";
                BackgroundColor[BackgroundColor["LightYellow"] = 16777184] = "LightYellow";
                BackgroundColor[BackgroundColor["Lemonchiffon"] = 16775885] = "Lemonchiffon";
                BackgroundColor[BackgroundColor["LightGoldenrodYellow"] = 16448210] = "LightGoldenrodYellow";
                BackgroundColor[BackgroundColor["Papayawhip"] = 16773077] = "Papayawhip";
                BackgroundColor[BackgroundColor["Moccasin"] = 16770229] = "Moccasin";
                BackgroundColor[BackgroundColor["Peachpuff"] = 16767673] = "Peachpuff";
                BackgroundColor[BackgroundColor["PaleGoldenrod"] = 15657130] = "PaleGoldenrod";
                BackgroundColor[BackgroundColor["Khaki"] = 15787660] = "Khaki";
                BackgroundColor[BackgroundColor["DarkKhaki"] = 12433259] = "DarkKhaki";
                // PURPLE HTML COLOR NAMES
                BackgroundColor[BackgroundColor["Lavender"] = 15132410] = "Lavender";
                BackgroundColor[BackgroundColor["Thistle"] = 14204888] = "Thistle";
                BackgroundColor[BackgroundColor["Plum"] = 14524637] = "Plum";
                BackgroundColor[BackgroundColor["Violet"] = 15631086] = "Violet";
                BackgroundColor[BackgroundColor["Orchid"] = 14315734] = "Orchid";
                BackgroundColor[BackgroundColor["Fuchsia"] = 16711935] = "Fuchsia";
                BackgroundColor[BackgroundColor["Magenta"] = 16711935] = "Magenta";
                BackgroundColor[BackgroundColor["MediumOrchid"] = 12211667] = "MediumOrchid";
                BackgroundColor[BackgroundColor["MediumPurple"] = 9662683] = "MediumPurple";
                BackgroundColor[BackgroundColor["RebeccaPurple"] = 6697881] = "RebeccaPurple";
                BackgroundColor[BackgroundColor["BlueViolet"] = 9055202] = "BlueViolet";
                BackgroundColor[BackgroundColor["DarkViolet"] = 9699539] = "DarkViolet";
                BackgroundColor[BackgroundColor["DarkOrchid"] = 10040012] = "DarkOrchid";
                BackgroundColor[BackgroundColor["DarkMagenta"] = 9109643] = "DarkMagenta";
                BackgroundColor[BackgroundColor["Purple"] = 8388736] = "Purple";
                BackgroundColor[BackgroundColor["Indigo"] = 4915330] = "Indigo";
                BackgroundColor[BackgroundColor["SlateBlue"] = 6970061] = "SlateBlue";
                BackgroundColor[BackgroundColor["DarkSlateBlue"] = 4734347] = "DarkSlateBlue";
                // GREEN HTML COLOR NAMES
                BackgroundColor[BackgroundColor["GreenYellow"] = 11403055] = "GreenYellow";
                BackgroundColor[BackgroundColor["Chartreuse"] = 8388352] = "Chartreuse";
                BackgroundColor[BackgroundColor["LawnGreen"] = 8190976] = "LawnGreen";
                BackgroundColor[BackgroundColor["Lime"] = 65280] = "Lime";
                BackgroundColor[BackgroundColor["LimeGreen"] = 3329330] = "LimeGreen";
                BackgroundColor[BackgroundColor["PaleGreen"] = 10025880] = "PaleGreen";
                BackgroundColor[BackgroundColor["LightGreen"] = 9498256] = "LightGreen";
                BackgroundColor[BackgroundColor["MediumSpringGreen"] = 64154] = "MediumSpringGreen";
                BackgroundColor[BackgroundColor["SpringGreen"] = 65407] = "SpringGreen";
                BackgroundColor[BackgroundColor["MediumSeaGreen"] = 3978097] = "MediumSeaGreen";
                BackgroundColor[BackgroundColor["SeaGreen"] = 3050327] = "SeaGreen";
                BackgroundColor[BackgroundColor["ForestGreen"] = 2263842] = "ForestGreen";
                BackgroundColor[BackgroundColor["Green"] = 32768] = "Green";
                BackgroundColor[BackgroundColor["DarkGreen"] = 25600] = "DarkGreen";
                BackgroundColor[BackgroundColor["YellowGreen"] = 10145074] = "YellowGreen";
                BackgroundColor[BackgroundColor["OliveDrab"] = 7048739] = "OliveDrab";
                BackgroundColor[BackgroundColor["Olive"] = 8421376] = "Olive";
                BackgroundColor[BackgroundColor["DarkoliveGreen"] = 5597999] = "DarkoliveGreen";
                BackgroundColor[BackgroundColor["MediumAquamarine"] = 6737322] = "MediumAquamarine";
                BackgroundColor[BackgroundColor["DarkSeaGreen"] = 9419915] = "DarkSeaGreen";
                BackgroundColor[BackgroundColor["LightSeaGreen"] = 2142890] = "LightSeaGreen";
                BackgroundColor[BackgroundColor["DarkCyan"] = 35723] = "DarkCyan";
                BackgroundColor[BackgroundColor["Teal"] = 32896] = "Teal";
                // BLUE HTML COLOR NAMES
                BackgroundColor[BackgroundColor["Aqua"] = 65535] = "Aqua";
                BackgroundColor[BackgroundColor["Cyan"] = 65535] = "Cyan";
                BackgroundColor[BackgroundColor["LightCyan"] = 14745599] = "LightCyan";
                BackgroundColor[BackgroundColor["PaleTurquoise"] = 11529966] = "PaleTurquoise";
                BackgroundColor[BackgroundColor["Aquamarine"] = 8388564] = "Aquamarine";
                BackgroundColor[BackgroundColor["Turquoise"] = 4251856] = "Turquoise";
                BackgroundColor[BackgroundColor["MediumTurquoise"] = 4772300] = "MediumTurquoise";
                BackgroundColor[BackgroundColor["DarkTurquoise"] = 52945] = "DarkTurquoise";
                BackgroundColor[BackgroundColor["CadetBlue"] = 6266528] = "CadetBlue";
                BackgroundColor[BackgroundColor["SteelBlue"] = 4620980] = "SteelBlue";
                BackgroundColor[BackgroundColor["LightSteelBlue"] = 11584734] = "LightSteelBlue";
                BackgroundColor[BackgroundColor["PowderBlue"] = 11591910] = "PowderBlue";
                BackgroundColor[BackgroundColor["LightBlue"] = 11393254] = "LightBlue";
                BackgroundColor[BackgroundColor["SkyBlue"] = 8900331] = "SkyBlue";
                BackgroundColor[BackgroundColor["LightskyBlue"] = 8900346] = "LightskyBlue";
                BackgroundColor[BackgroundColor["DeepskyBlue"] = 49151] = "DeepskyBlue";
                BackgroundColor[BackgroundColor["DodgerBlue"] = 2003199] = "DodgerBlue";
                BackgroundColor[BackgroundColor["CornflowerBlue"] = 6591981] = "CornflowerBlue";
                BackgroundColor[BackgroundColor["MediumSlateBlue"] = 8087790] = "MediumSlateBlue";
                BackgroundColor[BackgroundColor["RoyalBlue"] = 4286945] = "RoyalBlue";
                BackgroundColor[BackgroundColor["Blue"] = 255] = "Blue";
                BackgroundColor[BackgroundColor["MediumBlue"] = 205] = "MediumBlue";
                BackgroundColor[BackgroundColor["DarkBlue"] = 139] = "DarkBlue";
                BackgroundColor[BackgroundColor["Navy"] = 128] = "Navy";
                BackgroundColor[BackgroundColor["MidnightBlue"] = 1644912] = "MidnightBlue";
                // BROWN HTML COLOR NAMES
                BackgroundColor[BackgroundColor["Cornsilk"] = 16775388] = "Cornsilk";
                BackgroundColor[BackgroundColor["Blanchedalmond"] = 16772045] = "Blanchedalmond";
                BackgroundColor[BackgroundColor["Bisque"] = 16770244] = "Bisque";
                BackgroundColor[BackgroundColor["NavajoWhite"] = 16768685] = "NavajoWhite";
                BackgroundColor[BackgroundColor["Wheat"] = 16113331] = "Wheat";
                BackgroundColor[BackgroundColor["BurlyWood"] = 14596231] = "BurlyWood";
                BackgroundColor[BackgroundColor["Tan"] = 13808780] = "Tan";
                BackgroundColor[BackgroundColor["RosyBrown"] = 12357519] = "RosyBrown";
                BackgroundColor[BackgroundColor["SandyBrown"] = 16032864] = "SandyBrown";
                BackgroundColor[BackgroundColor["Goldenrod"] = 14329120] = "Goldenrod";
                BackgroundColor[BackgroundColor["DarkGoldenrod"] = 12092939] = "DarkGoldenrod";
                BackgroundColor[BackgroundColor["Peru"] = 13468991] = "Peru";
                BackgroundColor[BackgroundColor["Chocolate"] = 13789470] = "Chocolate";
                BackgroundColor[BackgroundColor["SaddleBrown"] = 9127187] = "SaddleBrown";
                BackgroundColor[BackgroundColor["Sienna"] = 10506797] = "Sienna";
                BackgroundColor[BackgroundColor["Brown"] = 10824234] = "Brown";
                BackgroundColor[BackgroundColor["Maroon"] = 8388608] = "Maroon";
                // WHITE HTML COLOR NAMES
                BackgroundColor[BackgroundColor["White"] = 16777215] = "White";
                BackgroundColor[BackgroundColor["Snow"] = 16775930] = "Snow";
                BackgroundColor[BackgroundColor["Honeydew"] = 15794160] = "Honeydew";
                BackgroundColor[BackgroundColor["MintCream"] = 16121850] = "MintCream";
                BackgroundColor[BackgroundColor["Azure"] = 15794175] = "Azure";
                BackgroundColor[BackgroundColor["AliceBlue"] = 15792383] = "AliceBlue";
                BackgroundColor[BackgroundColor["GhostWhite"] = 16316671] = "GhostWhite";
                BackgroundColor[BackgroundColor["WhiteSmoke"] = 16119285] = "WhiteSmoke";
                BackgroundColor[BackgroundColor["Seashell"] = 16774638] = "Seashell";
                BackgroundColor[BackgroundColor["Beige"] = 16119260] = "Beige";
                BackgroundColor[BackgroundColor["Oldlace"] = 16643558] = "Oldlace";
                BackgroundColor[BackgroundColor["FloralWhite"] = 16775920] = "FloralWhite";
                BackgroundColor[BackgroundColor["Ivory"] = 16777200] = "Ivory";
                BackgroundColor[BackgroundColor["AntiqueWhite"] = 16444375] = "AntiqueWhite";
                BackgroundColor[BackgroundColor["Linen"] = 16445670] = "Linen";
                BackgroundColor[BackgroundColor["LavenderBlush"] = 16773365] = "LavenderBlush";
                BackgroundColor[BackgroundColor["Mistyrose"] = 16770273] = "Mistyrose";
                // GRAY HTML COLOR NAMES
                BackgroundColor[BackgroundColor["Gainsboro"] = 14474460] = "Gainsboro";
                BackgroundColor[BackgroundColor["LightGray"] = 13882323] = "LightGray";
                BackgroundColor[BackgroundColor["Silver"] = 12632256] = "Silver";
                BackgroundColor[BackgroundColor["DarkGray"] = 11119017] = "DarkGray";
                BackgroundColor[BackgroundColor["Gray"] = 8421504] = "Gray";
                BackgroundColor[BackgroundColor["DimGray"] = 6908265] = "DimGray";
                BackgroundColor[BackgroundColor["LightSlateGray"] = 7833753] = "LightSlateGray";
                BackgroundColor[BackgroundColor["SlateGray"] = 7372944] = "SlateGray";
                BackgroundColor[BackgroundColor["DarkSlateGray"] = 3100495] = "DarkSlateGray";
                BackgroundColor[BackgroundColor["Black"] = 0] = "Black";
            })(Enums.BackgroundColor || (Enums.BackgroundColor = {}));
            var BackgroundColor = Enums.BackgroundColor;
        })(Enums = Core.Enums || (Core.Enums = {}));
    })(Core = Tetris.Core || (Tetris.Core = {}));
})(Tetris || (Tetris = {}));
var BackGroundColor = Tetris.Core.Enums.BackgroundColor;
var MonoColorSquare = Tetris.Game.Squares.MonoColorSquare;
var Tetris;
(function (Tetris) {
    var Core;
    (function (Core) {
        var Fabric;
        (function (Fabric) {
            var MonocolorShapeFabric = (function () {
                function MonocolorShapeFabric() {
                }
                MonocolorShapeFabric.prototype.GetSquares = function (parentHtml, initLeft, initTop, mainField, amount) {
                    var backgroundColorIndex = Math.round((Math.random() * 141));
                    var enumIndex = 0;
                    var color;
                    for (var i in BackGroundColor) {
                        if (enumIndex === backgroundColorIndex) {
                            color = parseInt(i);
                            break;
                        }
                        enumIndex++;
                    }
                    var uniqueID = Math.random();
                    var squares = new Array(amount);
                    for (var i = 0; i < amount; i++) {
                        squares[i] = new MonoColorSquare(color, parentHtml, initLeft, initTop, uniqueID, mainField);
                    }
                    return squares;
                };
                return MonocolorShapeFabric;
            }());
            Fabric.MonocolorShapeFabric = MonocolorShapeFabric;
        })(Fabric = Core.Fabric || (Core.Fabric = {}));
    })(Core = Tetris.Core || (Tetris.Core = {}));
})(Tetris || (Tetris = {}));
var Tetris;
(function (Tetris) {
    var Core;
    (function (Core) {
        var Square = (function () {
            function Square(parentHtml, initLeft, initTop, uniqueID, mainField) {
                this.parentHtml = parentHtml;
                this.MainField = mainField;
                this.Left = initLeft;
                this.Top = initTop;
                this.UniqueID = uniqueID;
            }
            Square.prototype.SetPositionHtmlElement = function () {
                this.MainField[this.Left][this.Top] = this;
                $(this.HtmlElement)
                    .css('left', this.Left * 30 + 'px')
                    .css('top', this.Top * 30 + 'px')
                    .show();
            };
            Square.prototype.CleanItSelf = function (remove) {
                this.MainField[this.Left][this.Top] = null;
                if (remove && remove == true) {
                    $(this.HtmlElement).remove();
                }
            };
            Square.prototype.Move = function (direction) {
                var result = true;
                try {
                    this.CleanItSelf();
                    switch (direction) {
                        case 1 /* Left */:
                            this.Left--;
                            break;
                        case 2 /* Right */:
                            this.Left++;
                            break;
                        case 3 /* Down */:
                            this.Top++;
                            break;
                    }
                    this.SetPositionHtmlElement();
                    return result;
                }
                catch (e) {
                    console.log(e);
                    result = false;
                }
                finally {
                    return result;
                }
            };
            Square.prototype.MoveTo = function (left, top) {
                this.CleanItSelf();
                this.Left = left;
                this.Top = top;
                this.SetPositionHtmlElement();
            };
            Square.prototype.CanMove = function (direction) {
                switch (direction) {
                    case 1 /* Left */:
                        return this.CanMoveTo(this.Left - 1, this.Top);
                    case 2 /* Right */:
                        return this.CanMoveTo(this.Left + 1, this.Top);
                    case 3 /* Down */:
                        return this.CanMoveTo(this.Left, this.Top + 1);
                }
            };
            Square.prototype.CanMoveTo = function (left, top) {
                return left >= 0
                    && (left < Core.Constants.MaxMainFieldWidth)
                    && (top >= 0) && (top < Core.Constants.MaxMainFieldHeight)
                    && (this.MainField[left][top] == null || this.MainField[left][top].UniqueID == this.UniqueID);
            };
            return Square;
        }());
        Core.Square = Square;
    })(Core = Tetris.Core || (Tetris.Core = {}));
})(Tetris || (Tetris = {}));
/// <reference path="../../core/emuns/backgroundcolor.ts" />
/// <reference path="../../core/fabric/monocolorshapefabric.ts" />
/// <reference path="../../core/square.ts" />
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
var Tetris;
(function (Tetris) {
    var Game;
    (function (Game) {
        var Squares;
        (function (Squares) {
            var MonoColorSquare = (function (_super) {
                __extends(MonoColorSquare, _super);
                function MonoColorSquare(color, parentHtml, initLeft, initTop, uniqueID, mainField) {
                    _super.call(this, parentHtml, initLeft, initTop, uniqueID, mainField);
                    this.BackgroundColor = color;
                    this.InstatiateHtml();
                }
                MonoColorSquare.prototype.InstatiateHtml = function () {
                    this.HtmlElement = $('<div>')
                        .addClass('sqr')
                        .css('background-color', '#' + this.BackgroundColor.toString(16))
                        .css('display', 'none')
                        .appendTo($(this.parentHtml));
                };
                return MonoColorSquare;
            }(Tetris.Core.Square));
            Squares.MonoColorSquare = MonoColorSquare;
        })(Squares = Game.Squares || (Game.Squares = {}));
    })(Game = Tetris.Game || (Tetris.Game = {}));
})(Tetris || (Tetris = {}));
/// <reference path="core/fabric/tetraminoshapefabric.ts" />
/// <reference path="core/fabric/monocolorshapefabric.ts" />
/// <reference path="core/fabric/ishapefabric.ts" />
/// <reference path="core/fabric/isquarefabric.ts" />
/// <reference path="core/emuns/keycodes.ts" />
/// <reference path="core/emuns/backgroundcolor.ts" />
/// <reference path="core/emuns/direction.ts" />
/// <reference path="core/emuns/rotates.ts" />
/// <reference path="core/contants/commonconstants.ts" />
/// <reference path="core/shapebase.ts" />
/// <reference path="core/ishape.ts" />
/// <reference path="core/isquare.ts" />
/// <reference path="core/shapebase.ts" />
/// <reference path="core/square.ts" />
/// <reference path="game/squares/monocolorsquare.ts" />
/// <reference path="game/tetrashapes/ishape.ts" />
/// <reference path="game/tetrashapes/lshape.ts" />
/// <reference path="game/tetrashapes/oshape.ts" />
/// <reference path="game/tetrashapes/sshape.ts" />
/// <reference path="game/tetrashapes/tshape.ts" />
/// <reference path="game/tetrashapes/zshape.ts" />
var TetraminoShapeFabric = Tetris.Core.Fabric.TetraminoShapeFabric;
var SquareFabric = Tetris.Core.Fabric.MonocolorShapeFabric;
var SquareBase = Tetris.Core.ShapeBase;
var Tetris;
(function (Tetris) {
    var Game;
    (function (Game_1) {
        var Game = (function () {
            function Game() {
                this.MainField = new Square[Tetris.Core.Constants.MaxMainFieldWidth][Tetris.Core.Constants.MaxMainFieldHeight];
                this._squareFabric = new SquareFabric();
                this._shapeFabric = new TetraminoShapeFabric(this._squareFabric);
                this._interval = 1000;
                this._htmlContainer = $('#MainContainer');
                this._currentShape = this.GenerateNewShape();
                var self = this;
                $().keypress(function (e) { self.OnKeyPress(e); });
            }
            Game.prototype.StartGame = function () {
                var _this = this;
                this._timerHandle = setInterval(this._interval, function (f) {
                    _this.ActionOnTimer();
                });
            };
            Game.prototype.StopGame = function () {
                if (this._timerHandle && this._timerHandle !== null) {
                    clearInterval(this._timerHandle);
                }
            };
            Game.prototype.ActionOnTimer = function () {
                if (!this.MoveShapeDown()) {
                    var lines = this.GetFilledLines();
                    if (lines.length > 0) {
                        this.RemoveLines(lines);
                        this.ShiftDownCollectedSquares(lines[0], lines[lines.length - 1]);
                    }
                    this._currentShape = this.GenerateNewShape();
                }
            };
            Game.prototype.GenerateNewShape = function () {
                return this._shapeFabric.GetShape(this._htmlContainer, Math.round(Tetris.Core.Constants.MaxMainFieldWidth / 2) - 2, 0, this.MainField);
            };
            Game.prototype.IsGameOver = function () {
                return true;
            };
            Game.prototype.GetFilledLines = function () {
                var lines = new Array();
                var isFullFilled;
                for (var y = Tetris.Core.Constants.MaxMainFieldHeight - 1; y > 0; y--) {
                    var line = this.MainField[y];
                    isFullFilled = line.every(function (e, i, a) {
                        return e !== null;
                    });
                    if (isFullFilled) {
                        lines.push(y);
                    }
                }
                return lines;
            };
            Game.prototype.MoveShapeDown = function () {
                if (this._currentShape !== null)
                    return this._currentShape.Move(3 /* Down */);
                return false;
            };
            Game.prototype.RemoveLines = function (lines) {
                if (lines != null) {
                    var self_1 = this;
                    lines.forEach(function (e, i, a) {
                        self_1.MainField[e].forEach(function (s, si, sq) {
                            s.CleanItSelf(true);
                        });
                    });
                }
            };
            Game.prototype.ShiftDownCollectedSquares = function (fromLine, toLine) {
                for (var y = fromLine; y <= 0; y--) {
                    for (var x = 0; x < Tetris.Core.Constants.MaxMainFieldWidth; x++) {
                        var obj = this.MainField[x][y];
                        if (obj.UniqueID !== this._currentShape.GetUniqueId() && obj.CanMoveTo(obj.Left, toLine - fromLine + y)) {
                            obj.MoveTo(obj.Left, toLine - fromLine + y);
                        }
                    }
                }
            };
            Game.prototype.OnKeyPress = function (e) {
                switch (e.which) {
                    case 37 /* LEFT_ARROW */:
                        this._currentShape.Move(1 /* Left */);
                        break;
                    case 39 /* RIGHT_ARROW */:
                        this._currentShape.Move(2 /* Right */);
                        break;
                    case 38 /* UP_ARROW */:
                        this._currentShape.Rotate(1 /* TurnOnLeft */);
                        break;
                    case 40 /* DOWN_ARROW */:
                        this._currentShape.Move(3 /* Down */);
                        break;
                    case 32 /* SPACEBAR */:
                        this._currentShape.Move(3 /* Down */);
                        break;
                }
            };
            return Game;
        }());
        Game_1.Game = Game;
    })(Game = Tetris.Game || (Tetris.Game = {}));
})(Tetris || (Tetris = {}));
//# sourceMappingURL=C:/Users/galax_000/Documents/Visual Studio 2015/Projects/Tetris/Tetris/scripts/tetris.js.map