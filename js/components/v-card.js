export default {
    template: `
    <div class="cart">
    <button class="cart__btn" @click="cartVisible=!cartVisible">card</button>
    <div class="cart__list" v-if="cartVisible">
    <slot></slot>
        <div class="cart__item" v-for="p in basket" :key="p.id">
            <img :src="'../assets/img/'+p.image" alt="" class="cart__img">
            <span class="cart__item__name">{{p.name}}</span>
            <span class="cart__item__price">{{p.price}}</span>
            <a href="" @click.prevent="$emit('remove', p.id)" class="cart__remove-btn">remove</a>
        </div>
    </div>
</div>
    `,

    props: {
        basket: Array,
    },
    data() {
        return {
            cartVisible: false,
        }
    }
}