const fullName = 'global name';

const Person = {
    firstname : 'rolof',
    lastname : 'emmanuel',
    fullName () {
        return this.firstname + ' '+ this.lastname;
    }, 
}
Person.firstname = 'james';
console.log(Person.fullName())