// In Vanilla JavaScript, the way to set styles on an element would be as follows:

// const buttonEl = document.querySelector('button');
// buttonEl.style.color = 'red';
// buttonEl.style.backgroundColor = 'tomato';
// buttonEl.style.fontSize = '16px';

// jQuery is a library that simplifies DOM manipulation (among other things).
// With jQuery (using the $ alias function), the above can be simplified into:

// const buttonEl = $('button');
// buttonEl.css('color', 'red');
// buttonEl.css('backgroundColor', 'tomato');
// buttonEl.css('fontSize', '16px');

// The return value of most jQuery manipulation APIs return the jQuery object itself,
// so that method calls can be chained. The above can be further simplified again:

// $('button')
//   .css('color', 'red')
//   .css('backgroundColor', 'tomato')
//   .css('fontSize', '16px');

// Additionally, if the second parameter is omitted, the value of that style property is returned.
// <button style="color: red">Submit</button>
// $("button").css("color"); // 'red'

// Implement the jQuery single-character function $ which only needs to supports
// the css() method that either gets the value of a computed style property or sets a CSS property on the matched element.

/**
 * @param {string} selector
 * @return {{css: Function}}
 */
function $(selector) {
  const element = document.querySelector(selector);

  return {
    /**
     * @param {string} prop
     * @param {boolean|string|number} value
     * @return {Object|void|string}
     */
    css: function (prop, value) {
      // Getter case.
      if (value === undefined) {
        // No matching elements.
        if (element == null) {
          return undefined;
        }

        const value = element.style[prop];
        return value === "" ? undefined : value;
      }

      // Setter case.
      if (element != null) {
        element.style[prop] = value;
      }

      return this; // The return value of most jQuery manipulation APIs return the jQuery object itself. Return object
    },
  };
}
