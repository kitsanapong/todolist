import styled from 'styled-components'

export default styled.div`
    .wrapper {
        position: relative;
        cursor: pointer;
        width: 64px;
        height: 64px;
        background-color: #5C76E4;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 48px;
        font-weight: 300;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px;
        transition: 0.3s;
        :hover {
            background-color: rgba(92,118,228,0.87);
            box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px;
            transition: 0.3s;
        }
        .content {
            top: 0px;
            position: absolute;
        }
    }
`