import { NavLink as NavLinkRR } from "react-router-dom";

export default function NavLink ({to, children, clase, ...props}) {

    return (
        <NavLinkRR
            {...props}
            to={to}
            className={({isActive})=> isActive ? `${clase} isActive` : clase }
        >
        {children} </NavLinkRR>
    )
}