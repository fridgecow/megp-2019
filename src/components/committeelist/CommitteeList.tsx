import * as React from "react";
import "./CommitteeList.css";

import ek425 from '../../resources/headshots/ek425.jpeg';
import elgb2 from '../../resources/headshots/elgb2.jpeg';
import hme30 from '../../resources/headshots/hme30.jpeg';
import hp386 from '../../resources/headshots/hp386.jpeg';
import hxc21 from '../../resources/headshots/hxc21.jpeg';
import il292 from '../../resources/headshots/il292.jpeg';
import jf616 from '../../resources/headshots/jf616.jpeg';
import jj469 from '../../resources/headshots/jj469.jpeg';
import kaje2 from '../../resources/headshots/kaje2.jpeg';
import lh573 from '../../resources/headshots/lh573.jpeg';
import pb661 from '../../resources/headshots/pb661.jpeg';
import rh656 from '../../resources/headshots/rh656.jpeg';
import rrs34 from '../../resources/headshots/rrs34.jpeg';
import rw592 from '../../resources/headshots/rw592.jpeg';
import sml74 from '../../resources/headshots/sml74.jpeg';
import sra43 from '../../resources/headshots/sra43.jpeg';
import ss2410 from '../../resources/headshots/ss2410.jpeg';
import tey21 from '../../resources/headshots/tey21.jpeg';
import vmk26 from '../../resources/headshots/vmk26.jpeg';

interface ICommitteeMember {
  name: string,
  email: string,
  role: string,
  image: string
}

const committee: ICommitteeMember[] = [
  {
    name: "Patricia Behling",
    role: "President",
    email: "president@megp19.com",
    image: pb661
  },
  {
    name: "Leila Hamza",
    role: "President",
    email: "president@megp19.com",
    image: lh573
  },
  {
    name: "Jialin Feng",
    role: "Security",
    email: "jf616@cam.ac.uk",
    image: jf616
  },
  {
    name: "Saffy Ahmad",
    role: "Sustainability",
    email: "sra43@cam.ac.uk",
    image: sra43
  },
  {
    name: "Sammy Lappage",
    role: "Publicity & Sponsorship",
    email: "sml74@cam.ac.uk",
    image: sml74
  },
  {
    name: "Chong Hui Xian",
    role: "Decs",
    email: "hxc21@cam.ac.uk",
    image: hxc21
  },
  {
    name: "Eva Kettle",
    role: "Decs",
    email: "ek425@cam.ac.uk",
    image: ek425
  },
  {
    name: "Helen Essell",
    role: "Employment",
    email: "hme30@cam.ac.uk",
    image: hme30
  },
  {
    name: "Sophie Stevens",
    role: "Non-Music Ents",
    email: "ss2410@cam.ac.uk",
    image: ss2410
  },
  {
    name: "Rebecca Wright",
    role: "Legal & Compliance",
    email: "rw592@cam.ac.uk",
    image: rw592
  },
  {
    name: "Vidya Kanakaratnam",
    role: "Ticketing",
    email: "ticketing@megp19.com",
    image: vmk26
  },
  {
    name: "Isy Lynch",
    role: "Ticketing",
    email: "ticketing@megp19.com",
    image: il292
  },
  {
    name: "Bex Swaney",
    role: "Music",
    email: "rrs34@cam.ac.uk",
    image: rrs34
  },
  {
    name: "Elodie Burton",
    role: "Music",
    email: "elgb2@cam.ac.uk",
    image: elgb2
  },
  {
    name: "Tallulah Young",
    role: "Drinks",
    email: "tey21@cam.ac.uk",
    image: tey21
  },
  {
    name: "Kathryn Evans",
    role: "Drinks",
    email: "kaje2@cam.ac.uk",
    image: kaje2
  },
  {
    name: "Rebecca Hunter",
    role: "Food",
    email: "rh656@cam.ac.uk",
    image: rh656
  },
  {
    name: "Juhi James",
    role: "Food",
    email: "jj469@cam.ac.uk",
    image: jj469
  },
  {
    name: "Helen Piatkowski",
    role: "Treasurer",
    email: "hp386@cam.ac.uk",
    image: hp386
  }
];

export default ({}) => {
  return <ul className="CommitteeList-list">
    {
      committee.map(({name, role, email, image}) => <li key={name} className="CommitteeList-item">
        <a href={image}>
          <img src={image} className="headshot"/><br/>
        </a>
        <a href={`mailto:${email}`}>
          {name}<br />
          <i>{role}</i><br />
        </a>
      </li>)
    }
  </ul>
}
