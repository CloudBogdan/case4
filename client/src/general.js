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