import React from 'react';

function Note (props) {
    const { title, body } = props;
    return <div className='rounded-sm min-h-44 bg-fluorescent-red text-white h-max border-eye-of-new border-[3px] p-4 shadow-slate-400 shadow-lg '>
        <h5>{title}</h5>
        <hr className="my-3 border-purple-950"></hr>
        <p className="text-left">{body}</p>
    </div>
}

export default Note;
