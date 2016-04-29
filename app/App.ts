///<reference path="Playlist.class.ts"/>
///<reference path="Song.class.ts"/>

// creating new playlist
var playlist = new Playlist();
var playlistSelector = document.getElementById( "playlist" );


// create new songs for playlist
var song1 = new Song( "Here comes the sun", "The Beatles", "3:40" );
var song2 = new Song( "Yellow Submarire", "The Beatles", "2:22" );

playlist.add( song1 );
playlist.add( song2 );

var playButton = document.getElementById("play");
var nextButton = document.getElementById("next");

playButton.onclick = function() {
    playlist.play();
    playlist.renderInElement( playlistSelector );
}

nextButton.onclick = function() {
    playlist.next();
    playlist.renderInElement( playlistSelector );
}

playlist.renderInElement( playlistSelector );
