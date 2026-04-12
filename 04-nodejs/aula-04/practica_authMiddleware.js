export async function autenticadoMiddleware (req, res, next) {
    const llave = "super";
    const token = req.headers["acceso"];
    if (token === llave) {
        next();
    } else {
        res.status(401).json({ error: "Acceso denegado" });
    }
}