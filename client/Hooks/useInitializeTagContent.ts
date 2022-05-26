import { useEffect } from "react";

type TagArr = Array<string>;
type TagRef = React.RefObject<HTMLInputElement>;

const useInitializeTagContent = (tagArr: TagArr, tagRef: TagRef) => {
	useEffect(() => {
		if (!tagRef.current) return;
		tagRef.current.value = "";
	}, [tagArr]);
};

export default useInitializeTagContent;