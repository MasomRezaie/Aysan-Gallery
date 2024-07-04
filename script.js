const photos = [
    {
        name:'Pinter',
        url:'./photo/IMG_7471.JPG'
    }, {
        name:'rome',
        url:'./photo/IMG_7472.JPG'
    },
    {
        name:'Pinter',
        url:'./photo/IMG_7473.JPG'
    },
    {
        name:'london',
        url:'./photo/IMG_7474.JPG'
    },
    {
        name:'Pinter',
        url:'./photo/IMG_7475.JPG'
    },
    {
        name:'paris',
        url:'./photo/IMG_7476.JPG'
    },
    {
        name:'Picture',
        url:'./photo/IMG_7477.JPG'
    },
    {
        name:'gift',
        url:'./photo/IMG_7478.JPG'
    }, {
        name:'gift',
        url:'./photo/IMG_7479.JPG'
    },
    {
        name:'jug',
        url:'./photo/IMG_7480.JPG'
    },
    {
        name:'clock',
        url:'./photo/IMG_7481.JPG'
    },
    {
        name:'Picture',
        url:'./photo/IMG_7482.JPG'
    },
    {
        name:'Picture',
        url:'./photo/IMG_7483.JPG'
    },

    {
        name:'Picture',
        url:'./photo/IMG_7484.JPG'
    },
    {
        name:'horse',
        url:'./photo/IMG_7485.JPG'
    },
    {
        name:'bamyan',
        url:'./photo/IMG_7486.JPG'
    },
    {
        name:'bird',
        url:'./photo/IMG_7487.JPG'
    },

    {
        name:'gril',
        url:'./photo/IMG_7488.JPG'
    },
    {
        name:'guitar',
        url:'./photo/IMG_7489.JPG'
    },
    {
        name:'tree',
        url:'./photo/IMG_7490.JPG'
    },


];
  
  const gallery = document.querySelector('.Gallery');
  const searchInput = document.getElementById('searchInput');
  
  function displayPhotos(photosArray) {
    gallery.innerHTML = '';
    photosArray.forEach(photo => {
      const img = document.createElement('img');
      img.src = photo.url;
      img.alt = photo.name;
      gallery.appendChild(img);
    });
  }
  
  displayPhotos(photos);
  
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredPhotos = photos.filter(photo => photo.name.toLowerCase().includes(searchTerm));
    displayPhotos(filteredPhotos);
  });