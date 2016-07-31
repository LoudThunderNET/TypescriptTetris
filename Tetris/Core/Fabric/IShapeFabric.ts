namespace Tetris.Core.Fabric {
    export interface IShapeFabric {
        GetShape(parentHtml: any, initLeft: number, initTop: number, mainField): ShapeBase;
    }
}