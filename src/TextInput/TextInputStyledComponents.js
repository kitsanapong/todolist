import styled from 'styled-components'

export default styled.div`
  position: relative;
  &.done {
    .underline {
      bottom: 11px;
    }
    input {
      color: #D0D0D1;
    }
  }
  input {
    border-style: none;
    font-size: 22px;
    outline-style: none;
    color: #79797E;
    width: 100%;
    transition: 0.3s;
  }
  .underline {
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #eee;
    bottom: -5px;
    left: 0px;
    transition: 0.3s;
  }
`