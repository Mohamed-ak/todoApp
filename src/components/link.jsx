import React from 'react'

const Link = ({active, children, onClick}) => {
    if(active){
        return <li className="nav-item active"><a href="" className="nav-link">{children}</a></li>
    }
    return (
        <li className="nav-item">
            <a
                href=''
                className="nav-link"
                onClick={(evt)=>{
                    evt.preventDefault();
                    onClick()
                }}
                >
                {children}
            </a>
        </li>
    )
}

export default Link;
