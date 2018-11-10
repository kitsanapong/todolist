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
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #79797E;
            top: -23.5px;
            left: 6px;
            font-size: 16px;
            background-color: red;
            color: white;
            border-top-left-radius: 14px;
            border-bottom-left-radius: 14px;
            box-shadow: rgba(0,0,0,0.16) 0px 3px 10px, rgba(0,0,0,0.23) 0px 3px 10px;
            &.visible {
                opacity: 1;
            }
        }
    }
`