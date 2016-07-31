
import ShapeBase = Tetris.Core.ShapeBase;

namespace Tetris.Game.Squares.TetraShapes
{
    export class SShape extends ShapeBase
    {
        constructor(mainField: Square[][], fabric: ISquareFabric, htmlParent: any, startLeft?: number, startTop?: number) {
            super(mainField, fabric, htmlParent, startLeft, startTop);
            this.MaxAvailablePositions = 1;
        }
        CanRotate(direction: Core.Enums.Rotates): boolean
        {
            let sq0 = this.Squares[0];
            let sq1 = this.Squares[1];
            switch (this.Position) {
                case 0:
                    return (sq0.Left >= 2) && this.IsCellFree(sq0.Left - 2, sq0.Top, sq0.UniqueID)
                        && (sq1.Top < Core.Constants.MaxMainFieldHeight - 2) && this.IsCellFree(sq1.Left, sq1.Top + 2, sq1.UniqueID);
                case 1:
                    return (sq0.Left < Core.Constants.MaxMainFieldWidth - 2) && this.IsCellFree(sq0.Left + 2, sq0.Top, sq0.UniqueID)
                        && (sq1.Top >= 2) && this.IsCellFree(sq1.Left, sq1.Top - 2, sq1.UniqueID);
            }
        }

        ChangePositionOnRotate(direction: Core.Enums.Rotates): void {
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
        }

        ConstructShape(mainFiled: Square[][], startLeft: number, startTop: number): void {
            this.Squares = this.ShapeFabric.GetSquares(this.HtmlContainer, 1, 0, this.MainField, 4);
            this.Squares[0].Left = startLeft + 2;
            this.Squares[0].Top = startTop + 0;

            this.Squares[1].Left = startLeft + 1;
            this.Squares[1].Top = startTop + 0;

            this.Squares[2].Left = startLeft + 1;
            this.Squares[2].Top = startTop + 1;

            this.Squares[3].Left = startLeft + 0;
            this.Squares[3].Top = startTop + 1;
        }
    }
}