"use client"

import { useState } from "react";

export default function Page() {
    const [text, setText] = useState("")
    
    const validate = () => {
        const modifiedText = text.split(' ').map(word => '<motion.div className="mr-1.5" whileHover={{color: "blue"}}>' + word  + '</motion.div>').join('');
        console.log(modifiedText)
    }
    return (
        <div>
            <textarea onChange={(val) => setText(val.target.value.toString())} className="text-black" placeholder="text" name="text"/>
            <button onClick={() => validate()}>
                submit
            </button>
        </div>
    )
}