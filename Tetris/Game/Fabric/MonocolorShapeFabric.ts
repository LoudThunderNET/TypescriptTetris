import BackGroundColor = Tetris.Core.Enums.BackgroundColor;
namespace Tetris.Game.Fabric
{
    export class MonocolorShapeFabric implements ISquareFabric
    {
        GetSquares(parentHtml: any, initLeft: number, initTop: number, mainField, amount:number): Square[]
        {
            let backgroundColorIndex = Math.round((Math.random() * 135));
            let enumIndex: number = 0;
            let color: number;
            for (let i in BackGroundColor)
            {
                if (enumIndex === backgroundColorIndex)
                {
                    color = parseInt(i);
                    if (!isNaN(color)) {
                        break;
                    }
                }
                enumIndex++;
            }
            let uniqueID = Math.random();
            let squares = new Array<Square>(amount);

            for (let i = 0; i < amount; i++) {
                squares[i] = new MonoColorSquare(color, parentHtml, initLeft, initTop, uniqueID, mainField);
                squares[i].Index = i;
            }
            return squares;
        }
    }
}