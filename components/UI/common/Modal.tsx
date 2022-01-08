


import React, { Fragment, useEffect, useState } from 'react'
import reactDom from 'react-dom';
// import * as styled from './styled/CommonModal.styled'

const Backdrop: React.FC<{ closeBackDrop: any }> = props => {
    return <div onClick={props.closeBackDrop}></div>
}

const ModalOverlay: React.FC = props => {
    return (
        <>
            {props.children}
        </>
    );
}

const CommonModal: React.FC<{ closeModal: () => void }> = props => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        return () => setMounted(false)
    }, []);

    //for ssr portal, we need to wait until component is loaded! :))
    return mounted
        ? (
            <Fragment>
                {reactDom.createPortal(<Backdrop closeBackDrop={props.closeModal} />, document.getElementById('portals')!)}
                {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('portals')!)}
            </Fragment>
        )
        : null
}

export default CommonModal