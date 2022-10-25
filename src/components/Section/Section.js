import { StyledTitle } from "./Section.styled"
import PropTypes from 'prop-types';

export const Section = ({title, children}) => {
    return (
        <>
            <StyledTitle>{title}</StyledTitle>
            {children}
        </>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}