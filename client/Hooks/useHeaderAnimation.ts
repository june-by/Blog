import { useEffect } from "react";

const useHeaderAnimation = (ref: React.RefObject<HTMLDivElement>, open: boolean) => {
	useEffect(() => {
		if (!ref.current) return;
		if (open) ref.current.style.display = "none";
		else ref.current.style.display = "flex";
	}, [open]);
};

export default useHeaderAnimation;