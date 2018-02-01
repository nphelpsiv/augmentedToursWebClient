import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Exhibit } from './exhibit/exhibit'

export class InMemoryDataService implements InMemoryDbService {
  
  exhibit1 = new Exhibit("exhibit 1", 1, "exhibit1", 1);
  exhibit2 = new Exhibit("exhibit 2", 1, "exhibit2", 2);
  exhibit3 = new Exhibit("exhibit 3", 1, "exhibit3", 3);
  exhibit4 = new Exhibit("exhibit 4", 1, "exhibit4", 4);
  exhibit5 = new Exhibit("exhibit 5", 1, "exhibit5", 5);
  exhibit6 = new Exhibit("exhibit 6", 1, "exhibit6", 6);
  exhibit7 = new Exhibit("exhibit 7", 1, "exhibit7", 7);
  exhibitsList1: Exhibit[] = [this.exhibit1, this.exhibit2, this.exhibit3];
  exhibitsList2: Exhibit[] = [this.exhibit2];
  exhibitsList3: Exhibit[] = [this.exhibit3];
  exhibitsList4: Exhibit[] = [this.exhibit4];
  exhibitsList5: Exhibit[] = [this.exhibit5];
  exhibitsList6: Exhibit[] = [this.exhibit6];
  exhibitsList7: Exhibit[] = [this.exhibit7];

  

  createDb() {
    const tours = [
      { id: 1, name: 'Neals Tour', exhibits: this.exhibitsList1},
      { id: 2, name: 'Bens Tours', exhibits: this.exhibitsList2},
      { id: 3, name: 'Chris Tour', exhibits: this.exhibitsList3 },
      { id: 4, name: 'Taylors tour', exhibits: this.exhibitsList4 },
      { id: 5, name: 'Jims Tour', exhibits: this.exhibitsList5 },
      { id: 6, name: 'The Best Tour', exhibits: this.exhibitsList6 },
      { id: 7, name: 'Aquarium', exhibits: this.exhibitsList7 }
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