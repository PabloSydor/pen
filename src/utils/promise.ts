/**
 * Sets a timer which resumes the execution of a Promise once the timer expires.
 *
 * @template T
 * @param {number} time The time, in milliseconds (thousandths of a second), the timer should wait
 * @param {T} [inheritData] The data that is passed through to the next handler
 * @returns {Promise<T>}
 */
async function sleep<T = unknown>(time: number, inheritData?: T): Promise<T> {
  return new Promise((resolve) => setTimeout(resolve, time, inheritData));
}


export {
  sleep
};
