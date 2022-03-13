import React, {FC, useRef, useState} from 'react';

const EventsExamples:FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrug] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) =>{
        console.log(inputRef.current?.value)
    }
    const drugHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("Начали перемещение")
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        setIsDrug(false)
        console.log("Дробнули блок")
    }
    const dragWithPreventHandler = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrug(true)
    }
    const leaveHandler = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrug(false)
    }
    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" placeholder='Управляемый'/>
            <input ref={inputRef} type="text" placeholder='Не Управляемый'/>
            <button onClick={clickHandler}>sadsa</button>
            <div onDrag={drugHandler} draggable style={{width:200, height:200, background: "red"}}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width:200, height:200, background: isDrag ? "blue" : "red", marginTop: 15}}></div>
        </div>
    );
};

export default EventsExamples;