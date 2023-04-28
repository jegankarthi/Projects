var module = (function () {
    var private_hey = "Hey";
    function privateMethod() {
        console.log(private_hey);
    }
    return {
        publicMethod: () => { console.log(privateMethod()); }
    }
})()
