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
                alert(result[1]);
            }
        }
    });
} 
export default sendRequest;