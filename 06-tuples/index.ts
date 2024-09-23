//tuples the specified order is important
// its restricting you so that u have order of data

// array of string
const user: ( string | number) [] = ["Cy", 2,4,"Bro"]

// Let can be reasigned vs COnst cannot 
let user2: [string, number, boolean]

user2 = ["Cyr", 234, true]


let rgb: [number, number, number] = [255, 123, 112]


type User = [number, string]
// 👇🏼
const newUser: User = [112, "@gmail.com" ]

newUser[1] = "hr.com"


export{}
