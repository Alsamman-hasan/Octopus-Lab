import { EffectCallback, useEffect } from "react";

function useEffectOnce(effect: EffectCallback) {
  useEffect(effect, [effect]);
}

export default useEffectOnce;
