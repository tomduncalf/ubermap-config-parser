import test from 'ava'
import fs from 'fs'

import parse from './config-parser'

const configIni = fs.readFileSync('../fixtures/Devastor.cfg', 'utf-8')
const configObj = JSON.parse(fs.readFileSync('../fixtures/Devastor.json', 'utf-8'))

test('parser', t => {
    t.deepEqual(parse(configIni), configObj)
})
