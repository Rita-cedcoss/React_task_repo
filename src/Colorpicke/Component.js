import React from 'react'
import { ColorPicker, useColor } from 'react-color-palette'
import "react-color-palette/lib/css/styles.css";

const Component = () => {
    const [color, setColor] = useColor("hex", "#121212");
    return (
    <>
    <div id="outer">
        <h1>Color Picker Task</h1>
    <ColorPicker width={456} height={228} 
                   color={color} 
                   onChange={setColor} hideHSV dark />
    </div>
    </>
  )
}

export default Component