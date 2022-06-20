export default {
    template: `
<div class="product__box">
    <img :src="'../assets/img/' + product.image" alt="" class="product__img">
    <span class="product__name product__info-text">{{product.name}}</span>
    <span class="product__price product__info-text">{{product.price}} руб.</span>
    <button class="buy-btn" @click="$emit('add', product)">Добавить</button>
</div>

    `,
    props: {
        product: Object,
    }
}