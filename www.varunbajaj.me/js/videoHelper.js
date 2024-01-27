function showhide_video(divId, videoId) {
  // first hide all other video containers on page
  video_divs = document.getElementsByClassName("video-container");
  for (var i = 0; i < video_divs.length; ++i) {
    var item = video_divs[i];
    if (item.id != divId) {
      item.style.display = "none";
    }
  }
  // stop all other playing videos on page
  videos = document.getElementsByTagName("iframe");
  for (var i = 0; i < videos.length; i++) {
    var frame = videos[i];
    if (frame.id != videoId) {
      var iframeSrc = frame.src;
      frame.src = iframeSrc;
    }
  }

  // code for specific video div (divId) and corresponding video (videoId)
  var e = document.getElementById(divId);
  if (e.style.display == "none") e.style.display = "block";
  else e.style.display = "none";
  var f = document.getElementById(videoId);
  // pause iframe video
  var iframeSrc = f.src;
  f.src = iframeSrc;
}
