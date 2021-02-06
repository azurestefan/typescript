import faker from 'faker'; //nned to install the type declaration file. npm install @types/faker

export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor () {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
}