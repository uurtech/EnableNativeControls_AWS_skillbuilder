// this code will be executed when the extension's button is clicked


(function () {
  console.log("clicked")

  console.log("searching for iframes")
  let iframes = document.querySelectorAll("iframe")
  iframes.forEach((iframe) => {
    let inner_document = iframe.contentWindow.document;
    let videos = inner_document.querySelectorAll("video");
    videos.forEach((e) => e.setAttribute("controls", "controls"))
    let video_bars = inner_document.querySelectorAll(".vjs-control-bar")
    video_bars.forEach((e) => e.remove())
  })

})();
