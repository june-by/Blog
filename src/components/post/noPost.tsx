import Image from "next/image";
import Flex from "../shared/Flex";

const NoPost = () => {
  return (
    <Flex
      justifyContents="center"
      alignItems="center"
      className="w-full h-[70vh] flex-col text-center"
    >
      <Image width={65} height={78} src="/noPost.png" alt="noPost" />
      <span className="text-lg font-semibold mt-4">
        조건에 맞는 <br />
        게시글이 존재하지 않습니다.
      </span>
    </Flex>
  );
};

export default NoPost;
