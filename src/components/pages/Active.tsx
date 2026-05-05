import ActiveHouseItem from "../util/ActiveHouseItem";

import AlexRoster from "../../assets/brothers/active/AlexRoster.jpg";
import AllanRoster from "../../assets/brothers/active/AllanRoster.jpg";
import DylanRoster from "../../assets/brothers/active/DylanRoster.jpg";
import JamesRoster from "../../assets/brothers/active/JamesRoster.jpg";
import JerryRoster from "../../assets/brothers/active/JerryRoster.jpg";
import JonathanRoster from "../../assets/brothers/active/JonathanRoster.jpg";
import KenRoster from "../../assets/brothers/active/KenRoster.jpg";
import NathanRoster from "../../assets/brothers/active/NathanRoster.jpg";
import StevenRoster from "../../assets/brothers/active/StevenRoster.jpg";
import TianyiRoster from "../../assets/brothers/active/TianyiRoster.jpg";
import WillRoster from "../../assets/brothers/active/WillRoster.png";
import BrianRoster from "../../assets/brothers/active/BrianRoster.jpeg";
import CharlieRoster from "../../assets/brothers/active/CharlieRoster.jpeg";
import ChesterRoster from "../../assets/brothers/active/ChesterRoster.jpeg";
import EdwinRoster from "../../assets/brothers/active/EdwinRoster.jpeg";
import LanceRoster from "../../assets/brothers/active/LanceRoster.jpeg";
import NickRoster from "../../assets/brothers/active/NickRoster.jpeg";
import NoahRoster from "../../assets/brothers/active/NoahRoster.jpeg";
import DennisRoster from "../../assets/brothers/active/DennisRoster.jpeg";
import Landing from "../Landing.tsx";


