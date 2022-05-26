import { useEffect } from "react";

const useGetTopicArr = (setTopicArr: React.Dispatch<React.SetStateAction<never[]>>) => {
	useEffect(() => {
		const $h3Tags = document.getElementsByTagName('h3');
		const $h2Tags = document.getElementsByTagName('h2');
		const tagArr = [];
		if ($h3Tags.length !== 0) {
			for (const tag of $h3Tags as any) {
				if (tag.innerText.length !== 1) {
					tagArr.push(tag);
				}
			}
		}

		if ($h2Tags.length !== 0) {
			for (const tag of $h2Tags as any) {
				if (tag.innerText.length !== 1) {
					tagArr.push(tag);
				}
			}
		}

		tagArr.sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)
		setTopicArr(tagArr as never);
	}, [])
};

export default useGetTopicArr;