import React from 'react'
import { CloseIcon, PopoutContainer, PopoutWrapper } from './PopoutElementsElements'

const Popout = (props) => {
    return (props.trigger) ? (
        <PopoutContainer>
            <PopoutWrapper>
                <CloseIcon />
                {props.children}
            </PopoutWrapper>
        </PopoutContainer>
    ) : "";
}

export default Popout
