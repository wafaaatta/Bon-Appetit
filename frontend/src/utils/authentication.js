export const checkAuthentication = () => {
    const token = localStorage.getItem('token');
    return token != null;
}

export const provideAuthentication = (token) => {
    localStorage.setItem('token', token)
}

export const getAuthenticationToken = () => {
    return localStorage.getItem('token')
}


export const removeAuthentication = () => {
    if(localStorage.getItem('token') != null){
        localStorage.removeItem('token')
    }

    return;
}