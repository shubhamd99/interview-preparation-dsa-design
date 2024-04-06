// Before the optional chaining operator (?.) existed,
// it was sometimes troublesome to access deeply-nested properties in huge JavaScript objects when some of the intermediate properties might not be present.

const john = {
  profile: {
    name: { firstName: "John", lastName: "Doe" },
    age: 20,
    gender: "Male",
  },
};

const jane = {
  profile: {
    age: 19,
    gender: "Female",
  },
};

function getFirstName(user) {
  return user.profile.name.firstName;
}

//  Doing getFirstName(john) works but getFirstName(jane) will error because the name property doesn't exist for jane.profile.

// Lodash's Get method
// Lodash's _.get method was created as a solution for such use cases.

// Array index accessing doesn't require special handling and can be treated like accessing string-based fields on objects.
// const arr = [10, 20, 30];
// arr[1] === 20; // true
// arr['1'] === 20; // true
// There's no need to support syntax resembling get(object, 'a[0].b.c').

/**
 * @param {Object} objectParam
 * @param {string|Array<string>} pathParam The path of the property to get. It can be a string with . as the separator between fields, or an array of path strings.
 * @param {*} [defaultValue]
 * @return {*}
 */
function get(objectParam, pathParam, defaultValue) {
  const path = Array.isArray(pathParam) ? pathParam : pathParam.split(".");

  let index = 0;
  let length = path.length;
  let object = objectParam;

  while (object != null && index < length) {
    object = object[String(path[index])];
    index++;
  }

  const value = index && index === length ? object : undefined;
  return value !== undefined ? value : defaultValue;
}

get(john, "profile.name.firstName"); // 'John'
get(john, "profile.gender"); // 'Male'
get(jane, "profile.name.firstName"); // undefined
// Arrays can also be accessed if numerical indices are provided.
get({ a: [{ b: { c: 3 } }] }, "a.0.b.c"); // 3
