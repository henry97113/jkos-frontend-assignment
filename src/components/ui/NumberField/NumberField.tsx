import { MinusIcon, PlusIcon } from 'lucide-react';
import * as React from 'react';
import VisuallyHidden from '../VisuallyHidden';

type NumberFieldProps = {
  value: number;
  minValue?: number;
  maxValue?: number;
  step?: number;
  onChange: (value: number) => void;
};

function NumberField({
  value,
  minValue,
  maxValue,
  step = 1,
  onChange,
}: NumberFieldProps) {
  function increment() {
    if (maxValue !== undefined) {
      const max = Math.min(maxValue, value + step);
      onChange(max);
    } else {
      onChange(value + 1);
    }
  }

  function decrement() {
    if (minValue !== undefined) {
      const min = Math.max(minValue, value - step);
      onChange(min);
    } else {
      onChange(value - 1);
    }
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> =
    function handleChange(event) {
      const value = event.target.value;
      onChange(parseInt(value, 10));
    };

  return (
    <div className="flex items-center">
      <button
        onClick={decrement}
        disabled={minValue !== undefined ? value <= minValue : false}
        className="p-2 rounded-md bg-[#43465e] text-[#ececef]"
      >
        <MinusIcon size={12} strokeWidth="4px" />
        <VisuallyHidden>Decrease the count by {step}</VisuallyHidden>
      </button>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        step={step}
        pattern="[0-9]*"
        min={minValue}
        max={maxValue}
        className="bg-transparent text-white p-2 w-9 focus:outline-none"
      />
      <button
        onClick={increment}
        disabled={maxValue !== undefined ? value >= maxValue : false}
        className="p-2 rounded-md bg-[#43465e] text-[#ececef]"
      >
        <PlusIcon size={12} strokeWidth="4px" />
        <VisuallyHidden>Decrease the count by {step}</VisuallyHidden>
      </button>
    </div>
  );
}

export default NumberField;
