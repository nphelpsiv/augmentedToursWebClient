import { Exhibit } from '../exhibit/exhibit'

export interface Tour {
    _id: string;
    tourID: string;
    tourName: string;
    creatorName: string;
    exhibits: Exhibit[];
}
