var Tetris;
(function (Tetris) {
    var Core;
    (function (Core) {
        var Enums;
        (function (Enums) {
            (function (BackgroundColor) {
                BackgroundColor[BackgroundColor["IndianRed"] = 13458524] = "IndianRed";
                BackgroundColor[BackgroundColor["LightCoral"] = 15761536] = "LightCoral";
                BackgroundColor[BackgroundColor["Salmon"] = 16416882] = "Salmon";
                BackgroundColor[BackgroundColor["DarkSalmon"] = 15308410] = "DarkSalmon";
                BackgroundColor[BackgroundColor["LightSalmon"] = 16752762] = "LightSalmon";
                BackgroundColor[BackgroundColor["Crimson"] = 14423100] = "Crimson";
                BackgroundColor[BackgroundColor["Red"] = 16711680] = "Red";
                BackgroundColor[BackgroundColor["Firebrick"] = 11674146] = "Firebrick";
                BackgroundColor[BackgroundColor["DarkRed"] = 9109504] = "DarkRed";
                // PINK HTML COLOR NAMES
                BackgroundColor[BackgroundColor["Pink"] = 16761035] = "Pink";
                BackgroundColor[BackgroundColor["LightPink"] = 16758465] = "LightPink";
                BackgroundColor[BackgroundColor["HotPink"] = 16738740] = "HotPink";
                BackgroundColor[BackgroundColor["DeepPink"] = 16716947] = "DeepPink";
                BackgroundColor[BackgroundColor["MediumVioletRed"] = 13047173] = "MediumVioletRed";
                BackgroundColor[BackgroundColor["PaleVioletRed"] = 14381203] = "PaleVioletRed";
                // ORANGE HTML COLOR NAMES
                BackgroundColor[BackgroundColor["Coral"] = 16744272] = "Coral";
                BackgroundColor[BackgroundColor["Tomato"] = 16737095] = "Tomato";
                BackgroundColor[BackgroundColor["OrangeRed"] = 16729344] = "OrangeRed";
                BackgroundColor[BackgroundColor["DarkOrange"] = 16747520] = "DarkOrange";
                BackgroundColor[BackgroundColor["Orange"] = 16753920] = "Orange";
                // YELLOW HTML COLOR NAMES
                BackgroundColor[BackgroundColor["Gold"] = 16766720] = "Gold";
                BackgroundColor[BackgroundColor["Yellow"] = 16776960] = "Yellow";
                BackgroundColor[BackgroundColor["LightYellow"] = 16777184] = "LightYellow";
                BackgroundColor[BackgroundColor["Lemonchiffon"] = 16775885] = "Lemonchiffon";
                BackgroundColor[BackgroundColor["LightGoldenrodYellow"] = 16448210] = "LightGoldenrodYellow";
                BackgroundColor[BackgroundColor["Papayawhip"] = 16773077] = "Papayawhip";
                BackgroundColor[BackgroundColor["Moccasin"] = 16770229] = "Moccasin";
                BackgroundColor[BackgroundColor["Peachpuff"] = 16767673] = "Peachpuff";
                BackgroundColor[BackgroundColor["PaleGoldenrod"] = 15657130] = "PaleGoldenrod";
                BackgroundColor[BackgroundColor["Khaki"] = 15787660] = "Khaki";
                BackgroundColor[BackgroundColor["DarkKhaki"] = 12433259] = "DarkKhaki";
                // PURPLE HTML COLOR NAMES
                BackgroundColor[BackgroundColor["Lavender"] = 15132410] = "Lavender";
                BackgroundColor[BackgroundColor["Thistle"] = 14204888] = "Thistle";
                BackgroundColor[BackgroundColor["Plum"] = 14524637] = "Plum";
                BackgroundColor[BackgroundColor["Violet"] = 15631086] = "Violet";
                BackgroundColor[BackgroundColor["Orchid"] = 14315734] = "Orchid";
                BackgroundColor[BackgroundColor["Fuchsia"] = 16711935] = "Fuchsia";
                BackgroundColor[BackgroundColor["Magenta"] = 16711935] = "Magenta";
                BackgroundColor[BackgroundColor["MediumOrchid"] = 12211667] = "MediumOrchid";
                BackgroundColor[BackgroundColor["MediumPurple"] = 9662683] = "MediumPurple";
                BackgroundColor[BackgroundColor["RebeccaPurple"] = 6697881] = "RebeccaPurple";
                BackgroundColor[BackgroundColor["BlueViolet"] = 9055202] = "BlueViolet";
                BackgroundColor[BackgroundColor["DarkViolet"] = 9699539] = "DarkViolet";
                BackgroundColor[BackgroundColor["DarkOrchid"] = 10040012] = "DarkOrchid";
                BackgroundColor[BackgroundColor["DarkMagenta"] = 9109643] = "DarkMagenta";
                BackgroundColor[BackgroundColor["Purple"] = 8388736] = "Purple";
                BackgroundColor[BackgroundColor["Indigo"] = 4915330] = "Indigo";
                BackgroundColor[BackgroundColor["SlateBlue"] = 6970061] = "SlateBlue";
                BackgroundColor[BackgroundColor["DarkSlateBlue"] = 4734347] = "DarkSlateBlue";
                // GREEN HTML COLOR NAMES
                BackgroundColor[BackgroundColor["GreenYellow"] = 11403055] = "GreenYellow";
                BackgroundColor[BackgroundColor["Chartreuse"] = 8388352] = "Chartreuse";
                BackgroundColor[BackgroundColor["LawnGreen"] = 8190976] = "LawnGreen";
                BackgroundColor[BackgroundColor["Lime"] = 65280] = "Lime";
                BackgroundColor[BackgroundColor["LimeGreen"] = 3329330] = "LimeGreen";
                BackgroundColor[BackgroundColor["PaleGreen"] = 10025880] = "PaleGreen";
                BackgroundColor[BackgroundColor["LightGreen"] = 9498256] = "LightGreen";
                BackgroundColor[BackgroundColor["MediumSpringGreen"] = 64154] = "MediumSpringGreen";
                BackgroundColor[BackgroundColor["SpringGreen"] = 65407] = "SpringGreen";
                BackgroundColor[BackgroundColor["MediumSeaGreen"] = 3978097] = "MediumSeaGreen";
                BackgroundColor[BackgroundColor["SeaGreen"] = 3050327] = "SeaGreen";
                BackgroundColor[BackgroundColor["ForestGreen"] = 2263842] = "ForestGreen";
                BackgroundColor[BackgroundColor["Green"] = 32768] = "Green";
                BackgroundColor[BackgroundColor["DarkGreen"] = 25600] = "DarkGreen";
                BackgroundColor[BackgroundColor["YellowGreen"] = 10145074] = "YellowGreen";
                BackgroundColor[BackgroundColor["OliveDrab"] = 7048739] = "OliveDrab";
                BackgroundColor[BackgroundColor["Olive"] = 8421376] = "Olive";
                BackgroundColor[BackgroundColor["DarkoliveGreen"] = 5597999] = "DarkoliveGreen";
                BackgroundColor[BackgroundColor["MediumAquamarine"] = 6737322] = "MediumAquamarine";
                BackgroundColor[BackgroundColor["DarkSeaGreen"] = 9419915] = "DarkSeaGreen";
                BackgroundColor[BackgroundColor["LightSeaGreen"] = 2142890] = "LightSeaGreen";
                BackgroundColor[BackgroundColor["DarkCyan"] = 35723] = "DarkCyan";
                BackgroundColor[BackgroundColor["Teal"] = 32896] = "Teal";
                // BLUE HTML COLOR NAMES
                BackgroundColor[BackgroundColor["Aqua"] = 65535] = "Aqua";
                BackgroundColor[BackgroundColor["Cyan"] = 65535] = "Cyan";
                BackgroundColor[BackgroundColor["LightCyan"] = 14745599] = "LightCyan";
                BackgroundColor[BackgroundColor["PaleTurquoise"] = 11529966] = "PaleTurquoise";
                BackgroundColor[BackgroundColor["Aquamarine"] = 8388564] = "Aquamarine";
                BackgroundColor[BackgroundColor["Turquoise"] = 4251856] = "Turquoise";
                BackgroundColor[BackgroundColor["MediumTurquoise"] = 4772300] = "MediumTurquoise";
                BackgroundColor[BackgroundColor["DarkTurquoise"] = 52945] = "DarkTurquoise";
                BackgroundColor[BackgroundColor["CadetBlue"] = 6266528] = "CadetBlue";
                BackgroundColor[BackgroundColor["SteelBlue"] = 4620980] = "SteelBlue";
                BackgroundColor[BackgroundColor["LightSteelBlue"] = 11584734] = "LightSteelBlue";
                BackgroundColor[BackgroundColor["PowderBlue"] = 11591910] = "PowderBlue";
                BackgroundColor[BackgroundColor["LightBlue"] = 11393254] = "LightBlue";
                BackgroundColor[BackgroundColor["SkyBlue"] = 8900331] = "SkyBlue";
                BackgroundColor[BackgroundColor["LightskyBlue"] = 8900346] = "LightskyBlue";
                BackgroundColor[BackgroundColor["DeepskyBlue"] = 49151] = "DeepskyBlue";
                BackgroundColor[BackgroundColor["DodgerBlue"] = 2003199] = "DodgerBlue";
                BackgroundColor[BackgroundColor["CornflowerBlue"] = 6591981] = "CornflowerBlue";
                BackgroundColor[BackgroundColor["MediumSlateBlue"] = 8087790] = "MediumSlateBlue";
                BackgroundColor[BackgroundColor["RoyalBlue"] = 4286945] = "RoyalBlue";
                BackgroundColor[BackgroundColor["Blue"] = 255] = "Blue";
                BackgroundColor[BackgroundColor["MediumBlue"] = 205] = "MediumBlue";
                BackgroundColor[BackgroundColor["DarkBlue"] = 139] = "DarkBlue";
                BackgroundColor[BackgroundColor["Navy"] = 128] = "Navy";
                BackgroundColor[BackgroundColor["MidnightBlue"] = 1644912] = "MidnightBlue";
                // BROWN HTML COLOR NAMES
                BackgroundColor[BackgroundColor["Cornsilk"] = 16775388] = "Cornsilk";
                BackgroundColor[BackgroundColor["Blanchedalmond"] = 16772045] = "Blanchedalmond";
                BackgroundColor[BackgroundColor["Bisque"] = 16770244] = "Bisque";
                BackgroundColor[BackgroundColor["NavajoWhite"] = 16768685] = "NavajoWhite";
                BackgroundColor[BackgroundColor["Wheat"] = 16113331] = "Wheat";
                BackgroundColor[BackgroundColor["BurlyWood"] = 14596231] = "BurlyWood";
                BackgroundColor[BackgroundColor["Tan"] = 13808780] = "Tan";
                BackgroundColor[BackgroundColor["RosyBrown"] = 12357519] = "RosyBrown";
                BackgroundColor[BackgroundColor["SandyBrown"] = 16032864] = "SandyBrown";
                BackgroundColor[BackgroundColor["Goldenrod"] = 14329120] = "Goldenrod";
                BackgroundColor[BackgroundColor["DarkGoldenrod"] = 12092939] = "DarkGoldenrod";
                BackgroundColor[BackgroundColor["Peru"] = 13468991] = "Peru";
                BackgroundColor[BackgroundColor["Chocolate"] = 13789470] = "Chocolate";
                BackgroundColor[BackgroundColor["SaddleBrown"] = 9127187] = "SaddleBrown";
                BackgroundColor[BackgroundColor["Sienna"] = 10506797] = "Sienna";
                BackgroundColor[BackgroundColor["Brown"] = 10824234] = "Brown";
                BackgroundColor[BackgroundColor["Maroon"] = 8388608] = "Maroon";
                // WHITE HTML COLOR NAMES
                BackgroundColor[BackgroundColor["White"] = 16777215] = "White";
                BackgroundColor[BackgroundColor["Snow"] = 16775930] = "Snow";
                BackgroundColor[BackgroundColor["Honeydew"] = 15794160] = "Honeydew";
                BackgroundColor[BackgroundColor["MintCream"] = 16121850] = "MintCream";
                BackgroundColor[BackgroundColor["Azure"] = 15794175] = "Azure";
                BackgroundColor[BackgroundColor["AliceBlue"] = 15792383] = "AliceBlue";
                BackgroundColor[BackgroundColor["GhostWhite"] = 16316671] = "GhostWhite";
                BackgroundColor[BackgroundColor["WhiteSmoke"] = 16119285] = "WhiteSmoke";
                BackgroundColor[BackgroundColor["Seashell"] = 16774638] = "Seashell";
                BackgroundColor[BackgroundColor["Beige"] = 16119260] = "Beige";
                BackgroundColor[BackgroundColor["Oldlace"] = 16643558] = "Oldlace";
                BackgroundColor[BackgroundColor["FloralWhite"] = 16775920] = "FloralWhite";
                BackgroundColor[BackgroundColor["Ivory"] = 16777200] = "Ivory";
                BackgroundColor[BackgroundColor["AntiqueWhite"] = 16444375] = "AntiqueWhite";
                BackgroundColor[BackgroundColor["Linen"] = 16445670] = "Linen";
                BackgroundColor[BackgroundColor["LavenderBlush"] = 16773365] = "LavenderBlush";
                BackgroundColor[BackgroundColor["Mistyrose"] = 16770273] = "Mistyrose";
                // GRAY HTML COLOR NAMES
                BackgroundColor[BackgroundColor["Gainsboro"] = 14474460] = "Gainsboro";
                BackgroundColor[BackgroundColor["LightGray"] = 13882323] = "LightGray";
                BackgroundColor[BackgroundColor["Silver"] = 12632256] = "Silver";
                BackgroundColor[BackgroundColor["DarkGray"] = 11119017] = "DarkGray";
                BackgroundColor[BackgroundColor["Gray"] = 8421504] = "Gray";
                BackgroundColor[BackgroundColor["DimGray"] = 6908265] = "DimGray";
                BackgroundColor[BackgroundColor["LightSlateGray"] = 7833753] = "LightSlateGray";
                BackgroundColor[BackgroundColor["SlateGray"] = 7372944] = "SlateGray";
                BackgroundColor[BackgroundColor["DarkSlateGray"] = 3100495] = "DarkSlateGray";
                BackgroundColor[BackgroundColor["Black"] = 0] = "Black";
            })(Enums.BackgroundColor || (Enums.BackgroundColor = {}));
            var BackgroundColor = Enums.BackgroundColor;
        })(Enums = Core.Enums || (Core.Enums = {}));
    })(Core = Tetris.Core || (Tetris.Core = {}));
})(Tetris || (Tetris = {}));
//# sourceMappingURL=C:/Users/galax_000/Documents/Visual Studio 2015/Projects/Tetris/Tetris/scripts/Core/Emuns/BackgroundColor.js.map