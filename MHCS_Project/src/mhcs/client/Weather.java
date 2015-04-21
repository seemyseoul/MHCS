package mhcs.client;

import com.google.gwt.http.client.Request;
import com.google.gwt.http.client.RequestBuilder;
import com.google.gwt.http.client.RequestCallback;
import com.google.gwt.http.client.RequestException;
import com.google.gwt.http.client.Response;
import com.google.gwt.http.client.URL;
import com.google.gwt.user.client.Window;

public class Weather {

  int httpOK = 200; // response code for HTTP OK
  
  /**
   * Updates weather information
   * @param rt A response text string containing the JSON data.
   */
  public void update(String rt) {

  }
  
  /**
   * Send request to data server and catch errors.
   * @param url The server URL to be used.
   */
  public void RequestData(String url) {
    RequestBuilder builder = new RequestBuilder(RequestBuilder.GET, url);
    
    try {
      Request request = builder.sendRequest(null, new RequestCallback() {
        
        public void onError(Request request, Throwable exception) {
          Window.alert("onError: Couldn't retrieve JSON");
        }
        
        public void onResponseReceived(Request request, Response response) {
          if (response.getStatusCode() == httpOK) {
            String rt = response.getText();
            update(rt);
          } else {
            Window.alert("Couldn't retrieve JSON (" + response.getStatusCode()
                      + ")");
          }
        }
      });
    } catch (RequestException e) {
        Window.alert("RequestException: Couldn't retrieve JSON");
    }
  }
}
