namespace Tetris.Game.Squares.TetraShapes
{
    export class OShape extends ShapeBase
    {
        CanRotate(direction: Core.Enums.Rotates): boolean
        {
            return true;
        }

        ChangePositionOnRotate(direction: Core.Enums.Rotates): void
        { }

        ConstructShape(mainFiled: Square[][], startLeft: number, startTop: number): void {
            this.Squares = this.ShapeFabric.GetSquares(this.HtmlContainer, 1, 0, this.MainField, 4);
            this.Squares[0].Left = startLeft + 0;
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