import React from "react";

import trash from "./../../assets/waste_bin_red.svg";
import "./List.css";

function List(props) {
  let tempList = [];
  let list = tempList.map((item, i) => {
    return (
      <div className="list_item" key={item}>
        <img src={trash} alt="delete" onClick={_ => props.remove(i)} />
        <p>{item}</p>
      </div>
    );
  });
  return (
    <div className="View List">
      <h1>List</h1>
      <div className="list_box">
      {list}
      </div>
    </div>
  );
}

export default List;
