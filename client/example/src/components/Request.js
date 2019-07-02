import { notify } from 'react-notify-toast';
import jQuery from 'jquery';

var appServerAddress = "http://localhost:8080/";
function sendRequest(uri, method, parameters, callback) {
    return jQuery.ajax({
        url: appServerAddress + uri,
        type: method,
        data: parameters,
        success: function (result) {
            //no error
            if (result[0] === 0) {
                // handle the response with callback function
                callback(result[1]);
            }
            else {
                //alert the error
                notify.show(result[1],'error', 2000);
            }
        }
    });
} 
export default sendRequest;