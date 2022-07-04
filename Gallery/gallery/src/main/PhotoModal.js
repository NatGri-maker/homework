import {Modal} from "react-bootstrap";

export default function PhotoModal(props){

    return(
        <Modal {...props} fullscreen={true}>
            <Modal.Header closeButton>
                <Modal.Title>Photo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={props.url}/>
            </Modal.Body>
        </Modal>

    )
}