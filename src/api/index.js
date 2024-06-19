export default async function api(endpoint, options) {
    try {
        let data = await fetch(endpoint, options);
        if (!data.ok) {
            throw Error('Ha ocurrido un error en un servicio')
        }
        return data.json();
    } catch (err) {
        console.error(err)
        throw err
    }
}
