export default class ArrayOperations {
    static getSum(array) {
        return array.reduce((cum, curr) => curr + cum, 0);
    }
    static getAvg(array) {
        return array.reduce((cum, curr) => curr + cum, 0) / array.length;
    }
    static getMax(array) {
        return Math.max(...array);
    }
    static getMin(array) {
        return Math.min(...array);
    }
}
