const model = require('../../lib/model');
const utils = require('./utils')


// TEMPLATE Test Data
const TEMPLATE = {
    create: {
        
    },
    retrieve: {
        id: ""
    },
    update: {
        id: ""
    }
}


// Addresses Test Data
const Addresses = {
    create: {
        first_name: "John",
        last_name: "Smith",
        line_1: "2883 Geraldine Lane",
        city: "New York",
        zip_code: "10013",
        state_code: "NY",
        country_code: "US",
        phone: "(212) 646-338-1228"
    },
    retrieve: {
        id: "13324"
    },
    update: {
        id: "13324",
        notes: utils.randomText()
    }
}


// CreditCards Test Data
const CreditCards = {
    create: {
        first_name: "John",
        last_name: "Smith",
        number: "4111111111111111",
        month: "10",
        year: "2023",
        verification_value: "123",
        order: new model.Order(9839)
    },
    retrieve: {
        id: "2570"
    },
    update: {
        id: "2570",
        reference: utils.randomString()
    }
}


// CustomerAddresses Test Data
const CustomerAddresses = {
    create: {
        customer: new model.Customer(7379),
        address: new model.Address(13324)
    },
    retrieve: {
        id: "883"
    },
    update: {
        id: "883",
        customer: new model.Customer(7378)
    }
}


// CustomerGroups Test Data
const CustomerGroups = {
    create: {
        name: "CustomerGroup " + utils.randomWords()
    },
    retrieve: {
        id: "10"
    },
    update: {
        id: "10",
        reference: utils.randomString()
    }
}


// CustomerPasswordResets Test Data
const CustomerPasswordResets = {
    create: {
        customer_email: "john.smith@example.com"
    },
    retrieve: {
        id: "1450"
    },
    update: {
        id: "1450",
        reference: utils.randomString()
    }
}


// CustomerPaymentSources Test Data
const CustomerPaymentSources = {
    create: {
        customer: new model.Customer(7378),
        payment_source: new model.CreditCard(2570)
    },
    retrieve: {
        id: "171"
    },
    update: {
        id: "171",
        reference: utils.randomString(),
        customer: new model.Customer(7379)
    }
}


// CustomerSubscriptions Test Data
const CustomerSubscriptions = {
    create: {
        customer_email: "john.smith@example.com",
        reference: "Test Reference " + utils.randomWords()
    },
    retrieve: {
        id: "3207"
    },
    update: {
        id: "3207",
        reference: utils.randomString()
    }
}


// Customers Test Data
const Customers = {
    create: {
        email: utils.randomString() + "@example.com"
    },
    retrieve: {
        id: "7378"
    },
    update: {
        id: "7378",
        email: utils.randomString() + "@example.com"
    }
}


// DeliveryLeadTimes Test Data
const DeliveryLeadTimes = {
    create: {
        min_hours: "48",
        max_hours: "72",
        stock_location: new model.StockLocation(581),
        shipping_method: new model.ShippingMethod(638)
    },
    retrieve: {
        id: "1151"
    },
    update: {
        id: "1151",
        min_hours: "32"
    }
}


// InventoryModels Test Data
const InventoryModels = {
    create: {
        name: "Inventory " + utils.randomWords()
    },
    retrieve: {
        id: "381"
    },
    update: {
        id: "381",
        name: "Inventory " + utils.randomWords()
    }
}


// Markets Test Data
const Markets = {
    create: {
        name: "Market " + utils.randomWords(),
        merchant: new model.Merchant(233),
        price_list: new model.PriceList(397),
        inventory_model: new model.InventoryModel(383)
    },
    retrieve: {
        id: "184"
    },
    update: {
        id: "184",
        name: "Market " + utils.randomWords(),
        merchant: new model.Merchant(233),
        price_list: new model.PriceList(397),
        inventory_model: new model.InventoryModel(383)
    }
}


// Merchants Test Data
const Merchants = {
    create: {
        name: "Merchant " + utils.randomWords(),
        address: new model.Address(13324)
    },
    retrieve: {
        id: "233"
    },
    update: {
        id: "233",
        name: "Merchant " + utils.randomWords()
    }
}


