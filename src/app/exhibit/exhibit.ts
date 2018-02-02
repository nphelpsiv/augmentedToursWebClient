export class Exhibit {
    image: string;
    name: string;
    text: string;
    arText: string;
    _id: string;
    x: number;
    y: number;
    z: number;

    constructor(text: string, image: string, name: string, id: string,
        arText: string, x: number, y: number, z: number)
    {
        this.image = image;
        this.name = name;
        this.text = text;
        this._id = id;
        this.x = x;
        this.y = y;
        this.z = z;
        this.arText = arText;
    }
}