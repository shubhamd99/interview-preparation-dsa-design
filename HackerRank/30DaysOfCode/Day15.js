// Day 15: Linked List

// Complete the insert function in your editor so that it creates a new Node (pass data as the Node constructor argument)
// and inserts it at the tail of the linked list referenced by the head parameter. Once the new node is added, return
// the reference to the head node.

// Note: If the head argument passed to the insert function is null, then the initial list is empty.

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function Node(data){
    this.data=data;
    this.next=null;
}

function Solution(){

	this.insert=function(head,data){
        //complete this method
        let node = new Node(data);

        if (!head) {
            head = node;
        } else {
            let current = head;

            while (current.next !== null) {
                current = current.next;
            }

            current.next = node;
        }

        return head;
    }

	this.display=function(head){
        var start=head;
            while(start){
                process.stdout.write(start.data+" ");
                start=start.next;
            }
    };
}

function main(){
    var T=parseInt(readLine());
    var head=null;
    var mylist=new Solution();
    for(i=0;i<T;i++){
        var data=parseInt(readLine());
        head=mylist.insert(head,data);
    }
    mylist.display(head);
}