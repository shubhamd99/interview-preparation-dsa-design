const { personName, personWithPlace, showName, showName2, showName3, showName4, personObjWithCall } = require('./index');


test('Apply Method', () => {
    console.log(personName);
    expect(personName).toEqual("Shubham Dhage");
});

test('Apply Method', () => {
    console.log(personWithPlace);
    expect(personWithPlace).toEqual("Shubham Dhage,Oslo,Norway");
});

test('Call Method', () => {
    console.log(showName);
    expect(showName).toEqual("Name: undefined");
});

test('Call Method', () => {
    console.log(showName2);
    expect(showName2).toEqual("Name: undefined");
});

test('Call Method', () => {
    console.log(showName3);
    expect(showName3).toEqual("Name: Shubham");
});

test('Call Method', () => {
    console.log(showName4);
    expect(showName4).toEqual("Name: Rohan");
});

test('Call Method', () => {
    console.log(personObjWithCall);
    expect(personObjWithCall).toEqual("Shubham Dhage,Banglore,India");
});