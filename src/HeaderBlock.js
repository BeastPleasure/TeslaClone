import React from 'react';
import './HeaderBlock.css';
import styled from 'styled-components';


function HeaderBlock() {

  return (
    <div className='headerBlock'>

        <div className='headerBlock__info'>

            <div className='headerBlock__infoText'>
                <h1> Model 3</h1>
                <h4> <span> Schedule A Test Drive </span></h4>
            </div>

            <div className='headerBlock__actions'>
                <button className='headerBlock__buttonPrimary'> Custom Order </button>
                <button className='headerBlock__buttonSecondary'> Existing Inventory </button>
            </div>

            <DownArrow src="/images/down-arrow.svg"/>

        </div>

    </div>

  )

}

export default HeaderBlock;

const DownArrow = styled.img`
    margin-top: 40px;
    height: 40px;
    animation: animateDown infinite 1.5s;
`