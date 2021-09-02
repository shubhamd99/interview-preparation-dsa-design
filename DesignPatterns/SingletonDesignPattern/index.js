// In software engineering, the singleton pattern is a software design pattern that restricts
// the instantiation of a class to one "single" instance.
// This is useful when exactly one object is needed to coordinate actions across the system.
// The term comes from the mathematical concept of a singleton.

// Function Scoped, Self Invoked Function
const Singleton = (function() {
    function ProcessManager() {
        this.numProcess = 0;
    }

    let pManager;

    function createProcessManager() {
        pManager = new ProcessManager();
        return pManager;
    }

    return {
        getProcessManager: () => {
            if (!pManager) {
                pManager = createProcessManager();
            }
            return pManager;
        }
    }
})();

// Only one instance it will create, no new instances
const processManager = Singleton.getProcessManager();
const processManagerTwo = Singleton.getProcessManager();
const processManagerThree = Singleton.getProcessManager();

console.log(processManager === processManagerTwo);
console.log(processManager === processManagerThree);