import {useEffect, useState} from "react";
import axios from "axios";
import {Card, Col, Row} from "react-bootstrap";
import './GalleryView.scss';

function GalleryView() {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums').then((res) => setAlbums(res.data));
    }, [])
    return (
        <Row className="m-3 g-3">
            {
                albums.map((album) =>(
                    <Col sm={3} key={album.id}>
                        <Card className="h-100 album-card" style={{minHeight:120}}>
                            <Card.Body>
                                {album.title}
                            </Card.Body>
                        </Card>
                    </Col>
                ))

            }
        </Row>
    )
}

export default GalleryView;