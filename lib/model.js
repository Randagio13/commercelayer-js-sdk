
// Basic Abstract Resource
class Resource {
    constructor(id, type) {
        this.id = id;
        this.type = type;
        this.reference = undefined;
        this.metadata = undefined;
        this.created_at = undefined;
        this.updated_at = undefined;
    }
    isApiResource() { return true; }
    setResource(field, res) { if ((res != undefined) && res.isApiResource && res.isApiResource()) this['__'.concat(field)] = res; }
    getResource(field) { return this['__'.concat(field)]; }
}


module.exports = {

    // Address resource
    Address : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'addresses');
            this.business = fields.business;
            this.first_name = fields.first_name;
            this.last_name = fields.last_name;
            this.company = fields.company;
            this.line_1 = fields.line_1;
            this.line_2 = fields.line_2;
            this.city = fields.city;
            this.zip_code = fields.zip_code;
            this.state_code = fields.state_code;
            this.country_code = fields.country_code;
            this.phone = fields.phone;
            this.email = fields.email;
            this.notes = fields.notes;
            this.lat = fields.lat;
            this.lng = fields.lng;
            this.billing_info = fields.billing_info;
        }
        // Relationships
        set geocoder(value) { super.setResource('geocoder', value) }
        get geocoder() { return super.getResource('geocoder') }
    },


    // CreditCard resource
    CreditCard : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'credit_cards');
            this.first_name = fields.first_name;
            this.last_name = fields.last_name;
            this.number = fields.number;
            this.month = fields.month;
            this.year = fields.year;
            this.verification_value = fields.verification_value;
        }
        // Relationships
        set order(value) { super.setResource('order', value) }
        get order() { return super.getResource('order') }
    },


    // Customer resource
    Customer : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'customers');
            this.email = fields.email;
        }
        // Relationships
        set customer_group(value) { super.setResource('customer_group', value) }
        get customer_group() { return super.getResource('customer_group') }
    },


    // CustomerAddress resource
    CustomerAddress : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'customer_addresses');
            this.name = fields.name;
        }
        // Relationships
        set customer(value) { super.setResource('customer', value) }
        get customer() { return super.getResource('customer') }
        set order(value) { super.setResource('order', value) }
        get order() { return super.getResource('order') }
    },


    // CustomerGroup resource
    CustomerGroup : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'customer_groups');
        }
        // Relationships
        set price_list(value) { super.setResource('price_list', value) }
        get price_list() { return super.getResource('price_list') }
    },


    // CustomerPasswordReset resource
    CustomerPasswordReset : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'customer_password_resets');
            this.customer_email = fields.customer_email;
        }
    },


    // CustomerPaymentSource
    CustomerPaymentSource : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'customer_payment_sources');
        }
        // Relationships
        set customer(value) { super.setResource('customer', value) }
        get customer() { return super.getResource('customer') }
        set payment_source(value) { super.setResource('payment_source', value) }
        get payment_source() { return super.getResource('payment_source') }
    },


    // DeliveryLeadTime resource
    DeliveryLeadTime : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'delivery_lead_times');
            this.min_hours = fields.min_hours;
            this.max_hours = fields.max_hours;
        }
        // Relationships
        set stock_location(value) { super.setResource('stock_location', value) }
        get stock_location() { return super.getResource('stock_location') }
        set shipping_method(value) { super.setResource('shipping_method', value) }
        get shipping_method() { return super.getResource('shipping_method') }
    },


    // Import resource
    Import : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'imports');
            this.resource_type = fields.resource_type;
            this.parent_resource_id = fields.parent_resource_id;
            this.inputs = fields.inputs;
            this.cleanup_records = fields.cleanup_records;
        }
    },


    // InventoryModel resource
    InventoryModel : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'inventory_models');
            this.name = fields.name;
        }
    },
    

    // LineItem resource
    LineItem : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'line_items');
            this.sku_code = fields.sku_code;
            this.quantity = fields.quantity;
            this.update_quantity = fields._update_quantity;
            this.name = fields.name;
            this.image_url = fields.image_url;
            this.order = fields.order;
            this.item = fields.item;
        }
        set update_quantity(value) { this._update_quantity = value? '1' : null; }
        // Relationships
        set order(value) { super.setResource('order', value) }
        get order() { return super.getResource('order') }
    },


    // LineItemOption resource
    LineItemOption : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'line_item_options');
            this.name = fields.name;
            this.quantity = fields.quantity;
            this.options = fields.options;
        }
        // Relationships
        set line_item(value) { super.setResource('line_item', value) }
        get line_item() { return super.getResource('line_item') }
        set sku_option(value) { super.setResource('sku_option', value) }
        get sku_option() { return super.getResource('sku_option') }
    },


    // Market resource
    Market : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'markets');
            this.name = fields.name;
            this.facebook_pixel_id = fields.facebook_pixel_id;
        }
        // Relationships
        set merchant(value) { super.setResource('merchant', value) }
        get merchant() { return super.getResource('merchant') }
        set price_list(value) { super.setResource('price_list', value) }
        get price_list() { return super.getResource('price_list') }
        set inventory_model(value) { super.setResource('inventory_model', value) }
        get inventory_model() { return super.getResource('inventory_model') }
    },


    // Merchant resource
    Merchant : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'merchants');
            this.name = fields.name;
        }
        // Relationships
        set address(value) { super.setResource('address', value) }
        get address() { return super.getResource('address') }
    },


    // Order resource
    Order : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'orders');
            this.guest = fields.guest;
            this.customer_email = fields.customer_email;
            this.customer_password = fields.customer_password;
            this.language_code = fields.language_code;
            this.shipping_country_code_lock = fields.shipping_country_code_lock;
            this.coupon_code = fields.coupon_code;
            this.cart_url = fields.cart_url;
            this.return_url = fields.return_url;
            this.terms_url = fields.terms_url;
            this.privacy_url = fields.privacy_url;
        }
        // Relationships
        set market(value) { super.setResource('market', value) }
        get market() { return super.getResource('market') }
        set customer(value) { super.setResource('customer', value) }
        get customer() { return super.getResource('customer') }
        set shipping_address(value) { super.setResource('shipping_address', value) }
        get shipping_address() { return super.getResource('shipping_address') }
        set billing_address(value) { super.setResource('billing_address', value) }
        get billing_address() { return super.getResource('billing_address') }
        set payment_method(value) { super.setResource('payment_method', value) }
        get payment_method() { return super.getResource('payment_method') }
        set payment_source(value) { super.setResource('payment_source', value) }
        get payment_source() { return super.getResource('payment_source') }
    },


    // Parcel resource
    Parcel : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'parcels');
            this.weight = fields.weight;
            this.unit_of_weight = fields.unit_of_weight;
            this.eel_pfc = fields.eel_pfc;
            this.contents_type = fields.contents_type;
            this.contents_explanation = fields.contents_explanation;
            this.customs_certify = fields.customs_certify;
            this.customs_signer = fields.customs_signer;
            this.non_delivery_option = fields.non_delivery_option;
            this.restriction_type = fields.restriction_type;
            this.restriction_comments = fields.restriction_comments;
            this.customs_info_required = fields.customs_info_required;
        }
        // Relationships
        set shipment(value) { super.setResource('shipment', value) }
        get shipment() { return super.getResource('shipment') }
    },


    // PaymentMethod resource
    PaymentMethod : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'payment_methods');
            this.payment_source_type = fields.payment_source_type;
            this.price_amount_cents = fields.price_amount_cents;
        }
        // Relationships
        set market(value) { super.setResource('market', value) }
        get market() { return super.getResource('market') }
        set payment_gateway(value) { super.setResource('payment_gateway', value) }
        get payment_gateway() { return super.getResource('payment_gateway') }
    },


    // PaypalPayment resource
    PaypalPayment : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'paypal_payments');
            this.return_url = fields.return_url;
            this.cancel_url = fields.cancel_url;
            this.note_to_payer = fields.note_to_payer;
        }
        // Relationships
        set order(value) { super.setResource('order', value) }
        get order() { return super.getResource('order') }
    },


    // Price resource
    Price : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'prices');
            this.sku_code = fields.sku_code;
            this.amount_cents = fields.amount_cents;
            this.compare_at_amount_cents = fields.compare_at_amount_cents;
        }
        // Relationships
        set price_list(value) { super.setResource('price_list', value) }
        get price_list() { return super.getResource('price_list') }
        set sku(value) { super.setResource('sku', value) }
        get sku() { return super.getResource('sku') }
    },


    // PriceList resource
    PriceList : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'price_lists');
            this.name = fields.name;
            this.currency_code = fields.currency_code;
            this.tax_included = fields.tax_included;
        }
    },


    // Shipment resource
    Shipment : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'shipments');
        }
    },


    // ShippingCategory resource
    ShippingCategory : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'shipping_categories');
            this.name = fields.name;
        }
    },


    // ShippingMethod resource
    ShippingMethod : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'shipping_methods');
            this.name = fields.name;
            this.price_amount_cents = fields.price_amount_cents;
            this.free_over_amount_cents = fields.free_over_amount_cents;
        }
        // Relationships
        set market(value) { super.setResource('market', value) }
        get market() { return super.getResource('market') }
        set shipping_zone(value) { super.setResource('shipping_zone', value) }
        get shipping_zone() { return super.getResource('shipping_zone') }
        set shipping_category(value) { super.setResource('shipping_category', value) }
        get shipping_category() { return super.getResource('shipping_category') }
    },


    // ShippingZone resource
    ShippingZone : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'shipping_zones');
            this.name = fields.name;
            this.country_code_regex = fields.country_code_regex;
            this.not_country_code_regex = fields.not_country_code_regex;
            this.state_code_regex = fields.state_code_regex;
            this.not_state_code_regex = fields.not_state_code_regex;
            this.zip_code_regex = fields.zip_code_regex;
            this.not_zip_code_regex = fields.not_zip_code_regex;
        }
    },


    // Sku resource
    Sku : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'skus');
            this.code = fields.code;
            this.name = fields.name;
            this.description = fields.description;
            this.image_url = fields.image_url;
            this.tag_names = fields.tag_names;
            this.pieces_per_pack = fields.pieces_per_pack;
            this.weight = fields.weight;
            this.unit_of_weight = fields.unit_of_weight;
        }
         // Relationships
        set shipping_category(value) { super.setResource('shipping_category', value) }
        get shipping_category() { return super.getResource('shipping_category') }
    },


    // SkuOption resource
    SkuOption : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'sku_options');
            this.name = fields.name;
            this.price_amount_cents = fields.price_amount_cents;
            this.delay_hours = fields.delay_hours;
            this.sku_code_regex = fields.sku_code_regex;
        }
        // Relationships
        set market(value) { super.setResource('market', value) }
        get market() { return super.getResource('market') }
    },


    // StockItem resource
    StockItem : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'stock_items');
            this.sku_code = fields.sku_code;
            this.quantity = fields.quantity;
        }
        // Relationships
        set stock_location(value) { super.setResource('stock_location', value) }
        get stock_location() { return super.getResource('stock_location') }
        set sku(value) { super.setResource('sku', value) }
        get sku() { return super.getResource('sku') }
    },


    // StockLevel resource
    StockLevel : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'stock_levels');
            this.priority = fields.priority;
            this.on_hold = fields.on_hold;
        }
        // Relationships
        set stock_location(value) { super.setResource('stock_location', value) }
        get stock_location() { return super.getResource('stock_location') }
        set inventory_model(value) { super.setResource('inventory_model', value) }
        get inventory_model() { return super.getResource('inventory_model') }
    },


    // StockLocation resource
    StockLocation : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'stock_locations');
            this.name = fields.name;
            this.label_format = fields.label_format;
        }
        // Relationships
        set address(value) { super.setResource('address', value) }
        get address() { return super.getResource('address') }
    },


    // Webhook resource
    Webhook : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'webhooks');
            this.topic = fields.topic;
            this.callback_url = fields.callback_url;
            this.include_resources = fields.include_resources;
        }
    },


    // WireTransfer resource
    WireTransfer : class extends Resource {
        constructor(id, fields = {}) {
            super(id, 'wire_transfers');
        }
        // Relationships
        set order(value) { super.setResource('order', value) }
        get order() { return super.getResource('order') }
    }

}