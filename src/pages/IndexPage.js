
import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import { LoginLink } from 'react-stormpath';

export default class IndexPage extends React.Component {
    render(){
        return (
            <div className="container">
                <h2 className="text-center">Welcome to my NYT React Scraper</h2>
                <hr />
                <div className="jumbotron">
                    <p>
                        <strong>Find and save articles by registering your account:</strong>
                    </p>
                    <p>Ready?</p>
                    <ol className="lead">
                        <li><Link to="/register">Registration</Link></li>
                        <li><LoginLink /></li>
                        <li><Link to="/profile">Custom Profile Data</Link></li>
                    </ol>
                </div>
            </div>
        );
    }
}