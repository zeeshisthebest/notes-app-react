import React from "react";

function InputField (props) {
    // Button triggered
    function addItem (event) {
        event.preventDefault();

        if (event.target.previousSibling.value.trim() !== "") {
            props.addItem(event.target.previousSibling.value);
            event.target.previousSibling.value = "";
        } else {
            return;
        }

    };

    // Watching for enter key
    function addItemByKey (event) {
        if (event.keyCode !== 13 || event.target.value.trim() === "") {
            return;
        }
        props.addItem(event.target.value);
        event.target.value = "";
    }

    return <div className="mb-5 mt-0">
        <input type="text" name="item" placeholder="Type your note here..." onKeyUp={addItemByKey}
            className="border-2 text-wrap border-hot-stone px-5 py-3 placeholder-slate-400 w-5/12 rounded-md text-fluorescent-red text-lg focus:border-ochre focus:outline-none" maxLength="150" />
        <input type="submit" value="Save Note" onClick={addItem} className="py-4 px-5 font-bold border-eye-of-new bg-fluorescent-red border-2 rounded-md ml-2 text-white hover:bg-mandarin cursor-pointer hover:border-ochre" />
    </div>
}

export default InputField;
