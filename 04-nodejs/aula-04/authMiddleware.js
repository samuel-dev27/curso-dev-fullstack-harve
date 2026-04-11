export async function authMiddleware(req, res, next) {
    const CHAVE = "chave-secreta"
    const token = req.headers["chave-acceso"]


if ( token === CHAVE ) {
    next()
} else {
    res.status(401).json({ error: "Acesso negado" })
}
}