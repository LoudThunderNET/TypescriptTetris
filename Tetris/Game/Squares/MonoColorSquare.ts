namespace Tetris.Game.Squares
{
    export class MonoColorSquare extends Tetris.Core.Square
    {
        BackgroundColor: number;

        constructor(color: number, parentHtml: any, initLeft: number, initTop: number, uniqueID: number, mainField: Core.Square[][])
        {
            super(parentHtml, initLeft, initTop, uniqueID, mainField);
            this.BackgroundColor = color;
            this.InstatiateHtml();
        }

        InstatiateHtml(): void {
            this.HtmlElement = $('<div>')
                .addClass('sqr')
                .css('background-color', '#' + this.BackgroundColor.toString(16))
                .css('display', 'none')
                .appendTo($(this.parentHtml));
        }
    }
}
