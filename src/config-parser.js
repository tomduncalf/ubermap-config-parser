import i from 'icepick'

export default function parse(config) {
    let result = {}
    const lines = config.split("\n").filter(line => line).map(line => line.trim())

    let key = []
    lines.forEach(line => {
        if (line.substr(0, 2) === '[[') {
            key = [...key.slice(0, 1), line.slice(2, -2)]
        } else if (line.substr(0, 1) === '[') {
            key = [line.slice(1, -1)]
        } else {
            const split = line.split('=').map(s => s.trim())
            result = i.assocIn(result, [...key, split[0]], split[1])
        }
    })

    return result
}
