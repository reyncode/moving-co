import React from 'react'
import { PopoutContainer, PopoutWrapper, BtnWrap } from './PopoutElements'
import { Button } from '../ButtonElements'

function Popout(props) {
    return (props.trigger) ? (
        <PopoutContainer>
            <PopoutWrapper>
                <BtnWrap>
                    <Button onClick={() => props.setTrigger(false)}
                    >Close</Button>
                    {props.children}
                </BtnWrap>

            </PopoutWrapper>
        </PopoutContainer>
    ) : "";
}

export default Popout
