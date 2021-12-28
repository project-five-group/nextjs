export const combineClassNames = (...args: (string | undefined)[]) =>
  args.filter(Boolean).join(' ');
