import * as React from "react";
import "./CommitteeList.css";

interface ICommitteeMember {
  name: string,
  email: string,
  role: string
}

const committee: ICommitteeMember[] = [
  {
    name: "Patricia Behling",
    role: "President",
    email: "president@megp19.com"
  },
  {
    name: "Leila Hamza",
    role: "President",
    email: "president@megp19.com"
  },
  {
    name: "Jialin Feng",
    role: "Security",
    email: "jf616@cam.ac.uk"
  },
  {
    name: "Saffy Ahmad",
    role: "Sustainability",
    email: "sra43@cam.ac.uk"
  },
  {
    name: "Sammy Lappage",
    role: "Publicity & Sponsorship",
    email: "sml74@cam.ac.uk"
  },
  {
    name: "Chong Hui Xian",
    role: "Decs",
    email: "hxc21@cam.ac.uk"
  },
  {
    name: "Eva Kettle",
    role: "Decs",
    email: "ek425@cam.ac.uk"
  },
  {
    name: "Helen Essell",
    role: "Employment",
    email: "hme30@cam.ac.uk"
  },
  {
    name: "Sophie Stevens",
    role: "Non-Music Ents",
    email: "ss2410@cam.ac.uk"
  },
  {
    name: "Rebecca Wright",
    role: "Legal & Compliance",
    email: "rw592@cam.ac.uk"
  },
  {
    name: "Vidya Kanakaratnam",
    role: "Ticketing",
    email: "ticketing@megp19.com"
  },
  {
    name: "Isy Lynch",
    role: "Ticketing",
    email: "ticketing@megp19.com"
  },
  {
    name: "Bex Swaney",
    role: "Music",
    email: "rrs34@cam.ac.uk"
  },
  {
    name: "Elodie Burton",
    role: "Music",
    email: "elgb2@cam.ac.uk"
  },
  {
    name: "Tallulah Young",
    role: "Drinks",
    email: "tey21@cam.ac.uk"
  },
  {
    name: "Kathryn Evans",
    role: "Drinks",
    email: "kaje2@cam.ac.uk"
  },
  {
    name: "Rebecca Hunter",
    role: "Food",
    email: "rh656@cam.ac.uk"
  },
  {
    name: "Juhi James",
    role: "Food",
    email: "jj469@cam.ac.uk"
  },
  {
    name: "Helen Piatkowski",
    role: "Treasurer",
    email: "hp386@cam.ac.uk"
  }
];

export default ({}) => {
  return <ul className="CommitteeList-list">
    {
      committee.map(({name, role, email}) => <li key={name} className="CommitteeList-item">
        <a href={`mailto:${email}`}>
          {name}<br />
          <i>{role}</i><br />
        </a>
      </li>)
    }
  </ul>
}
