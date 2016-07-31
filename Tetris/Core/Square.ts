namespace Tetris.Core
{
    export abstract class Square
    {
        protected parentHtml: any;
        protected MainField: Square[][];
        protected HtmlElement: any;

        Left: number;
        Top: number;
        UniqueID: number;
        Index: number;

        constructor(parentHtml: any, initLeft: number, initTop: number, uniqueID: number, mainField: Square[][])
        {
            this.parentHtml = parentHtml;
            this.MainField = mainField;
            this.Left = initLeft;
            this.Top = initTop;
            this.UniqueID = uniqueID;
        }

        SetPositionHtmlElement(): void
        {
            this.MainField[this.Top][this.Left] = this;
            $(this.HtmlElement)
                .css('left', this.Left * 30 + 'px')
                .css('top', this.Top * 30 + 'px')
                //.text(this.Index)
                .show();
        }

        CleanItSelf(remove?: boolean): void
        {
            this.MainField[this.Top][this.Left] = null;
            if (remove && remove == true) {
                $(this.HtmlElement).remove();
            }
        }

        ChangePoisition(direction: Core.Enums.Direction): void
        {
            switch (direction) {
                case Core.Enums.Direction.Left:
                    this.Left--;
                    break;
                case Core.Enums.Direction.Right:
                    this.Left++;
                    break;
                case Core.Enums.Direction.Down:
                    this.Top++;
                    break;
            }
        }

        MoveTo(left: number, top: number): void {
            this.CleanItSelf();
            this.Left = left;
            this.Top = top;
            this.SetPositionHtmlElement();
        }

        CanMove(direction: Core.Enums.Direction): boolean
        {
            switch (direction)
            {
                case Core.Enums.Direction.Left:
                    return this.CanMoveTo(this.Left - 1, this.Top);
                case Core.Enums.Direction.Right:
                    return this.CanMoveTo(this.Left + 1, this.Top);
                case Core.Enums.Direction.Down:
                    return this.CanMoveTo(this.Left, this.Top + 1);
            }
        }

        CanMoveTo(left: number, top: number): boolean
        {
            return left >= 0
                && (left < Core.Constants.MaxMainFieldWidth)
                && (top >= 0) && (top < Core.Constants.MaxMainFieldHeight)
                && (this.MainField[top][left] == null || this.MainField[top][left].UniqueID == this.UniqueID);
        }
        protected abstract InstatiateHtml(): void;
    }
}