const sum = (a: number, b: number) => {
    return a + b;
}

const person = (name: string, age: number) => {
    return {
        name,
        age
    }
};

const range = (start: number ,end: number) => {
    let result: number[] = [];
    for(let i = start; i <= end; i++) {
        result.push(i);
    };
    return result;
}

export {sum, person, range};