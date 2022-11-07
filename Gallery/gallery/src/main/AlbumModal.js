import {Card, CardImg, Col, Modal, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import PhotoModal from "./PhotoModal";

export default function AlbumModal(props) {

    const [photos, setPhotos] = useState([]);
    const [show, setShow] = useState(false);
    const [photoUrl, setPhotoUrl] = useState('');


    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${props.id}`)
            .then((response) => {
                setPhotos(response.data)

            })
            .catch((error) => {
                console.error(error, 'error happened while getting photos by useEffect')
            })
    }, [props.id])

    return (
        <div>
            <Modal show={props.show} onHide={props.onHide} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Album</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="m-3 g-3">
                        {
                            photos.map((photo) => (
                                <Col sm={3} key={photo.id}>
                                    <Card className="h-100" style={{minHeight: 120}}
                                          onClick={() => {
                                              setShow(true);
                                              setPhotoUrl(photo.url);
                                          }}>
                                        <Card.Header>
                                            <Card.Title>{photo.title}</Card.Title>
                                            <Card.Title>{photo.id}</Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <CardImg src={photo.thumbnailUrl}/>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Modal.Body>
            </Modal>
            <PhotoModal
                show={show}
                onHide={() => {
                    setShow(false)
                }}
                url={photoUrl}
            />
        </div>

    )
}