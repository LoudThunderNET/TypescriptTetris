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
            let heximalColor = this.BackgroundColor.toString(16);
            this.HtmlElement = $('<div>')
                .addClass('sqr')
                .css('background-color', '#' + '000000'.substr(0, 6 - heximalColor.length) + heximalColor)
                .css('display', 'none')
                .appendTo($(this.parentHtml));
        }
    }
}
