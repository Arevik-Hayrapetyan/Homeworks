function PlayList() {
  this.songs = [];
  this.indx = 0;
  this.currentSong = this.songs[this.indx];
}
PlayList.prototype.play = function (currentSong) {
  indx = 0;

  this.currentSong = this.songs[this.indx];
  return `${this.songs[indx].artist} started to play `;
};
PlayList.prototype.next = function () {
  if (this.indx === this.songs.length) {
    this.currentSong = this.songs[0];
  } else {
    this.currentSong = this.songs[this.indx];
  }
  return `${this.songs[this.indx].artist} stopped ${
    this.songs[this.indx++].artist
  } started `;
};
PlayList.prototype.stop = function () {
  return `${this.currentSong.artist} stopped`;
};
PlayList.prototype.add = function (newSong) {
  this.songs.push(newSong);
  return this.songs;
};
function Song(artist, title) {
  this.title = title;
  this.artist = artist;
}

const playlist = new PlayList();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");
console.log(playlist.add(heyJude));
console.log(playlist.add(jaded));
console.log(playlist.play()); // Hey Jude started to play
console.log(playlist.next()); // Hey Jude stopped, Jaded started
console.log(playlist.next()); // Jaded stopped, Hey Jude started
console.log(playlist.stop()); // Hey Jude stopped
console.log(playlist.play()); // Hey Jude started
