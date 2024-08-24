export class User {
    id: number
    username: string
    password: string
    fullName: string
    email: string

    constructor(id: number, username: string, password: string, fullName: string, email: string) {
        this.id = id
        this.username = username
        this.password = password
        this.fullName = fullName
        this.email = email
    }
}