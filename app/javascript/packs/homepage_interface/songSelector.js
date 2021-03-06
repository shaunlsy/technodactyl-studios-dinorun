function updateSongList() {
  var songSelector = document.querySelector('#song_selection')
  $.ajax({
    url: `/songs.json`,
    type: "GET",
    datatype: JSON,
    beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))}
  }).done(function( data ) {
    songSelector.innerHTML = "<option value='' id=''>Select Song</option>"
    data.forEach(function(song) {
      songSelector.innerHTML += `<option value="${song['id']}">${song['title']}</option>`
    })
  })
}

function getSong(callback) {
  var songSelector = document.querySelector('#song_selection')
  var selectedSongId = songSelector.options[songSelector.selectedIndex].value
  if (selectedSongId == '') {
    return
  }
  var audioPlayer = document.querySelector('#song_player')
  $.ajax({
    url: `/songs/${selectedSongId}.json`,
    type: "GET",
    beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))}
  }).done(function(data) {
    audioPlayer.innerHTML = ''
    var sound = document.createElement('audio')
    sound.id = 'audio_player'
    sound.src = data['mp3_url']
    sound.type = 'audio/mpeg'
    audioPlayer.appendChild(sound)
    callback(data, sound)
  })
}

export { updateSongList, getSong }
