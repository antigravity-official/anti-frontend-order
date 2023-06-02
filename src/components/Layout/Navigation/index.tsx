import { Link } from 'react-router-dom';
import * as $ from './Navigation.styles';

const Navigation = () => {
  return (
    <$.NavigationSection>
      <$.NavigationLogo>
        <Link to="/">HOME</Link>
      </$.NavigationLogo>
      <$.Navigation>
        <ul>
          <li>
            <Link to="/orders">Order History</Link>
          </li>
        </ul>
      </$.Navigation>
    </$.NavigationSection>
  );
};

export default Navigation;
