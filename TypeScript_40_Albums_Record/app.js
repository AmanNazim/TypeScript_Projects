//Writing a function for music album that creates object describing a music album.
function make_album(artist_name, album_title, number_of_tracks) {
    let album = {
        artist_name: artist_name,
        album_title: album_title,
    };
    if (number_of_tracks) {
        album.number_of_tracks = number_of_tracks;
    }
    return album;
}
;
/*creating three dictionaries representing different albums to show that object are storing information correctly.*/
console.log(make_album("Artist1", "Album1"));
console.log(make_album("Artist2", "Album2"));
console.log(make_album("Artist3", "Album3"));
//function that includes number of tracks on album.
console.log(make_album("Artist4", "Album4", 18));
export {};
