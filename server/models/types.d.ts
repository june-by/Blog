import { Model, ModelCtor } from "sequelize";
export interface ModelType extends ModelCtor<Model<any, any>> {
  associate?: (db: any) => void;
}
