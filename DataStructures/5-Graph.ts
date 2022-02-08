// Graphs - The simplest way to define a graph would be anything that is a collection of nodes in which the nodes are connected by edges. Graphs are one of the most popular mathematical concepts that are used in computer science.

// Popular examples of graph implementations would be any social media websites these days. Facebook uses friends as nodes and friendship as edges. Twitter, on the other hand, defines followers as nodes and following as an edge, and so on.

// Types of Graphs:
// 1. Simple Graphs
// 2. Undirected Graphs
// 3. Directed Graphs
// 4. Cyclic Graphs
// 5. Directed Acyclic Graphs
// 6. Weighted Graphs

// A bidirected graph is a graph in which each edge is given an independent orientation at each end.

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

    shortestPath(sourceUser: Users, targetCompany: string) {
        // final shortestPath
        var shortestPath;

        // for iterating along the breadth
        var tail = 0;

        // queue of users being visited
        var queue: Users[] = [ sourceUser ];

        // mark visited users
        var visitedNodes: number[] = [];

        // previous path to backtrack steps when shortestPath is found
        var prevPath = {};

        // request is same as response
        if (sourceUser.company === targetCompany) {
            return;
        }

        // mark source user as visited so next time we skip the processing
        visitedNodes.push(sourceUser.id);

        // loop queue until match is found
        // Or until the end of queue i.e no match
        while (!shortestPath && tail < queue.length) {

            // take user breadth first
            var user = queue[tail];

            // take nodes forming edges with user
            var friendsIds: number[] = this.edges[user.id];

            // loop over each node
            friendsIds.forEach(friendId => {
                // result found in previous iteration, so we can stop
                if (shortestPath) return;

                // get all details of node
                var friend = this.users.find(user => user.id === friendId);

                // if visited already, nothing to recheck so return
                if (visitedNodes.includes(friendId)) {
                    return;
                }

                // mark as visited
                visitedNodes.push(friendId);

                // if company matched
                if (friend.company === targetCompany) {

                    // create result path with the matched node
                    var path: Users[] = [friend];

                    // keep backtracking until source user and add to path
                    while (user.id !== sourceUser.id) {
                        // add user to shortest path
                        path.unshift(user);

                        // prepare for next iteration
                        user = prevPath[user.id];
                    }

                    // add source user to the path
                    path.unshift(user);

                    // format and return shortest path
                    shortestPath = path.map(path => path.name).join(' -> ');
                }

                // break loop if shortestPath found
                if (shortestPath) return;

                // no match found at current user,
                // add it to previous path to help backtracking later
                prevPath[friend.id] = user;

                // add to queue in the order of visit
                // i.e. breadth wise for next iteration
                queue.push(friend);
            });

            // increment counter
            tail++;
        }

        return shortestPath || `No path between ${shortestPath.name} & ${targetCompany}`;
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
console.log(graph.shortestPath(users[2], 'Samsung'));