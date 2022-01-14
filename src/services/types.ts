export type TConstraints<Response extends Record<string, unknown> = Record<string, unknown>> = {
  limit?: number;
  startAfter?: unknown;
  orderBy?: keyof Response | string;
};
