const R = require('ramda');

const getApiKey = () => '7cd25115baca76f11ab0f1b2510e5d28'

const delay = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000))

const map = (mapper) => async function* map(iterable) {
    for await(const item of iterable) {
      yield mapper(item)
    }
}

function preloadImage(url) {
    return new Promise(resolve => {
      const img = new Image()
      img.onload = () => resolve(url)
      img.src = url
    })
}

function flickrTagSearch(tag) {
  
    const photoUrl = (size, photo) => 
      `https://farm${photo.farm}.staticflickr.com/` +
      `${photo.server}/${photo.id}_${photo.secret}_${size}.jpg` 
    
    // Returs a Promise that resolves to an array of urls to images that 
    // represents a (paged) result of a tag search on Flickr.
    function flickrTagSearch (tag, page) {
      const apiKey = getApiKey()
      return fetch(
        'https://api.flickr.com/services/rest/' + 
        '?method=flickr.photos.search' +
        '&api_key=' + apiKey +
        '&page=' + page +
        '&tags=' + tag + 
        '&format=json' + 
        '&nojsoncallback=1'   
      )
      .then(response => response.json())
      .then(body => body.photos.photo)
      .then(photos => photos.map(photo => ({
        square: photoUrl('q', photo),
        medium: photoUrl('m', photo),
      })))
    }
    
    return {
      [Symbol.asyncIterator]: async function*() {
        let pageIndex = 1
        while(true) { 
          const pageData = await flickrTagSearch(tag, pageIndex)
          for (const photo of pageData) {
            yield photo
          }
          pageIndex = pageIndex + 1
        }
      }
    }
}

const delayed = delaySeconds => map(async item => await delay(delaySeconds) || item)