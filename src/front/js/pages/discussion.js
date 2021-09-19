import React from "react";
import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Discussion = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="jumbotron">
			<h1 className="display-4">{store.discussions[params.theid].title}</h1>
			<hr className="my-4" />
			<p>{store.discussions[params.theid].description}</p>

			<Link to="/discussions">
				<span className="btn btn-primary" role="button">
					Back To Discussion Board
				</span>
			</Link>
		</div>
	);
};

Discussion.propTypes = {
	match: PropTypes.object
};