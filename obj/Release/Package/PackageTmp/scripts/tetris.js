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
            Constants.MaxMainFieldWidth = 15;
            Constants.MaxMainFieldHeight = 25;
            Constants.BonusForRemovedLine = 100;
            Constants.BonusForNewShape = 15;
            Constants.BonusForNewLevel = 50;
            Constants.ThreshouldNewLevel = 5;
        })(Constants = Core.Constants || (Core.Constants = {}));
    })(Core = Tetris.Core || (Tetris.Core = {}));
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
                BackgroundColor[BackgroundColor["Pink"] = 16761035] = "Pink";
                BackgroundColor[BackgroundColor["LightPink"] = 16758465] = "LightPink";
                BackgroundColor[BackgroundColor["HotPink"] = 16738740] = "HotPink";
                BackgroundColor[BackgroundColor["DeepPink"] = 16716947] = "DeepPink";
                BackgroundColor[BackgroundColor["MediumVioletRed"] = 13047173] = "MediumVioletRed";
                BackgroundColor[BackgroundColor["PaleVioletRed"] = 14381203] = "PaleVioletRed";
                BackgroundColor[BackgroundColor["Coral"] = 16744272] = "Coral";
                BackgroundColor[BackgroundColor["Tomato"] = 16737095] = "Tomato";
                BackgroundColor[BackgroundColor["OrangeRed"] = 16729344] = "OrangeRed";
                BackgroundColor[BackgroundColor["DarkOrange"] = 16747520] = "DarkOrange";
                BackgroundColor[BackgroundColor["Orange"] = 16753920] = "Orange";
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
var Tetris;
(function (Tetris) {
    var Core;
    (function (Core) {
        var ShapeBase = (function () {
            function ShapeBase(mainField, fabric, htmlParent, startLeft, startTop) {
                this.Position = 0;
                this.MaxAvailablePositions = 0;
                this.ShapeFabric = fabric;
                this.MainField = mainField;
                this.HtmlContainer = htmlParent;
                this.ConstructShape(mainField, startLeft || 0, startTop || 0);
            }
            ShapeBase.prototype.Rotate = function (direction) {
                var self = this;
                if (this.CanRotate(direction)) {
                    this.Squares.forEach(function (e, i, a) {
                        e.CleanItSelf();
                    });
                    this.ChangePositionOnRotate(direction);
                    this.Position = (this.Position >= this.MaxAvailablePositions) ? 0 : this.Position + 1;
                    this.Squares.forEach(function (e, i, a) {
                        e.SetPositionHtmlElement();
                    });
                    return true;
                }
                return false;
            };
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
                    e.CleanItSelf();
                });
                this.Squares.forEach(function (e, i, a) {
                    e.ChangePoisition(direction);
                });
                this.Squares.forEach(function (e, i, a) {
                    e.SetPositionHtmlElement();
                });
                return true;
            };
            ShapeBase.prototype.CanMove = function (direction) {
                var self = this;
                var yesItCan = this.Squares.every(function (e, i, a) {
                    return e.CanMove(direction);
                });
                return yesItCan;
            };
            ShapeBase.prototype.Draw = function () {
                var self = this;
                var canDraw = this.Squares.every(function (e, i, a) {
                    return self.IsCellFree(e.Left, e.Top, e.UniqueID);
                });
                if (canDraw) {
                    this.Squares.forEach(function (e, i, a) {
                        e.SetPositionHtmlElement();
                    });
                }
                return canDraw;
            };
            ShapeBase.prototype.Clear = function (remove) {
                this.Squares.forEach(function (e, i, a) {
                    e.CleanItSelf(remove);
                });
            };
            ShapeBase.prototype.IsCellFree = function (left, top, uniqueId) {
                var cellObj = this.MainField[top][left];
                return (cellObj == null || cellObj.UniqueID == uniqueId);
            };
            return ShapeBase;
        }());
        Core.ShapeBase = ShapeBase;
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
                this.MainField[this.Top][this.Left] = this;
                $(this.HtmlElement)
                    .css('left', this.Left * 30 + 'px')
                    .css('top', this.Top * 30 + 'px')
                    .show();
            };
            Square.prototype.CleanItSelf = function (remove) {
                this.MainField[this.Top][this.Left] = null;
                if (remove && remove == true) {
                    $(this.HtmlElement).remove();
                }
            };
            Square.prototype.ChangePoisition = function (direction) {
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
                    && (this.MainField[top][left] == null || this.MainField[top][left].UniqueID == this.UniqueID);
            };
            return Square;
        }());
        Core.Square = Square;
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
                    var heximalColor = this.BackgroundColor.toString(16);
                    this.HtmlElement = $('<div>')
                        .addClass('sqr')
                        .css('background-color', '#' + '000000'.substr(0, 6 - heximalColor.length) + heximalColor)
                        .css('display', 'none')
                        .appendTo($(this.parentHtml));
                };
                return MonoColorSquare;
            }(Tetris.Core.Square));
            Squares.MonoColorSquare = MonoColorSquare;
        })(Squares = Game.Squares || (Game.Squares = {}));
    })(Game = Tetris.Game || (Tetris.Game = {}));
})(Tetris || (Tetris = {}));
var ShapeBase = Tetris.Core.ShapeBase;
var Tetris;
(function (Tetris) {
    var Game;
    (function (Game) {
        var Squares;
        (function (Squares) {
            var TetraShapes;
            (function (TetraShapes) {
                var SShape = (function (_super) {
                    __extends(SShape, _super);
                    function SShape(mainField, fabric, htmlParent, startLeft, startTop) {
                        _super.call(this, mainField, fabric, htmlParent, startLeft, startTop);
                        this.MaxAvailablePositions = 1;
                    }
                    SShape.prototype.CanRotate = function (direction) {
                        var sq0 = this.Squares[0];
                        var sq1 = this.Squares[1];
                        switch (this.Position) {
                            case 0:
                                return (sq0.Left >= 2) && this.IsCellFree(sq0.Left - 2, sq0.Top, sq0.UniqueID)
                                    && (sq1.Top < Tetris.Core.Constants.MaxMainFieldHeight - 2) && this.IsCellFree(sq1.Left, sq1.Top + 2, sq1.UniqueID);
                            case 1:
                                return (sq0.Left < Tetris.Core.Constants.MaxMainFieldWidth - 2) && this.IsCellFree(sq0.Left + 2, sq0.Top, sq0.UniqueID)
                                    && (sq1.Top >= 2) && this.IsCellFree(sq1.Left, sq1.Top - 2, sq1.UniqueID);
                        }
                    };
                    SShape.prototype.ChangePositionOnRotate = function (direction) {
                        switch (this.Position) {
                            case 0:
                                this.Squares[0].Left -= 2;
                                this.Squares[1].Top += 2;
                                break;
                            case 1:
                                this.Squares[0].Left += 2;
                                this.Squares[1].Top -= 2;
                                break;
                        }
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
            })(TetraShapes = Squares.TetraShapes || (Squares.TetraShapes = {}));
        })(Squares = Game.Squares || (Game.Squares = {}));
    })(Game = Tetris.Game || (Tetris.Game = {}));
})(Tetris || (Tetris = {}));
var BackGroundColor = Tetris.Core.Enums.BackgroundColor;
var Tetris;
(function (Tetris) {
    var Game;
    (function (Game) {
        var Fabric;
        (function (Fabric) {
            var MonocolorShapeFabric = (function () {
                function MonocolorShapeFabric() {
                }
                MonocolorShapeFabric.prototype.GetSquares = function (parentHtml, initLeft, initTop, mainField, amount) {
                    var backgroundColorIndex = Math.round((Math.random() * 135));
                    var enumIndex = 0;
                    var color;
                    for (var i in BackGroundColor) {
                        if (enumIndex === backgroundColorIndex) {
                            color = parseInt(i);
                            if (!isNaN(color)) {
                                break;
                            }
                        }
                        enumIndex++;
                    }
                    var uniqueID = Math.random();
                    var squares = new Array(amount);
                    for (var i = 0; i < amount; i++) {
                        squares[i] = new MonoColorSquare(color, parentHtml, initLeft, initTop, uniqueID, mainField);
                        squares[i].Index = i;
                    }
                    return squares;
                };
                return MonocolorShapeFabric;
            }());
            Fabric.MonocolorShapeFabric = MonocolorShapeFabric;
        })(Fabric = Game.Fabric || (Game.Fabric = {}));
    })(Game = Tetris.Game || (Tetris.Game = {}));
})(Tetris || (Tetris = {}));
/// <reference path="core/contants/commonconstants.ts" />
/// <reference path="game/squares/monocolorsquare.ts" />
/// <reference path="game/squares/tetrashapes/sshape.ts" />
/// <reference path="game/fabric/monocolorshapefabric.ts" />
var SquareFabric = Tetris.Game.Fabric.MonocolorShapeFabric;
var SquareBase = Tetris.Core.ShapeBase;
var MonoColorSquare = Tetris.Game.Squares.MonoColorSquare;
var Tetris;
(function (Tetris) {
    var Game;
    (function (Game) {
        var TetrisGame = (function () {
            function TetrisGame() {
                this._score = 0;
                this._scoreContainerSelector = 'scopeContainer';
                this._mainContainerSelector = 'MainContainer';
                this._gamePaused = false;
                this.MainField = [];
                for (var i = 0; i < Tetris.Core.Constants.MaxMainFieldHeight; i++) {
                    this.MainField.push(new Array(Tetris.Core.Constants.MaxMainFieldWidth));
                    for (var j = 0; j < Tetris.Core.Constants.MaxMainFieldWidth; j++) {
                        this.MainField[i][j] = null;
                    }
                }
                this._squareFabric = new SquareFabric();
                this._shapeFabric = new Tetris.Game.Fabric.TetraminoShapeFabric(this._squareFabric);
                this._interval = 1000;
                this._htmlContainer = $('#' + this._mainContainerSelector);
                if (this._htmlContainer && this._htmlContainer !== null) {
                    $(this._htmlContainer).width(Tetris.Core.Constants.MaxMainFieldWidth * 30);
                    $(this._htmlContainer).height(Tetris.Core.Constants.MaxMainFieldHeight * 30);
                }
                $('#' + this._scoreContainerSelector).css('left', Tetris.Core.Constants.MaxMainFieldWidth * 30 + 10 + 'px');
                var self = this;
                $(document).keydown(function (e) { self.OnKeyPress(e); });
            }
            TetrisGame.prototype.StartGame = function () {
                var _this = this;
                this._gamePaused = false;
                $('#window').text('PAUSED').hide();
                if (this._currentShape == null) {
                    this._currentShape = this.GenerateNewShape();
                }
                this._timerHandle = setInterval(function (f) {
                    _this.ActionOnTimer();
                }, this._interval);
            };
            TetrisGame.prototype.StopGame = function () {
                if (this._timerHandle && this._timerHandle !== null) {
                    clearInterval(this._timerHandle);
                }
            };
            TetrisGame.prototype.RestartGame = function () {
                this.StopGame();
                this.ClearMainField();
                this._score = 0;
                this.ShowScore();
                this.StartGame();
            };
            TetrisGame.prototype.PauseGame = function () {
                this._gamePaused = true;
                this.StopGame();
                $('#window').text('PAUSED').show();
            };
            TetrisGame.prototype.ClearMainField = function () {
                if (this._currentShape !== null && this._currentShape !== undefined) {
                    this._currentShape.Clear(true);
                    this._currentShape = null;
                }
                for (var x = 0; x < Tetris.Core.Constants.MaxMainFieldWidth; x++)
                    for (var y = Tetris.Core.Constants.MaxMainFieldHeight - 1; y >= 0; y--) {
                        if (this.MainField[y][x] != null)
                            this.MainField[y][x].CleanItSelf(true);
                    }
            };
            TetrisGame.prototype.ActionOnTimer = function () {
                try {
                    if (!this.MoveShapeDown()) {
                        var lines = this.GetFilledLines();
                        if (lines.length > 0) {
                            this.RemoveLines(lines);
                            this.ShiftDownSquares(lines[lines.length - 1], lines[0]);
                            this.ShowScore();
                        }
                        this._currentShape = this.GenerateNewShape();
                        if (this._currentShape == null) {
                            this.StopGame();
                            alert("Ирга закончена");
                        }
                    }
                }
                catch (e) {
                    alert('Произошла ошибка ' + e);
                    console.log(e);
                    clearInterval(this._timerHandle);
                }
            };
            TetrisGame.prototype.GenerateNewShape = function () {
                var shape = this._shapeFabric.GetShape(this._htmlContainer, Math.round(Tetris.Core.Constants.MaxMainFieldWidth / 2) - 2, 0, this.MainField);
                var isDrawn = shape.Draw();
                return isDrawn ? shape : null;
            };
            TetrisGame.prototype.IsGameOver = function () {
                return true;
            };
            TetrisGame.prototype.GetFilledLines = function () {
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
            TetrisGame.prototype.MoveShapeDown = function () {
                if (this._currentShape !== null)
                    return this._currentShape.Move(3 /* Down */);
                return false;
            };
            TetrisGame.prototype.RemoveLines = function (lines) {
                if (lines != null) {
                    var self_1 = this;
                    lines.forEach(function (e, i, a) {
                        self_1._score += Tetris.Core.Constants.BonusForRemovedLine;
                        self_1.MainField[e].forEach(function (s, si, sq) {
                            s.CleanItSelf(true);
                        });
                    });
                }
            };
            TetrisGame.prototype.ShowScore = function () {
                $('#' + this._scoreContainerSelector).text(this._score);
            };
            TetrisGame.prototype.ShiftDownSquares = function (fromLine, toLine) {
                for (var y = fromLine; y > 0; y--) {
                    for (var x = 0; x < Tetris.Core.Constants.MaxMainFieldWidth; x++) {
                        var obj = this.MainField[y][x];
                        if (obj !== null && obj.CanMoveTo(obj.Left, toLine - fromLine + y)) {
                            obj.MoveTo(obj.Left, obj.Top + (toLine - fromLine) + 1);
                        }
                    }
                }
            };
            TetrisGame.prototype.OnKeyPress = function (e) {
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
                    case 27 /* ESC */:
                    case 19 /* BREAK_PAUSE */:
                        if (this._gamePaused) {
                            this.StartGame();
                        }
                        else {
                            this.PauseGame();
                        }
                        break;
                }
            };
            return TetrisGame;
        }());
        Game.TetrisGame = TetrisGame;
    })(Game = Tetris.Game || (Tetris.Game = {}));
})(Tetris || (Tetris = {}));
var Tetris;
(function (Tetris) {
    var Game;
    (function (Game) {
        var Squares;
        (function (Squares) {
            var TetraShapes;
            (function (TetraShapes) {
                var IShape = (function (_super) {
                    __extends(IShape, _super);
                    function IShape(mainField, fabric, htmlParent, startLeft, startTop) {
                        _super.call(this, mainField, fabric, htmlParent, startLeft, startTop);
                        this.MaxAvailablePositions = 1;
                    }
                    IShape.prototype.CanRotate = function (direction) {
                        var sq0 = this.Squares[0];
                        var sq2 = this.Squares[2];
                        var sq3 = this.Squares[3];
                        switch (this.Position) {
                            case 0:
                                return (sq0.Left > 0) && this.IsCellFree(sq0.Left - 1, sq0.Top + 1, sq0.UniqueID)
                                    && (sq2.Left < Tetris.Core.Constants.MaxMainFieldWidth) && this.IsCellFree(sq2.Left - 2, sq2.Top, sq2.UniqueID)
                                    && (sq3.Left <= Tetris.Core.Constants.MaxMainFieldWidth - 2) && (sq3.Top >= 2) && this.IsCellFree(sq3.Left - 2, sq3.Top - 2, sq3.UniqueID);
                            case 1:
                                return this.IsCellFree(sq0.Left + 1, sq0.Top - 1, sq0.UniqueID)
                                    && (sq2.Top < Tetris.Core.Constants.MaxMainFieldHeight) && this.IsCellFree(sq2.Left - 1, sq2.Top + 1, sq2.UniqueID)
                                    && (sq3.Top <= Tetris.Core.Constants.MaxMainFieldHeight - 2) && this.IsCellFree(sq3.Left - 2, sq3.Top + 2, sq3.UniqueID);
                        }
                    };
                    IShape.prototype.ChangePositionOnRotate = function (direction) {
                        switch (this.Position) {
                            case 0:
                                this.Squares[0].Left--;
                                this.Squares[0].Top++;
                                this.Squares[2].Left++;
                                this.Squares[2].Top--;
                                this.Squares[3].Left += 2;
                                this.Squares[3].Top -= 2;
                                break;
                            case 1:
                                this.Squares[0].Left++;
                                this.Squares[0].Top--;
                                this.Squares[2].Left--;
                                this.Squares[2].Top++;
                                this.Squares[3].Left -= 2;
                                this.Squares[3].Top += 2;
                                break;
                        }
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
            })(TetraShapes = Squares.TetraShapes || (Squares.TetraShapes = {}));
        })(Squares = Game.Squares || (Game.Squares = {}));
    })(Game = Tetris.Game || (Tetris.Game = {}));
})(Tetris || (Tetris = {}));
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
//# sourceMappingURL=C:/Users/galax_000/Documents/Visual Studio 2015/Projects/Tetris/Tetris/scripts/tetris.js.map