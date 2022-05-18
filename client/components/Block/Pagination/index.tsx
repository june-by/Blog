import React, { useCallback } from 'react'
import PageBtn from '../../Atom/PageBtn';
import styles from './styles.module.scss';

interface Props {
	totalPage: number;
	pageNum: number;
	setPageNum: React.Dispatch<React.SetStateAction<number>>
}

const Pagination = ({ totalPage, pageNum, setPageNum }: Props) => {

	const onClickPageBtn = useCallback((idx) => () => {
		setPageNum(idx);
	}, [])

	return (
		<div className={styles.Pagination}>
			<>
				{makeArray(totalPage).map((value, idx: number) =>
					<PageBtn key={idx + 100}
						idx={idx}
						currentPage={pageNum}
						onClickPageBtn={onClickPageBtn} />
				)}
			</>
		</div>
	)
}

const makeArray = (num: number) => {
	return Array.from({ length: num }, () => 0);
}

export default Pagination