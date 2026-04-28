Java.perform(function() {
    var MainActivity = Java.use("com.m41w4r3.burningdownthewalls.MainActivity");
    MainActivity.hasKnownRootBinary.implementation = function() {
        console.log("[*] Bypassing hasKnownRootBinary()");
        return false;
    };
});