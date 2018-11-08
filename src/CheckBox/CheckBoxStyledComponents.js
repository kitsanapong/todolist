import styled from 'styled-components'

export default styled.div`
  input {
    position: absolute;
    opacity: 0;
    & + span {
      position: relative;
      cursor: pointer;
      padding: 0;
    }
    & + span:before {
      content: '';
      margin-right: 10px;
      display: inline-block;
      vertical-align: text-top;
      width: 32px;
      height: 32px;
      background: #eee;
      border-radius: 50%;
    }
    &:checked + span:before {
      background: white;
    }
    &:unchecked + span:before {
      background: #eee;
    }
    &:checked + span:after {
      content: '';
      position: absolute;
      width: 6px;
      height: 20px;
      top: 3px;
      left: 11px;
      border: 3px solid #5C76E4;
      border-top-style: none;
      border-left-style: none;
      transform: rotate(40deg);
    }
  }
`