// publisher
// Subscriber
// unsubscribe
// Some place to store callbacks that are registered from subscribers.

function pubSub() {

    const subscribers = {};

    function publish(eventName, data) {
        if (!Array.isArray(subscribers[eventName])) {
          return;
        }
        subscribers[eventName].forEach((callback) => {
          callback(data);
        });
    }

    function subscribe(eventName, callback) {
        if (!Array.isArray(subscribers[eventName])) {
            subscribers[eventName] = [];
        }
        subscribers[eventName].push(callback);
        const index = subscribers[eventName].length - 1;

        return {
            unsubscribe() {
                subscribers[eventName].splice(index, 1)
            },
        }
    }
  
    return {
      publish,
      subscribe,
    }
}

const demo = pubSub();

demo.subscribe('someEvent', (data) => console.log(data));
demo.subscribe('someEvent1', (data) => console.log(data));
demo.subscribe('someEvent2', (data) => console.log(data));

demo.publish('someEvent1', 'hello1');
demo.publish('someEvent2', 'hello2');

// Subscribe
const sub = demo.subscribe('food', function(data) {
    console.log(`Received some food: ${data}`)
});

demo.publish('food', 'foooood..');
  
// Removes the subscribed callback
sub.unsubscribe();

demo.publish('food', 'foooood..'); // Will not execute