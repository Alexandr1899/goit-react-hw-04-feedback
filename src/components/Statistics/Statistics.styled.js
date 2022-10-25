import styled from "styled-components";

export const StyledStatisticsList = styled.ul`
    text-align: left;
`

export const StyledStaticticsItem = styled.li`
    font-size: 20px;

    :not(:last-child) {
        margin-bottom: 10px;
    }
`

export const StyledStatisticsSpan = styled.span`
    font-weight: bold;
    font-size: 16px;
    color: blue;
`