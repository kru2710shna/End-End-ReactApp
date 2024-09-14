import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.alerting("Converted to UpperCase " , "Success!")
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.alerting("Converted to LowerCase " , "Success!")
    };

    const handleClClick = () => {
        let newText = '';
        setText(newText);
        props.alerting("Text is cleared" , "Success!")
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h2>{props.heading}</h2>
            <div className="form-group">
                <textarea
                    className="form-control"
                    value={text}
                    style={{ backgroundColor: props.mode === 'dark' ? '#333' : '#fff', color: props.mode === 'dark' ? 'white' : 'black' }}
                    onChange={handleOnChange}
                    id="myBox"
                    rows="8"
                ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</button>
            <div className="container my-2">
                <h3>Summary</h3>
                <p>{text.split(" ").filter(word => word.length > 0).length} Words and {text.length} characters</p>
                <p>{0.08 * text.split(" ").filter(word => word.length > 0).length} Minutes to read</p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </div>
    );
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired
};
