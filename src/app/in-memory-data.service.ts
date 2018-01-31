import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tours = [
      { id: 1, name: 'Neals Tour' },
      { id: 2, name: 'Bens Tours' },
      { id: 3, name: 'Chris Tour' },
      { id: 4, name: 'Taylors tour' },
      { id: 5, name: 'Jims Tour' },
      { id: 6, name: 'The Best Tour' },
      { id: 7, name: 'Aquarium' }
    ];
    const exhibits = [
      { id: 1, name: 'Neals exhibit' },
      { id: 2, name: 'Bens exhibit' },
      { id: 3, name: 'Chris exhibit' },
      { id: 4, name: 'Taylors exhibit' },
      { id: 5, name: 'Jims exhibit' },
      { id: 6, name: 'The Best exhibit' },
      { id: 7, name: 'Aquarium' }
    ];
    return {tours, exhibits};
  }

}