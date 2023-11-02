"use client";
import React from "react";
import * as notion from "notion-types";
import { NotionRenderer } from "react-notion-x";

interface Props {
  recordMap: notion.ExtendedRecordMap;
}

const NotionPage = ({ recordMap }: Props) => {
  return <NotionRenderer recordMap={recordMap} />;
};

export default NotionPage;
