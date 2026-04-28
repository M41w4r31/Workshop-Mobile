Java.perform(function() {
    var MainActivity = Java.use("com.m41w4r3.burningdownthewalls.MainActivity");

    MainActivity.hasSuperUserApp.implementation = function() {
        console.log("[*] Bypassing hasSuperUserApp()");
        return false;
    };

    MainActivity.hasSuBinary.implementation = function() {
        console.log("[*] Bypassing hasSuBinary()");
        return false;
    };

    MainActivity.hasKnownRootBinary.implementation = function() {
        console.log("[*] Bypassing hasKnownRootBinary()");
        return false;
    };
});