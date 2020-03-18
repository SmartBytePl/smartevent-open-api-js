/**
 * Smart Event Open API
 * Smart Event Open API documentation
 *
 * OpenAPI spec version: 2.0.7
 * Contact: info@smartevent.pl
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from './ApiClient';
import BillingData from './model/BillingData';
import CalculateResponse from './model/CalculateResponse';
import Category from './model/Category';
import Channel from './model/Channel';
import ChannelPricing from './model/ChannelPricing';
import Currency from './model/Currency';
import Event from './model/Event';
import GeneralError from './model/GeneralError';
import Image from './model/Image';
import Locale from './model/Locale';
import NotDescribed from './model/NotDescribed';
import Order from './model/Order';
import OrderItem from './model/OrderItem';
import Participant from './model/Participant';
import TaxCategory from './model/TaxCategory';
import Ticket from './model/Ticket';
import TranslationCategory from './model/TranslationCategory';
import TranslationCategoryParent from './model/TranslationCategoryParent';
import TranslationEvent from './model/TranslationEvent';
import TranslationTicket from './model/TranslationTicket';
import CategoriesApi from './api/CategoriesApi';
import EventsApi from './api/EventsApi';
import OrdersApi from './api/OrdersApi';

/**
* Smart_Event_Open_API_documentation.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SmartEventOpenApi = require('index'); // See note below*.
* var xxxSvc = new SmartEventOpenApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SmartEventOpenApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SmartEventOpenApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SmartEventOpenApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 2.0.7
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The BillingData model constructor.
     * @property {module:model/BillingData}
     */
    BillingData,

    /**
     * The CalculateResponse model constructor.
     * @property {module:model/CalculateResponse}
     */
    CalculateResponse,

    /**
     * The Category model constructor.
     * @property {module:model/Category}
     */
    Category,

    /**
     * The Channel model constructor.
     * @property {module:model/Channel}
     */
    Channel,

    /**
     * The ChannelPricing model constructor.
     * @property {module:model/ChannelPricing}
     */
    ChannelPricing,

    /**
     * The Currency model constructor.
     * @property {module:model/Currency}
     */
    Currency,

    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event,

    /**
     * The GeneralError model constructor.
     * @property {module:model/GeneralError}
     */
    GeneralError,

    /**
     * The Image model constructor.
     * @property {module:model/Image}
     */
    Image,

    /**
     * The Locale model constructor.
     * @property {module:model/Locale}
     */
    Locale,

    /**
     * The NotDescribed model constructor.
     * @property {module:model/NotDescribed}
     */
    NotDescribed,

    /**
     * The Order model constructor.
     * @property {module:model/Order}
     */
    Order,

    /**
     * The OrderItem model constructor.
     * @property {module:model/OrderItem}
     */
    OrderItem,

    /**
     * The Participant model constructor.
     * @property {module:model/Participant}
     */
    Participant,

    /**
     * The TaxCategory model constructor.
     * @property {module:model/TaxCategory}
     */
    TaxCategory,

    /**
     * The Ticket model constructor.
     * @property {module:model/Ticket}
     */
    Ticket,

    /**
     * The TranslationCategory model constructor.
     * @property {module:model/TranslationCategory}
     */
    TranslationCategory,

    /**
     * The TranslationCategoryParent model constructor.
     * @property {module:model/TranslationCategoryParent}
     */
    TranslationCategoryParent,

    /**
     * The TranslationEvent model constructor.
     * @property {module:model/TranslationEvent}
     */
    TranslationEvent,

    /**
     * The TranslationTicket model constructor.
     * @property {module:model/TranslationTicket}
     */
    TranslationTicket,

    /**
    * The CategoriesApi service constructor.
    * @property {module:api/CategoriesApi}
    */
    CategoriesApi,

    /**
    * The EventsApi service constructor.
    * @property {module:api/EventsApi}
    */
    EventsApi,

    /**
    * The OrdersApi service constructor.
    * @property {module:api/OrdersApi}
    */
    OrdersApi
};
