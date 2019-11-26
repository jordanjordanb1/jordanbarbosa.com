export const isProd = () => {
    const prod = false // REMINDER: Set to true before building

    return prod
}

const URL = () => {
    if (isProd()) {
        return 'https://jordanbarbosa.com'
    } else {
        return 'http://localhost:3001'
    }
}

export const config = {
    url: URL()
}