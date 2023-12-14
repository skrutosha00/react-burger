export const INIT = "INIT";

export type TInitAction = {
  type: typeof INIT;
};

export function init(): TInitAction {
  return {
    type: INIT
  };
}
