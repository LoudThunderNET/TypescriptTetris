
import ISquareFabric = Tetris.Core.Fabric.ISquareFabric;

namespace Tetris.Core
{

    export abstract class ShapeBase
    {
        protected Squares: Square[];
        protected MainField: Square[][];
        protected ShapeFabric: ISquareFabric;
        protected Position: number = 0;
        protected MaxAvailablePositions: number = 0;
        protected HtmlContainer: any;

        constructor(mainField: Square[][], fabric: ISquareFabric, htmlParent: any, startLeft?:number, startTop?: number)
        {
            this.ShapeFabric = fabric;
            this.MainField = mainField;
            this.HtmlContainer = htmlParent;
            this.ConstructShape(mainField, startLeft || 0, startTop || 0);
        }

        Rotate(direction: Enums.Rotates): boolean
        {
            let self = this;
            if (this.CanRotate(direction)) {

                this.Squares.forEach(function (e, i, a) {
                    e.CleanItSelf();
                });

                this.ChangePositionOnRotate(direction);

                this.Position = (this.Position >= this.MaxAvailablePositions) ? 0 : this.Position + 1;

                this.Squares.forEach(function (e, i, a) {
                    e.SetPositionHtmlElement();
                });

                return true;
            }

            return false;
        }
        abstract CanRotate(direction: Enums.Rotates): boolean;
        abstract ConstructShape(mainFiled: Square[][], startLeft: number, startTop: number): void;
        abstract ChangePositionOnRotate(direction: Enums.Rotates):void;

        GetUniqueId(): number {
            if (this.Squares && this.Squares.length > 0) {
                return this.Squares[0].UniqueID;
            }
            return 0;
        }

        Move(direction: Enums.Direction): boolean
        {
            if (!this.CanMove(direction))
                return false;
            this.Squares.forEach(function (e, i, a) {
                e.CleanItSelf();
            });
            this.Squares.forEach(function (e, i, a) {
                e.ChangePoisition(direction);
            });
            this.Squares.forEach(function (e, i, a) {
                e.SetPositionHtmlElement();
            });

            return true;
        }

        CanMove(direction: Enums.Direction): boolean
        {
            let self = this;
            let yesItCan = this.Squares.every(function (e, i, a) {
                return e.CanMove(direction);
            });

            return yesItCan;
        }

        Draw(): boolean {
            let self = this;
            let canDraw = this.Squares.every(function (e, i, a) {
                return self.IsCellFree(e.Left, e.Top, e.UniqueID);
            });
            if (canDraw) {
                this.Squares.forEach(function (e, i, a) {
                    e.SetPositionHtmlElement();
                });
            }
            return canDraw;
        }

        protected Clear(): void {
            this.Squares.forEach(function (e, i, a) {
                e.CleanItSelf();
            });
        }
        protected IsCellFree(left:number, top:number, uniqueId:number): boolean
        {
            let cellObj = this.MainField[top][left];
            return (cellObj == null || cellObj.UniqueID == uniqueId);
        }
    }
}