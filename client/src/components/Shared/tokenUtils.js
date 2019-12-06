// Gets the info saved on the token
export const getTokenInfo = () => {
    try {
        const payload = window.atob(token.split('.')[1])
        return JSON.parse(payload)
    } catch (e) {
        console.error(e)
    }
}

export const isAuthed = () => {
    const token_info = getTokenInfo() || ''

    if (token_info && token_info.exp > Math.round(new Date() / 1000)) {
        return token_info._id
    }

    return false
}
