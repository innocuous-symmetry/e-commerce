import { userInfo } from "../types/main";

enum userActionType {
    GETALL = 'GETALL',
    GETONE = 'GETONE',
    REGISTERNEW = 'REGISTERNEW',
    UPDATEONE = 'UPDATEONE'
}

interface userAction {
    type: userActionType;
    payload: any;
}

const userReducer = (state: userInfo, action: userAction) => {
    const { type, payload } = action;
    switch (type) {
        case userActionType.GETALL:
            return {
                // do something
            }
    }
}