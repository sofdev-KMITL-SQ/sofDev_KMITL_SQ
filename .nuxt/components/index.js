export { default as Blog } from '../..\\components\\Blog.vue'
export { default as Cart } from '../..\\components\\Cart.vue'
export { default as CreatePost } from '../..\\components\\CreatePost.vue'
export { default as EditMyShop } from '../..\\components\\EditMyShop.vue'
export { default as Home } from '../..\\components\\Home.vue'
export { default as Layout } from '../..\\components\\Layout.vue'
export { default as MyOrder } from '../..\\components\\MyOrder.vue'
export { default as MyShop } from '../..\\components\\MyShop.vue'
export { default as OrderShop } from '../..\\components\\OrderShop.vue'
export { default as OrderUser } from '../..\\components\\OrderUser.vue'
export { default as Paying } from '../..\\components\\Paying.vue'
export { default as Product } from '../..\\components\\Product.vue'
export { default as Review } from '../..\\components\\Review.vue'
export { default as Shipping } from '../..\\components\\Shipping.vue'
export { default as Shop } from '../..\\components\\Shop.vue'
export { default as ShopUser } from '../..\\components\\ShopUser.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
