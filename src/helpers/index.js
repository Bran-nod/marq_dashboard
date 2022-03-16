const replaceClientTags = (value) => {
    const serverString = value
        .replaceAll('<i>', '<voice>')
        .replaceAll('</i>', '</voice>')
        .replaceAll('<small>', '<user>')
        .replaceAll('</small>', '</user>')

    return serverString
}
const replaceServerTags = (value) => {
    const serverString = value
        .replaceAll('<voice>', '<i>')
        .replaceAll('</voice>', '</i>')
        .replaceAll('<user>', '<small>')
        .replaceAll('</user>', '</small>')
    return serverString
}
export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}