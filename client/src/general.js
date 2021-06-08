export function createClassName(names, def) {

    let result = [];

    if (typeof names === "object")
        Object.keys(names).map(key=> {
            if (names[key])
                result.push(key);
        });
    else
        result = names;

    return [def, (typeof names === "object" ? result.join(" ") : result)].join(" ");
}

export const addZero = (num)=> num.toString().length < 2 ? `0${ num }` : num.toString();
export function createDateFromArray(array) {
    if (!array[0] || !array[1] || !array[2]) return null;
    return `${ addZero(array[0]) }.${ addZero(array[1]) }.${ array[2] }`;
} 

export const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
];