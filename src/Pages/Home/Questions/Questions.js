import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div>
            <h2 className='question'>&mdash;Questions Answer</h2>
            <h3> Difference between javascript and nodejs?</h3>
            <p>answer: JavaScript is a programming language. It is running in any web browser with a proper browser engine.It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.</p>

            <h3>When should you use nodejs and when should you use mongodb?</h3>
            <p>answer: It's used for store data. The summary is MongoDB is a database where we can store data and NodeJS helps us to to connect our client site to database by it's server site.</p>

            <h3> Differences between sql and nosql databases?</h3>
            <p>answer: SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases store documents, key-values, graphs, or wide-columns. SQL databases are good for multi-row transactions, while NoSQL is good for unstructured data like documents or JSON.</p>

            <h3> What is the purpose of jwt and how does it work?</h3>
            <p>answer: JWT is a client and a server. Each JWT contains an encoded JSON object, which contains a set of claims. JWTs are signed using a cryptographic algorithm to ensure that claims cannot be changed after the token is issued.</p>

        </div>
    );
};

export default Questions;