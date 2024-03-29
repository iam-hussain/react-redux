const initState = {
    posts: [
        {
            "userId": 1,
            "id": "1",
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderi" +
                    "t molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architect" +
                    "o"
        }, {
            "userId": 1,
            "id": "2",
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores " +
                    "neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui " +
                    "aperiam non debitis possimus qui neque nisi nulla"
        }, {
            "userId": 1,
            "id": "3",
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem do" +
                    "loribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et ve" +
                    "lit aut"
        }, {
            "userId": 1,
            "id": "4",
            "title": "eum et est occaecati",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda providen" +
                    "t rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis" +
                    " sunt voluptatem rerum illo velit"
        }, {
            "userId": 1,
            "id": "5",
            "title": "nesciunt quas odio",
            "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvolupta" +
                    "tem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        }
    ]
}

const rootReducer = (state = initState, action) => {

    if(action.type === 'DELETE_POST'){
        let newPost = state.posts.filter(post => {
            return post.id !== action.id
        })
        return {
            ...state,
            posts : newPost
        }
    }
    console.log(action)
    return state;
}

export default rootReducer;