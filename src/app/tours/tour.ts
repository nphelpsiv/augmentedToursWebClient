import { Exhibit } from '../exhibit/exhibit'

export class Tour {
    id: number;
    name: string;
    exhibits: Exhibit[];

    getExhibits(): Exhibit[]
    {
        return this.exhibits;
    }

    addExhibit(text: string, image: number, name: string): void {
        this.exhibits.push(new Exhibit(text, image, name, this.exhibits.length))
    }
}