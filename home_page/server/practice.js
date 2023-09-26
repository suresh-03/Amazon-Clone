(function(){
    const superman = "superman";
    console.log(superman);
})();

(function(){
    const batman = "batman";
    console.log(batman);
})();

class hero{
    constructor(name){
        this.namee = name;
    }
    setname(name){
        this.namee = name;
    }
    getname(){
        console.log(this.namee);
    }
}

const hero1 = new hero("suresh");
hero1.getname();
hero1.setname("kumar");
hero1.getname()