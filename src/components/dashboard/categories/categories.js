import React from 'react';
import { ListGroup, ListGroupItem, Badge, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input } from 'reactstrap';

class Categories extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpen: false
        }
    }

    addCategoryModal = () => {
        this.setState({
            isOpen: true
        })
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


    render() {
        return (
            <div className="manager-container">
                <h2>Category Manager</h2>

                <Button color="danger" onClick={this.addCategoryModal}>Add Category</Button>
                <Modal isOpen={this.state.isOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Add Category</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Input type="text" name="category" placeholder="Category Name" />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary">Create</Button>{' '}
                        <Button color="secondary">Cancel</Button>
                    </ModalFooter>
                </Modal>
                <ListGroup>
                    <ListGroupItem className="justify-content-between">Cras justo odio <Badge pill>14</Badge></ListGroupItem>
                    <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill>2</Badge></ListGroupItem>
                    <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill>1</Badge></ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default Categories;