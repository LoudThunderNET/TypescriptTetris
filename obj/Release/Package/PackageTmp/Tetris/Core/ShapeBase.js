var Tetris;
(function (Tetris) {
    var Core;
    (function (Core) {
        var ShapeBase = (function () {
            function ShapeBase(mainField, fabric, htmlParent, startLeft, startTop) {
                this.Position = 0;
                this.MaxAvailablePositions = 0;
                this.ShapeFabric = fabric;
                this.MainField = mainField;
                this.HtmlContainer = htmlParent;
                this.ConstructShape(mainField, startLeft || 0, startTop || 0);
            }
            ShapeBase.prototype.Rotate = function (direction) {
                var self = this;
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
            };
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
                    e.CleanItSelf();
                });
                this.Squares.forEach(function (e, i, a) {
                    e.ChangePoisition(direction);
                });
                this.Squares.forEach(function (e, i, a) {
                    e.SetPositionHtmlElement();
                });
                return true;
            };
            ShapeBase.prototype.CanMove = function (direction) {
                var self = this;
                var yesItCan = this.Squares.every(function (e, i, a) {
                    return e.CanMove(direction);
                });
                return yesItCan;
            };
            ShapeBase.prototype.Draw = function () {
                var self = this;
                var canDraw = this.Squares.every(function (e, i, a) {
                    return self.IsCellFree(e.Left, e.Top, e.UniqueID);
                });
                if (canDraw) {
                    this.Squares.forEach(function (e, i, a) {
                        e.SetPositionHtmlElement();
                    });
                }
                return canDraw;
            };
            ShapeBase.prototype.Clear = function (remove) {
                this.Squares.forEach(function (e, i, a) {
                    e.CleanItSelf(remove);
                });
            };
            ShapeBase.prototype.IsCellFree = function (left, top, uniqueId) {
                var cellObj = this.MainField[top][left];
                return (cellObj == null || cellObj.UniqueID == uniqueId);
            };
            return ShapeBase;
        }());
        Core.ShapeBase = ShapeBase;
    })(Core = Tetris.Core || (Tetris.Core = {}));
})(Tetris || (Tetris = {}));
//# sourceMappingURL=ShapeBase.js.map