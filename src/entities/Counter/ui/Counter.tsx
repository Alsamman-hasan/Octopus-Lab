/* eslint-disable i18next/no-literal-string */

import { StateSchema } from "app/providers/StorProvider";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Buttons";
import { ButtonBgColor, ButtonSize } from "shared/ui/Buttons/types";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { decrement, increment } from "../model/slice/CounterSlice";

export const Counter = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)
  const increments = () => {
    dispatch(increment())
  }
  const decrements = () => {
    dispatch(decrement())
  }

  return (
    <div>
      <h1> value : {counterValue}</h1>
      <Button
        sizes={ButtonSize.SMALL}
        btnBg={ButtonBgColor.PURPLE}
        onClick={increments}
      >
        increment
      </Button>
      <Button
        sizes={ButtonSize.SMALL}
        btnBg={ButtonBgColor.PURPLE}
        onClick={decrements}
      >
        decrement
      </Button>
    </div>
  )
};