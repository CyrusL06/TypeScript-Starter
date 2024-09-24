//1. Tsconfig file and directed the    "outDir": "./dist",  
//2. Youc convert ts by npm tsc -w 
// 3. automatically saves what u have in Ts is js while inspecting so have it open 

console.log("typescript is here nigga");
console.log("typescript is here amazing");

//////////////////////////////////
// Class Public & Private
////////////////////////////////
// right sytnax is knowing it before class
//---------------------------------
// THIS IS THE LONG WAY
class User {
    public email:string
     name:string
    // it needs an initializer
    // you can pass it or not its not gonna worry
    // PRIVATE  
    private readonly city: string = ""
    #secret: string = ""
    constructor(email: string, name: string){
        this.email = email;
        this.name = name;
    }
}

// creating object
//  since its a constructor you dont have to say if its email or name
// Just gotta be in order
const Cyrus = new User( "dwad@gmail.com",  "Cy" )
// Cyrus.city 

//-----------------------------------------
//SHORCUT
//  construct(public email:"wdaw"){}
class shortUser {

    constructor(
        public email: string,
        public name: string,
        private readonly city: string = "Delta",
        private secret: string = ""

        
        ){}

      //private method
      private deleteToken(){
        console.log("Token deleted");
    }
}

const Mark = new shortUser( "dwad@gmail.com",  "Cy" )



//////////////////////////////////
// Getters, Setters,and Protected - also used to private properties to add logic
////////////////////////////////
//get is used to get any property and also can use additional logic
//setter is like useState
// protected  mean this variab;e wil be accesible that inherit class and the same class its in

class gettersNSetters {

    // Setter accesing this
    // protected
    protected _courseCount = 1

    constructor(
        public email: string,
        public name: string,
        private readonly city: string = "Delta",
        private secret: string = ""

        
        ){
       
    }
    //getter
    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    //setter
    //you cant make any data type on setter 
    set courseCount(courseNum) {
        if(courseNum <= 1 ){
            throw new Error("Course count should be more than 1")
        }
        // gets updated
        this._courseCount = courseNum
    }
}

const bruh = new gettersNSetters( "dwad@gmail.com",  "Cy" )


//////////////////////////////////
// Inheretance 
////////////////////////////////
// but not private class
                // 👇🏼inherate praent class
class SubUser extends gettersNSetters {
    isFamily: boolean = true
    // method that manipulate _courseCount
    changeCourseCount(){
        this._courseCount = 4
    }
}


