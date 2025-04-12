import React from "react";

export default function Task({t, onToggle, onDelete}){
        if (t) {
            return(
            <tr>
                <td>{t.id}</td>
                <td>{t.text}</td>
                <td>{t.date}</td>
                <td><input 
                type="checkbox" 
                onChange={()=> onToggle(t.id)} 
                checked={t.completed} 
                />
                <span>{t.completed ? "Yes" : "No"}</span>
                </td>
                <td>
                    <button onClick={()=> onDelete(t.id)}>Delete task</button>
                </td>
            </tr> 
            );
        }
        return null;

    }