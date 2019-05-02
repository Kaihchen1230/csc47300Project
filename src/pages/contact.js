import React from 'react';
import { I18n } from "aws-amplify";
import { Icon, Card } from 'antd';
import officeImage from "../../static/office.jpg";
import "../style/contact.css";
import { Column, Row } from 'simple-flexbox';

class Contact extends React.Component {

    render() {
        return (

            <div align="center" className="mainDiv" style={{ backgroundImage: `url(${officeImage})` }}>
                <br />
                <h1 className="title" align="center">{I18n.get('Contact Us')}</h1>
                <br />
                <p className="description" align="center">{I18n.get('You can get in touch with us at any time for 24/7 support and troubleshooting.')}</p>
                <br /><br />
                <Column flexGrow={1}>
                    <Row vertical='center'>
                        <Column flexGrow={1} horizontal='center'>
                            <Card
                                size="default"
                                title={<Icon type="phone" style={{fontSize: 25}}/>}
                                style={{ border: "solid", height: 210, backgroundColor: "#C2C5C4", borderRadius: 15 }}
                            >
                                <br />
                                <p className="description">+1800JOBFIRST</p>
                            </Card>
                        </Column>
                        <Column flexGrow={1} horizontal='center'>
                            <Card
                                size="default"
                                title={<Icon type="home" style={{fontSize: 25}}/>}
                                style={{ border: "solid", height: 210, width: 250, backgroundColor: "#C2C5C4", borderRadius: 20 }}
                            >
                                <p className="description">160 Convent Av,<br /> New York, NY<br /> 10031</p>
                            </Card>
                        </Column>
                    </Row>
                </Column>

            </div>
        );
    }

}

export default Contact;