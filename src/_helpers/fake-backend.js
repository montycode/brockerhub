export function configureFakeBackend() {
    let users = [   { id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User', prospects: 32, appointments: 15, gender: 1 },
                    { id: 2, username: 'omar@cilabs.io', password: 'erickso10', firstName: 'Omar', lastName: 'Montoya', prospects: 18, appointments: 8, gender: 1 },
                    { id: 3, username: 'ux@cilabs.io', password: 'Termopilas01', firstName: 'Valeria', lastName: 'Landeros', prospects: 11, appointments: 18, gender: 2 }
                ];
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        const isLoggedIn = opts.headers['Authorization'] === 'Bearer fake-jwt-token';

        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {
                // authenticate - public
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    const params = JSON.parse(opts.body);
                    const user = users.find(x => x.username === params.username && x.password === params.password);
                    if (!user) return error('Username or password is incorrect');
                    return ok({
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        prospects: user.prospects,
                        appointments: user.appointments,
                        gender: user.gender,
                        token: 'fake-jwt-token'
                    });
                }

                // get users - secure
                if (url.endsWith('/users') && opts.method === 'GET') {
                    if (!isLoggedIn) return unauthorised();
                    return ok(users);
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

                // private helper functions

                function ok(body) {
                    resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) })
                }

                function unauthorised() {
                    resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorised' })) })
                }

                function error(message) {
                    resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) })
                }
            }, 500);
        });
    }
}