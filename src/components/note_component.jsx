import React from 'react';

function NoteItem (props) {

    const { date, time, body, id } = props;
    // Deletes item
    function deleteItem (event) {
        props.deleteItem(id);
    }

    return <div className='rounded-sm min-h-44 bg-fluorescent-red text-white h-max border-eye-of-new border-[3px] p-4 shadow-slate-400 shadow-lg relative'>
        <button className="absolute top-0 left-0 font-mono px-2 inline border-black border-2 rounded-full -translate-x-2 -translate-y-3 bg-white text-c64-purple" onClick={deleteItem}>x</button>
        <h5>On <strong>{date}</strong> at <strong>{time}</strong></h5>
        <hr className="my-3 border-purple-950"></hr>
        <p className="text-left text-xl before:content-['⁘'] px-2 relative before:absolute before:left-0 before:-translate-x-2">{body}</p>
    </div>
}

export default NoteItem;
