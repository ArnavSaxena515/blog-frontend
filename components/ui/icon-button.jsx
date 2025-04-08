import React from "react";

export default function IconButton(props) {
    return (
        <button onClick={props.onClick}
                className=" px-2 py-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 font-bold">{props.children}</button>
    )
}