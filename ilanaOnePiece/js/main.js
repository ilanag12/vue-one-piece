import vCard from "./components/v-card.js"
import vProduct from "./components/v-product.js"

const App = {
    components: {
        vCard,
        vProduct
    },
    data() {
        return {
            currentPage: 'home', //character, products, login, register. personal, admin
            user:
            {
                login: 'admin',
                password: 'root',
                role: 'admin'
            },
            username: '',
            password: '',
            products: [
                { name: 'One Piece Том 1', image: 'onepiece1.jpg', price: 894, id: 1 },
                { name: 'One Piece Том 2', image: 'onepiece2.webp', price: 895, id: 2 },
                { name: 'One Piece Том 3', image: 'onepiece3.jpg', price: 897, id: 3 },
                { name: 'One Piece Том 4', image: 'onepiece4.jpg', price: 899, id: 4 },
                { name: 'One Piece Том 5', image: 'onepiece5.jpg', price: 994, id: 5 },
                { name: 'One Piece Том 6', image: 'onepiece6.webp', price: 794, id: 6 },
                { name: 'One Piece Том 7', image: 'onepiece7.webp', price: 790, id: 7 },
                { name: 'One Piece Том 8', image: 'onepiece8.webp', price: 890, id: 8 },
                { name: 'One Piece Том 9', image: 'onepiece9.webp', price: 894, id: 9 },
                { name: 'One Piece Том 10', image: 'onepiece10.jpg', price: 899, id: 10 },
                { name: 'One Piece Том 11', image: 'onepiece11.webp', price: 804, id: 11 },
                { name: 'One Piece Том 12', image: 'onepiece12.webp', price: 874, id: 12 },

            ],
            cart: [],



        }

    },
    computed: {
        isAuth() {

            return !!this.user


        },
        isAdmin() {

            return !!this.isAuth && this.user.role === 'admin'
        },


    },
    methods: {
        logout() {
            this.user = null
        },
        addToCart(product) {
            this.cart.push(product)
        },
        removeFromCart(id) {
            this.cart = this.cart.filter(e => e.id !== id)

        },


    },

}

Vue.createApp(App).mount('#app')