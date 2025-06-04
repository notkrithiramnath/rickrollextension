let imageURL = "https://tse4.mm.bing.net/th?id=OIP.cxdH6hvbuXK1tZqIp7e6GgHaGA&pid=Api";

function replaceImages() {
  const imgs = document.getElementsByTagName("img");
  for (let img of imgs) {
    img.src = imageURL;
  }
}

// Run once on load
replaceImages();

// Re-run anytime the DOM changes, w like a scroll or a refresh
const observer = new MutationObserver(replaceImages);
observer.observe(document.body, {
  childList: true,
  subtree: true
});
