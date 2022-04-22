import axios from "axios";

async function getData(param) {
    const {data: users} = await axios(`https://jsonplaceholder.typicode.com/users/${param}`);
    const {data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${param}`);

    // ${{data: users}.data.id}`

    return {"users": users, "posts": posts}
}

export default getData;