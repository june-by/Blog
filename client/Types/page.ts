import { type ParsedUrlQuery } from "querystring";

export interface PostsPageQueryType extends ParsedUrlQuery {
  search?: string;
  tag?: string;
  category?: string;
  series?: string;
}
