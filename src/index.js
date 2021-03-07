exports.min = function min(array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        return Math.min.apply(null, array);
    }

    return 0;
}

exports.max = function max(array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        return Math.max.apply(null, array);
    }

    return 0;
}

exports.avg = function avg(array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += parseInt(array[i], 10);
        }

        return sum / array.length;
    }

    return 0;
}
