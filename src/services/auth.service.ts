//эти функции могут пригодиться потом, для более сложной настройки логина/логаута:
export function saveAuthData(token: string, expirationDate: Date) {  
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());  
}

export function clearAuthData() {  
    localStorage.removeItem("token");  
    localStorage.removeItem("expiration");  
}  