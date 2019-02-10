import * as React from "react";
import { Link } from 'react-router-dom';

import "./NavBar.css";

interface INavItem {
  url: string;
  name: string;
}

const items: INavItem[] = [
  {
    url: "/tickets",
    name: "Tickets"
  },
  {
    url: "/committee",
    name: "Commitee"
  },
  {
    url: "/employment",
    name: "Employment"
  },
/*  {
    url: "/charity",
    name: "Charity"
  },
  {
    url: "/sponsors",
    name: "Sponsors"
  }, */
  {
    url: "/faqs",
    name: "FAQs"
  },
  {
    url: "/tandc",
    name: "T+C"
  },
];

export default class NavBar extends React.Component {
  public render() {
    return (
      <div className="navbar">
        {
          items.map(item => (
            <Link key={item.name} to={item.url} className="navlink">{item.name.toUpperCase()}</Link>  
          ))
        }
      </div>
    );
  }
}
