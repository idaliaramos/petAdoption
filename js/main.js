(() => {
  const onImageClick = () => {
    const galleryImageList = document.querySelectorAll("#gallery li");
    const galleryImages = [...galleryImageList];
    galleryImages.forEach(image => {
      image.addEventListener("click", event => {
        galleryImageOpen(event.target);
      });
    });
  };
  const galleryImageOpen = image => {
    console.log(image, "image");
    const imageSrc = image.getAttribute("src");
    const openedImage = `<div class='backdrop'>
    <img src='${imageSrc}' alt="" />
    <span class='backdrop-close'> X </span>
  </div>`;
    document.body.insertAdjacentHTML("beforeend", openedImage);
    console.log(openedImage, "00000image");
  };

  onImageClick();
})();
