import axios from "axios";

export default axios.create(
    {
        baseURL: 'https://api.rawg.io/api',
        params: {
            key: 'b89989490c584d20993e76d32cd68945'
        }
    }
)