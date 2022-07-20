const sliderContainer = document.querySelector("#slider");
const currentContainer = document.querySelector("#current");
const videosContainer = document.querySelector("#videos-container");
const bNext = document.querySelector("#next");
const bPrev = document.querySelector("#prev");
let current = 0;

const videos = [
    {
      "id": "TKvHU3Kpg2A"
    },
    {
      "id": "vsAj692gebg"
    },
    {
      "id": "WqTwaQzjYtg"
    },
    {
      "id": "T03PxxuCfDA"
    },
    {
        "id": "Jq_7fGb8ZDM"
    },
    {
        "id": "4rKFkLeRF3Q"
    }
    ];

bNext.addEventListener("click", (e) => {
  let changed = current;
  current = current + 1 < videos.length ? current + 1 : current;
  if (current !== changed) {
    renderCurrentVideo(videos[current].id);
  }
});

bPrev.addEventListener("click", (e) => {
  let changed = current;
  current = current - 1 >= 0 ? current - 1 : current;
  if (current !== changed) {
    renderCurrentVideo(videos[current].id);
  }
});

renderCurrentVideo(videos[current].id);
renderVideos();

function renderCurrentVideo(id) {
<<<<<<< HEAD
  currentContainer.innerHTML = `<iframe width="900" height="600" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
=======
  currentContainer.innerHTML = `<iframe width="100%" height="600" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
>>>>>>> c47594d47cff0d4783ed5249a13a010f7769a916
}

function renderVideos() {
  const html = videos.map((video, index) => {
    return `
    <div class="item">
      <a href="#" data-id="${index}">
        <img src="https://i3.ytimg.com/vi/${video.id}/mqdefault.jpg" />
      </a>
    </div>`;
  });

  videosContainer.innerHTML = html.join("");

  document.querySelectorAll(".item a").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const id = +item.getAttribute("data-id");
      current = id;
      renderCurrentVideo(videos[current].id);
    });
  });
}
