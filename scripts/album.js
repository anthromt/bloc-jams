var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };
 
 // Another Example Album
 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

var albumWilco = {
     title: 'Yankee Hotel Foxtrot',
     artist: 'Wilco',
     label: 'Reprise',
     year: '2001',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'I Am Trying to Break Your Heart?', duration: '6:57' },
         { title: 'Kamera', duration: '3:29' },
         { title: 'Radio Cure', duration: '5:08'},
         { title: 'War on War', duration: '3:47' },
         { title: 'Jesus, Etc.', duration: '3:50'},
         { title: 'Ashes of American Flags', duration: '4:43'},
         { title: 'Heavy Metal Drummer', duration: '3:08'},
         { title: 'I\'m the Man Who Loves You', duration: '3:55'},
         { title: 'Pot Kettle Black', duration: '4:00'},
         { title: 'Poor Places', duration: '5:15'},
         { title: 'Reservations', duration: '7:22'}
     ]
 };


 var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
    return $(template);
 };

var setCurrentAlbum = function(album) {

  // #2
    
     $albumTitle.text(album.title);
     $albumArtist.text(album.artist);
     $albumReleaseInfo.text(album.year + ' ' + album.label);
     $albumImage.attr('src', album.albumArtUrl);

 var findParentByClassName = function(element, targetClass) {
   var getSongItem = function(element) {
    switch (element.className) {
        case 'album-song-button':
        case 'ion-play':
        case 'ion-pause':
            return findParentByClassName(element, 'song-item-number');
        case 'album-view-song-item':
            return element.querySelector('.song-item-number');
        case 'song-item-title':
        case 'song-item-duration':
            return findParentByClassName(element, 'album-view-song-item').querySelector('.song-item-number');
        case 'song-item-number':
            return element;
        default:
            return;
    }  
};
      var clickHandler = function(targetElement) {
         var songItem = getSongItem(targetElement);  
            if (currentlyPlayingSong === null) {
            songItem.innerHTML = pauseButtonTemplate;
            currentlyPlayingSong = songItem.getAttribute('data-song-number');
          } else if (currentlyPlayingSong === songItem.getAttribute('data-song-number')) {
            songItem.innerHTML = playButtonTemplate;
            currentlyPlayingSong = null;
     }     else if (currentlyPlayingSong !== songItem.getAttribute('data-song-number')) {
            var currentlyPlayingSongElement = document.querySelector('[data-song-number="' + currentlyPlayingSong + '"]');
            currentlyPlayingSongElement.innerHTML = currentlyPlayingSongElement.getAttribute('data-song-number');
            songItem.innerHTML = pauseButtonTemplate;
            currentlyPlayingSong = songItem.getAttribute('data-song-number');
     }

 };
  
     if (element) {
        var currentParent = element.parentElement;
        while (currentParent.className != targetClass && currentParent.className !== null) {
            currentParent = currentParent.parentElement;
        }
        return currentParent;
    }
};
     // #2
     albumTitle.firstChild.nodeValue = album.title;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);
 
     // #3
    $albumSongList.empty();
 
     // #4
     for (var i = 0; i < album.songs.length; i++) {
          var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
          $albumSongList.append($newRow);
     }
 };

var findParentByClassName = function(element, targetClass) {
    if (element) {
        var currentParent = element.parentElement;
        while (currentParent.className != targetClass && currentParent.className !== null) {
            currentParent = currentParent.parentElement;
        }
        return currentParent;
    }
};

var albumTitle;
var albumArtist;
var albumReleaseInfo;
var albumImage;
var albumSongList;

var songListContainer = document.getElementsByClassName('album-view-song-list')[0];

var songRows = document.getElementsByClassName('album-view-song-item');

var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';

 
window.onload = function() {
 albumTitle = document.getElementsByClassName('album-view-title')[0];
 albumArtist = document.getElementsByClassName('album-view-artist')[0];
 albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
 albumImage = document.getElementsByClassName('album-cover-art')[0];
 albumSongList = document.getElementsByClassName('album-view-song-list')[0];
 setCurrentAlbum(albumPicasso);

  songListContainer.addEventListener('mouseover', function(event) {
     // #1
     console.log(event.target);
     if (event.target.parentElement.className === 'album-view-song-item') {
     event.target.parentElement.querySelector('.song-item-number').innerHTML = playButtonTemplate;
     }
  });

var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

 // Store state of playing songs
 var currentlyPlayingSong = null;

 window.onload = function() { 

 window.onload = function() {
     albumTitle = document.getElementsByClassName('album-view-title')[0];
     albumArtist = document.getElementsByClassName('album-view-artist')[0];
     albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
     albumImage = document.getElementsByClassName('album-cover-art')[0];
     albumSongList = document.getElementsByClassName('album-view-song-list')[0];
     setCurrentAlbum(albumPicasso);
     
      songListContainer.addEventListener('mouseover', function(event) {
         // #1
         console.log(event.target);
         if (event.target.parentElement.className === 'album-view-song-item') {
         event.target.parentElement.querySelector('.song-item-number').innerHTML = playButtonTemplate;
         var songItem = getSongItem(event.target);
+
+            if (songItem.getAttribute('data-song-number') !== currentlyPlayingSong) {
+                songItem.innerHTML = playButtonTemplate;
+            }
         }
     });
 ...
         } 
     });
     
 for (var i = 0; i < songRows.length; i++) {
         songRows[i].addEventListener('mouseleave', function(event) {
        var songItem = getSongItem(event.target);
             var songItemNumber = songItem.getAttribute('data-song-number');
 
             // #2
             if (songItemNumber !== currentlyPlayingSong) {
                 songItem.innerHTML = songItemNumber;
             }         });
     }
     songRows[i].addEventListener('click', function(event) {
            clickHandler(event.target);
         });
     }
     
     var albumArray = [albumPicasso, albumMarconi, albumWilco];
     var list = 1;
     
     albumImage.addEventListener('click', function(album) {
       setCurrentAlbum(albumArray[list]);
       list++; 
       if (list == albumArray.length) {
           list = 0;
       }
    }); 
 };