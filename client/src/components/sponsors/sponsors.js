import React from "react";

export default function Sponsors(props) {

  const logo = {
    alignItems: "center",
    margin: "auto",
    display: "table-cell",
  }

  return (

    <div class="col-lg" style={logo}>

        <img class={props.item.size} src={props.item.img}/>

    </div>




  );
}
