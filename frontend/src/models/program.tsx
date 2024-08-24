import React from "react"

export class Program{
    name: string
    description: string
    image: React.ReactElement
    link: string
    constructor(name: string, description: string, image: React.ReactElement, link: string){
        this.name = name
        this.description = description
        this.image = image
        this.link = link
    }
}