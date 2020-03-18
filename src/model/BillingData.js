/**
 * Smart Event Open API
 * Smart Event Open API documentation
 *
 * OpenAPI spec version: 2.0.9
 * Contact: info@smartevent.pl
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The BillingData model module.
* @module model/BillingData
* @version 2.0.9
*/
export default class BillingData {
    /**
    * Constructs a new <code>BillingData</code>.
    * @alias module:model/BillingData
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>BillingData</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BillingData} obj Optional instance to populate.
    * @return {module:model/BillingData} The populated <code>BillingData</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingData();
                        
            
            if (data.hasOwnProperty('company')) {
                obj['company'] = ApiClient.convertToType(data['company'], 'String');
            }
            if (data.hasOwnProperty('street')) {
                obj['street'] = ApiClient.convertToType(data['street'], 'String');
            }
            if (data.hasOwnProperty('postcode')) {
                obj['postcode'] = ApiClient.convertToType(data['postcode'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('country_code')) {
                obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
            }
            if (data.hasOwnProperty('tax_id')) {
                obj['tax_id'] = ApiClient.convertToType(data['tax_id'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} company
    */
    company = undefined;
    /**
    * @member {String} street
    */
    street = undefined;
    /**
    * @member {String} postcode
    */
    postcode = undefined;
    /**
    * @member {String} city
    */
    city = undefined;
    /**
    * @member {String} country_code
    */
    country_code = undefined;
    /**
    * @member {String} tax_id
    */
    tax_id = undefined;




}
