import React from 'react';
import { Link } from 'react-router-dom';


export interface Props {
};
  
const Header: React.FC<Props> = () => {
    return(<div>
        <Link to={'Dashboard'}>{'Dashboard'}</Link>
        <Link to={'SignIn'}>{'SignIn'}</Link>
        <Link to={'SignUp'}>{'SignUp'}</Link>
    </div>);
};

export default Header;