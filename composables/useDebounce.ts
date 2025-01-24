export default function useDebounce(cb: Function, delay: number = 500) {
    let timeout: NodeJS.Timeout | null = null;
    return function (...args: any) {
        if (timeout) clearTimeout(timeout);

        timeout = setTimeout(() => {
            cb(...args);
        }, delay);
    }
}