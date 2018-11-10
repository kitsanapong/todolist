import styled from 'styled-components'

export default styled.div`
    width: 700px;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    margin-top: 32px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px;
    .mode-selection-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding-right: 42px;
        .mode-item {
            user-select: none;
            color: #D0D0D1;
            font-weight: bolder;
            font-size: 12px;
            margin-left: 6px;
            height: 16px;
            text-align: center;
            cursor: pointer;
            :hover {
                color: #5C76E4;
            }
            &.active {
                background-color: #5C76E4;
                color: white;
                border-radius: 3px;
            }
            &.all-mode {
                width: 30px;
            }
            &.done-mode {
                width: 40px;
            }
            &.remain-mode {
                width: 50px;
            }
        }
    }
`