var playlist = {"A7X":"Brompton Cocktail"};
function updatePlaylist(playlist, artist, song) {
  return Object.assign(playlist, {[artist]:song})
}
function removeFromPlaylist(playlist,artist) {
  
  delete playlist.artist;
  var newPlaylist = {};
  return newPlaylist;
}