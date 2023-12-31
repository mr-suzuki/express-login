import {Link} from "react-router-dom";
import '../App.css';

export const Navbar = () => {
    
    return (
        <div className="navbar">

            <Link to="/">Home</Link>
            <Link to="/create-recipes">Create Recipe</Link>
            <Link to="/saved-recipes">Saved Recipes</Link>
            <Link to="/auth">Login/Register</Link>
        </div>
    )
}