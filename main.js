// Delete all loaded images of the current page

var images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++){
        images[0].parentNode.removeChild(images[0]);
};