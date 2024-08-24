export class Comment {
    name: string;
    comment: string;
    date: string;
    img: string;

    constructor(name: string, comment: string, date: string, img: string) {
        this.name = name
        this.comment = comment
        this.date = date
        this.img = img
    }
}