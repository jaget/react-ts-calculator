import { ChangeEvent, useReducer, useState } from "react";

type FieldStateAction = {
    type: 'ADD' | 'REMOVE'
};

type FieldsStateMutateAction = {
    type: 'MUTATE'
    index: number
    value: number
}

type FieldsState = number[];

const fieldsReducer = (state: FieldsState, action: FieldStateAction | FieldsStateMutateAction) => {
    switch (action.type) {
        case 'ADD':
            return [...state, 0];
        case 'REMOVE':
            return [...state.slice(0, -1)];
        case 'MUTATE':
            state[action.index] = action.value;
            return [
                ...state,
            ]
    }
};

const Calculator = () => {
    const [inputFields, inputFieldsDispatch] = useReducer(fieldsReducer, [0, 0]);
    const [total, setTotal] = useState(0)

    const increment = () => inputFieldsDispatch({ type: 'ADD' });
    const decrement = () => inputFieldsDispatch({ type: 'REMOVE' });
    const calculate = () => { setTotal(inputFields.reduce((a, b) => a + b)) };

    const onChangeHandler = (
        event: ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        inputFieldsDispatch({ type: 'MUTATE', index, value: +event.target.value })
    };

    const renderFields = () => inputFields.map((inputField: number, i: number) => (<input key={i} className="input" onChange={(e) => onChangeHandler(e, i)} value={inputField} />));

    return <>
        {renderFields()}
        <button onClick={increment} >Increment</button>
        <button onClick={decrement} >Decrement</button>
        <button onClick={calculate} >Calculate</button>
        <p data-testid="total">{total}</p>
    </>;
}

export default Calculator;