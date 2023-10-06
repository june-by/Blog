import { Model } from "sequelize";
import { SnippetAttribute, SnippetCreationAttribute } from "types";

export class Snippets extends Model<
  SnippetAttribute,
  SnippetCreationAttribute
> {
  public id!: number;
  public title!: string;
  public content!: string;
  public category!: string;
}
