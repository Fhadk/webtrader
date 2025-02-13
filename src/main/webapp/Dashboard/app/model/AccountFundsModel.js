/*
 * File: app/model/AccountFundsModel.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Dashboard.model.AccountFundsModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field',
        'Ext.ux.data.proxy.WebSocket'
    ],
    
    idProperty: 'item',

    fields: [
        {
            name: 'item'
        },
        {
            name: 'value'
        }
    ],
    proxy: {
        type: 'websocket',
        storeId: 'AccountFundsStore',
        url: 'ws://localhost:8084/webtrader/getaccountfunds',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});