//Subscribers inside the newsletter
import React from "react";
import {
  Button,
  Card,
  Col,
  Dropdown,
  Form,
  Navbar,
  Row,
  Table,
} from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";

function Subscribeuser() {
  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body>Subscribers</Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Navbar className="bg-body-tertiary justify-content-between">
            <Form inline>
              <Row>
                <Col xs="auto">
                  {" "}
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                    style={{ width: "110rem" }}
                  />
                </Col>
                <Col xs="auto">
                  <div className="d-flex ">
                    <Button type="submit">
                      {" "}
                      <AiOutlineSearch /> search
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Navbar>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>S/L</th>
                <th> Email</th>
                <th> Suibscribed At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td> forestgreen@example.com</td>
                <td>12-03-2023</td>
                <td>
                  {" "}
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <BiDotsVerticalRounded />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        {" "}
                        <RiDeleteBin5Line />
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td> waterblue@themetags.com</td>
                <td> 12-03-2023</td>
                <td>
                  {" "}
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <BiDotsVerticalRounded />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        {" "}
                        <RiDeleteBin5Line />
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td> skyblue@example.com</td>
                <td> 12-03-2023</td>
                <td>
                  {" "}
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <BiDotsVerticalRounded />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        {" "}
                        <RiDeleteBin5Line />
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td> skyblue@example.com</td>
                <td> 12-03-2023</td>
                <td>
                  {" "}
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <BiDotsVerticalRounded />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        {" "}
                        <RiDeleteBin5Line />
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td> skyblue@example.com</td>
                <td> 12-03-2023</td>
                <td>
                  {" "}
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <BiDotsVerticalRounded />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        {" "}
                        <RiDeleteBin5Line />
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td> skyblue@example.com</td>
                <td> 12-03-2023</td>
                <td>
                  {" "}
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <BiDotsVerticalRounded />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        {" "}
                        <RiDeleteBin5Line />
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td> skyblue@example.com</td>
                <td> 12-03-2023</td>
                <td>
                  {" "}
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <BiDotsVerticalRounded />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        {" "}
                        <RiDeleteBin5Line />
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td> skyblue@example.com</td>
                <td> 12-03-2023</td>
                <td>
                  {" "}
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <BiDotsVerticalRounded />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        {" "}
                        <RiDeleteBin5Line />
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td> skyblue@example.com</td>
                <td> 12-03-2023</td>
                <td>
                  {" "}
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <BiDotsVerticalRounded />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        {" "}
                        <RiDeleteBin5Line />
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td> skyblue@example.com</td>
                <td> 12-03-2023</td>
                <td>
                  {" "}
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <BiDotsVerticalRounded />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        {" "}
                        <RiDeleteBin5Line />
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td> skyblue@example.com</td>
                <td> 12-03-2023</td>
                <td>
                  {" "}
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <BiDotsVerticalRounded />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        {" "}
                        <RiDeleteBin5Line />
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
              <tr>
                <td>Showing 1-11 of 11 results</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}

export default Subscribeuser;
