# Leader Election

Leader election is the simple idea of giving one thing (a process, host, thread, object, or human) in a distributed system some special powers. Those special powers could include the ability to assign work, the ability to modify a piece of data, or even the responsibility of handling all requests in the system.

A leader election algorithm describes how a cluster of nodes without a leader can communicate with each other to choose exactly one of themselves to become the leader. The algorithm is executed whenever the cluster starts or when the leader node goes down.

## When to use?

The first case is when each node is roughly the same and there isn't a clear candidate for a permanently assigned leader. This means any node can be elected as leader, and there isn’t a single point of failure required to coordinate the system.

The second case is when the cluster is doing particularly complex work that needs good coordination. Coordination can mean anything from decisions about how the work is to be divided, to assigning work to specific nodes, or to synthesizing the results of work from different nodes.

## Drawback

The main downside to leader election is complexity: a bad implementation can end up with “split brain” where two leaders try to control at the same time, or no leader is elected and the cluster can’t coordinate. As such, leader election should only be used when there is a need for complex coordination or strong consistency, and none of the alternatives fit the situation.

A leader is a single node, so it can become a bottleneck or temporary single point of failure. Additionally, if the leader starts making bad decisions (whatever that means in the context of directing work for the service), the followers will just do what they're assigned, possibly derailing the entire cluster.

## Consensus algorithm

A consensus algorithm is one that allows all the participants in a distributed system to choose a value from a set in such a way that all the participants choose the same value. 

A leader election algorithm is a special case of consensus algorithm where the set is the set of participants. The leader election problem consists of requiring a leader election whenever there is no leader. If there are failures, this may require running more than one election, because a new election becomes necessary when the current leader fails.

## Popular Consensus algorithm

* Raft
* Paxos

## Popular Tools For leader election

* Zookeeper
* Etcd

## Consistency

Consistency means that data is the same across the cluster, so you can read or write from/to any node and get the same data. Every read receives the most recent write or an error.

## Availability

Availability means the ability to access the cluster even if a node in the cluster goes down. Every request receives a response, without guarantee that it contains the most recent version of the information.

## Partition Tolerance

The system continues to operate despite arbitrary partitioning due to network failures
