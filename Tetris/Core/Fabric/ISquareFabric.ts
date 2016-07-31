namespace Tetris.Core.Fabric
{
    export interface ISquareFabric
    {
        GetSquares(parentHtml: any, initLeft: number, initTop: number, mainField, amount: number): Square[];
    }
}