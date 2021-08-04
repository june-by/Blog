
import PropTypes from 'prop-types';

const CommentList = ({comment}) => {
    return(
        <>
        {comment && comment.map((value))}
        </>
    );
};

CommentList.prototype = {
    comment : PropTypes.array.isRequired
}

export default CommentList;