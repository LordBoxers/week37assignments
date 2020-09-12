//opg a
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

//opg b
var all = boys.concat(girls)
console.log(all)

//opg c
var arrayjoin = all.join(', ')
console.log(arrayjoin)

//opg d & e
all.push('Lone', 'Gitte')
all.unshift('Hans', 'Kurt')
console.log(all)

//opg f & g
all.shift()
all.pop()
console.log(all)

//opg h
all.splice(3, 2)
console.log(all)

//opg i
all.reverse()
console.log(all)

//opg j
all.sort()
console.log(all)

//opg k
function firstUC(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}
var mapfUC = all.map(x => firstUC(x))
mapfUC.sort()
console.log(mapfUC)

//opg l
var mapUC = all.map(x => x.toUpperCase())
console.log(mapUC)

//opg m
var filt = all.filter(x => x.charAt(0).toLowerCase() === 'l')
console.log(filt)