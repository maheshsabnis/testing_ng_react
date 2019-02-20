// This will contains ListItem function hook component
// This will render ListItems using <li></li> under
// List component

import React from "react";
// use "prop-types" to define 'props' for component/hook
import PropTypes from "prop-types";
// function hook that will be exported and used as component
function ListItem(props) {
  const { item } = props;
  return <li className="item">{item}</li>;
}
// defining props for hook based in data types 16.4+
ListItem.propTypes = {
  item: PropTypes.string
};

export default ListItem;
