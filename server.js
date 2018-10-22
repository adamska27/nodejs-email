'use strict';
require('dotenv').load();
const express = require('express');
const app = express();

const { send } = require('./mail');

app.post('/email', (req, res) => {
    const subject = 'nodejs';
    const text = `Bonjour,
    Je vous contacte car j'ai remarqué un problème sur le produit suivant, la description est erronée.
    Merci,
    Jean-Jacques    
    `;
    const infos = {
        "os": "macos",
        "id": 914856,
        "browser": "firefox",
        "mail": "user@mail.com",
        "device": "mac",
        "cameFrom": "www.domain.com/faq",
        "IP": '80.124.96.2',
        "adBlocker": false,
    };
    const html = `
    <div>
        <p>${text}</p>
        <table style="border:1px grey solid;width:100%">
            <caption style="text-align: left;background-color: lightgrey; width:  100%">Infos sur l'utilisateur</caption>
            </tr>
            <tr>
                <td>système d'exploitation: ${infos.os}</td>
                <td>ID utilisateur: ${infos.id}</td>
            </tr>
            <tr>
                <td>Navigateur: ${infos.browser}</td>
                <td>Email utilisateur: ${infos.mail}</td>
            </tr>
            <tr>
                <td>Appareil: ${infos.device}</td>
                <td>Page source: ${infos.cameFrom}</td>
            </tr>
            <tr>
                <td>IP: ${infos.IP}</td>
                <td>AdBlocker: ${infos.adBlocker}</td>
            </tr>
            <tr>
                <td>Ces données sont collectées à titre d'informations....</td>
            </tr>
        </table> 
    </div>`;
    send(subject, html);
    res.json({ 'success': true });
});

app.listen(3000, () => {
    console.log('App is listening on port 3000');
});
