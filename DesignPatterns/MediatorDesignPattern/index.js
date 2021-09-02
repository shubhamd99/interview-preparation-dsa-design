// Mediator pattern is used to reduce communication complexity between multiple objects or classes.
// This pattern provides a mediator class which normally handles all the communications between different classes and supports,
// easy maintenance of the code by loose coupling. Mediator pattern falls under behavioral pattern category.

function Member(id, name) {
    this.id = id;
    this.name = name;
    this.chatroom = null;
}

Member.prototype = {
    send: function(message, toMember) {
        this.chatroom.send(message, this, toMember);
    },
    recieve: function(message, fromMember) {
        console.log(`${fromMember.name} to ${this.name}: ${message}`);
    }
}

// Mediator
function ChatRoom() {
    this.members = {};
}

ChatRoom.prototype = {
    addMember: function(member) {
        this.members[member.id] = member;
        member.chatroom = this; // this --> Chatroom Object
    },
    send: function(message, fromMember, toMember) {
        toMember.recieve(message, fromMember);
    }
}

const chat = new ChatRoom();

const bob = new Member(1, "Bob");
const shubham = new Member(2, "Shubham");
const rohan = new Member(2, "Rohan");

chat.addMember(bob);
chat.addMember(shubham);
chat.addMember(rohan);

bob.send("Hey, Shubham", shubham);