# Smart Event Open API

SmartEventOpenApi - JavaScript client
Smart Event Open API documentation

- API version: 2.0.13
- Package version: 2.0.13

## Installation

#### git
#
Install it via:

```shell
    git clone https://github.com/SmartBytePl/smartevent-open-api-js.git
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SmartEventOpenApi = require('smart_event_open_api');

var api = new SmartEventOpenApi.CategoriesApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.categoriesGet(callback);
```

## Documentation for API Endpoints

All URIs are relative to *http://test-se2.smartevent.pl/open-api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SmartEventOpenApi.CategoriesApi* | [**categoriesGet**](docs/CategoriesApi.md#categoriesGet) | **GET** /categories | Get list of all categories
*SmartEventOpenApi.CategoriesApi* | [**categoriesGetByCode**](docs/CategoriesApi.md#categoriesGetByCode) | **GET** /categories/{code} | Get category details
*SmartEventOpenApi.EventsApi* | [**eventsGet**](docs/EventsApi.md#eventsGet) | **GET** /events | Get Events from the system
*SmartEventOpenApi.EventsApi* | [**eventsGetByCategoryCode**](docs/EventsApi.md#eventsGetByCategoryCode) | **GET** /category-events/by-code/{code} | Get events data for specied category code
*SmartEventOpenApi.EventsApi* | [**eventsGetByEventCode**](docs/EventsApi.md#eventsGetByEventCode) | **GET** /events/by-code/{code} | Get specific event data from the system by event code
*SmartEventOpenApi.EventsApi* | [**eventsGetByEventId**](docs/EventsApi.md#eventsGetByEventId) | **GET** /events/by-id/{id} | Get specific event data from the system by event id
*SmartEventOpenApi.InvoicesApi* | [**invoicesDownload**](docs/InvoicesApi.md#invoicesDownload) | **GET** /invoices/download/{type}/order/{tokenValue} | Download invoice by type for order
*SmartEventOpenApi.OrdersApi* | [**orderCreate**](docs/OrdersApi.md#orderCreate) | **GET** /order/create | Create order in system
*SmartEventOpenApi.OrdersApi* | [**orderGetByToken**](docs/OrdersApi.md#orderGetByToken) | **GET** /order/{tokenValue} | Get details about created order
*SmartEventOpenApi.OrdersApi* | [**orderGetCalculation**](docs/OrdersApi.md#orderGetCalculation) | **GET** /order/calculate | Calculate order
*SmartEventOpenApi.PromotionsApi* | [**couponValid**](docs/PromotionsApi.md#couponValid) | **GET** /promotions/coupon/{coupon} | Verify coupon validiation

## Documentation for Models

 - [SmartEventOpenApi.BillingData](docs/BillingData.md)
 - [SmartEventOpenApi.CalculateResponse](docs/CalculateResponse.md)
 - [SmartEventOpenApi.Category](docs/Category.md)
 - [SmartEventOpenApi.CategoryChild](docs/CategoryChild.md)
 - [SmartEventOpenApi.Channel](docs/Channel.md)
 - [SmartEventOpenApi.ChannelPricing](docs/ChannelPricing.md)
 - [SmartEventOpenApi.ChannelPricings](docs/ChannelPricings.md)
 - [SmartEventOpenApi.Currency](docs/Currency.md)
 - [SmartEventOpenApi.Event](docs/Event.md)
 - [SmartEventOpenApi.GeneralError](docs/GeneralError.md)
 - [SmartEventOpenApi.Image](docs/Image.md)
 - [SmartEventOpenApi.Locale](docs/Locale.md)
 - [SmartEventOpenApi.NotDescribed](docs/NotDescribed.md)
 - [SmartEventOpenApi.Order](docs/Order.md)
 - [SmartEventOpenApi.OrderItem](docs/OrderItem.md)
 - [SmartEventOpenApi.Participant](docs/Participant.md)
 - [SmartEventOpenApi.TaxCategory](docs/TaxCategory.md)
 - [SmartEventOpenApi.Ticket](docs/Ticket.md)
 - [SmartEventOpenApi.TranslationCategory](docs/TranslationCategory.md)
 - [SmartEventOpenApi.TranslationCategoryParent](docs/TranslationCategoryParent.md)
 - [SmartEventOpenApi.TranslationEvent](docs/TranslationEvent.md)
 - [SmartEventOpenApi.TranslationTicket](docs/TranslationTicket.md)

## Documentation for Authorization

 All endpoints do not require authorization.
