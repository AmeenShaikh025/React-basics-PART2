const initState = {
    posts: [
        {id: '1', title: 'Squirtel Laid an Egg', body: 'Lorem ipsum, dolor sit amet'},
        {id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum, dolor sit amet'},
        {id: '3', title: 'Bulbusaur Laid an Egg', body: 'Lorem ipsum, dolor sit amet'}
    ]
}

const rootReducer = (state = initState, action) => {
    //console.log(action);
    if (action.type === 'DELETE_POST') {
        let newPost = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPost
        }
    }
    return state;
}

export default rootReducer;