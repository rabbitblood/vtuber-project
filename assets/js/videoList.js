const videoData = {
  videos: {
    video1: {
      title: "video1",
      url: "https://www.youtube.com/watch?v=XruowTM5Uyg",
    },
    video2: {
      title: "video2",
      url: "https://www.youtube.com/watch?v=xFf9FrbwY-M",
    },
    video3: {
      title: "video3",
      url: "https://www.youtube.com/watch?v=9srTa3GgGQ0",
    },
    video4: {
      title: "video4",
      url: "https://www.youtube.com/watch?v=OzBpGYAISvw",
    },
    video5: {
      title: "video5",
      url: "https://www.youtube.com/watch?v=F2lk3I2w2Uk",
    },
    video6: {
      title: "video6",
      url: "https://www.youtube.com/watch?v=29WAdrzHSJo",
    },
    video7: {
      title: "video7",
      url: "https://www.youtube.com/watch?v=JaLt3o0SmcE",
    },
  },
};

const currentVideos = [];

const videosContainer = document.querySelector(".videos-container");
const refreshVideoButton = document.querySelector(".refresh-video");

const pick3RandomVideos = () => {
  const videos = Object.values(videoData.videos)
    .slice()
    .filter((video) => {
      return !currentVideos.includes(video);
    });
  currentVideos.length = 0;

  const randomVideos = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * videos.length);
    randomVideos.push(videos[randomIndex]);
    currentVideos.push(videos[randomIndex]);
    videos.splice(randomIndex, 1);
  }
  return randomVideos;
};

const generateVideoElement = (video) => {
  const videoElement = document.createElement("div");

  //extract video id from url
  const videoId = video.url.split("?v=")[1];
  const thumbnail = `https://i3.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  //add classes and inner html to video element
  videoElement.classList.add("vtuber-video");
  videoElement.innerHTML = `
            <img class="video-thumbnail" src="${thumbnail}" alt="" />
            <div class="video-title" href="${video.url}">${video.title}</div>
        `;

  //add event listener to video
  videoElement.addEventListener("click", () => {
    window.open(video.url, "_blank");
  });

  return videoElement;
};

const initVideos = () => {
  //generate random 3 videos
  const randomVideos = pick3RandomVideos();

  //add them to the video list
  randomVideos.forEach((video) => {
    videosContainer.appendChild(generateVideoElement(video));
  });
};

//populate video list every time the page is loaded and refresh-video button is clicked
// only populate random 3 videos
const refreshVideos = () => {
  //move the current videos aside
  videosContainer.classList.remove("show");
  videosContainer.classList.add("hide");

  setTimeout(() => {
    //remove all the current videos
    while (videosContainer.firstChild) {
      videosContainer.removeChild(videosContainer.firstChild);
    }
    //generate new random 3 videos
    initVideos();
    //remove hide class after removing all the videos
    videosContainer.classList.remove("hide");
    videosContainer.classList.add("show");
  }, 1000);
};

refreshVideoButton.addEventListener("click", () => refreshVideos());

initVideos();
