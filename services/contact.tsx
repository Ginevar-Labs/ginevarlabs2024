const axios = require('axios').default;

export const ErrorList = {
    ONE_OR_MORE_INVALID_FIELDS: 'One or more fields are invalid',
    INVALID_REQ_BODY: 'Invalid HTTP request body',
    UNKNOWN_ERROR: 'Unknown error',
    INVALID_CREDENTIALS: 'Invalid credentials',
    INVALID_TOKEN: 'Invalid token',
    INVALID_ACCESS: 'Invalid access',
    MISSING_FIELDS: 'Missing fields',
    ERROR_AT_INSERT: 'Error at insert',
    ERROR_AT_UPDATE: 'Error at update',
    ERROR_AT_DELETE: 'Error at delete',
    DUPLICATED: 'Error duplicated',
    NOT_FOUND: 'Not found',
    ACC_BANNED: 'Account temporary banned',
    IP_BANNED: 'IP temporary banned'
}

const processError = (errorString: string): string => {
    switch(errorString) {
        case 'invalid credentials': return ErrorList.INVALID_CREDENTIALS;
        case 'invalid token': return ErrorList.INVALID_TOKEN;
        case 'invalid access': return ErrorList.INVALID_ACCESS;
        case 'missing fields': return ErrorList.MISSING_FIELDS;
        case 'error at insert': return ErrorList.ERROR_AT_INSERT;
        case 'error at update': return ErrorList.ERROR_AT_UPDATE;
        case 'error at delete': return ErrorList.ERROR_AT_DELETE;
        case 'error duplicated': return ErrorList.DUPLICATED;
        case 'not found': return ErrorList.NOT_FOUND;
        case 'account temporary banned': return ErrorList.ACC_BANNED;
        case 'ip temporary banned': return ErrorList.IP_BANNED;
        default: return ErrorList.UNKNOWN_ERROR
    }
}


export const sendContact = async(email: string, message: string): Promise<any | void> => {
    const host = process.env.HOST!;
    const token = process.env.MKAN_KEY!;

    if(host.indexOf('http') == -1) {
      throw(ErrorList.ONE_OR_MORE_INVALID_FIELDS)
    }

    if(!email.includes("@") || message.length < 10) {
        alert('One or more fields are invalid.');
        return false;
      }
    
    return await axios.post(`${host}routes/contact`, {
        content: message,
        email: email
    }, {
        headers: {
          "Content-Type": "application/json",
          "Permission": `Token: ${token}`,
        }
    }).then(async (response: any) =>{
        try{
            return response.data.result;
        }catch(e){
            throw(ErrorList.INVALID_REQ_BODY);
        }
    })
    .catch((err: any) => {
        throw(processError(err.response.data.error));
    });
}