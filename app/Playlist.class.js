// playlist class
///<reference path="Song.class.ts"/>
var Playlist = (function () {
    function Playlist() {
        this.songs = [];
        this.nowPlayingIndex = 0;
    }
    Playlist.prototype.add = function (song) {
        this.songs.push(song);
    };
    Playlist.prototype.list = function () {
        console.log(this.songs);
    };
    Playlist.prototype.play = function () {
        this.currentSong.play();
    };
    Playlist.prototype.stop = function () {
        this.currentSong.stop();
    };
    Object.defineProperty(Playlist.prototype, "currentSong", {
        get: function () {
            return this.songs[this.nowPlayingIndex];
        },
        enumerable: true,
        configurable: true
    });
    Playlist.prototype.next = function () {
        this.stop();
        this.nowPlayingIndex++;
        if (this.nowPlayingIndex === this.songs.length) {
            this.nowPlayingIndex = 0;
        }
        this.play();
    };
    Playlist.prototype.renderInElement = function (list) {
        list.innerHTML = "";
        for (var i = 0; i < this.songs.length; i++) {
            list.innerHTML += this.songs[i].toHTML();
        }
    };
    return Playlist;
}());
//# sourceMappingURL=Playlist.class.js.map