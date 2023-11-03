import FontAppliedElement from "@components/shared/FontAppliedElement";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";
import { IoCalendarClearOutline } from "react-icons/io5";
import { DATE_FORM, convertDateToString, groupBy } from "@utils";
import { SnippetType } from "@Types/snippets";
import request from "@services/request";

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
    const data = await request<SnippetType[]>({
      url: "/snippet/load/all",
      method: "get",
      cache: "force-cache",
    });

    return groupBy(data, "category");
  } catch (err) {
    return null;
  }
}

export default Snippets;
