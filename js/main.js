(() => {
  const onImageClick = () => {
    //select all the images from the gallery
    const galleryImageList = document.querySelectorAll("#gallery li");
    console.log(galleryImageList, "gallery image list");
    // const galleryImages = [...galleryImageList];
    //add event listener to each of the images to open on click
    galleryImageList.forEach(image => {
      image.addEventListener("click", event => {
        galleryImageOpen(event.target);
      });
    });
  };
  const galleryImageOpen = image => {
    //get the image src
    const imageSrc = image.getAttribute("src");
    //create a div that contains the image selected
    const openedImage = `<div class='backdrop'>
    <img src='${imageSrc}' alt="" />
    <span class='backdrop-close'> X </span>
  </div>`;
    //insert the html into the body
    document.body.insertAdjacentHTML("beforeend", openedImage);
    galleryImageClose();
  };

  const galleryImageClose = image => {
    //get the close button
    const closeButton = document.querySelector(".backdrop-close");
    //add an event listener so onclick you get the whole backdrop and remove it
    closeButton.addEventListener("click", () => {
      const backdrop = document.querySelector(".backdrop");
      backdrop.remove();
    });
  };
  onImageClick();
})();
