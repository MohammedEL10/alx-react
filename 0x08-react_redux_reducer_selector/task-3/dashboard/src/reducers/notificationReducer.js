const FETCH_NOTIFICATIONS_SUCCESS = 'FETCH_NOTIFICATIONS_SUCCESS';
const MARK_AS_READ = 'MARK_AS_READ';
const SET_TYPE_FILTER = 'SET_TYPE_FILTER';

const initialState = {
    filter: 'DEFAULT',
    notifications: []
}

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                notifications: action.data.map(notification => ({
                    ...notification,
                    isread: false
                }))
            };
        case MARK_AS_READ:
            return {
                ...state,
                notifications: state.notifications.map(notification =>
                    notification.id === action.index
                    ? { ...notification, isRead: true }
                    : notification
                )
            };
            case SET_TYPE_FILTER:
                return {
                    ...state,
                    filter: action.filter
                };
                default:
                    return state;
    }
};

export default notificationReducer;