var Tetris;
(function (Tetris) {
    var Core;
    (function (Core) {
        var ShapeBase = (function () {
            function ShapeBase(mainField, fabric, htmlParent, startLeft, startTop) {
                this.Position = 0;
                this.ShapeFabric = fabric;
                this.MainField = mainField;
                this.HtmlContainer = htmlParent;
                this.ConstructShape(mainField, startLeft || 0, startTop || 0);
            }
            ShapeBase.prototype.GetUniqueId = function () {
                if (this.Squares && this.Squares.length > 0) {
                    return this.Squares[0].UniqueID;
                }
                return 0;
            };
            ShapeBase.prototype.Move = function (direction) {
                if (!this.CanMove(direction))
                    return false;
                this.Squares.forEach(function (e, i, a) {
                    e.Move(direction);
                });
            };
            ShapeBase.prototype.CanMove = function (direction) {
                var yesItCan = true;
                var self = this;
                this.Squares.every(function (e, i, a) {
                    return e.CanMove(direction);
                });
                return yesItCan;
            };
            ShapeBase.prototype.Draw = function () {
                this.Squares.forEach(function (e, i, a) {
                    e.SetPositionHtmlElement();
                });
            };
            ShapeBase.prototype.Clear = function () {
                this.Squares.forEach(function (e, i, a) {
                    e.CleanItSelf();
                });
            };
            ShapeBase.prototype.IsCellFree = function (left, top, uniqueId) {
                var cellObj = this.MainField[left][top];
                return (cellObj == null || cellObj.UniqueID == uniqueId);
            };
            return ShapeBase;
        }());
        Core.ShapeBase = ShapeBase;
    })(Core = Tetris.Core || (Tetris.Core = {}));
})(Tetris || (Tetris = {}));
//# sourceMappingURL=C:/Users/galax_000/Documents/Visual Studio 2015/Projects/Tetris/Tetris/scripts/core/shapebase.js.map