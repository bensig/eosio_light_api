"use strict";

const RPCClient = require('jsonrpc2-ws').Client;

const client = new RPCClient('ws://localhost:5010/');


client.on('connected', () => { console.log('connected'); });
client.on('error', (err) => { console.error(err); });

client.on('error', (err) => { console.error(err); });

client.methods.set("reqdata", (socket, params) => {
    console.log(JSON.stringify(params, null, 2));
    if( params.end ) {
        process.exit();
    }
});


async function send_req() {
    try {
        let res = await client.call("get_accounts_from_keys", {
            reqid: 100,
            network: 'jungle',
            keys: ['EOS8C9tb8QQhZet6WWcYFCWDKHYfjC3W59ugHCD63s7LLDQx6JsNK',
                   'EOS8T8HVXABDqauhKg2hR3SjM9zbENPvA8KrYfsirG4oHX7QVVi9a'] });
        console.log(JSON.stringify(res, null, 2));
    }
    catch(err) {
        console.error(err);
    }
}

send_req();

