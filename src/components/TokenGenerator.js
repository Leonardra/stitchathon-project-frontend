import jwt, { SignOptions } from 'jsonwebtoken';
import crypto from 'crypto';
import fetch from 'node-fetch';


export async function retrieveClientToken({ clientId = "", clientAssertion="" }) {

    const body = {
        grant_type: 'client_credentials',
        client_id: clientId,
        scope: 'client_paymentrequest',
        audience: 'https://secure.stitch.money/connect/token',
        client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
        client_assertion: clientAssertion
    };
    const bodyString = Object.entries(body).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&');

    const response = await fetch('https://secure.stitch.money/connect/token', {
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: bodyString,
    });

    const responseBody = await response.json();

    if (!response.ok) {
        throw new Error(`Failed to retrieve tokens. ${JSON.stringify(responseBody)}`)
    }

    if (!('access_token' in responseBody)) {
        throw new Error(`access_token was not found in response: ${JSON.stringify(responseBody)}`);
    }

    return responseBody.access_token;
}