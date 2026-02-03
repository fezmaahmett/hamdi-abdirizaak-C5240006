// Navigation (show / hide sections)
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(".section");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    sections.forEach(sec => sec.classList.remove("active"));
    document
      .getElementById(link.getAttribute("data-section"))
      .classList.add("active");
  });
});

// Music data (array of objects)
const songs = [
  {
    title: "Relaxing Music",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    title: "Soft Piano",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    title: "Calm Guitar",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  }
];

// Search & Play
const searchInput = document.getElementById("searchSong");
const searchBtn = document.getElementById("searchBtn");
const songResults = document.getElementById("songResults");
const audioPlayer = document.getElementById("audioPlayer");

searchBtn.addEventListener("click", () => {
  const value = searchInput.value.toLowerCase();
  songResults.innerHTML = "";

  const result = songs.filter(song =>
    song.title.toLowerCase().includes(value)
  );

  if (result.length === 0) {
    songResults.innerHTML = "<li>No music found</li>";
    return;
  }

  result.forEach(song => {
    const li = document.createElement("li");
    li.textContent = song.title;

    li.addEventListener("click", () => {
      audioPlayer.src = song.url;
      audioPlayer.play();
    });

    songResults.appendChild(li);
  });
});