import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import {FaCheck , FaAngleDown} from 'react-icons/fa';

const Todo = ({onToggle, id, title, body, completed}) => {
    const styles = (function (){
        if (completed){
            return {
                title: <span className="text-muted"><s>{title}</s></span>,
                color: 'secondary border-0',
                bg: 'light'
            }
        }
        return{
            title: title,
            color: 'info',
            bg: 'info'
        }
    })();
    return (
        <li className="list-group-item list-group-item-light">
        <div className="row">
            <div className={"col-9 text-white rounded bg-"+styles.bg}>
            <strong>{styles.title}</strong>
            <Accordion.Toggle as={Button} variant="link" eventKey={id}>
                 <span className="badge badge-light badge-pill"><FaAngleDown /></span>
            </Accordion.Toggle>
            </div>
            <div className="col">
            <button onClick={()=>onToggle(id)} type="button" className={"btn btn-sm btn-outline-"+styles.color}>
                <FaCheck />
            </button>
            </div>
        </div>
    <Accordion.Collapse eventKey={id}>
        <div className="row">
            <div className="col-9">
                <div className={"card border-"+styles.color}>
                    <div className="card-body">
                        <p className="card-text">{(body)? body : 'No comment!'}</p>
                    </div>
                </div>                
            </div>
        </div>


    </Accordion.Collapse>
    </li>
    )
}

export default Todo
