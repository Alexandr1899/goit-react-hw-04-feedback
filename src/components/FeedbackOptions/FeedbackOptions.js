import { StyledBTN, StyledBtnItem } from "./FeedbackOptions.styled"
import PropTypes from 'prop-types';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return options.map(option => (
            <StyledBtnItem key={option}>
                <StyledBTN
                    key={option}
                    type="button"
                    onClick={ onLeaveFeedback }>{option}
                </StyledBTN>
            </StyledBtnItem>
            
    ))
}

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func.isRequired
}