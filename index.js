// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius;

    }
    set diameter(diameter){
        this._diameter = diameter;
        this.radius = diameter / 2;
    }
    set circumference(circumference){
        this._circumference = circumference;
        this.radius = (circumference / Math.PI)/2;
    }
    set area(area){
        this._area = area;
        this.radius = Math.sqrt(area/Math.PI);
    }
    get diameter(){
        return this.radius * 2;
    }
    get circumference(){
        return Math.PI * this.diameter;
    }
    get area(){
        return Math.PI * Math.pow(this.radius, 2);
    }
}