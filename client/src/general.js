export function createClassName(names, def) {

    let result = [];

    if (!names[0])
        Object.keys(names).map(key=> {
            if (names[key])
                result.push(key);
        });
    else
        result = names;

    return [def, result.join(" ")].join(" ");
}