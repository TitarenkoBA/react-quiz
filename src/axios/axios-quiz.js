import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-ccba5.firebaseio.com/'
})