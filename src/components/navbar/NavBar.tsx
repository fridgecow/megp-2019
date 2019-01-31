import * as React from "react";
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  public render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/tickets">Tickets</Link>
        <Link to="/committee">Committee</Link>
        <Link to="/employment">Employment</Link>
        <Link to="/charity">Charity</Link>
        <Link to="/sponsors">Sponsors</Link>
        <Link to="/faqs">FAQs</Link>
        <Link to="/tandc">T+C</Link>
      </div>
    );
  }
}
