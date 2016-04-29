// Song class
var Song = (function () {
    function Song(title, artist, duration, isPlaying) {
        if (isPlaying === void 0) { isPlaying = false; }
        this.title = title;
        this.artist = artist;
        this.duration = duration;
        this.isPlaying = isPlaying;
    }
    Song.prototype.play = function () {
        this.isPlaying = true;
    };
    Song.prototype.stop = function () {
        this.isPlaying = false;
    };
    Song.prototype.toHTML = function () {
        var currentClass = this.isPlaying ? " class=\"nowPlaying\"" : "";
        return "\n                <li" + currentClass + ">" + this.title + " - " + this.artist + "\n                <span class=\"duration\">" + this.duration + "</span>\n                </li>\n        ";
    };
    return Song;
}());
//# sourceMappingURL=Song.class.js.map