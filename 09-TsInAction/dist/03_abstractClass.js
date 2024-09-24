"use strict";
// Create abstract ckass
// no new object can be created with abstract class
// buts its define with new classes
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    //    
    getReelTime() {
        // some complex calculation
        return 8;
    }
}
class instagram extends TakePhoto {
    constructor(
    // taking properties from calss above
    cameraMode, filter, burst) {
        // you need "super" if u construct ur code like this
        // it just means all the required value
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    // implement but dont have to return anyinth = void
    getSepia() {
        console.log("Sepia");
    }
}
const mark = new Instagram("test", "test", 4);
mark.getReelTime();
