import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const useProducts = ({ onChange, product, value = 0 }: useProductArgs) => {
    const [counter, setCounter] = useState(value);

    const isControlled = useRef(!!onChange);

    const increaseBy = (value: number) => {
        console.log("isControlled", isControlled.current);
        if (isControlled.current) {
            return onChange!({ product, count: value });
        }

        const newValue = Math.max(counter + value, 0);
        setCounter(newValue);
        onChange && onChange({ product, count: newValue });
    };

    useEffect(() => {
        setCounter(value);
    }, [value]);

    return {
        counter,
        increaseBy,
    };
};
