function isInvalidNumber(num) {
    if (!Number(num) || num < 0) return false;

    const digits = num.toString();

    const length = digits.length;

    for (let patternLength = 1; patternLength <= length / 2; patternLength++) {
        if (length % patternLength !== 0) continue;

        const pattern = digits.slice(0, patternLength);

        const repeated = pattern.repeat(length / patternLength);

        if (repeated === digits) {
            console.log(`Number ${num} is invalid due to pattern: ${pattern}`);
            return true;
        }
    }
    return false;
}

function sumInvalidNumbers(rangesStr) {
    let sum = 0;

    const ranges = rangesStr.split(",");

    for (const range of ranges) {
        const [start, end] = range.trim().split("-").map(Number);

        for (let num = start; num <= end; num++) {
            if (isInvalidNumber(num)) {
                sum += num;
            }
        }
    }
    console.log(`Total sum of invalid numbers: ${sum}`);
    return sum;
}

console.log(sumInvalidNumbers("46452718-46482242,16-35,92506028-92574540,1515128146-1515174322,56453-79759,74-94,798-971,49-66,601-752,3428-4981,511505-565011,421819-510058,877942-901121,39978-50500,9494916094-9494978970,7432846301-7432888696,204-252,908772-990423,21425-25165,1030-1285,7685-9644,419-568,474396757-474518094,5252506279-5252546898,4399342-4505058,311262290-311393585,1895-2772,110695-150992,567521-773338,277531-375437,284-364,217936-270837,3365257-3426031,29828-36350"));

module.exports = {
    isInvalidNumber,
    sumInvalidNumbers,
};

