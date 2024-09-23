// your creating a new user 
// and this user have some email, userId, google login, database Id
// but you want to get him free trial and discount 
// this can help you wiht it


interface newUser {
    readonly dbID: number
    email: string,
    userId: number,
    googleId?: number
    // method
    startTrial: () => string
    // another new way to write it
    startSecTrial(): string
    // discount
    getCoupon(couponName:string, value:number) : number
}
// When you want to add a new data in someone elses package
// Extend
interface newUser{
    githubToken:string
}

// Inheratance it
interface Admin extends newUser {
    role:"admin" | "ta" | "learner"
}


const Cyrus: Admin = { dbID: 626, email: "cyrus@gmail.com", 
userId: 1234,
role: "admin",
githubToken: "github",
startTrial: () => {
    return "trial started"
},
startSecTrial: () => {
    return "2nd Trial Started"
},
// it doesnt have to be the same  as above 
// it jus says hey your providing a coupon name which is string
getCoupon: (name: "Cyrus", off: 10) => {
    return 10
}

}

// user changin email
Cyrus.email = "c@Cyrus.com"