namespace Tetris.Game.Squares.TetraShapes {

    export class JShape extends ShapeBase
    {

        constructor(mainField: Square[][], fabric: ISquareFabric, htmlParent: any, startLeft?: number, startTop?: number) {
            super(mainField, fabric, htmlParent, startLeft, startTop);
            this.MaxAvailablePositions = 3;
        }

        CanRotate(direction: Core.Enums.Rotates): boolean {
            let sq0 = this.Squares[0];
            let sq2 = this.Squares[2];
            let sq3 = this.Squares[3];
            switch (this.Position) {
                case 0:
                    return sq0.Left < Core.Constants.MaxMainFieldWidth && this.IsCellFree(sq0.Left + 1, sq0.Top + 1, sq0.UniqueID) &&
                        (sq2.Left > 0) && this.IsCellFree(sq2.Left - 1, sq2.Top - 1, sq2.UniqueID) &&
                        (sq3.Top >= 2) && this.IsCellFree(sq3.Left, sq3.Top-2, sq3.UniqueID);
                case 1:
                        return this.IsCellFree(sq0.Left - 1, sq0.Top + 1, sq0.UniqueID)&&
                            (sq2.Top > 0) && this.IsCellFree(sq2.Left + 1, sq2.Top - 1, sq2.UniqueID) &&
                            (sq3.Left <= Core.Constants.MaxMainFieldWidth-2) && this.IsCellFree(sq3.Left + 2, sq3.Top, sq3.UniqueID);
                case 2:
                    return this.IsCellFree(sq0.Left - 1, sq0.Top - 1, sq0.UniqueID)
                        && (sq2.Left < Core.Constants.MaxMainFieldWidth) && this.IsCellFree(sq2.Left + 1, sq2.Top + 1, sq2.UniqueID)
                        && (sq3.Left <= Core.Constants.MaxMainFieldWidth - 2) && this.IsCellFree(sq3.Left + 2, sq3.Top, sq3.UniqueID);
                case 3:
                    return this.IsCellFree(sq0.Left + 1, sq0.Top - 1, sq0.UniqueID)
                        && (sq2.Top < Core.Constants.MaxMainFieldHeight) && this.IsCellFree(sq2.Left - 1, sq2.Top + 1, sq2.UniqueID)
                        && (sq3.Top <= Core.Constants.MaxMainFieldHeight - 2) && this.IsCellFree(sq3.Left, sq3.Top + 2, sq3.UniqueID);
            }
        }

        ChangePositionOnRotate(direction: Core.Enums.Rotates): void {
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
        }

        ConstructShape(mainFiled: Square[][], startLeft: number, startTop: number): void {
            this.Squares = this.ShapeFabric.GetSquares(this.HtmlContainer, 1, 0, this.MainField, 4);
            this.Squares[0].Left = startLeft + 1;
            this.Squares[0].Top = startTop + 0;

            this.Squares[1].Left = startLeft + 1;
            this.Squares[1].Top = startTop + 1;

            this.Squares[2].Left = startLeft + 1;
            this.Squares[2].Top = startTop + 2;

            this.Squares[3].Left = startLeft + 0;
            this.Squares[3].Top = startTop + 2;
        }
    }
}