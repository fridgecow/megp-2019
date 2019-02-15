import * as React from "react";
import "./CommitteeList.css";

interface ICommitteeMember {
  name: string,
  email: string,
  role: string,
  crsid: string
}

const committee: ICommitteeMember[] = [
  {
    name: "Patricia Behling",
    role: "President",
    email: "president@megp19.com",
    crsid: "pb661"
  },
  {
    name: "Leila Hamza",
    role: "President",
    email: "president@megp19.com",
    crsid: "lh573"
  },
  {
    name: "Jialin Feng",
    role: "Security",
    email: "jf616@cam.ac.uk",
    crsid: "jf616"
  },
  {
    name: "Saffy Ahmad",
    role: "Sustainability",
    email: "sra43@cam.ac.uk",
    crsid: "sra43"
  },
  {
    name: "Sammy Lappage",
    role: "Publicity & Sponsorship",
    email: "sml74@cam.ac.uk",
    crsid: "sml74"
  },
  {
    name: "Chong Hui Xian",
    role: "Decs",
    email: "hxc21@cam.ac.uk",
    crsid: "hxc21"
  },
  {
    name: "Eva Kettle",
    role: "Decs",
    email: "ek425@cam.ac.uk",
    crsid: "ek425"
  },
  {
    name: "Helen Essell",
    role: "Employment",
    email: "hme30@cam.ac.uk",
    crsid: "hme30"
  },
  {
    name: "Sophie Stevens",
    role: "Non-Music Ents",
    email: "ss2410@cam.ac.uk",
    crsid: "ss2410"
  },
  {
    name: "Rebecca Wright",
    role: "Legal & Compliance",
    email: "rw592@cam.ac.uk",
    crsid: "rw592"
  },
  {
    name: "Vidya Kanakaratnam",
    role: "Ticketing",
    email: "ticketing@megp19.com",
    crsid: "vmk26"
  },
  {
    name: "Isy Lynch",
    role: "Ticketing",
    email: "ticketing@megp19.com",
    crsid: "il292"
  },
  {
    name: "Bex Swaney",
    role: "Music",
    email: "rrs34@cam.ac.uk",
    crsid: "rrs34"
  },
  {
    name: "Elodie Burton",
    role: "Music",
    email: "elgb2@cam.ac.uk",
    crsid: "elgb2"
  },
  {
    name: "Tallulah Young",
    role: "Drinks",
    email: "tey21@cam.ac.uk",
    crsid: "tey21"
  },
  {
    name: "Kathryn Evans",
    role: "Drinks",
    email: "kaje2@cam.ac.uk",
    crsid: "kaje2"
  },
  {
    name: "Rebecca Hunter",
    role: "Food",
    email: "rh656@cam.ac.uk",
    crsid: "rh656"
  },
  {
    name: "Juhi James",
    role: "Food",
    email: "jj469@cam.ac.uk",
    crsid: "jj469"
  },
  {
    name: "Helen Piatkowski",
    role: "Treasurer",
    email: "hp386@cam.ac.uk",
    crsid: "hp386"
  }
];

function importAll(r : any) {
  const imgs = {};
  r.keys().map((item : any, index : any) => { imgs[item.replace('./','')] = r(item); });
  return imgs;
}

const images = importAll(require.context('../../resources/headshots', false, /\.(jpeg)$/));

export default ({}) => {
  return <ul className="CommitteeList-list">
    {
      committee.map(({name, role, email, crsid}) => <li key={name} className="CommitteeList-item">
        <a href={images[crsid + ".jpeg"]}>
          <img src={images[crsid + ".jpeg"]} className="headshot"/><br/>
        </a>
        <a href={`mailto:${email}`}>
          {name}<br />
          <i>{role}</i><br />
        </a>
      </li>)
    }
  </ul>
}
