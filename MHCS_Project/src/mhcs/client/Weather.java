package mhcs.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.http.client.Request;
import com.google.gwt.http.client.RequestBuilder;
import com.google.gwt.http.client.RequestCallback;
import com.google.gwt.http.client.RequestException;
import com.google.gwt.http.client.Response;
import com.google.gwt.http.client.URL;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONParser;
import com.google.gwt.json.client.JSONValue;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Label;

public class Weather {

  final int intHttpOk = 200; // response code for HTTP OK
  private String strTemp = "";
  private String strVisibility = "";
  private String strURL = "";
  
  public Weather() {
    final String proxy ="http://www.d.umn.edu/~mckeo044/Proxy.php?url=";
    strURL = proxy+"http://api.wunderground.com/api/1e7eb561fe2a38df/conditions/q/CA/San_Francisco.json";
    strURL = URL.encode(strURL);
  }
  
  /**
   * Getter for URL;
   * @return the URL
   */
  public String getURL() {
    return strURL;
  }
  
  public String getTemp() {
    return strTemp;
  }
  
  public String getVis() {
    return strVisibility;
  }
  
  /**
   * Updates weather information
   * @param rt A response text string containing the JSON data.
   */
  public void update(String rt) {
	//Window.alert(rt);
    String sAll = rt;
    JSONObject jA =
            (JSONObject)JSONParser.parseLenient(sAll);
    JSONValue jTry = jA.get("current_observation");
    
    JSONObject jB =
            (JSONObject)JSONParser.parseLenient(jTry.toString());
    JSONValue temp = jB.get("temp_c");
    JSONValue visibility = jB.get("visibility_km");
    
    strTemp = temp.toString();
    strVisibility = visibility.toString();
    
    Variables.w.add(new Label("Current temp: \t" + strTemp + " Celsius"));
    Variables.w.add(new Label("Current visibility: \t" + strVisibility + " km"));
  } // update
  
  /**
   * Send request to data server and catch errors.
   * @param url The server URL to be used.
   */
  public void requestData(String url) {
    RequestBuilder builder = new RequestBuilder(RequestBuilder.GET, url);
    
    try {
      Request request = builder.sendRequest(null, new RequestCallback() {
        
        public void onError(Request request, Throwable exception) {
          Window.alert("onError: Couldn't retrieve JSON");
        } // onError
        
        public void onResponseReceived(Request request, Response response) {
          if (intHttpOk == response.getStatusCode()) {
            String rt = response.getText();
            update(rt);
          } else {
            Window.alert("Couldn't retrieve JSON (" + response.getStatusCode()
                      + ")");
          } // if
        } //onResponseReceived
      }); //request
    } catch (RequestException e) {
        Window.alert("RequestException: Couldn't retrieve JSON");
    } // catch
  } // try
}