const profile = {
    aname: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void{
        this.age = age;
    }
};

const {age, aname}: {age: number; aname: string} = profile; //expected structure of profile object
const { coords: {lat, lng}}: {coords: {lat: number; lng: number}} = profile;