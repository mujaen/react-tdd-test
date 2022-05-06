const range = (start: number ,end: number) => {
    let result: number[] = [];
    for(let i = start; i <= end; i++) {
        result.push(i);
    };
    return result;
}

export default range;