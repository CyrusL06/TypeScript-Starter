// Create abstract ckass
// no new object can be created with abstract class
// buts its define with new classes
abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}
    // this is saying 
    // this is abstacrt im not gonn provide definition just
    // they need to implemtn otherwise not following the class
   abstract getSepia(): void
    //    
   getReelTime():number{
        // some complex calculation
        return 8
   } 
}


class instagram extends TakePhoto {
    constructor(
        // taking properties from calss above
        public cameraMode: string,
        public filter: string,
        public burst: number   
    ){
        // you need "super" if u construct ur code like this
        // it just means all the required value
        super(cameraMode, filter)
    }
    // implement but dont have to return anyinth = void
    getSepia(): void {
        console.log("Sepia");
        
    }
}

 const mark = new Instagram("test", "test", 4)

 mark.getReelTime()