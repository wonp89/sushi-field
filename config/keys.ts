// import * as devKey from './dev'
import * as prodKey from './prod'

export const keys: any = (process.env.NODE_ENV === 'production')
? prodKey as any
// : devKey as any
:null