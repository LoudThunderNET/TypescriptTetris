namespace Tetris.Game.Squares.TetraShapes
{
    export class LShape extends ShapeBase
    {
        constructor(mainField: Square[][], fabric: ISquareFabric, htmlParent: any, startLeft?: number, startTop?: number) {
            super(mainField, fabric, htmlParent, startLeft, startTop);
            this.MaxAvailablePositions = 3;
        }
        CanRotate(direction: Core.Enums.Rotates): boolean {
            let zero: Square = this.Squares[0];
            let two: Square = this.Squares[2];
            let three: Square = this.Squares[3];
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
                        (two.Left < Core.Constants.MaxMainFieldWidth) && this.IsCellFree(two.Left + 1, two.Top + 1, two.UniqueID) &&
                        (three.Left <= Core.Constants.MaxMainFieldWidth - 2) && this.IsCellFree(three.Left + 2, three.Top, three.UniqueID);
                case 3:
                    return this.IsCellFree(zero.Left + 1, zero.Top - 1, zero.UniqueID) &&
                        (two.Top < Core.Constants.MaxMainFieldHeight) && this.IsCellFree(two.Left - 1, two.Top + 1, two.UniqueID) &&
                        (three.Top <= Core.Constants.MaxMainFieldHeight - 2) && this.IsCellFree(three.Left, three.Top + 2, three.UniqueID);
            }
        }
        ChangePositionOnRotate(direction: Core.Enums.Rotates): void {
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
        }

        ConstructShape(mainFiled: Square[][], startLeft: number, startTop: number): void {
            this.Squares = this.ShapeFabric.GetSquares(this.HtmlContainer, 1, 0, this.MainField, 4);
            this.Squares[0].Left = startLeft + 1;
            this.Squares[0].Top = startTop + 0;

            this.Squares[1].Left = startLeft + 1;
            this.Squares[1].Top = startTop + 1;

            this.Squares[2].Left = startLeft + 1;
            this.Squares[2].Top = startTop + 2;

            this.Squares[3].Left = startLeft + 2;
            this.Squares[3].Top = startTop + 2;
        }
    }
}