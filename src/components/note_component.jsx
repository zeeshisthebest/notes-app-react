import React from 'react';

function NoteItem (props) {
    const { date, time, body } = props;
    return <div className='rounded-sm min-h-44 bg-fluorescent-red text-white h-max border-eye-of-new border-[3px] p-4 shadow-slate-400 shadow-lg '>
        <h5>On <strong>{date}</strong> at <strong>{time}</strong></h5>
        <hr className="my-3 border-purple-950"></hr>
        <p className="text-left text-xl before:content-['⁘'] px-2 relative before:absolute before:left-0 before:-translate-x-2">{body}</p>
    </div>
}

export default NoteItem;
