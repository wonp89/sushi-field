import * as devKey from './dev'
import * as prodKey from './prod'

export const keys: any = (process.env.BUILD_MODE === 'production')
? prodKey as any
: devKey as any