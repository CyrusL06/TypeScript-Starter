// must have things
interface TakePhoto{
    cameraMode:string,
    filter: string
    burst: number
}

// if they want to create a feautere they need 
// to follow this interface protocol
class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

// interface with a method name createStory
interface Stories {
    createStory(): void
}

class Youtube implements TakePhoto, Stories {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){}
    // its needed inside
    createStory(): void {
        console.log("Story was created");
        
    }
}