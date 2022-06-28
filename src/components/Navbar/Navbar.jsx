import "./Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar({user}) {
  return (
    <nav>
        <Link to="/orders">Order History </Link>
        &nbsp; | &nbsp;
        <Link to="/orders/new">New Order</Link>
        &nbsp; | &nbsp;
        Welcome, {user.name}
        
    </nav>
  )
}
