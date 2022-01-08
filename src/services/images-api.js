

const API_KEY = '24154374-c1e84db869e410d68acac2009';
const BASE_URL = 'https://pixabay.com/api';

export default function fetchImages(query, page) {
        return fetch(`${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(
                new Error('Nothing found. Try enother query')
            )
        });
}
