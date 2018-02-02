import { Exhibit } from '../exhibit/exhibit'

export interface Tour {
    _id: string;
    tourID: string;
    tourName: string;
    creatorName: string;
    exhibits: Exhibit[];

    // addExhibit(text: string, image: number, name: string): void {
    //     this.exhibits.push(new Exhibit(text, image, name, this.exhibits.length))
    // }
}