const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

// Unsplash API
const count = 3;

const apiKey = "EpudYgT0A7QklijHvb_HxUOAdkmFT13GhKjSmt96WMo";
// const apiKey = 'jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek'
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Helper Function to set Attribute on dom elements
function setAttributes(element, Attributes) {
  for (const key in Attributes) {
    element.setAttribute(key, Attributes[key]);
  }
}

// Create Elements for links & photos, add to dom
function displayPhotos() {
  // Run function for each object in photosArray
  photosArray.forEach((photo) => {
    // create <a> to link to unsplash
    const item = document.createElement("a");

    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });
    // create <img> for photo.object
    const img = document.createElement("img");

    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    // put <img> inside <a> then put both inside imageContainer element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// get photos from unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    console.log(photosArray);
    displayPhotos();
  } catch (error) {
    // catch error
  }
}

// check if scrolling near bottom of page, load more photos

// on load
getPhotos();
