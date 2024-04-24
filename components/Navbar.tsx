import { ActiveLink } from "./ActiveLink";

const navs = [
  {
    nav: "Home",
    link: "/",
  },
  {
    nav: "About",
    link: "/about",
  },
  {
    nav: "Project",
    link: "/project",
  },
  {
    nav: "Experience",
    link: "/experience",
  },
  {
    nav: "Blog",
    link: "/blog",
  },
];

export default function Navbar() {
  return (
    <nav>
      <ul className="px-6 flex mt-2 bg-200 border-400 border-opacity-35 rounded-full border">
        {navs.map((nav, id) => (
          <ActiveLink key={id} href={nav.link} title={nav.nav} />
        ))}
      </ul>
    </nav>
  );
}
