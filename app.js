const nextButton = document.querySelector(".next-btn");
const video = document.querySelector(".hero-video");

const movieList = [
  "videos/hero-1.mp4",
  "videos/hero-2.mp4",
  "videos/hero-3.mp4",
  "videos/hero-4.mp4"
];

let index = 0; // Declare and initialize index

nextButton.addEventListener("click", function () {
  index = (index + 1) % movieList.length; // Cycle through videos
  video.src = movieList[index];
  video.play(); // Ensure the new video plays
});
