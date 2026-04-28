Java.perform(function() {
    var MainActivity = Java.use("com.m41w4r3.burningdownthewalls.MainActivity");
    MainActivity.hasSuBinary.implementation = function() {
        console.log("[*] Bypassing hasSuBinary()");
        return false;
    };
});