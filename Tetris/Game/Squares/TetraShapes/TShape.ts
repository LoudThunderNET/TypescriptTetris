
import BackgroundColor = Tetris.Core.Enums.BackgroundColor;
import Square = Tetris.Core.Square;
namespace Tetris.Game.Squares.TetraShapes
{
    export class TShape extends ShapeBase
    {

        constructor(mainField: Square[][], fabric: ISquareFabric, htmlParent: any, startLeft?: number, startTop?: number) {
            super(mainField, fabric, htmlParent, startLeft, startTop);
            this.MaxAvailablePositions = 3;
        }
        CanRotate(direction: Core.Enums.Rotates): boolean
        {
            let sq0 = this.Squares[0];
            let sq2 = this.Squares[2];
            let sq3 = this.Squares[3];
            switch (this.Position) {
                case 0:
                    return (sq3.Left < Core.Constants.MaxMainFieldWidth)
                        && (sq3.Top > 0)
                        && this.IsCellFree(sq3.Left + 1, sq3.Top - 1, sq3.UniqueID);
                case 1:
                        return (sq2.Left < Core.Constants.MaxMainFieldWidth)
                            && (sq2.Top < Core.Constants.MaxMainFieldHeight)
                            && this.IsCellFree(sq2.Left + 1, sq2.Top + 1, sq2.UniqueID);
                case 2:
                        return (sq0.Left > 0)
                            && (sq0.Top < Core.Constants.MaxMainFieldHeight)
                            && this.IsCellFree(sq0.Left - 1, sq0.Top + 1, sq0.UniqueID);
                case 3:
                    return true;
            }
        }

        ChangePositionOnRotate(direction: Core.Enums.Rotates): void {
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
        }

        ConstructShape(mainFiled: Square[][], startLeft: number, startTop: number): void
        {
            this.Squares = this.ShapeFabric.GetSquares(this.HtmlContainer, 1, 0, this.MainField, 4);

            this.Squares[0].Left = startLeft + 1;
            this.Squares[0].Top = startTop + 0;

            this.Squares[1].Left = startLeft + 1;
            this.Squares[1].Top = startTop + 1;

            this.Squares[2].Left = startLeft + 0;
            this.Squares[2].Top = startTop + 1;

            this.Squares[3].Left = startLeft + 1;
            this.Squares[3].Top = startTop + 2;
        }
    }
}