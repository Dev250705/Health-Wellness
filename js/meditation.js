function playVideo(videoType) {
  const videoLinks = {
    "beginners-meditation": "https://www.youtube.com/watch?v=inpok4MKVLM",
    "sleep-meditation": "https://www.youtube.com/watch?v=BYT7mDPwjs8",
    "stress-relief": "https://www.youtube.com/watch?v=6vO1wPAmiMQ",
  };

  window.open(videoLinks[videoType], "_blank");
}
