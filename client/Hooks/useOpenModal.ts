import React, { useCallback } from 'react';
const useOpenModal = (setOpenLogin: React.Dispatch<React.SetStateAction<boolean>>,
	setOpenSignUp: React.Dispatch<React.SetStateAction<boolean>>,
	setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>,) => {

	const onClickLogin = useCallback(() => {
		setOpenSignUp(false);
		setOpenSearch(false);
		setOpenLogin(true);
	}, [])

	const onClickSignUp = useCallback(() => {
		setOpenSignUp(true);
		setOpenSearch(false);
		setOpenLogin(false);
	}, [])

	const onClickSearch = useCallback(() => {
		setOpenSignUp(false);
		setOpenSearch(true);
		setOpenLogin(false);
	}, [])

	return [onClickLogin, onClickSignUp, onClickSearch]

};

export default useOpenModal