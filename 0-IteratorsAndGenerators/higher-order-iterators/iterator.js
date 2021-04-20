const getApiKey = () => 'c7045d45ee4cad080e58efb530292706'

function delayed(delaySeconds, iterable) {
    // Returns a promise that resolves after _seconds_ 
    const delay = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000))
    
    return {
      [Symbol.asyncIterator]: function() {
        const iterator = iterable[Symbol.asyncIterator]()
        const delayedIterable = {
          next: () => {
            return delay(delaySeconds).then(() => iterator.next())
          }
        }
        return delayedIterable
      }
    }
}

function flickrTagSearch(tag) {
  
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
      .then(photos => photos.map(photo =>
        `https://farm${photo.farm}.staticflickr.com/` +
        `${photo.server}/${photo.id}_${photo.secret}_q.jpg`               
      ))
    }
    
    return {
      [Symbol.asyncIterator]: async function*() {
        let pageIndex = 1
        while(true) { 
          const pageData = await flickrTagSearch(tag, pageIndex)
          for (const url of pageData) {
            yield url
          }
          pageIndex = pageIndex + 1
        }
      }
      /*
      [Symbol.asyncIterator]: function() {
        let pageIndex = 0
        let photoIndex = -1
        let cache = null
  
        const fillCache = page => 
          flickrTagSearch(tag, page).then(photos => {
            cache = photos
          })
  
        return { 
          next: function() {
            photoIndex++
  
            if (cache && cache[photoIndex])
              return delay(2).then(() => ({
                done: false,
                value: cache[photoIndex] 
              }))
  
            photoIndex = 0
            pageIndex = pageIndex + 1
            return fillCache(pageIndex)
              .then(() => delay(2))
              .then(() => ({
                done: false,
                value: cache[photoIndex] 
              }))
          }
        }
      }*/
    }
}

const cats = delayed(2, flickrTagSearch('cats'))