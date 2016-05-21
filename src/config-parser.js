import i from 'icepick'

export default function parse(config, cast = true) {
    let result = {}
    const lines = config.split("\n").filter(line => line).map(line => line.trim())

    let key = []
    lines.forEach(line => {
        if (line.substr(0, 2) === '[[') {
            key = [...key.slice(0, 1), line.slice(2, -2)]
        } else if (line.substr(0, 1) === '[') {
            key = [line.slice(1, -1)]
        } else {
            let [localKey, value] = line.split('=').map(s => s.trim())

            if (cast) {
                if (value === 'True') {
                    value = true
                } else if (value === 'False') {
                    value = false
                } else if (value.indexOf(',') > -1) {
                    value = value.split(',').map(s => s.trim())
                }
            }

            result = i.assocIn(result, [...key, localKey], value)
        }
    })

    return result
}
