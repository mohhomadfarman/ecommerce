import React from 'react'
import { Button, Card, Col, Dropdown, Form, Row, Table } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import { LuEdit3 } from 'react-icons/lu'

export default function Allvariations() {
    return (
        <>
            <Row>
                <Col className="Admin_dashboard margin_bottom" lg={12}>
                    <h3> Variations</h3>
                </Col>
                <Row>
                    <Col lg={9} className="searchbutton">
                        <div className='form_control_or_btngroup'>
                            <div className='all_product_search allvariation_search'>
                                <FiSearch className="allproduct_searchicon" />  <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2 search_bar"
                                />
                            </div>
                            <div className='btngroup variation_button'>
                                <Dropdown  >
                                    <Dropdown.Toggle className='select_button' variant="success" id="dropdown-basic">
                                        Select Brand
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button className="select_button m-0" type="submit">   <AiOutlineSearch /> search</Button>
                            </div>
                        </div>
                        <Table responsive >
                            <thead>
                                <tr>
                                    <th>S/L</th>
                                    <th> Name</th>
                                    <th></th>
                                    <th>Active</th>
                                    <th> </th>
                                    <th> </th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td> </td>
                                    <td><Form>
                                        <Form.Check // prettier-ignore
                                            type="switch"
                                            id="custom-switch"
                                        />

                                    </Form></td>
                                    <td> </td>
                                    <td>

                                    </td>
                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                <BiDotsVerticalRounded />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1"> <LuEdit3 /> Edit</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col lg={3}>
                        <Card className="right_variation
                             ">

                            <Card.Body>
                                <Card.Title>Variation Information</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                <div className='var_edit'>
                                    <Card.Text className="variation_text">
                                        <h4> All Variations</h4>
                                    </Card.Text>
                                    <Card.Text >
                                        <h5> Add New Variations</h5>
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Row >
        </>
    )
}
