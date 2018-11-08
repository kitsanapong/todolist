import styled from 'styled-components'

export default styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 42px;
    margin-top: 12px;
    .info-wrapper {
        .text {
            color: #79797E;
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 24px;
            opacity: 0.87;
        }
        .progress {
            color: #5C76E4;
            font-size: 18px;
            font-weight: bold;
            opacity: 0.87;
        }
    }
`