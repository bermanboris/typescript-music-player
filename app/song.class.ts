// Song class

interface ISongTest {
    title: string;
    artist: string;
    duration: string;
}

class Song implements ISongTest {
    constructor( public title: string, public artist: string, public duration: string, private isPlaying: boolean = false ) {
    }

    play() {
        this.isPlaying = true;
    }

    stop() {
        this.isPlaying = false;
    }

    toHTML() {
        var currentClass = this.isPlaying ? ` class="nowPlaying"` : "";
        return `
                <li${currentClass}>${this.title} - ${this.artist}
                <span class="duration">${this.duration}</span>
                </li>
        `;
    }
}