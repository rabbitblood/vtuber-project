const videoData = {
  videos: {
    video1: {
      title: "Gura",
      url: "https://www.youtube.com/@GawrGura",
      thumbnail:
        "https://yt3.googleusercontent.com/uMUat6yJL2_Sk6Wg2-yn0fSIqUr_D6aKVNVoWbgeZ8N-edT5QJAusk4PI8nmPgT_DxFDTyl8=s176-c-k-c0x00ffffff-no-rj",
    },
    video2: {
      title: "Vox Akuma",
      url: "https://space.bilibili.com/1775966996",
      thumbnail:
        "https://daoinsights.com/wp-content/uploads/2022/05/FHBu1_VWUAMcYZm.jpg",
    },
    video3: {
      title: "Kinuza Ai",
      url: "https://www.youtube.com/@AIChannel",
      thumbnail:
        "https://yt3.googleusercontent.com/ytc/AIdro_nMViLntr55Q7TZ-fVYqXPzAKOmwudyL3l9zdiQ1Tx5-no=s176-c-k-c0x00ffffff-no-rj",
    },
    video4: {
      title: "Filian",
      url: "https://www.youtube.com/@filianIsLost",
      thumbnail:
        "https://yt3.googleusercontent.com/pMu97oqNDtjNa1jKABBmybkd-0mjCPXSLooC5--KgyQoTkqSlVHdNucTaYrwp0lXw9DmlzNaLw=s176-c-k-c0x00ffffff-no-rj",
    },
    video5: {
      title: "Ironmouse",
      url: "https://www.youtube.com/@IronMouseParty",
      thumbnail:
        "https://yt3.googleusercontent.com/ytc/AIdro_lnpcdCnJi5j9aL2TtXam65hLVm2Fb9wG6kYUyo9E-yi0E=s176-c-k-c0x00ffffff-no-rj",
    },
    video6: {
      title: "Mori Calliope",
      url: "https://www.youtube.com/@MoriCalliope",
      thumbnail:
        "https://yt3.googleusercontent.com/8B_T08sx8R7XVi5Mwx_l9sjQm5FGWGspeujSvVDvd80Zyr-3VvVTRGVLOnBrqNRxZp6ZeXAV=s176-c-k-c0x00ffffff-no-rj",
    },
    video7: {
      title: "Sakura Miko",
      url: "https://www.youtube.com/channel/UCp-5t9SrOQwXMU7iIjQfARg",
      thumbnail:
        "https://yt3.googleusercontent.com/Z78RNXxUqpOGYKFt-VrJV7nlehOHzl7Ta-l1cgPx5Ewucmr5kY64iGxmPSe7QqIdM1ZhvPlEOg=s176-c-k-c0x00ffffff-no-rj",
    },
    video8: {
      title: "Lilith",
      url: "https://www.youtube.com/channel/UCBURM8S4LH7cRZ0Clea9RDA",
      thumbnail:
        "https://yt3.googleusercontent.com/jwZT783V-LU58DMyjShj-CWJ3GGsM5DaHX20vtIExe7LNGpaS0P5pZJV_EH11AprgaHocu6CKA=s176-c-k-c0x00ffffff-no-rj",
    },
    video9: {
      title: "Kanae",
      url: "https://www.youtube.com/channel/UCspv01oxUFf_MTSipURRhkA",
      thumbnail:
        "https://yt3.googleusercontent.com/dfCsIDvqaK7K1yIzVFGEq5-1cBAdERky6P4qwqcyXFNLVW1cV-rx7J-Gaj6dUSl2ZaRNPdl0gg=s176-c-k-c0x00ffffff-no-rj",
    },
    video10: {
      title: "Kokoro",
      url: "",
      thumbnail: "",
    },
    video11: {
      title: "Kasuka Hana",
      url: "https://www.youtube.com/@Kasuka.",
      thumbnail:
        "https://yt3.googleusercontent.com/ctmYcWvA3MzECD41D9FiB6hPALZm88uX3P4XWqjLrD1cwjiZQUhAUYUQY1n2xRwWW8cNlo5S=s176-c-k-c0x00ffffff-no-rj",
    },
    video12: {
      title: "Emperor",
      url: "",
      thumbnail: "",
    },
    video13: {
      title: "泠鸢yousa",
      url: "https://space.bilibili.com/282994",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyfXKrtGF3F2utoqB-_CXEhAXdg9NzPLjbzw&s",
    },
    video14: {
      title: "阿萨Aza",
      url: "https://space.bilibili.com/480680646",
      thumbnail: "https://lain.bgm.tv/pic/crt/l/d7/b1/76658_crt_3ZYFQ.jpg",
    },
    video15: {
      title: "嘉然Diana",
      url: "https://space.bilibili.com/672328094",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScUdxPs3JUx3R-yTHG3MMrmLvJHMNq-uc6lQ&s",
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

  //add classes and inner html to video element
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
