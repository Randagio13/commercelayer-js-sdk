// File automatically generated at 12/02/2019 15:14:56 by commercelayer-js-sdk-codegen


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



// Address resource
class Address extends Resource {
    static get TYPE() { return 'addresses' }
    constructor(id, fields = {}) {
        super(id, Address.TYPE);
		this.address = fields.address;
    }
	// Relationships
	set address(value) { super.setResource('address', value) }
	get address() { return super.getResource('address') }
}



// Credit Card resource
class CreditCard extends Resource {
    static get TYPE() { return 'credit_cards' }
    constructor(id, fields = {}) {
        super(id, CreditCard.TYPE);
		this.credit_card = fields.credit_card;
    }
	// Relationships
	set credit_card(value) { super.setResource('credit_card', value) }
	get credit_card() { return super.getResource('credit_card') }
}



// Customer Address resource
class CustomerAddress extends Resource {
    static get TYPE() { return 'customer_addresses' }
    constructor(id, fields = {}) {
        super(id, CustomerAddress.TYPE);
		this.customer_address = fields.customer_address;
    }
	// Relationships
	set customer_address(value) { super.setResource('customer_address', value) }
	get customer_address() { return super.getResource('customer_address') }
}



// Customer Password Reset resource
class CustomerPasswordReset extends Resource {
    static get TYPE() { return 'customer_password_resets' }
    constructor(id, fields = {}) {
        super(id, CustomerPasswordReset.TYPE);
		this.customer_password_reset = fields.customer_password_reset;
    }
	// Relationships
	set customer_password_reset(value) { super.setResource('customer_password_reset', value) }
	get customer_password_reset() { return super.getResource('customer_password_reset') }
}



// Customer Payment Source resource
class CustomerPaymentSource extends Resource {
    static get TYPE() { return 'customer_payment_sources' }
    constructor(id, fields = {}) {
        super(id, CustomerPaymentSource.TYPE);
		this.customer_payment_source = fields.customer_payment_source;
    }
	// Relationships
	set customer_payment_source(value) { super.setResource('customer_payment_source', value) }
	get customer_payment_source() { return super.getResource('customer_payment_source') }
}



// Customer Subscription resource
class CustomerSubscription extends Resource {
    static get TYPE() { return 'customer_subscriptions' }
    constructor(id, fields = {}) {
        super(id, CustomerSubscription.TYPE);
		this.customer_subscription = fields.customer_subscription;
    }
	// Relationships
	set customer_subscription(value) { super.setResource('customer_subscription', value) }
	get customer_subscription() { return super.getResource('customer_subscription') }
}



// Customer resource
class Customer extends Resource {
    static get TYPE() { return 'customers' }
    constructor(id, fields = {}) {
        super(id, Customer.TYPE);
		this.customer = fields.customer;
    }
	// Relationships
	set customer(value) { super.setResource('customer', value) }
	get customer() { return super.getResource('customer') }
}



// Delivery Lead Time resource
class DeliveryLeadTime extends Resource {
    static get TYPE() { return 'delivery_lead_times' }
    constructor(id, fields = {}) {
        super(id, DeliveryLeadTime.TYPE);
		this.delivery_lead_time = fields.delivery_lead_time;
    }
	// Relationships
	set delivery_lead_time(value) { super.setResource('delivery_lead_time', value) }
	get delivery_lead_time() { return super.getResource('delivery_lead_time') }
}



// Inventory Model resource
class InventoryModel extends Resource {
    static get TYPE() { return 'inventory_models' }
    constructor(id, fields = {}) {
        super(id, InventoryModel.TYPE);
		this.inventory_model = fields.inventory_model;
    }
	// Relationships
	set inventory_model(value) { super.setResource('inventory_model', value) }
	get inventory_model() { return super.getResource('inventory_model') }
}



// Line Item Option resource
class LineItemOption extends Resource {
    static get TYPE() { return 'line_item_options' }
    constructor(id, fields = {}) {
        super(id, LineItemOption.TYPE);
		this.line_item_option = fields.line_item_option;
    }
	// Relationships
	set line_item_option(value) { super.setResource('line_item_option', value) }
	get line_item_option() { return super.getResource('line_item_option') }
}



// Line Item resource
class LineItem extends Resource {
    static get TYPE() { return 'line_items' }
    constructor(id, fields = {}) {
        super(id, LineItem.TYPE);
		this.line_item = fields.line_item;
    }
	// Relationships
	set line_item(value) { super.setResource('line_item', value) }
	get line_item() { return super.getResource('line_item') }
}



// Market resource
class Market extends Resource {
    static get TYPE() { return 'markets' }
    constructor(id, fields = {}) {
        super(id, Market.TYPE);
		this.market = fields.market;
    }
	// Relationships
	set market(value) { super.setResource('market', value) }
	get market() { return super.getResource('market') }
}



// Merchant resource
class Merchant extends Resource {
    static get TYPE() { return 'merchants' }
    constructor(id, fields = {}) {
        super(id, Merchant.TYPE);
		this.merchant = fields.merchant;
    }
	// Relationships
	set merchant(value) { super.setResource('merchant', value) }
	get merchant() { return super.getResource('merchant') }
}



// Order resource
class Order extends Resource {
    static get TYPE() { return 'orders' }
    constructor(id, fields = {}) {
        super(id, Order.TYPE);
		this.order = fields.order;
    }
	// Relationships
	set order(value) { super.setResource('order', value) }
	get order() { return super.getResource('order') }
}



// Parcel resource
class Parcel extends Resource {
    static get TYPE() { return 'parcels' }
    constructor(id, fields = {}) {
        super(id, Parcel.TYPE);
		this.parcel = fields.parcel;
    }
	// Relationships
	set parcel(value) { super.setResource('parcel', value) }
	get parcel() { return super.getResource('parcel') }
}



