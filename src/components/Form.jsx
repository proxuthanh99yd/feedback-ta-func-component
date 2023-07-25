// import React from 'react'
import PropTypes from "prop-types";

import { useEffect, useState } from "react";
Form.propTypes = {
    submit: PropTypes.func,
    editForm: PropTypes.object,
};
function Form({ editForm, submit }) {
    const [rate, setRate] = useState(0);
    const [hover, setHover] = useState(0);
    const [input, setInput] = useState("");
    const [id, setId] = useState(0);
    const [validate, setValidate] = useState(undefined);
    const handleRate = (i) => {
        setRate(i);
    };
    const handleHover = (i) => {
        setHover(i);
    };
    const handleChange = (e) => {
        const inputVal = e.target.value;
        inputVal ? setValidate(undefined) : setValidate(true);
        setInput(e.target.value);
    };
    const handleSubmit = () => {
        if (!input) return;
        const data = {
            id: Date.now(),
            rating: rate,
            review: input,
        };
        if (id) {
            data.id = id;
        }
        submit(data);
        setInput("");
        setRate(0);
        setId(0);
    };
    useEffect(() => {
        const { rating, id, review } = editForm;
        if (id) {
            setInput(review);
            setRate(rating);
            setId(id);
        }
    }, [editForm]);
    return (
        <form className="form" onSubmit={(e) => e.preventDefault()}>
            <h3 className="form-heading">
                Thầy Phú dạy anh em có hay không ???
            </h3>
            <div className="form-group-rate">
                {Array.from({ length: 10 }, (_, i) => (
                    <span
                        className={
                            hover
                                ? hover >= i + 1
                                    ? "rate active"
                                    : "rate"
                                : rate >= i + 1
                                ? "rate active"
                                : "rate"
                        }
                        onMouseEnter={() => handleHover(i + 1)}
                        onMouseOut={() => setHover(0)}
                        onClick={() => handleRate(i + 1)}
                        key={i}
                        data-text={i + 1}
                    ></span>
                ))}
            </div>
            <div className="form-group-submit">
                <input
                    className={validate && "valid"}
                    type="text"
                    value={input}
                    onChange={handleChange}
                    onBlur={handleChange}
                />
                <input
                    type="submit"
                    className={input && "active"}
                    value="Send"
                    onClick={handleSubmit}
                />
            </div>
            {validate && <span className="message">enter text</span>}
        </form>
    );
}

export default Form;
