import { authenticationService } from '@/_services'

export function handleLogin(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            data.message = 'Usuario y/o contraseña incorrectos.';
            if (response.status === 403) {
                data.message = 'Debes confirmar tu correo electronico para ingresar';
            }
            const error = (data && data.message);
            return Promise.reject(error);
        }

        return data;
    });
}