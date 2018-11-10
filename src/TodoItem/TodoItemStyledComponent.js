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
    .right {
        position: relative;
        .icon-wrapper {
            opacity: 0;
            cursor: pointer;
            position: absolute;
            width: 24px;
            height: 72px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #79797E;
            top: -36px;
            &.visible {
                opacity: 1;
            }
        }
    }
`