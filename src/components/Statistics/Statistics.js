
import { StyledStaticticsItem, StyledStatisticsList, StyledStatisticsSpan } from "./Statistics.styled"
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positive }) => {
    return (
        <StyledStatisticsList>
            <StyledStaticticsItem>
                <StyledStatisticsSpan>Good:   </StyledStatisticsSpan> 
                {good}
            </StyledStaticticsItem>
            <StyledStaticticsItem>
                <StyledStatisticsSpan>Neutral:   </StyledStatisticsSpan> 
                {neutral}
            </StyledStaticticsItem>
            <StyledStaticticsItem>
                <StyledStatisticsSpan>Bad:   </StyledStatisticsSpan> 
                {bad}
            </StyledStaticticsItem>
            <StyledStaticticsItem>
                <StyledStatisticsSpan>Total:   </StyledStatisticsSpan> 
                {total }
            </StyledStaticticsItem>
            <StyledStaticticsItem>
                <StyledStatisticsSpan>Positive feedback:   </StyledStatisticsSpan> 
                { positive} %
            </StyledStaticticsItem>
        </StyledStatisticsList>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired
}