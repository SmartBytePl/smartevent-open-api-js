/**
 * Smart Event Open API
 * Smart Event Open API documentation
 *
 * OpenAPI spec version: 2.0.15
 * Contact: info@smartevent.pl
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Event from './Event';
import Participant from './Participant';
import Ticket from './Ticket';

/**
* The OrderItem model module.
* @module model/OrderItem
* @version 2.0.15
*/
export default class OrderItem {
    /**
    * Constructs a new <code>OrderItem</code>.
    * @alias module:model/OrderItem
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>OrderItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OrderItem} obj Optional instance to populate.
    * @return {module:model/OrderItem} The populated <code>OrderItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderItem();
                        
            
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('unit_price')) {
                obj['unit_price'] = ApiClient.convertToType(data['unit_price'], 'Number');
            }
            if (data.hasOwnProperty('tax_total')) {
                obj['tax_total'] = ApiClient.convertToType(data['tax_total'], 'Number');
            }
            if (data.hasOwnProperty('subtotal')) {
                obj['subtotal'] = ApiClient.convertToType(data['subtotal'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('discounted_unit_price')) {
                obj['discounted_unit_price'] = ApiClient.convertToType(data['discounted_unit_price'], 'Number');
            }
            if (data.hasOwnProperty('adjustments')) {
                obj['adjustments'] = ApiClient.convertToType(data['adjustments'], [Object]);
            }
            if (data.hasOwnProperty('adjustments_total')) {
                obj['adjustments_total'] = ApiClient.convertToType(data['adjustments_total'], 'Number');
            }
            if (data.hasOwnProperty('adjustments_total_recursively')) {
                obj['adjustments_total_recursively'] = ApiClient.convertToType(data['adjustments_total_recursively'], 'Number');
            }
            if (data.hasOwnProperty('participant')) {
                obj['participant'] = ApiClient.convertToType(data['participant'], [Participant]);
            }
            if (data.hasOwnProperty('ticket')) {
                obj['ticket'] = ApiClient.convertToType(data['ticket'], [Ticket]);
            }
            if (data.hasOwnProperty('event')) {
                obj['event'] = ApiClient.convertToType(data['event'], [Event]);
            }
        }
        return obj;
    }

    /**
    * @member {Number} quantity
    */
    quantity = undefined;
    /**
    * @member {Number} unit_price
    */
    unit_price = undefined;
    /**
    * @member {Number} tax_total
    */
    tax_total = undefined;
    /**
    * @member {Number} subtotal
    */
    subtotal = undefined;
    /**
    * @member {Number} total
    */
    total = undefined;
    /**
    * @member {Number} discounted_unit_price
    */
    discounted_unit_price = undefined;
    /**
    * @member {Array.<Object>} adjustments
    */
    adjustments = undefined;
    /**
    * @member {Number} adjustments_total
    */
    adjustments_total = undefined;
    /**
    * @member {Number} adjustments_total_recursively
    */
    adjustments_total_recursively = undefined;
    /**
    * @member {Array.<module:model/Participant>} participant
    */
    participant = undefined;
    /**
    * @member {Array.<module:model/Ticket>} ticket
    */
    ticket = undefined;
    /**
    * @member {Array.<module:model/Event>} event
    */
    event = undefined;




}
