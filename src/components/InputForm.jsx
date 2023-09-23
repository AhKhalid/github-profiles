import React from "react";

export default function InputForm(props){
    const inputRef = React.useRef(null)
    const onClick = ()=> {
        props.onClick(inputRef.current.value);
        inputRef.current.value = '';
    }
    return (
        <div className="input-form">
            <div className="input-form-group">
                <input ref={inputRef} id="github-profile" type="text" placeholder="Github Profile"
                    className="form-control"
                    />
                <button className="btn btn-primary" onClick={onClick}>Add</button>
            </div>
        </div>
    );
}