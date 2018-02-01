export class Exhibit {
    _image: number;
    _name: string;
    _text: string;
    id: number;

    constructor(text: string, image: number, name: string, id: number)
    {
        this._image = image;
        this._name = name;
        this._text = text;
        this.id = id;
    }
}