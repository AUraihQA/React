'use strict';
import PropTypes from 'prop-types';

// const Post = ({name,mail}) => {
const Post = (props) => {
    console.log(props);
    const { name, mail } = props;

    return (
        <>
            <p>{name}</p>
            <a href="mailto:svaithilingam@qa.com">{mail}</a>
        </>
    );
}
Post.propTypes = {
    name:PropTypes.string.isRequired,
    mail:PropTypes.string
}
export default Post; 