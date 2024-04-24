"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const ActiveLink = ({ title, href }) => {
  const router = useRouter();
  const path = router.pathname;

  const isActive = (path === "/" && href === "/") || path === href;

  const onClick = (e: any) => {
    if (e.currentTarget.tagName === "FORM") {
      e.preventDefault();
    }
    router.push(hrxef);
  };

  const ActiveStyle = isActive ? "border-b-2 text-100" : "";

  return (
    <Link
      passHref
      className={`${ActiveStyle} mx-3 my-3 text-300 transition-all ease-in-out duration-500 hover:text-100`}
      onClick={onClick}
      href={href}
    >
      <p>{title}</p>
    </Link>
  );
};
export default ActiveLink;
