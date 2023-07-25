// import React from 'react'
import PropTypes from "prop-types";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
Items.propTypes = {
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
};

function Items({ items, onDelete, onEdit }) {
    return items.map((el) => (
        <li className="list-item" data-text={el.rating} key={el.id}>
            <p>{el.review}</p>
            <div className="action">
                <button onClick={() => onEdit(el.id)} className="btn btn-edit">
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button
                    onClick={() => onDelete(el.id)}
                    className="btn btn-delete"
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </li>
    ));
}

export default Items;
