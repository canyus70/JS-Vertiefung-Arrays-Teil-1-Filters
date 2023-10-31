// JS Vertiefung Lvl 1.8 Teil 1

const zahlen = [1,2,3,4,5,6,7,8,9,10];

const geradeZahlen = () => zahlen.filter(zahl => zahl % 2 ===0);
const ungeradeZahlen = () => zahlen.filter(zahl => zahl % 2 !==0);

const gerade =geradeZahlen(zahlen);
const ungerade =ungeradeZahlen(zahlen);

console.log(gerade);
console.log(ungerade);

console.clear()
// JS Vertiefung Lvl 1.8 Teil 2

const woerter = ["Banane", "Kaktus", "Flausch", "Ente", "Apfel", "Auto", "Giraffe", "Schmetterling", "Krokodil", "Lampe"];

function filterKurzeWoerter(woerter) {
    return woerter.filter(woert => woert.length <= 6)
}

const KurzeWoerter = filterKurzeWoerter(woerter);

console.log(KurzeWoerter);

const filterKurzeWoerterArrow = () => woerter.filter(woert => woert.length <=6);

console.log(filterKurzeWoerterArrow());

console.clear()


// JS Vertiefung Lvl 1.8 Teil 3


const heroArr = ["Superman", "Batman", undefined, , "Wonder Woman", "Spider-Man", "Black Widow", "Iron Man", "Thor", "Catwoman", , null];

console.log("Vor der Filterung: " + heroArr)

function myHeros(arr) {
    return arr.filter(element => element !== null && element !== undefined)
};

const gefilterteHeros = myHeros(heroArr);
console.log("Nach der Filterung: "+ gefilterteHeros);

const myHeros2 = arr => arr.filter(element => element !== null && element !==undefined);

const gefilterteHeros2 = myHeros2(heroArr);
console.log("Nach der Filterung: "+ gefilterteHeros2);

console.clear();


// JS Vertiefung Lvl 1.8 Teil 3


const zahlen2 = [12, 25, 7, 18, 30, 5];

const zahlenFilterus = bla => bla.filter(element => element <20)

const gefilterteZahlen = zahlenFilterus(zahlen2).map((x)=>x*2);

console.log("Zahlen die kleiner als 20 sind, die nachträglich mit zwei multipliziert wurden: "+ gefilterteZahlen)