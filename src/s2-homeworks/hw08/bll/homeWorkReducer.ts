import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            let copyState = [...state]
            if (action.payload === 'up') {
                copyState.sort(function (a, b) {
                        let nameA = a.name.toLowerCase()
                        let nameB = b.name.toLowerCase()
                        if (nameA < nameB)
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0
                    }
                )
            }
            if (action.payload === 'down') {
                copyState.sort(function (a, b) {
                        let nameA = a.name.toLowerCase()
                        let nameB = b.name.toLowerCase()
                        if (nameA > nameB)
                            return -1
                        if (nameA < nameB)
                            return 1
                        return 0
                    }
                )
            }
            return copyState
        }
        case 'check': {
            return state.filter(el => el.age > action.payload)
        }
        default:
            return state
    }
}
