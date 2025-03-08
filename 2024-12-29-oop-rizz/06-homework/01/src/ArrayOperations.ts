export default class ArrayOperations {
  public static getSum(array: number[]) {
    return array.reduce((cum, curr) => curr + cum, 0);
  }

  public static getAvg(array: number[]) {
    return array.reduce((cum, curr) => curr + cum, 0) / array.length;
  }

  public static getMax(array: number[]) {
    return Math.max(...array);
  }

  public static getMin(array: number[]) {
    return Math.min(...array);
  }
}
