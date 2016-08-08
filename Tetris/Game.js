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
//# sourceMappingURL=Game.js.map