// Union is one of the best in typescript
// when you dont know what type of data is coming into
// instead of using Any this is the best practice

let score: number | string = 33

score = 44
score = '55'

// When your building a strict app with multiple hietachy of user
// and you want to define a strict
type User = {
    name:string;
    id:number
}

type Admin = {
    username:string;
    id:number
}

let Cyrus: User | Admin = {name: "Cyrus", id: 6}

Cyrus = {username: "Cyrus0626", id: 6}

function getDBId(id: number| string){
    // making some API calls
    console.log(`DB id is: ${id}`);

    // but what if you want to have all lowercase??
    // but you cant do that because of number data it cause error this what u do:

    if(typeof id === "string"){
        id.toLowerCase()
    }
    
}

getDBId(3)
getDBId("3")

//array
const data: number [] = [1, 2, 3, 4]
const data2: string [] = ["1", "2", "3", "4"]
const data3: (number | string) [] = ["1", 2, 3, "4"]
const data4: (number | string | boolean) [] = ["1", 2, 3, "4", false]

// you can mkae number very struct
let pi:3.14  = 3.14
pi = 3.14

// implementation
let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// Not allowed
seatAllotment ="crew"
