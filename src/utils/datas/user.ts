import { OnlineStatus } from "src/enums"

const getUsers = (): Array<User> => {
    const users: Array<User> = []
    for (let i = 0; i < 5; i++) {
        users.push({
            id: i + '',
            userName: 'user-' + i,
            password: 'pwd-' + i,
            createTime: new Date(),
            status: OnlineStatus.OFFLINE,
            messageList: []
        })
    }
    return users
}
export const users = getUsers()