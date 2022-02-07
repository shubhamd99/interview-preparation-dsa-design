interface Users {
    id: number;
    name: string;
    company: string;
    friends: number[];
}
type Edges = {[userId: number]: number[]};

class Graph {
    private edges: Edges = {};
    private users: Users[] = [];

    constructor(users: Users[]) {
        // initialize edges
        this.edges = {};

        // save users for later access
        this.users = users;

        // add users and edges of each
        users.forEach(user => {
            this.edges[user.id] = user.friends;
        });
    }

    shortestPath(sourceUser, targetCompany) {
        
    }
}

const users: Users[] = [
    {
        id: 1,
        name: 'Shubham',
        company: 'Swiggy',
        friends: [2,3,4,5,7],
    },
    {
        id: 2,
        name: 'John',
        company: 'Google',
        friends: [1,6,8],
    },
    {
        id: 3,
        name: 'Bill',
        company: 'Uber',
        friends: [1,4,5,8],
    },
    {
        id: 4,
        name: 'Bill',
        company: 'Uber',
        friends: [1,3,6,8],
    },
    {
        id: 5,
        name: 'Jack',
        company: 'Samsung',
        friends: [1,3,7],
    },
    {
        id: 6,
        name: 'Rita',
        company: 'Twitter',
        friends: [2,4,7,8],
    },
    {
        id: 7,
        name: 'Smith',
        company: 'Redhat',
        friends: [1,5,6,8],
    },
    {
        id: 8,
        name: 'Jane',
        company: 'Ford',
        friends: [2,3,4,6,7],
    },
];
const graph = new Graph(users);