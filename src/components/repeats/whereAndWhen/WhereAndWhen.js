// bootstrap
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const WhereAndWhen = () => {

    return (
        <>
            <Row className="mb-3 row">
                <Form.Group as={Col} className="mb-3" controlId="formBasicFrom">
                    <Form.Label>מהיכן?</Form.Label>
                    <Form.Control type="text" placeholder="באר שבע" />
                </Form.Group>
            </Row>

            <Row className="mb-3 row">
                <Form.Group as={Col} className="mb-3" controlId="formBasicDestination">
                    <Form.Label>להיכן?</Form.Label>
                    <Form.Control type="text" placeholder="נתניה" />
                </Form.Group>
            </Row>

            <Row className="mb-3 row">
                <Form.Group as={Col} className="mb-3" controlId="formBasicDate">
                    <Form.Label>מתי?</Form.Label>
                    <Form.Control type="date" placeholder="" />
                </Form.Group>
            </Row>
        </>
    );
};

export default WhereAndWhen;
