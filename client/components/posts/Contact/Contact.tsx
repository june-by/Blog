import React from "react";
import styles from "./styles.module.scss";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
const ContactContents = [
  {
    title: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/BY-juun",
  },
  {
    title: "Email",
    icon: <HiOutlineMail />,
    link: "mailto:neostgeart@gmail.com",
  },
  {
    title: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/byongjun-ahn-20168b252/",
  },
];

const Contact = () => {
  return (
    <aside className={styles.Contact}>
      <h2>🧑‍💻 Contacts</h2>
      <nav className={styles.ContactContentWrap}>
        {ContactContents.map(({ title, icon, link }) => (
          <Link href={link} className={styles.ContactContent} key={title}>
            {icon}
            <span>{title}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Contact;
