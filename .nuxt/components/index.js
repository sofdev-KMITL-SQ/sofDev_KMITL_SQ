export { default as Blog } from '../..\\components\\Blog.vue'
export { default as Cart } from '../..\\components\\Cart.vue'
export { default as Home } from '../..\\components\\Home.vue'
export { default as Layout } from '../..\\components\\Layout.vue'
export { default as Line } from '../..\\components\\Line.vue'
export { default as Paying } from '../..\\components\\Paying.vue'
export { default as Post } from '../..\\components\\Post.vue'
export { default as Product } from '../..\\components\\Product.vue'
export { default as Shipping } from '../..\\components\\Shipping.vue'
export { default as Shop } from '../..\\components\\Shop.vue'

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
