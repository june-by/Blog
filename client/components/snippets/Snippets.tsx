import FontAppliedElement from "@components/shared/FontAppliedElement";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";
import { IoCalendarClearOutline } from "react-icons/io5";
import { DATE_FORM, convertDateToString, groupBy } from "@utils";
import { ServerURL } from "@constants";
import { SnippetType } from "@Types/snippets";

const Snippets = async () => {
  const data = await getAllSnippets();

  if (!data) {
    return null;
  }

  const SnippetsCategoryList = Object.keys(data);

  return (
    <div>
      {SnippetsCategoryList.map((category) => {
        const snippets = data[category];
        return (
          <div key={category}>
            <FontAppliedElement tagName="h2">
              {category}({snippets.length})
            </FontAppliedElement>
            <div className={styles.snippetsWrap}>
              {snippets.map(({ id, title, createdAt }) => (
                <Link key={title} href={`/snippets/${id}`}>
                  <span className={styles.title}>{title}</span>
                  <span className={styles.date}>
                    <IoCalendarClearOutline />
                    <time>
                      {convertDateToString({
                        date: createdAt,
                        converter: DATE_FORM["dot"],
                      })}
                    </time>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

async function getAllSnippets() {
  try {
    const res = await fetch(`${ServerURL}/snippet/load/all`, {
      cache: "force-cache",
    });

    const snippets: SnippetType[] = await res.json();

    return groupBy(snippets, "category");
  } catch (err) {
    return null;
  }
}

export default Snippets;
