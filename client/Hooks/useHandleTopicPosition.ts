import { off } from "process";
import { useEffect, useState } from "react";

const useHandleTopicPosition = (topicRef: React.RefObject<HTMLDivElement>) => {
	const [topicPos, setTopicPos] = useState(false);
	const scrollEvent = (e: Event) => {
		if (!topicRef.current) return;
		if (window.scrollY < 140) {
			if (topicPos === false) return;
			else {
				setTopicPos(false);
				topicRef.current.style.position = "relative";
				topicRef.current.style.top = "0";
				topicRef.current.style.left = "0";
			}
		}
		else {
			if (topicPos === true) return;
			else {
				setTopicPos(true);
				topicRef.current.style.position = "fixed";
				topicRef.current.style.top = "250px";
				topicRef.current.style.left = "78%";
			}
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', scrollEvent);
		return () => {
			window.removeEventListener('scroll', scrollEvent);
		}
	}, [topicPos])
};

export default useHandleTopicPosition;