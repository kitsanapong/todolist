import styled from 'styled-components'

export default styled.div`
    padding-left: 42px;
    padding-right: 42px;
    height: 72px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .left {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        .input-wrapper {
            width: 100%;
            margin-left: 12px;
        }
    }
`