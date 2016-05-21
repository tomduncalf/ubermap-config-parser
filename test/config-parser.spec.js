import test from 'ava'
import fs from 'fs'

import parse from '../src/config-parser'

const configIni = fs.readFileSync('../fixtures/Devastor.cfg', 'utf-8')

test('parser without casting', t => {
    const configObj = JSON.parse(fs.readFileSync('../fixtures/Devastor.json', 'utf-8'))
    t.deepEqual(parse(configIni, false), configObj)
})

test('parser with casting', t => {
    const configObj = JSON.parse(fs.readFileSync('../fixtures/Devastor-cast.json', 'utf-8'))
    t.deepEqual(parse(configIni), configObj)
})
