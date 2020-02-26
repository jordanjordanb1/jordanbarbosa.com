export const isProd = () => {
    const prod = false // REMINDER: Set to true before building

    return prod
}

const URL = () => {
    if (isProd()) {
        return 'https://old-jordanbarbosa-portfolio.herokuapp.com'
    } else {
        return 'http://localhost:3001'
    }
}

export const config = {
    url: URL()
}