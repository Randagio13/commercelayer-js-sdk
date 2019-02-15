const commercelayer = require('../index')
const test = require('./test')
const jsonapi = require('../lib/jsonapi')
const utils = require('../lib/utils')

order = {
  data:
  {
    id: '9839',
    type: 'orders',
    links:
      { self: 'https://static-commerce.commercelayer.io/api/orders/9839' },
    attributes:
    {
      status: 'pending',
      payment_status: 'unpaid',
      fulfillment_status: 'unfulfilled',
      guest: true,
      editable: true,
      placeable: false,
      customer_email: 'terri@example.com',
      language_code: 'en',
      currency_code: 'USD',
      tax_included: false,
      tax_rate: null,
      freight_taxable: null,
      country_code: null,
      shipping_country_code_lock: null,
      coupon_code: null,
      subtotal_amount_cents: 19560,
      subtotal_amount_float: 195.6,
      formatted_subtotal_amount: '$195.60',
      shipping_amount_cents: 0,
      shipping_amount_float: 0,
      formatted_shipping_amount: '$0.00',
      payment_method_amount_cents: 0,
      payment_method_amount_float: 0,
      formatted_payment_method_amount: '$0.00',
      discount_amount_cents: 0,
      discount_amount_float: 0,
      formatted_discount_amount: '$0.00',
      total_tax_amount_cents: 0,
      total_tax_amount_float: 0,
      formatted_total_tax_amount: '$0.00',
      subtotal_tax_amount_cents: 0,
      subtotal_tax_amount_float: 0,
      formatted_subtotal_tax_amount: '$0.00',
      shipping_tax_amount_cents: 0,
      shipping_tax_amount_float: 0,
      formatted_shipping_tax_amount: '$0.00',
      payment_method_tax_amount_cents: 0,
      payment_method_tax_amount_float: 0,
      formatted_payment_method_tax_amount: '$0.00',
      discount_tax_amount_cents: 0,
      discount_tax_amount_float: 0,
      formatted_discount_tax_amount: '$0.00',
      total_amount_cents: 19560,
      total_amount_float: 195.6,
      formatted_total_amount: '$195.60',
      total_taxable_amount_cents: 19560,
      total_taxable_amount_float: 195.6,
      formatted_total_taxable_amount: '$195.60',
      subtotal_taxable_amount_cents: 19560,
      subtotal_taxable_amount_float: 195.6,
      formatted_subtotal_taxable_amount: '$195.60',
      shipping_taxable_amount_cents: 0,
      shipping_taxable_amount_float: 0,
      formatted_shipping_taxable_amount: '$0.00',
      payment_method_taxable_amount_cents: 0,
      payment_method_taxable_amount_float: 0,
      formatted_payment_method_taxable_amount: '$0.00',
      discount_taxable_amount_cents: 0,
      discount_taxable_amount_float: 0,
      formatted_discount_taxable_amount: '$0.00',
      total_amount_with_taxes_cents: 19560,
      total_amount_with_taxes_float: 195.6,
      formatted_total_amount_with_taxes: '$195.60',
      fees_amount_cents: 0,
      fees_amount_float: 0,
      formatted_fees_amount: '$0.00',
      skus_count: 5,
      line_item_options_count: 0,
      shipments_count: 0,
      payment_source_details: null,
      token: '42757e0131ec48a110b2f7c0850762a7',
      cart_url: null,
      return_url: null,
      terms_url: null,
      privacy_url: null,
      checkout_url:
        'https://static-commerce.commercelayer.io/checkout/42757e0131ec48a110b2f7c0850762a7',
      placed_at: null,
      approved_at: null,
      cancelled_at: null,
      payment_updated_at: null,
      fulfillment_updated_at: null,
      created_at: '2018-11-27T12:24:49.737Z',
      updated_at: '2018-11-27T12:24:50.686Z',
      reference: null,
      metadata: {}
    },
    relationships:
    {
      market:
      {
        links:
        {
          self:
            'https://static-commerce.commercelayer.io/api/orders/9839/relationships/market',
          related:
            'https://static-commerce.commercelayer.io/api/orders/9839/market'
        },
        data: { type: 'markets', id: '185' }
      },
      customer:
      {
        links:
        {
          self:
            'https://static-commerce.commercelayer.io/api/orders/9839/relationships/customer',
          related:
            'https://static-commerce.commercelayer.io/api/orders/9839/customer'
        },
        data: { type: 'customers', id: '5236' }
      },
      shipping_address:
      {
        links:
        {
          self:
            'https://static-commerce.commercelayer.io/api/orders/9839/relationships/shipping_address',
          related:
            'https://static-commerce.commercelayer.io/api/orders/9839/shipping_address'
        }
      },
      billing_address:
      {
        links:
        {
          self:
            'https://static-commerce.commercelayer.io/api/orders/9839/relationships/billing_address',
          related:
            'https://static-commerce.commercelayer.io/api/orders/9839/billing_address'
        }
      },
      payment_method:
      {
        links:
        {
          self:
            'https://static-commerce.commercelayer.io/api/orders/9839/relationships/payment_method',
          related:
            'https://static-commerce.commercelayer.io/api/orders/9839/payment_method'
        }
      },
      payment_source:
      {
        links:
        {
          self:
            'https://static-commerce.commercelayer.io/api/orders/9839/relationships/payment_source',
          related:
            'https://static-commerce.commercelayer.io/api/orders/9839/payment_source'
        }
      },
      line_items:
      {
        links:
        {
          self:
            'https://static-commerce.commercelayer.io/api/orders/9839/relationships/line_items',
          related:
            'https://static-commerce.commercelayer.io/api/orders/9839/line_items'
        },
        data:
          [{ type: 'line_items', id: '28937' },
          { type: 'line_items', id: '28936' }]
      },
      shipments:
      {
        links:
        {
          self:
            'https://static-commerce.commercelayer.io/api/orders/9839/relationships/shipments',
          related:
            'https://static-commerce.commercelayer.io/api/orders/9839/shipments'
        }
      }
    },
    meta: { mode: 'test' }
  },
  included:
    [{
      id: '185',
      type: 'markets',
      links:
        { self: 'https://static-commerce.commercelayer.io/api/markets/185' },
      attributes:
      {
        name: 'USA',
        facebook_pixel_id: null,
        created_at: '2018-11-27T12:24:11.634Z',
        updated_at: '2018-11-27T12:24:11.634Z',
        reference: null,
        metadata: {}
      },
      relationships:
      {
        merchant:
        {
          links:
          {
            self:
              'https://static-commerce.commercelayer.io/api/markets/185/relationships/merchant',
            related:
              'https://static-commerce.commercelayer.io/api/markets/185/merchant'
          }
        },
        price_list:
        {
          links:
          {
            self:
              'https://static-commerce.commercelayer.io/api/markets/185/relationships/price_list',
            related:
              'https://static-commerce.commercelayer.io/api/markets/185/price_list'
          }
        },
        inventory_model:
        {
          links:
          {
            self:
              'https://static-commerce.commercelayer.io/api/markets/185/relationships/inventory_model',
            related:
              'https://static-commerce.commercelayer.io/api/markets/185/inventory_model'
          }
        }
      },
      meta: { mode: 'test' }
    },
    {
      id: '5236',
      type: 'customers',
      links:
      {
        self:
          'https://static-commerce.commercelayer.io/api/customers/5236'
      },
      attributes:
      {
        email: 'terri@example.com',
        status: 'acquired',
        created_at: '2018-11-27T12:24:50.403Z',
        updated_at: '2018-11-27T12:25:13.015Z',
        reference: null,
        metadata: {}
      },
      relationships:
      {
        customer_group:
        {
          links:
          {
            self:
              'https://static-commerce.commercelayer.io/api/customers/5236/relationships/customer_group',
            related:
              'https://static-commerce.commercelayer.io/api/customers/5236/customer_group'
          }
        },
        customer_addresses:
        {
          links:
          {
            self:
              'https://static-commerce.commercelayer.io/api/customers/5236/relationships/customer_addresses',
            related:
              'https://static-commerce.commercelayer.io/api/customers/5236/customer_addresses'
          }
        },
        customer_payment_sources:
        {
          links:
          {
            self:
              'https://static-commerce.commercelayer.io/api/customers/5236/relationships/customer_payment_sources',
            related:
              'https://static-commerce.commercelayer.io/api/customers/5236/customer_payment_sources'
          }
        },
        customer_subscriptions:
        {
          links:
          {
            self:
              'https://static-commerce.commercelayer.io/api/customers/5236/relationships/customer_subscriptions',
            related:
              'https://static-commerce.commercelayer.io/api/customers/5236/customer_subscriptions'
          }
        },
        orders:
        {
          links:
          {
            self:
              'https://static-commerce.commercelayer.io/api/customers/5236/relationships/orders',
            related:
              'https://static-commerce.commercelayer.io/api/customers/5236/orders'
          }
        }
      },
      meta: { mode: 'test' }
    },
    {
      id: '28937',
      type: 'line_items',
      links:
      {
        self:
          'https://static-commerce.commercelayer.io/api/line_items/28937'
      },
      attributes:
      {
        sku_code: 'BABYONBUFFFFFF00000012MX',
        quantity: 2,
        currency_code: 'USD',
        unit_amount_cents: 3480,
        unit_amount_float: 34.8,
        formatted_unit_amount: '$34.80',
        options_amount_cents: 0,
        options_amount_float: 0,
        formatted_options_amount: '$0.00',
        total_amount_cents: 6960,
        total_amount_float: 69.6,
        formatted_total_amount: '$69.60',
        name: 'White Baby Onesie Short Sleeve with Black Logo (12 Months)',
        image_url:
          'https://img.commercelayer.io/skus/BABYONBUFFFFFF000000.png?fm=jpg&q=90',
        tax_rate: null,
        tax_breakdown: {},
        item_type: 'skus',
        created_at: '2018-11-27T12:24:50.166Z',
        updated_at: '2018-11-27T12:24:50.166Z',
        reference: null,
        metadata: {}
      },
      relationships:
      {
        order:
        {
          links:
          {
            self:
              'https://static-commerce.commercelayer.io/api/line_items/28937/relationships/order',
            related:
              'https://static-commerce.commercelayer.io/api/line_items/28937/order'
          }
        },
        item:
        {
          links:
          {
            self:
              'https://static-commerce.commercelayer.io/api/line_items/28937/relationships/item',
            related:
              'https://static-commerce.commercelayer.io/api/line_items/28937/item'
          }
        },
        line_item_options:
        {
          links:
          {
            self:
              'https://static-commerce.commercelayer.io/api/line_items/28937/relationships/line_item_options',
            related:
              'https://static-commerce.commercelayer.io/api/line_items/28937/line_item_options'
          }
        }
      },
      meta: { mode: 'test' }
    },
    {
      id: '28936',
      type: 'line_items',
      links:
      {
        self:
          'https://static-commerce.commercelayer.io/api/line_items/28936'
      },
      attributes:
      {
        sku_code: 'SWEETSMUB7B7B7000000MXXX',
        quantity: 3,
        currency_code: 'USD',
        unit_amount_cents: 4200,
        unit_amount_float: 42,
        formatted_unit_amount: '$42.00',
        options_amount_cents: 0,
        options_amount_float: 0,
        formatted_options_amount: '$0.00',
        total_amount_cents: 12600,
        total_amount_float: 126,
        formatted_total_amount: '$126.00',
        name: 'Sport Grey Unisex Sweatshirt with Pink Logo (M)',
        image_url:
          'https://img.commercelayer.io/skus/SWEETSMUB7B7B7000000.png?fm=jpg&q=90',
        tax_rate: null,
        tax_breakdown: {},
        item_type: 'skus',
        created_at: '2018-11-27T12:24:49.811Z',
        updated_at: '2018-11-27T12:24:49.811Z',
        reference: null,
        metadata: {}
      },
      relationships:
      {
        order:
        {
          links:
          {
            self:
              'https://static-commerce.commercelayer.io/api/line_items/28936/relationships/order',
            related:
              'https://static-commerce.commercelayer.io/api/line_items/28936/order'
          }
        },
        item:
        {
          links:
          {
            self:
              'https://static-commerce.commercelayer.io/api/line_items/28936/relationships/item',
            related:
              'https://static-commerce.commercelayer.io/api/line_items/28936/item'
          }
        },
        line_item_options:
        {
          links:
          {
            self:
              'https://static-commerce.commercelayer.io/api/line_items/28936/relationships/line_item_options',
            related:
              'https://static-commerce.commercelayer.io/api/line_items/28936/line_item_options'
          }
        }
      },
      meta: { mode: 'test' }
    }]
};


let res = jsonapi.deserialize(order);

console.log('DESERIALIZED')
test.inspect(res)
console.log('SERIALIZED')
test.inspect(jsonapi.serialize(res))
