/// <reference path="core/contants/commonconstants.ts" />
/// <reference path="game/squares/monocolorsquare.ts" />
/// <reference path="game/squares/tetrashapes/sshape.ts" />

/// <reference path="game/fabric/monocolorshapefabric.ts" />

import SquareFabric = Tetris.Game.Fabric.MonocolorShapeFabric;
import SquareBase = Tetris.Core.ShapeBase;
import KeyCodes = Tetris.Core.Enums.Keycodes;
import MonoColorSquare = Tetris.Game.Squares.MonoColorSquare;


namespace Tetris.Game
{
    export class TetrisGame
    {
        MainField: Square[][];
        private _shapeFabric: IShapeFabric;
        private _squareFabric: ISquareFabric;
        private _timerHandle: any;
        private _interval: number;
        private _currentShape: SquareBase;
        private _htmlContainer: any;
        private _score: number = 0;

        constructor()
        {
            this.MainField = [];
            for (var i = 0; i < Core.Constants.MaxMainFieldHeight; i++) {
                this.MainField.push(new Array<Square>(Core.Constants.MaxMainFieldWidth));
                for (var j = 0; j < Core.Constants.MaxMainFieldWidth; j++){
                    this.MainField[i][j] = null;
                }
            }
            this._squareFabric = new SquareFabric();
            this._shapeFabric = new Tetris.Game.Fabric.TetraminoShapeFabric(this._squareFabric);
            this._interval = 1000;
            this._htmlContainer = $('#MainContainer');
            if (this._htmlContainer && this._htmlContainer !== null)
            {
                $(this._htmlContainer).width(Core.Constants.MaxMainFieldWidth * 30);
                $(this._htmlContainer).height(Core.Constants.MaxMainFieldHeight * 30);
            }
            $('#scopeContainer').css('left', Core.Constants.MaxMainFieldWidth * 30 + 10 + 'px');
            this._currentShape = this.GenerateNewShape();
            let self = this;
            $(document).keydown(function (e) { self.OnKeyPress(e); });
        }

        StartGame(): void {
            this._timerHandle = setInterval(f=> {
                this.ActionOnTimer();
            }, this._interval);
        }

        StopGame(): void
        {
            if (this._timerHandle && this._timerHandle !== null) {
                clearInterval(this._timerHandle);
            }
        }
        RestartGame(): void
        {
            this.StopGame();
        }

        ActionOnTimer(): void
        {
            try {
                if (!this.MoveShapeDown()) {
                    let lines = this.GetFilledLines();
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
            catch (e)
            {
                alert('Произошла ошибка ' + e);
                console.log(e);
                clearInterval(this._timerHandle);
            }
        }

        GenerateNewShape(): ShapeBase
        {
            let shape = this._shapeFabric.GetShape(this._htmlContainer, Math.round(Core.Constants.MaxMainFieldWidth / 2) - 2, 0, this.MainField);
            let isDrawn = shape.Draw();

            return isDrawn ? shape : null;
        }

        IsGameOver(): boolean
        {
            return true;
        }

        GetFilledLines(): number[]
        {
            let lines = new Array<number>();
            let isFullFilled: boolean;
            for (var y = Core.Constants.MaxMainFieldHeight-1; y > 0; y--)
            {
                var line = this.MainField[y];
                isFullFilled = line.every(function (e, i, a) {
                    return e !== null;
                });
                if (isFullFilled) {
                    lines.push(y);
                }
            }
            return lines;
        }

        MoveShapeDown(): boolean
        {
            if (this._currentShape !== null)
                return this._currentShape.Move(Core.Enums.Direction.Down);
            return false;
        }

        RemoveLines(lines: number[]): void
        {
            if (lines != null) {
                let self = this;
                lines.forEach(function (e, i, a) {
                    self._score += Core.Constants.BonusForRemovedLine;
                    self.MainField[e].forEach(function (s, si, sq) {
                        s.CleanItSelf(true);
                    });
                });
            }
        }

        ShowScore(): void {
            $('.score').text(this._score);
        }

        ShiftDownSquares(fromLine: number, toLine: number): void {
            for (var y = fromLine; y > 0; y--) {
                for (var x = 0; x < Core.Constants.MaxMainFieldWidth; x++) {
                    let obj = this.MainField[y][x];
                    if (obj !== null && obj.CanMoveTo(obj.Left, toLine - fromLine + y)) {
                        obj.MoveTo(obj.Left, obj.Top + (toLine - fromLine) + 1);
                    }
                }
            }
        }
        OnKeyPress(e: any): void {
            switch (<number>e.which)
            {
                case KeyCodes.LEFT_ARROW:
                    this._currentShape.Move(Core.Enums.Direction.Left);
                    break;
                case KeyCodes.RIGHT_ARROW:
                    this._currentShape.Move(Core.Enums.Direction.Right);
                    break;
                case KeyCodes.UP_ARROW:
                    this._currentShape.Rotate(Core.Enums.Rotates.TurnOnLeft);
                    break;
                case KeyCodes.DOWN_ARROW:
                    this._currentShape.Move(Core.Enums.Direction.Down);
                    break;
                case KeyCodes.SPACEBAR:
                    this._currentShape.Move(Core.Enums.Direction.Down);
                    break;
            }
        }
    }
}