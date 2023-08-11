const cats=["Milo","Otis","Garfield"]
function destructivelyAppendCat(name){cats.push(`${name}`)}
function destructivelyPrependCat(name){cats.unshift(`${name}`)}
function destructivelyRemoveLastCat(){cats.pop(-1)}
function destructivelyRemoveFirstCat(){cats.shift(-1)}
function appendCat(name){return [...cats, `${name}`]}
function prependCat(name){return [`${name}`, ...cats ]}
function removeLastCat(){return cats.slice(0,2)}
function removeFirstCat(){return cats.slice(-2)}