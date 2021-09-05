import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import FormControl from "react-bootstrap/FormControl";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "../../styles/discussions.scss";
import { propTypes } from "react-bootstrap/esm/Image";

export const Discussions = () => {
	const [modalShow, setModalShow] = useState(false);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const cardLoop = [1, 2, 3, 4, 5, 6];
	return (
		<>
			<div className="jumbotron jumbotron-fluid">
				<div className="container page-animation">
					<h1 className="display-4 text-center">Discussions Board</h1>
					<p className="lead text-center">
						Create, Read, Or Comment <br />A place to read discussions and chat with people.
					</p>
					<Form className="d-flex">
						<FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />
						<Button className="search-bar">Search</Button>
					</Form>
				</div>
			</div>

			{/* THIS IS THE CREATE BUTTON */}
			<div className="discussion-creation">
				<Button className="ml-5 mb-2" variant="primary" onClick={handleShow}>
					Create <i className="fas fa-plus"></i>
				</Button>
				<h2 className="discussion-article text-center">Discussions & Articles</h2>
			</div>

			{/* THIS IS THE MODEL */}
			<Modal
				aria-labelledby="contained-modal-title-vcenter"
				centered
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						<div className="">
							<div>
								<h2 className="display-5 text-center">Create a discussion</h2>
							</div>
							<div>
								<i className="fas fa-user-circle fa-lg"></i>
								<span className="font-weight-lighter pl-2">Username</span>{" "}
								{/*This is for the username while change when login */}
							</div>
						</div>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{/* <label className="lead" htmlFor="exampleFormControlTextarea1">
						Write something you want to discuss
					</label> */}
					<div>
						<textarea
							className="form-control border-0"
							id="exampleFormControlTextarea1"
							placeholder="What's on your mind?"
							rows="3"></textarea>

						<div className="d-flex border-top">
							<p className="lead">Add to Your Post</p>
							<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Photo/Video</Tooltip>}>
								<Button className="ml-auto mt-2">
									<i className="fas fa-images"></i>
								</Button>
							</OverlayTrigger>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary">Post Discussion</Button>
				</Modal.Footer>
			</Modal>

			{cardLoop.map(index => (
				<div className="row justify-content-center p-1" key={index}>
					<Card className="col-6 mt-5" style={{ width: "18rem" }}>
						<Card.Img
							rounded
							className="p-3"
							variant="top"
							href="https://placeholder.com/"
							src="https://via.placeholder.com/80x40"
						/>
						{/* OLD PLACEHOLDER TAG CODE
				src="https://via.placeholder.com/100x180" */}
						<Card.Body>
							<Card.Title> Interesting Discussion!</Card.Title>
							<Card.Text>This will be an discussion that you may be interested in.</Card.Text>
							<Button variant="primary">Learn More</Button>
						</Card.Body>
					</Card>
				</div>
			))}
		</>
	);
};

{
	/* <div className="ml-auto pr-5">
<Button>
	Create <i className="fas fa-plus"></i>
</Button>
</div> */
}
// return [1, 2, 3, 4, 5, 6].map(() => (
// 	<>
// 		<div className="row justify-content-center p-1">
// 			<Card className="col-6 mt-5">
// 				<Card.Img
// 					rounded
// 					className="p-3"
// 					variant="top"
// 					href="https://placeholder.com/"
// 					src="https://via.placeholder.com/80x40"
// 				/>
// 				{/* OLD PLACEHOLDER TAG CODE
// 				src="https://via.placeholder.com/100x180" */}
// 				<Card.Body>
// 					<Card.Title> Interesting Discussion!</Card.Title>
// 					<Card.Text>This will be an discussion that you may be interested in.</Card.Text>
// 					<Button variant="primary">Learn More</Button>
// 				</Card.Body>
// 			</Card>
// 		</div>
// 	</>
// ));
