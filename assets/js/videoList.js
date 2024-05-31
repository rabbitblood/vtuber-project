{
  //     <!-- fifth section -->
  //     <div class="videos-section-container">
  //       <div class="videos-container">
  //         <div class="vtuber-video">
  //           <img src="https://placehold.co/400" alt="" />
  //           <div class="video-title">视频标题</div>
  //         </div>
  //         <div class="vtuber-video">
  //           <img src="https://placehold.co/400" alt="" />
  //           <div class="video-title">视频标题</div>
  //         </div>
  //         <div class="vtuber-video">
  //           <img src="https://placehold.co/400" alt="" />
  //           <div class="video-title">视频标题</div>
  //         </div>
  //       </div>
  //       <div class="button refresh-video">刷新图片</div>
  //     </div>
  //   </section>
}

const videoData = {
  videos: {
    video1: {
      title: "video1",
      url: "https://www.youtube.com/watch?v=XruowTM5Uyg",
      thumbnail: "https://i3.ytimg.com/vi/XruowTM5Uyg/hqdefault.jpg",
    },
    video2: {
      title: "video2",
      url: "https://www.youtube.com/watch?v=xFf9FrbwY-M",
      thumbnail: "https://i3.ytimg.com/vi/xFf9FrbwY-M/hqdefault.jpg",
    },
    video3: {
      title: "video3",
      url: "https://www.youtube.com/watch?v=9srTa3GgGQ0",
      thumbnail: "https://i3.ytimg.com/vi/9srTa3GgGQ0/hqdefault.jpg",
    },
    video4: {
      title: "video4",
      url: "https://www.youtube.com/watch?v=OzBpGYAISvw",
      thumbnail: "https://i3.ytimg.com/vi/OzBpGYAISvw/hqdefault.jpg",
    },
    video5: {
      title: "video5",
      url: "https://www.youtube.com/watch?v=F2lk3I2w2Uk",
      thumbnail: "https://i3.ytimg.com/vi/F2lk3I2w2Uk/hqdefault.jpg",
    },
    video6: {
      title: "video6",
      url: "https://www.youtube.com/watch?v=29WAdrzHSJo",
      thumbnail: "https://i3.ytimg.com/vi/29WAdrzHSJo/hqdefault.jpg",
    },
    video7: {
      title: "video7",
      url: "https://www.youtube.com/watch?v=JaLt3o0SmcE",
      thumbnail: "https://i3.ytimg.com/vi/JaLt3o0SmcE/hqdefault.jpg",
    },
  },
};

const videosContainer = document.querySelector(".videos-container");
const refreshVideoButton = document.querySelector(".refresh-video");

const pick3RandomVideos = () => {
  const videos = Object.values(videoData.videos).slice();
  const randomVideos = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * videos.length);
    randomVideos.push(videos[randomIndex]);
    videos.splice(randomIndex, 1);
  }
  return randomVideos;
};

const generateVideoElement = (video) => {
  const videoElement = document.createElement("div");
  videoElement.classList.add("vtuber-video");
  videoElement.innerHTML = `
            <img class="video-thumbnail" src="${video.thumbnail}" alt="" />
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
  videosContainer.innerHTML = "";
  //generate new random 3 videos
  initVideos();
};

refreshVideoButton.addEventListener("click", () => refreshVideos());

initVideos();
