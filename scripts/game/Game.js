/// <reference path="../core/fabric/tetraminoshapefabric.ts" />
/// <reference path="../core/fabric/monocolorshapefabric.ts" />
/// <reference path="../core/shapebase.ts" />
/// <reference path="../core/emuns/keycodes.ts" />
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
//# sourceMappingURL=C:/Users/galax_000/Documents/Visual Studio 2015/Projects/Tetris/Tetris/scripts/Game/Game.js.map