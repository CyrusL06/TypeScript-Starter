// this works but how about number []
function detectTypes(value: number | string){
    if(typeof value === "string"){
       return value.toLowerCase()
    } 
        return value + 3
}

// Good syntax
function provideId(id: string | null){
    // if there is no id provide
    if(!id){
        console.log("Please provide ID");
        // returns the method here
        return
    }
    id.toLowerCase
}

// From documentation saying DONT COPY IT
// beacause its faulty 
function printAll(strs: string | string[] | null) {

    if (strs) {
      // type of checks for default type
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
  }

  ///////////////////////////
  // the operator in narrowing
////////////////////////////////
  interface User{
    name:string,
    email: string
  }

  interface Admin{
    name:string,
    email: string,
    isAdmin: boolean
  }

  // account is being passed on
  // and it can be type User or Admin
  // problem here is how to verify 100% its the role
  function isAdminAccount(account: User | Admin){
    // if this property exist in account
    if("isAdmin" in account){
      return account.isAdmin
    }
    return
  }


  /////////////////////
  //type predocates & Instanceof Narrowing
  //////////////

  // instance of
  new Date()

  function logValue(x: Date | string) {
    // instanceof check you if this object is instance of some class
    // only use when theres potential of new keyword
    if (x instanceof Date) {
      // true
      console.log(x.toUTCString());
    } else {
      // when string
      console.log(x.toUpperCase());          
    }
  }

   //type predocates

  // were defining a type of fish
  // swim method
  type Fish = {swim: () => void};
  type Bird = {fly: () => void};    
                                //👇🏼 if return is true then its FISH
  function isFish(pet: Fish | Bird): pet is Fish {
          //pet as fish if it has method of swim  if not say its undefined
    // this is returning boolean not the type of pet
    return (pet as Fish).swim !== undefined
  }

  // implementinf
  function getFood(pet: Fish | Bird){
    if(isFish(pet)){
      pet
      return "fish food"
    } else {
      pet
      return "bird Food"
    }
  }

  /////////////////////////////
  //FINAL STEP OF NARROWING
  //Discriminated Unions & Exhaustiveness checking
  //////////////////////

 //Discriminated Unions 
interface Circle{
  property: "circle",
  radius: number
}

interface Square{
  property:"square",
  side:number
}

interface Rectangle{
  property: "rectangle",
  length: number,
  width: number
}
//THATS IT!!
// Implementation
// what if rectangle is added
type Shape = Circle | Square | Rectangle

// shape it gonna come in in type of Shape👆🏼 from type
function getTrueShape(shape: Shape){
  if(shape.property === "circle"){
      return Math.PI * shape.radius ** 2
  }
  // whatever formula
  //return shape.side * shape.side
}

//----
//Exhaustiveness checking

function getArea (shape: Shape){
  switch(shape.kind){
    case "circle":
      return Math.PI * shape.radius ** 2

    case "square":
      return shape.side * shape.side

    case "rectnagle":
      return shape.length * shape.side

      // The never type for the new added rectangle on "Shapes"
    default: 
      const _defaultShape: never = shape
      return _defaultShape
  }
}

