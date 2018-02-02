import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Exhibit } from './exhibit/exhibit'

export class InMemoryDataService implements InMemoryDbService {
  
  exhibit1 = new Exhibit("exhibit 1", "", "exhibit1", "1", "AR TEXT1", 0, 0, 0);
  exhibit2 = new Exhibit("exhibit 2", "", "exhibit2", "2", "AR TEXT2", 0, 0, 0);
  exhibit3 = new Exhibit("exhibit 3", "", "exhibit3", "3", "AR TEXT3", 0, 0, 0);
  exhibit4 = new Exhibit("exhibit 4", "", "exhibit4", "4", "AR TEXT4", 0, 0, 0);
  exhibit5 = new Exhibit("exhibit 5", "", "exhibit5", "5", "AR TEXT5", 0, 0, 0);
  exhibit6 = new Exhibit("exhibit 6", "", "exhibit6", "6", "AR TEXT6", 0, 0, 0);
  exhibit7 = new Exhibit("exhibit 7", "", "exhibit7", "7", "AR TEXT7", 0, 0, 0);
  exhibitsList1: Exhibit[] = [this.exhibit1, this.exhibit2, this.exhibit3];
  exhibitsList2: Exhibit[] = [this.exhibit2];
  exhibitsList3: Exhibit[] = [this.exhibit3];
  exhibitsList4: Exhibit[] = [this.exhibit4];
  exhibitsList5: Exhibit[] = [this.exhibit5];
  exhibitsList6: Exhibit[] = [this.exhibit6];
  exhibitsList7: Exhibit[] = [this.exhibit7];

  

  createDb() {
    const tours = [
      { _id: "1", tourName: 'Neals Tour', exhibits: this.exhibitsList1},
      { _id: "2", tourName: 'Bens Tours', exhibits: this.exhibitsList2},
      { _id: "3", tourName: 'Chris Tour', exhibits: this.exhibitsList3 },
      { _id: "4", tourName: 'Taylors tour', exhibits: this.exhibitsList4 },
      { _id: "5", tourName: 'Jims Tour', exhibits: this.exhibitsList5 },
      { _id: "6", tourName: 'The Best Tour', exhibits: this.exhibitsList6 },
      { _id: "7", tourName: 'Aquarium', exhibits: this.exhibitsList7 }
    ];
    // const exhibits = [
    //   { id: 1, name: 'Neals exhibit' },
    //   { id: 2, name: 'Bens exhibit' },
    //   { id: 3, name: 'Chris exhibit' },
    //   { id: 4, name: 'Taylors exhibit' },
    //   { id: 5, name: 'Jims exhibit' },
    //   { id: 6, name: 'The Best exhibit' },
    //   { id: 7, name: 'Aquarium' }
    // ];
    return {tours};
  }

}