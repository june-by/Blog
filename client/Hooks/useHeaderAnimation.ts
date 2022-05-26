import { useRouter } from "next/router";
import { useEffect } from "react";

const useHeaderAnimation = (ref: React.RefObject<HTMLDivElement>, open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
	const router = useRouter();
	useEffect(() => {
		if (!ref.current) return;
		if (open) ref.current.style.display = "none";
		else ref.current.style.display = "flex";
	}, [open]);

	useEffect(() => {
		if (router.route !== "/post/[id]") {
			setOpen(false);
			ref!.current!.style.display = "flex";
		}
	}, [router.route])
};

export default useHeaderAnimation;