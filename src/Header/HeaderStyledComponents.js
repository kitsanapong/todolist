import styled from 'styled-components'

export default styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    .info-wrapper {
        .text {
            color: #79797E;
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 12px;
        }
        .progress {
            color: #5C76E4;
            font-size: 18px;
            font-weight: bold;
        }
    }
`