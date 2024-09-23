// ARRAYS - wtiring array in TS

const superHeroes: string[] = []
const heroNumber: number[] = []
const heroAge: Array<number> = []


superHeroes.push("spiderman")
heroNumber.push(43)
heroAge.push(24)

//--------------------------

type User = {
    name: string
    isActive: Boolean
}

const allUsers: User[] = []

allUsers.push({name: "", isActive: true})

//---------------
// when ur using a complex type
// array on array
const MlModels: number[][]= [
    [234, 2344, 2345],
    [534,345,656,8779]
]