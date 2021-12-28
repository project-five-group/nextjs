export const safe = (fn: (...args: any[]) => any) => {
  try {
    return fn();
  } catch {}
};
