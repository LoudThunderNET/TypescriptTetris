
import IShapeFabric = Tetris.Core.Fabric.IShapeFabric;

namespace Tetris.Game.Fabric
{
    export class TetraminoShapeFabric implements IShapeFabric
    {
        private _squaresFabric: ISquareFabric

        constructor(squareFabric: ISquareFabric)
        {
            this._squaresFabric = squareFabric;
        }

        GetShape(parentHtml: any, initLeft: number, initTop: number, mainField): ShapeBase
        {
            let shape: ShapeBase = null;

            let shapeNumber = Math.round(Math.random() * 7);
            switch (shapeNumber)
            {
                case 1:
                    shape = new Squares.TetraShapes.SShape(mainField, this._squaresFabric, parentHtml, initLeft, initTop);
                    break;
                case 2:
                    shape = new Squares.TetraShapes.ZShape(mainField, this._squaresFabric, parentHtml, initLeft, initTop);
                    break;
                case 3:
                    shape = new Squares.TetraShapes.LShape(mainField, this._squaresFabric, parentHtml, initLeft, initTop);
                    break;
                case 4:
                    shape = new Squares.TetraShapes.TShape(mainField, this._squaresFabric, parentHtml, initLeft, initTop);
                    break;
                case 5:
                    shape = new Squares.TetraShapes.OShape(mainField, this._squaresFabric, parentHtml, initLeft, initTop);
                    break;
                case 6:
                    shape = new Squares.TetraShapes.IShape(mainField, this._squaresFabric, parentHtml, initLeft, initTop);
                    break;
                case 0:
                case 7:
                    shape = new Squares.TetraShapes.JShape(mainField, this._squaresFabric, parentHtml, initLeft, initTop);
                    break;
            }

            return shape;
        }
    }
}