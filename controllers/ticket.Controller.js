const TicketService = require('../services/ticket.Service');

//GET all Tickets
let getTickets = async (req, res) =>{
    let result;
    
    try {
        let response  = await TicketService.getTickets();
        result = response;
    } catch (error) {
        result = {message:"Sei lá"}
    }

    return res.json(result);
}

//GET Ticket by ID
let getTicketbyID = async (req, res) =>{
    let result;
    let { cd_ocorrencia } = req.params;
    try {
        let response  = await TicketService.getTicketbyID(cd_ocorrencia);
        result = response;
    } catch (error) {
        result = {message: 'Sei lá'}
    }

    return res.json(result);
}

//POST new Ticket
let postTicket = async (req, res) =>{
    let result;
    let ticket = req.body;
    
    try {
        let response  = await TicketService.postTicket(ticket);
        result = response;
    } catch (error) {
        result = {message: 'Sei lá'}
    }

    return res.json(result);
}

//PUT new Ticket
let putTicket = async (req, res) =>{
    let result;
    let ticket = req.body;
    let { cd_ocorrencia } = req.params;

    try {
        let response  = await TicketService.putTicket(cd_ocorrencia, ticket);
        result = response;
    } catch (error) {
        result = {message: 'Erro ao atualizar Ticket'}
    }

    return res.json(result);
}

module.exports = {  
                    getTickets,
                    getTicketbyID,
                    postTicket,
                    putTicket
                 }