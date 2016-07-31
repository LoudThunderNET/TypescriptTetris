namespace Tetris.Core {

    export interface IShape
    {

        Left: number;
        Top: number;
        UniqueID: number;

        Move(direction: Enums.Direction): boolean;
        Rotate(direction: Enums.Rotates): boolean;
        Draw(): void;
    }
}