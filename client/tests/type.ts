import { PostPOM_MockAPIParams } from "./POM/post";
import { PostsPOM_MockAPIParams } from "./POM/posts";

type MockAPIParams = PostsPOM_MockAPIParams & PostPOM_MockAPIParams;

export type PipeParams<T> = { data: T; feature: MockAPIParams };

export type FuncsType<T> = ({ data, feature }: PipeParams<T>) => PipeParams<T>;
