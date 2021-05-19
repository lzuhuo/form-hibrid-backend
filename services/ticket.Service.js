const { Client } = require('pg')
const config = require('../db/config');

//Busca todos os tickets
let getTickets = async () =>{
    let sql = `SELECT * from "HI_OCORRENCIA" WHERE NM_TECNICO IS NULL`;
    
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
let getTicketbyID = async (cd_ocorrencia) =>{
    const sql = {
        // give the query a unique name
        name: 'fetch-ticket',
        text: 'SELECT * from "HI_OCORRENCIA" WHERE CD_OCORRENCIA = $1',
        values: [cd_ocorrencia],
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
let postTicket = async (t) =>{
    const sql = {
        // give the query a unique name
        name: 'post-ticket',
        text: `INSERT INTO "HI_OCORRENCIA"(
                 ds_ocorrencia_usu
                ,nm_usuario
                ,nr_contato
                ,dt_ocorrencia
                ,hr_ocorrencia
                ,cd_unidade
                ,nr_sala
                ,st_equipamento_empresa_usu
                ,nm_equipamento
                ,st_rede_adm_usu
                ,st_microfone_usu
                ,dh_registro
                )
                VALUES(
                    $1, $2, $3, $4, $5, $6, $7, $8,
                    $9, $10, $11, current_timestamp
                )                                                                   
            `,
        values: [   t.ds_ocorrencia_usu, t.nm_usuario, t.nr_contato, t.dt_ocorrencia,
                    t.hr_ocorrencia, t.cd_unidade, t.nr_sala, t.st_equipamento_empresa_usu,
                    t.nm_equipamento, t.st_rede_adm_usu, t.st_microfone_usu],
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

//Update ticket
let putTicket = async (cd_ocorrencia, t) =>{
    const sql = {
        // give the query a unique name
        name: 'put-account',
        text: ` UPDATE "HI_OCORRENCIA"
                SET     ds_ocorrencia_tec = $1
                        , nm_tecnico = $2                                    
                        , st_equipamento_empresa_tec = $3
                        , nm_equipamento_tec = $4 
                        , st_rede_adm_tec = $5
                        , st_microfone_tec = $6
                        , dt_avaliacao_tec = current_timestamp                         
                WHERE cd_ocorrencia = $7  `,
        values: [t.ds_ocorrencia_tec, t.nm_tecnico, t.st_equipamento_empresa_tec,
                 t.nm_equipamento_tec, t.st_rede_adm_tec, t.st_microfone_tec, cd_ocorrencia],
      }
    
    try {
        const client = new Client(config);
        client.connect();
        const {command} = await client.query(sql);
        client.end();
        return command;
        
    } catch (error) {
        throw Error(error)
    }
}

module.exports = { 
                    getTickets,
                    getTicketbyID,
                    postTicket,
                    putTicket
                 }