import ReactModal from "react-modal";
import {useCallback, useEffect} from "react";
import {BsExclamationCircle} from "react-icons/bs";
import {MainIcon, Content, Footer, Button} from "./StyledComponents";

type ModalProps = {
    isShow: boolean;
    contentLabel?: string;
    toggleModal: (status: boolean) => void;
}

const Modal = (props: ModalProps) => {
    const {isShow, contentLabel = "This is Modal", toggleModal} = props;
    const closeModal = useCallback(() => toggleModal(false), [toggleModal]);
    useEffect(() => {
        ReactModal.setAppElement('body');
    }, [])
    return (
        <ReactModal
            isOpen={isShow}
            contentLabel={contentLabel}
            closeTimeoutMS={0}
            ariaHideApp={false}
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    display:"flex",
                    justifyContent: "center",
                    alignItems: "center",
                },
                content: {
                    position: 'absolute',
                    border: '1px solid #ccc',
                    background: '#fff',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '20px',
                    width: "350px",
                    height: "350px",
                    inset: "initial",
                    display:"flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }
            }}
        >
            <MainIcon>
                <BsExclamationCircle/>
            </MainIcon>
            <Content>
                {contentLabel}
            </Content>
            <Footer>
                <Button onClick={closeModal}>Close</Button>
            </Footer>
        </ReactModal>
    )
};

export default Modal;