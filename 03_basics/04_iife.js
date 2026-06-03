// Immediatly invoked function Expression (IIFE)


(function chai() {
    console.log("DB connected");
})();   //if we are using two iife then here ; is explicitly required

/// ()() is used to call the function immediately after its declaration. This is useful for creating a new scope and avoiding polluting the global namespace.

((name) => {
    console.log(`DB connected ${name}`);
})("John")