import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const DiscussionsCard = props => {
	return (
		<Card className="col-12">
			<Card.Body>
				<Card.Title>{props.disObject.title}</Card.Title>
				<Card.Text>{props.disObject.description}</Card.Text>
				<Link to={"/discussion/" + String(props.index)}>
					<Button variant="primary">Join Discussion</Button>
				</Link>
			</Card.Body>
		</Card>
	);
};

{
	/* disObject is an object from the store. */
}
DiscussionsCard.propTypes = {
	disObject: PropTypes.object,
	index: PropTypes.number
};