function Active() {
  const activeHouse = [
    {
      image: TianyiRoster,
      lineNumber: "#108",
      name: "Tianyi “The Alchemist π‘Tranced” Zhou",
      role: "Inactive",
      contact: "tianyiz@unc.edu",
      year: "2027",
    },
    {
      image: NathanRoster,
      lineNumber: "#109",
      name: "Nathan “rEnTgoKu” Luu",
      role: "Alumni Connections",
      contact: "nluu@unc.edu",
      year: "2027",
    },
    {
      image: JerryRoster,
      lineNumber: "#110",
      name: "Jerry “Gladiator” Zhang",
      role: "Inactive",
      contact: "jerryzha@unc.edu",
      year: "2027",
    },
    {
      image: KenRoster,
      lineNumber: "#113",
      name: "Ken “ExcalibHer” Pham",
      role: "Rush Chair",
      contact: "kpham7@unc.edu",
      year: "2027",
    },
    {
      image: AllanRoster,
      lineNumber: "#114",
      name: "Allan “Nception” Fan",
      role: "Inactive",
      contact: "afc@unc.edu",
      year: "2027",
    },
    {
      image: AlexRoster,
      lineNumber: "#116",
      name: "Alex “Graduate” Tang",
      role: "Inactive",
      contact: "alextang@unc.edu",
      year: "2027",
    },
    {
      image: DylanRoster,
      lineNumber: "#117",
      name: "Dylan “HowL” Chin",
      role: "President",
      contact: "dylchin@unc.edu",
      year: "2027",
    },
    {
      image: JamesRoster,
      lineNumber: "#118",
      name: "James “Anubis” Ma",
      role: "External Events",
      contact: "jyma@unc.edu",
      year: "2028",
    },
    {
      image: JonathanRoster,
      lineNumber: "#120",
      name: "Jonathan “1MP3RIOSO” Gregory",
      role: "Stroll Coordinator and IGC Representative",
      contact: "jgre@unc.edu",
      year: "2028",
    },
    {
      image: StevenRoster,
      lineNumber: "#121",
      name: "Steven “Ad Astra” Chen",
      role: "Vice President External, Internal Events, and Webmaster",
      contact: "loading@unc.edu",
      year: "2028",
    },
    {
      image: WillRoster,
      lineNumber: "#124",
      name: "Will “The Unbr⊕ken Vanguard” Hymas",
      role: "Vice President Internal and Rush Chair",
      contact: "whymas@unc.edu",
      year: "2028",
    },
    {
      image: LanceRoster,
      lineNumber: "#125",
      name: "Lance “Skyfall” Santarina",
      role: "Judicial",
      contact: "lgs@ad.unc.edu",
      year: "2029",
    },
    {
      image: NickRoster,
      lineNumber: "#126",
      name: "Nicholas “DawnBreakHer” Win",
      role: "Fundraising",
      contact: "nicwin@unc.edu",
      year: "2029",
    },
    {
      image: ChesterRoster,
      lineNumber: "#127",
      name: "Chester Chan-Hyun “SAINt LAURENt” Park",
      role: "Graphics and Media",
      contact: "chextrey@unc.edu",
      year: "2029",
    },
    {
      image: CharlieRoster,
      lineNumber: "#128",
      name: "Charlie “Siegfried” Nguyen",
      role: "Service Event Coordinator",
      contact: "chath@unc.edu",
      year: "2028",
    },
    {
      image: EdwinRoster,
      lineNumber: "#129",
      name: "Edwin “Pochita” Cho",
      role: "Fundraising and Party/Risk Management",
      contact: "edccho@unc.edu",
      year: "2029",
    },
    {
      image: BrianRoster,
      lineNumber: "#130",
      name: "Brian “Brack Tzar” Fan",
      role: "Party/Risk Management",
      contact: "Brianfan@kenan-flagler.unc.edu",
      year: "2029",
    },
    {
      image: DennisRoster,
      lineNumber: "#131",
      name: "Dennis “Wuxia” Liu",
      role: "Secretary and IGC Representative",
      contact: "denniswl@unc.edu",
      year: "2029",
    },
    {
      image: NoahRoster,
      lineNumber: "#132",
      name: "Noah “Sirius” Bianes",
      role: "Historian",
      contact: "nbianes@unc.edu",
      year: "2029",
    },
  ];


  return (
    <div className="w-full flex flex-col">
      <Landing PageName="ACTIVE HOUSE"/>
      <article className="relative bg-[url(./assets/graintexture.webp)] bg-fixed bg-bottom">
        <svg viewBox="0 0 1440 350" fill="none" xmlns="http://www.w3.org/2000/svg"
             className="block -mt-1 -rotate-180">
          <path d="M1443 657.273V0.381409L1397.96 55.1293L1349.59 44.8945L1317.01 69.1004L1273.15
                    88.2703L1259.61 119.381L1238.22 141.8L1191.02 134.327L1167.96 170.148L1133.62 190.699L1097.02
                    183.226L1040.2 227.901L962.687 215.798L939.039 249.346L903.519 254.463L863.582 232.125L825.412
                    227.008L812.46 194.435L752.311 160.401L714.533 174.372L680.877 172.504L657.72 122.224L611.602
                    108.252L559.302 118.975L509.259 78.9291L476.683 70.9687L412.51 81.6908L364.135 115.725L321.354
                    102.16L273.568 67.7195L225.781 82.1782L190.359 77.5482L175.15 54.2357L149.834 30.9232H125.107
                    L87.9183 16.952L60.9344 33.7662L31.6937 22.5568L0 0.381409V657.273L1443 657.273Z"
                fill="#FFFFFF"/>
        </svg>
        <article className="relative my-12 space-y-24 grid grid-cols-1 md:grid-cols-2 md:px-24">
          {activeHouse.map((brother, i) => {
            const isLast = i === activeHouse.length - 1;
            const isOdd = activeHouse.length % 2 === 1;

            return (
              <div
                key={i}
                className={
                  isLast && isOdd ? "md:col-span-2 flex justify-center" : ""
                }
              >
                <ActiveHouseItem {...brother} />
              </div>
            );
          })}
        </article>
      </article>

    </div>
  );
}

export default Active;
