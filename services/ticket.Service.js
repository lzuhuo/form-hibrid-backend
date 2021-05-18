const { Client } = require('pg')
const config = require('../db/config');

//Busca todos os tickets
let getTickets = async () =>{
    let sql = `SELECT * from accounts`;
    
    try {
        const client = new Client(config);
        client.connect();
        const { rows } = await client.query(sql);
        client.end();
        return rows;
        
    } catch (error) {
        throw Error(error)
    }
}

//Busca ticket por ID
let getTicketbyID = async (user_id) =>{
    const sql = {
        // give the query a unique name
        name: 'fetch-account',
        text: 'SELECT * FROM accounts WHERE user_id = $1',
        values: [user_id],
      }
    
    try {
        const client = new Client(config);
        client.connect();
        const { rows } = await client.query(sql);
        client.end();
        return rows;
        
    } catch (error) {
        throw Error(error)
    }
}

//Insere ticket
let postTicket = async (ticket) =>{
    const sql = {
        // give the query a unique name
        name: 'post-account',
        text: ` INSERT INTO accounts(username, password, email, created_on) 
                VALUES($1, $2, $3, current_timestamp) RETURNING user_id`,
        values: [ticket.username, ticket.password, ticket.email],
      }
    
    try {
        const client = new Client(config);
        client.connect();
        const { rows } = await client.query(sql);
        client.end();
        return rows;
        
    } catch (error) {
        throw Error(error)
    }
}

module.exports = { 
                    getTickets,
                    getTicketbyID,
                    postTicket
                 }