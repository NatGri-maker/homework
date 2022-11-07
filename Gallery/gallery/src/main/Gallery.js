import {Card, Col, Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import '../style/cardhover.css';
import AlbumModal from "./AlbumModal";

export default function Gallery() {


    const [albums, setAlbums] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedAlbumId, setSelectedAlbumId] = useState('');


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then((res) => {
                    setAlbums(res.data)
                }
            )
            .catch((error) => {
                console.error(error, 'The mistake happened while getting data from Server by useEffect')
            })
    }, [])

    return (
        <Container>
            <Row className="m-3 g-3">
                {
                    albums.map((album) => (
                        <Col sm={3} key={album.id}>
                            <Card className="h-100 album-card cardhover" style={{minHeight: 120}}

                                  onClick={() => {
                                      setShow(true)
                                      setSelectedAlbumId(album.id)
                                      console.log(album.id);
                                  }}>
                                <Card.Body>
                                    <Card.Text>{album.id}</Card.Text>
                                    <Card.Text className={"text-center"}>{album.title}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))

                }
            </Row>
            <AlbumModal
                show={show}
                onHide={() => {
                    setShow(false)
                }}
                id={selectedAlbumId}
            />
        </Container>
    );
}