// Payment Method resource
class PaymentMethod extends Resource {
    static get TYPE() { return 'payment_methods' }
    constructor(id, fields = {}) {
        super(id, PaymentMethod.TYPE);
		this.payment_method = fields.payment_method;
    }
	// Relationships
	set payment_method(value) { super.setResource('payment_method', value) }
	get payment_method() { return super.getResource('payment_method') }
}



// Paypal Payment resource
class PaypalPayment extends Resource {
    static get TYPE() { return 'paypal_payments' }
    constructor(id, fields = {}) {
        super(id, PaypalPayment.TYPE);
		this.paypal_payment = fields.paypal_payment;
    }
	// Relationships
	set paypal_payment(value) { super.setResource('paypal_payment', value) }
	get paypal_payment() { return super.getResource('paypal_payment') }
}



// Price List resource
class PriceList extends Resource {
    static get TYPE() { return 'price_lists' }
    constructor(id, fields = {}) {
        super(id, PriceList.TYPE);
		this.price_list = fields.price_list;
    }
	// Relationships
	set price_list(value) { super.setResource('price_list', value) }
	get price_list() { return super.getResource('price_list') }
}



// Price resource
class Price extends Resource {
    static get TYPE() { return 'prices' }
    constructor(id, fields = {}) {
        super(id, Price.TYPE);
		this.price = fields.price;
    }
	// Relationships
	set price(value) { super.setResource('price', value) }
	get price() { return super.getResource('price') }
}



// Shipment resource
class Shipment extends Resource {
    static get TYPE() { return 'shipments' }
    constructor(id, fields = {}) {
        super(id, Shipment.TYPE);
		this.shipment = fields.shipment;
    }
	// Relationships
	set shipment(value) { super.setResource('shipment', value) }
	get shipment() { return super.getResource('shipment') }
}



// Shipping Category resource
class ShippingCategory extends Resource {
    static get TYPE() { return 'shipping_categories' }
    constructor(id, fields = {}) {
        super(id, ShippingCategory.TYPE);
		this.shipping_category = fields.shipping_category;
    }
	// Relationships
	set shipping_category(value) { super.setResource('shipping_category', value) }
	get shipping_category() { return super.getResource('shipping_category') }
}



// Shipping Method resource
class ShippingMethod extends Resource {
    static get TYPE() { return 'shipping_methods' }
    constructor(id, fields = {}) {
        super(id, ShippingMethod.TYPE);
		this.shipping_method = fields.shipping_method;
    }
	// Relationships
	set shipping_method(value) { super.setResource('shipping_method', value) }
	get shipping_method() { return super.getResource('shipping_method') }
}



// Shipping Zone resource
class ShippingZone extends Resource {
    static get TYPE() { return 'shipping_zones' }
    constructor(id, fields = {}) {
        super(id, ShippingZone.TYPE);
		this.shipping_zone = fields.shipping_zone;
    }
	// Relationships
	set shipping_zone(value) { super.setResource('shipping_zone', value) }
	get shipping_zone() { return super.getResource('shipping_zone') }
}



// Sku Option resource
class SkuOption extends Resource {
    static get TYPE() { return 'sku_options' }
    constructor(id, fields = {}) {
        super(id, SkuOption.TYPE);
		this.sku_option = fields.sku_option;
    }
	// Relationships
	set sku_option(value) { super.setResource('sku_option', value) }
	get sku_option() { return super.getResource('sku_option') }
}



// Sku resource
class Sku extends Resource {
    static get TYPE() { return 'skus' }
    constructor(id, fields = {}) {
        super(id, Sku.TYPE);
		this.sku = fields.sku;
    }
	// Relationships
	set sku(value) { super.setResource('sku', value) }
	get sku() { return super.getResource('sku') }
}



// Stock Item resource
class StockItem extends Resource {
    static get TYPE() { return 'stock_items' }
    constructor(id, fields = {}) {
        super(id, StockItem.TYPE);
		this.stock_item = fields.stock_item;
    }
	// Relationships
	set stock_item(value) { super.setResource('stock_item', value) }
	get stock_item() { return super.getResource('stock_item') }
}



// Stock Level resource
class StockLevel extends Resource {
    static get TYPE() { return 'stock_levels' }
    constructor(id, fields = {}) {
        super(id, StockLevel.TYPE);
		this.stock_level = fields.stock_level;
    }
	// Relationships
	set stock_level(value) { super.setResource('stock_level', value) }
	get stock_level() { return super.getResource('stock_level') }
}



// Stock Location resource
class StockLocation extends Resource {
    static get TYPE() { return 'stock_locations' }
    constructor(id, fields = {}) {
        super(id, StockLocation.TYPE);
		this.stock_location = fields.stock_location;
    }
	// Relationships
	set stock_location(value) { super.setResource('stock_location', value) }
	get stock_location() { return super.getResource('stock_location') }
}



// Webhook resource
class Webhook extends Resource {
    static get TYPE() { return 'webhooks' }
    constructor(id, fields = {}) {
        super(id, Webhook.TYPE);
		this.webhook = fields.webhook;
    }
	// Relationships
	set webhook(value) { super.setResource('webhook', value) }
	get webhook() { return super.getResource('webhook') }
}



// Wire Transfer resource
class WireTransfer extends Resource {
    static get TYPE() { return 'wire_transfers' }
    constructor(id, fields = {}) {
        super(id, WireTransfer.TYPE);
		this.wire_transfer = fields.wire_transfer;
    }
	// Relationships
	set wire_transfer(value) { super.setResource('wire_transfer', value) }
	get wire_transfer() { return super.getResource('wire_transfer') }
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