// Orders
const Orders = {
    create: {
        market: new model.Market(185)
    },
    retrieve: {
        id: "9839"
    },
    update: {
        id: "9839",
        guest: false,
        customer_email: "pippo@server.com",
        market: new model.Market(185)
    }
};


// PaypalPayments Test Data
const PaypalPayments = {
    create: {
        return_url: "https://yourbrand.com/thankyou",
        cancel_url: "https://yourbrand.com/checkout/payment",
        order: new model.Order(9839)
    },
    retrieve: {
        id: "233"
    },
    update: {
        id: "233",
        name: "Merchant " + utils.randomWords()
    }
}


// PriceLists Test Data
const PriceLists = {
    create: {
        name: "PriceList " + utils.randomWords(),
        currency_code: "EUR"
    },
    retrieve: {
        id: "397"
    },
    update: {
        id: "397",
        name: "PriceList " + utils.randomWords(),
        currency_code: ['EUR', 'USD', 'GBP', 'JPY', 'CNY'][utils.randomNumber(6)]
    }
}


// Shipments Test Data
const Shipments = {
    create: {
        reference: utils.randomString()
    },
    retrieve: {
        id: ""
    },
    update: {
        id: "",
        reference: utils.randomString()
    }
}


// ShippingCategories Test Data
const ShippingCategories = {
    create: {
        name: "ShippingCategory " + utils.randomWords()
    },
    retrieve: {
        id: "236"
    },
    update: {
        id: "236",
        name: "ShippingCategory " + utils.randomWords()
    }
}


// ShippingMethods Test Data
const ShippingMethods = {
    create: {
        name: "ShippingMethod " + utils.randomWords(),
        price_amount_cents: "1000",
        market: new model.Market(184),
        shipping_zone: new model.ShippingZone(432),
        shipping_category: new model.ShippingCategory(236)
    },
    retrieve: {
        id: "637"
    },
    update: {
        id: "637",
        name: "ShippingCategory " + utils.randomWords(),
        price_amount_cents: utils.randomNumber(5000),
        reference: utils.randomString()
    }
}


// ShippingZones Test Data
const ShippingZones = {
    create: {
        name: "ShippingZone " + utils.randomWords()
    },
    retrieve: {
        id: "432"
    },
    update: {
        id: "432",
        name: "ShippingZone " + utils.randomWords()
    }
}


// Skus Test Data
const Skus = {
    create: {
        code: "SKU" + utils.randomString().toUpperCase(),
        name: utils.randomText(),
        shipping_category: new model.ShippingCategory(236)
    },
    retrieve: {
        id: "41303"
    },
    update: {
        id: "41303",
        description: utils.randomText({exactly : 5})
    }
}


// StockLevels Test Data
const StockLevels = {
    create: {
        priority: 1,
        inventory_model: new model.InventoryModel(383),
        stock_location: new model.StockLocation(580)
    },
    retrieve: {
        id: "745"
    },
    update: {
        id: "745",
        priority: (1 + utils.randomNumber(3))
    }
}


// StockLocations Test Data
const StockLocations = {
    create: {
        name: "Test warehouse " + utils.randomWords(),
        address: new model.Address(13324)
    },
    retrieve: {
        id: "580"
    },
    update: {
        id: "580",
        reference: utils.randomString(),
        label_format: ['PDF', 'ZPL', 'EPL2', 'PNG'][utils.randomNumber(4)]
    }
}



module.exports = {
  Addresses,
  CreditCards,
  CustomerAddresses,
  CustomerGroups,
  CustomerPasswordResets,
  CustomerPaymentSources,
  CustomerSubscriptions,
  Customers,
  DeliveryLeadTimes,
  InventoryModels,
  Markets,
  Merchants,
  Orders,
  PaypalPayments,
  PriceLists,
  Shipments,
  ShippingCategories,
  ShippingMethods,
  ShippingZones,
  Skus,
  StockLevels,
  StockLocations
};
