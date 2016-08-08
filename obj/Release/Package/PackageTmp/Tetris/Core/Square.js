var Tetris;
(function (Tetris) {
    var Core;
    (function (Core) {
        var Square = (function () {
            function Square(parentHtml, initLeft, initTop, uniqueID, mainField) {
                this.parentHtml = parentHtml;
                this.MainField = mainField;
                this.Left = initLeft;
                this.Top = initTop;
                this.UniqueID = uniqueID;
            }
            Square.prototype.SetPositionHtmlElement = function () {
                this.MainField[this.Top][this.Left] = this;
                $(this.HtmlElement)
                    .css('left', this.Left * 30 + 'px')
                    .css('top', this.Top * 30 + 'px')
                    .show();
            };
            Square.prototype.CleanItSelf = function (remove) {
                this.MainField[this.Top][this.Left] = null;
                if (remove && remove == true) {
                    $(this.HtmlElement).remove();
                }
            };
            Square.prototype.ChangePoisition = function (direction) {
                switch (direction) {
                    case 1 /* Left */:
                        this.Left--;
                        break;
                    case 2 /* Right */:
                        this.Left++;
                        break;
                    case 3 /* Down */:
                        this.Top++;
                        break;
                }
            };
            Square.prototype.MoveTo = function (left, top) {
                this.CleanItSelf();
                this.Left = left;
                this.Top = top;
                this.SetPositionHtmlElement();
            };
            Square.prototype.CanMove = function (direction) {
                switch (direction) {
                    case 1 /* Left */:
                        return this.CanMoveTo(this.Left - 1, this.Top);
                    case 2 /* Right */:
                        return this.CanMoveTo(this.Left + 1, this.Top);
                    case 3 /* Down */:
                        return this.CanMoveTo(this.Left, this.Top + 1);
                }
            };
            Square.prototype.CanMoveTo = function (left, top) {
                return left >= 0
                    && (left < Core.Constants.MaxMainFieldWidth)
                    && (top >= 0) && (top < Core.Constants.MaxMainFieldHeight)
                    && (this.MainField[top][left] == null || this.MainField[top][left].UniqueID == this.UniqueID);
            };
            return Square;
        }());
        Core.Square = Square;
    })(Core = Tetris.Core || (Tetris.Core = {}));
})(Tetris || (Tetris = {}));
//# sourceMappingURL=Square.js.map