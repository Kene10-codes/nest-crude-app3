import * as bcrypt from 'bcryptjs'

export function encodeHashPassword(rawPassword: string) {
    const SALT = bcrypt.genSaltSync()
    return bcrypt.hashSync(rawPassword, SALT)
}


export function comparePassword(rawPassword: string, hashPassword: string | number) {
    return bcrypt.compare(rawPassword, hashPassword)
}