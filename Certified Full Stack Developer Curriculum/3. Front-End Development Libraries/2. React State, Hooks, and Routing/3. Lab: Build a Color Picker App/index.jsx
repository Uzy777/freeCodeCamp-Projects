const { useState } = React;

export const ColorPicker = () => {
    const [isColor, setIsColor] = useState("#ffffff");

    const handleToggleColorChange = (event) => {
        setIsColor(event.target.value)
    }

    console.log(isColor)

    return (
        <div id="color-picker-container" style={{ backgroundColor: isColor }}>
            <input id="color-input" type="color" value={isColor} onChange={handleToggleColorChange}></input>
        </div>
    )
};