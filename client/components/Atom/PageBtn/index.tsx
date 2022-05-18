import React from 'react'
import styles from './styles.module.scss';

interface Props {
	idx: number;
	currentPage: number;
	onClickPageBtn: (idx: any) => () => void
}

const PageBtn = ({ idx, currentPage, onClickPageBtn }: Props) => {

	return (
		<button
			style={{
				background: currentPage === idx ? "#0099fa" : "",
				color: currentPage === idx ? "white" : ""
			}}
			onClick={onClickPageBtn(idx)}
			className={styles.PageBtn}>
			{idx}
		</button>
	)
}

export default PageBtn