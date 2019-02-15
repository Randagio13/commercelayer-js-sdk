// File automatically generated at 15/02/2019 12:06:43 by commercelayer-js-sdk-codegen


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
	setFields(fields = {}) { Object.keys(fields).forEach(field => { this[field] = fields[field] }); return this; }
}



// Address resource
class Address extends Resource {
    static get TYPE() { return 'addresses' }
    constructor(id, fields = {}) {
        super(id, Address.TYPE);
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
}



// Credit Card resource
class CreditCard extends Resource {
    static get TYPE() { return 'credit_cards' }
    constructor(id, fields = {}) {
        super(id, CreditCard.TYPE);
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
}



// Customer Address resource
class CustomerAddress extends Resource {
    static get TYPE() { return 'customer_addresses' }
    constructor(id, fields = {}) {
        super(id, CustomerAddress.TYPE);
    }
	// Relationships
	set customer(value) { super.setResource('customer', value) }
	get customer() { return super.getResource('customer') }
	set address(value) { super.setResource('address', value) }
	get address() { return super.getResource('address') }
}



// Customer Password Reset resource
class CustomerPasswordReset extends Resource {
    static get TYPE() { return 'customer_password_resets' }
    constructor(id, fields = {}) {
        super(id, CustomerPasswordReset.TYPE);
		this.customer_email = fields.customer_email;
		this.customer_password = fields.customer_password;
		this._reset_password_token = fields._reset_password_token;
    }
	// Relationships
}



// Customer Payment Source resource
class CustomerPaymentSource extends Resource {
    static get TYPE() { return 'customer_payment_sources' }
    constructor(id, fields = {}) {
        super(id, CustomerPaymentSource.TYPE);
    }
	// Relationships
	set customer(value) { super.setResource('customer', value) }
	get customer() { return super.getResource('customer') }
	set payment_source(value) { super.setResource('payment_source', value) }
	get payment_source() { return super.getResource('payment_source') }
}



// Customer Subscription resource
class CustomerSubscription extends Resource {
    static get TYPE() { return 'customer_subscriptions' }
    constructor(id, fields = {}) {
        super(id, CustomerSubscription.TYPE);
		this.customer_email = fields.customer_email;
    }
	// Relationships
}



// Customer resource
class Customer extends Resource {
    static get TYPE() { return 'customers' }
    constructor(id, fields = {}) {
        super(id, Customer.TYPE);
		this.email = fields.email;
		this.password = fields.password;
    }
	// Relationships
}



// Delivery Lead Time resource
class DeliveryLeadTime extends Resource {
    static get TYPE() { return 'delivery_lead_times' }
    constructor(id, fields = {}) {
        super(id, DeliveryLeadTime.TYPE);
		this.min_hours = fields.min_hours;
		this.max_hours = fields.max_hours;
    }
	// Relationships
	set stock_location(value) { super.setResource('stock_location', value) }
	get stock_location() { return super.getResource('stock_location') }
	set shipping_method(value) { super.setResource('shipping_method', value) }
	get shipping_method() { return super.getResource('shipping_method') }
}



// Inventory Model resource
class InventoryModel extends Resource {
    static get TYPE() { return 'inventory_models' }
    constructor(id, fields = {}) {
        super(id, InventoryModel.TYPE);
		this.name = fields.name;
    }
	// Relationships
}



// Line Item Option resource
class LineItemOption extends Resource {
    static get TYPE() { return 'line_item_options' }
    constructor(id, fields = {}) {
        super(id, LineItemOption.TYPE);
		this.name = fields.name;
		this.quantity = fields.quantity;
		this.options = fields.options;
    }
	// Relationships
	set line_item(value) { super.setResource('line_item', value) }
	get line_item() { return super.getResource('line_item') }
	set sku_option(value) { super.setResource('sku_option', value) }
	get sku_option() { return super.getResource('sku_option') }
}



// Line Item resource
class LineItem extends Resource {
    static get TYPE() { return 'line_items' }
    constructor(id, fields = {}) {
        super(id, LineItem.TYPE);
		this.sku_code = fields.sku_code;
		this.quantity = fields.quantity;
		this._update_quantity = fields._update_quantity;
		this.name = fields.name;
		this.image_url = fields.image_url;
    }
	// Relationships
	set order(value) { super.setResource('order', value) }
	get order() { return super.getResource('order') }
	set item(value) { super.setResource('item', value) }
	get item() { return super.getResource('item') }
}



// Market resource
class Market extends Resource {
    static get TYPE() { return 'markets' }
    constructor(id, fields = {}) {
        super(id, Market.TYPE);
		this.name = fields.name;
    }
	// Relationships
	set merchant(value) { super.setResource('merchant', value) }
	get merchant() { return super.getResource('merchant') }
	set price_list(value) { super.setResource('price_list', value) }
	get price_list() { return super.getResource('price_list') }
	set inventory_model(value) { super.setResource('inventory_model', value) }
	get inventory_model() { return super.getResource('inventory_model') }
}



// Merchant resource
class Merchant extends Resource {
    static get TYPE() { return 'merchants' }
    constructor(id, fields = {}) {
        super(id, Merchant.TYPE);
		this.name = fields.name;
    }
	// Relationships
	set address(value) { super.setResource('address', value) }
	get address() { return super.getResource('address') }
}



// Order resource
class Order extends Resource {
    static get TYPE() { return 'orders' }
    constructor(id, fields = {}) {
        super(id, Order.TYPE);
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
		this._place = fields._place;
		this._cancel = fields._cancel;
		this._approve = fields._approve;
		this._update_taxes = fields._update_taxes;
		this._billing_address_clone_id = fields._billing_address_clone_id;
		this._shipping_address_clone_id = fields._shipping_address_clone_id;
		this._customer_payment_source_id = fields._customer_payment_source_id;
		this._shipping_address_same_as_billing = fields._shipping_address_same_as_billing;
		this._billing_address_same_as_shipping = fields._billing_address_same_as_shipping;
		this._save_payment_source_to_customer_wallet = fields._save_payment_source_to_customer_wallet;
		this._save_shipping_address_to_customer_address_book = fields._save_shipping_address_to_customer_address_book;
		this._save_billing_address_to_customer_address_book = fields._save_billing_address_to_customer_address_book;
		this._refresh = fields._refresh;
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
}



// Parcel resource
class Parcel extends Resource {
    static get TYPE() { return 'parcels' }
    constructor(id, fields = {}) {
        super(id, Parcel.TYPE);
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
}



// Payment Method resource
class PaymentMethod extends Resource {
    static get TYPE() { return 'payment_methods' }
    constructor(id, fields = {}) {
        super(id, PaymentMethod.TYPE);
		this.payment_source_type = fields.payment_source_type;
		this.price_amount_cents = fields.price_amount_cents;
    }
	// Relationships
	set market(value) { super.setResource('market', value) }
	get market() { return super.getResource('market') }
	set payment_gateway(value) { super.setResource('payment_gateway', value) }
	get payment_gateway() { return super.getResource('payment_gateway') }
}



// Paypal Payment resource
class PaypalPayment extends Resource {
    static get TYPE() { return 'paypal_payments' }
    constructor(id, fields = {}) {
        super(id, PaypalPayment.TYPE);
		this.return_url = fields.return_url;
		this.cancel_url = fields.cancel_url;
		this.note_to_payer = fields.note_to_payer;
		this.paypal_payer_id = fields.paypal_payer_id;
    }
	// Relationships
	set order(value) { super.setResource('order', value) }
	get order() { return super.getResource('order') }
}



// Price List resource
class PriceList extends Resource {
    static get TYPE() { return 'price_lists' }
    constructor(id, fields = {}) {
        super(id, PriceList.TYPE);
		this.name = fields.name;
		this.currency_code = fields.currency_code;
		this.tax_included = fields.tax_included;
    }
	// Relationships
}



// Price resource
class Price extends Resource {
    static get TYPE() { return 'prices' }
    constructor(id, fields = {}) {
        super(id, Price.TYPE);
		this.sku_code = fields.sku_code;
		this.amount_cents = fields.amount_cents;
		this.compare_at_amount_cents = fields.compare_at_amount_cents;
    }
	// Relationships
	set price_list(value) { super.setResource('price_list', value) }
	get price_list() { return super.getResource('price_list') }
	set sku(value) { super.setResource('sku', value) }
	get sku() { return super.getResource('sku') }
}



// Shipment resource
class Shipment extends Resource {
    static get TYPE() { return 'shipments' }
    constructor(id, fields = {}) {
        super(id, Shipment.TYPE);
		this._on_hold = fields._on_hold;
		this._picking = fields._picking;
		this._packing = fields._packing;
		this._ready_to_ship = fields._ready_to_ship;
		this._ship = fields._ship;
		this._get_rates = fields._get_rates;
		this.selected_rate_id = fields.selected_rate_id;
		this._purchase = fields._purchase;
    }
	// Relationships
	set shipping_method(value) { super.setResource('shipping_method', value) }
	get shipping_method() { return super.getResource('shipping_method') }
}



// Shipping Category resource
class ShippingCategory extends Resource {
    static get TYPE() { return 'shipping_categories' }
    constructor(id, fields = {}) {
        super(id, ShippingCategory.TYPE);
		this.name = fields.name;
    }
	// Relationships
}



// Shipping Method resource
class ShippingMethod extends Resource {
    static get TYPE() { return 'shipping_methods' }
    constructor(id, fields = {}) {
        super(id, ShippingMethod.TYPE);
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
}



// Shipping Zone resource
class ShippingZone extends Resource {
    static get TYPE() { return 'shipping_zones' }
    constructor(id, fields = {}) {
        super(id, ShippingZone.TYPE);
		this.name = fields.name;
		this.country_code_regex = fields.country_code_regex;
		this.not_country_code_regex = fields.not_country_code_regex;
		this.state_code_regex = fields.state_code_regex;
		this.not_state_code_regex = fields.not_state_code_regex;
		this.zip_code_regex = fields.zip_code_regex;
		this.not_zip_code_regex = fields.not_zip_code_regex;
    }
	// Relationships
}



// Sku Option resource
class SkuOption extends Resource {
    static get TYPE() { return 'sku_options' }
    constructor(id, fields = {}) {
        super(id, SkuOption.TYPE);
		this.name = fields.name;
		this.price_amount_cents = fields.price_amount_cents;
		this.delay_hours = fields.delay_hours;
		this.sku_code_regex = fields.sku_code_regex;
    }
	// Relationships
	set market(value) { super.setResource('market', value) }
	get market() { return super.getResource('market') }
}



// Sku resource
class Sku extends Resource {
    static get TYPE() { return 'skus' }
    constructor(id, fields = {}) {
        super(id, Sku.TYPE);
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
}



// Stock Item resource
class StockItem extends Resource {
    static get TYPE() { return 'stock_items' }
    constructor(id, fields = {}) {
        super(id, StockItem.TYPE);
		this.sku_code = fields.sku_code;
		this.quantity = fields.quantity;
    }
	// Relationships
	set stock_location(value) { super.setResource('stock_location', value) }
	get stock_location() { return super.getResource('stock_location') }
	set sku(value) { super.setResource('sku', value) }
	get sku() { return super.getResource('sku') }
}



// Stock Level resource
class StockLevel extends Resource {
    static get TYPE() { return 'stock_levels' }
    constructor(id, fields = {}) {
        super(id, StockLevel.TYPE);
		this.priority = fields.priority;
		this.on_hold = fields.on_hold;
    }
	// Relationships
	set stock_location(value) { super.setResource('stock_location', value) }
	get stock_location() { return super.getResource('stock_location') }
	set inventory_model(value) { super.setResource('inventory_model', value) }
	get inventory_model() { return super.getResource('inventory_model') }
}



// Stock Location resource
class StockLocation extends Resource {
    static get TYPE() { return 'stock_locations' }
    constructor(id, fields = {}) {
        super(id, StockLocation.TYPE);
		this.name = fields.name;
		this.label_format = fields.label_format;
    }
	// Relationships
	set address(value) { super.setResource('address', value) }
	get address() { return super.getResource('address') }
}



// Webhook resource
class Webhook extends Resource {
    static get TYPE() { return 'webhooks' }
    constructor(id, fields = {}) {
        super(id, Webhook.TYPE);
		this.topic = fields.topic;
		this.callback_url = fields.callback_url;
		this.include_resources = fields.include_resources;
    }
	// Relationships
}



// Wire Transfer resource
class WireTransfer extends Resource {
    static get TYPE() { return 'wire_transfers' }
    constructor(id, fields = {}) {
        super(id, WireTransfer.TYPE);
    }
	// Relationships
	set order(value) { super.setResource('order', value) }
	get order() { return super.getResource('order') }
}



module.exports = {
	Address,
	CreditCard,
	CustomerAddress,
	CustomerPasswordReset,
	CustomerPaymentSource,
	CustomerSubscription,
	Customer,
	DeliveryLeadTime,
	InventoryModel,
	LineItemOption,
	LineItem,
	Market,
	Merchant,
	Order,
	Parcel,
	PaymentMethod,
	PaypalPayment,
	PriceList,
	Price,
	Shipment,
	ShippingCategory,
	ShippingMethod,
	ShippingZone,
	SkuOption,
	Sku,
	StockItem,
	StockLevel,
	StockLocation,
	Webhook,
	WireTransfer,
}
