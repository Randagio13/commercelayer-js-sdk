const axios = require('axios')


// const AUTH_TOKENS = {};


class Auth {
    constructor(client_id, client_secret) {
        this.grant_type = undefined;
        this.client_id = client_id;
        this.client_secret = client_secret;
    }
    clientId(cid) { this.client_id = cid; return this; }
    clientSecret(csec) { this.client_secret = csec; return this; }
    isAuthConfig() { return true; }
}


class ClientCredentials extends Auth {
    constructor(client_id, client_secret, scope) {
        super(client_id, client_secret);
        this.grant_type = 'client_credentials';
        this.scope = scope;
    }
    setScope(scope) { this.scope = scope; return this; }
    marketScope(market) { this.scope = (market != undefined)? 'market:'+market : market; return this; }
}


class AuthorizationCode extends ClientCredentials {
    constructor(cfg = {}) {
        super(cfg.client_id, cfg.client_secret, cfg.scope)
        this.grant_type = 'authorization_code';
        this.code = cfg.code;
        this.redirect_uri = cfg.redirect_uri;
    }
    setCode(code) { this.code = code; return this; }
    redirectUri(uri) { this.redirect_uri = uri; return this; }
}


class Password extends ClientCredentials {
    constructor(cfg = {}) {
        super(cfg.client_id, cfg.client_secret, cfg.scope)
        this.grant_type = 'password';
        this.username = cfg.username;
        this.password = cfg.password;
    }
    setUsername(username) { this.username = username; return this; }
    setPassword(password) { this.password = password; return this; }
}


class RefreshToken extends Auth {
    constructor(client_id, client_secret, refresh_token) {
        super(client_id, client_secret);
        this.grant_type = 'refresh_token';
        this.refresh_token = refresh_token;
    }
    refreshToken(token) { this.refresh_token = token; return this; }
}


class ApiToken {
    constructor(access_token) {
        this.access_token = access_token;
        this.token_type = 'bearer';
        this.refresh_token = undefined;
        this.scope = undefined;
        this.owner_type = undefined;
        this.owner_id = undefined;
        this.created_at = undefined;
        this.expires_in = undefined;
    }
}



module.exports = {
    ClientCredentials,
    AuthorizationCode,
    Password,
    RefreshToken
}


module.exports.authenticate = (auth) => {
    return axios
        .post('/oauth/token', {
            grant_type: auth.grant_type,
            client_id: auth.client_id,
            scope: auth.scope,
            client_secret: auth.client_secret,
            code: auth.code,
            redirect_uri: auth.redirect_uri,
            username: auth.username,
            password: auth.password,
            refresh_token: auth.refresh_token
        })
        .then(response => {

            let token = new ApiToken();

            token.access_token = response.data.access_token;
            token.refresh_token = response.data.refresh_token;
            token.scope = response.data.scope;
            token.owner_type = response.data.owner_type;
            token.owner_id = response.data.owner_id;
            token.created_at = response.data.created_at;
            token.expires_in = response.data.expires_in;

            // cacheToken(auth.client_id, auth.grant_type, token);

            return token;

        })
}


// function cacheToken(client_id, grant_type, token) {
//     AUTH_TOKENS[tokenId(client_id, grant_type)] = token;
// }

// function getToken(client_id, grant_type) {
//     return AUTH_TOKENS[tokenId(client_id, grant_type)];
// }

// function tokenId(client_id, grant_type) {
//     return client_id + '-' + grant_type;
// }

function newAuthConfig(grant_type, config = {}) {
    switch (grant_type) {
        case 'client_credentials': return new ClientCredentials(config.client_id, config.client_secret, config.scope);
        case 'authorization_code': return new AuthorizationCode(config);
        case 'password': return new Password(config);
        case 'refresh_token': return new RefreshToken();
        default: return undefined;
    }
}