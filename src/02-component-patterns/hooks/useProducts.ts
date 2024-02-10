import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";
import { InitialValues } from "./../interfaces/interfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProducts = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    // useref para darle seguimiento y ver si esta montado el componente
    const insMounted = useRef(false);
    const MontedCount = useRef(0);

    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0);
        if (initialValues?.maxCount && newValue > initialValues.maxCount) return;
        setCounter(newValue);
        onChange && onChange({ product, count: newValue });
    };

    useEffect(() => {
        insMounted.current = true;
    }, []);

    useEffect(() => {
        if (insMounted.current) return;
        MontedCount.current++;
        setCounter(value);
    }, [value]);

    return {
        counter,
        increaseBy,
    };
};
