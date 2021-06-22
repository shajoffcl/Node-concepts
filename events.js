const EventEmiiter = require('events');
const eventEmitter = new EventEmiiter();

// functional use

eventEmitter.on('greet', (name,age)=>{
    console.log('Hey, welcome', name+age);
} );

eventEmitter.emit('greet', 'shaib',24);

//classical use

class Person extends EventEmiiter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

const shaj = new Person('shaj');

shaj.on('calls', ()=>{
    console.log('my name is', shaj.name);
})

shaj.emit('calls');