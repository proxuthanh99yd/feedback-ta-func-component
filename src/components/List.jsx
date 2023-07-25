// import React from "react";
import PropTypes from "prop-types";

function List({ children }) {
    return <ul className="list">{children}</ul>;
}

List.propTypes = {
    children: PropTypes.element,
};

export default List;
