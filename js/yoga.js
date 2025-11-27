function playVideo(videoType) {
  const videoLinks = {
    "yoga-beginners": "https://www.youtube.com/watch?v=v7AYKMP6rOE",
    "morning-yoga": "https://www.youtube.com/watch?v=4pKly2JojMw",
    "evening-yoga": "https://www.youtube.com/watch?v=b1H3xO3x_Js",
    "meditation-beginners": "https://www.youtube.com/watch?v=inpok4MKVLM",
    "sleep-meditation": "https://youtu.be/2K4T9HmEhWE?si=1Pl311ARVma5Ryaw",
    "stress-relief": "https://www.youtube.com/watch?v=6vO1wPAmiMQ",
  };

  // Open actual YouTube video in new tab
  window.open(videoLinks[videoType], "_blank");
}
