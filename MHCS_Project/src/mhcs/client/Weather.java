package mhcs.client;

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

  final int intHttpOk = 200;           // response code for HTTP OK
  private String strTemp = "";
  private String strVisibility = "";
  private String strSunset = "";
  private String strSunsetHr = "";
  private String strSunsetMin = "";
  private String strUrlCond = "";      // URL for weather conditions JSON
  private String strUrlAstro = "";     // URL for sunrise JSON
  
  public Weather() {
    final String proxy ="http://www.d.umn.edu/~mckeo044/Proxy.php?url=";
    strUrlCond = proxy+"http://api.wunderground.com/api/1e7eb561fe2a38df/conditions/q/CA/San_Francisco.json";
    strUrlCond = URL.encode(strUrlCond);
    strUrlAstro = proxy+"http://api.wunderground.com/api/1e7eb561fe2a38df/astronomy/q/CA/San_Francisco.json";
    strUrlAstro = URL.encode(strUrlAstro);
  } // ctor
  
  public String getUrl(final int option) {
    if(option == 0) {
    	return strUrlCond;
    } else {
    	return strUrlAstro;
    } // else
  } // getUrl
  
  /**
   * Updates weather information
   * @param rt A response text string containing the JSON data.
   */
  public void updateConditions(final String rt) {
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
    strVisibility = strVisibility.substring(1,strVisibility.length()-1);
    
    Variables.w.add(new Label("Current temp:\t" + strTemp + " Celsius"));
    Variables.w.add(new Label("Current visibility:\t" + strVisibility + " km"));
  } // updateConditions
  
  public void updateSunset(final String rt) {
    String sAll = rt;
    JSONObject jA =
    		(JSONObject)JSONParser.parseLenient(sAll);
    JSONValue jTry = jA.get("sun_phase");
    
    JSONObject jB =
    		(JSONObject)JSONParser.parseLenient(jTry.toString());
    JSONValue jTry2 = jB.get("sunset");
    
    JSONObject jC =
    		(JSONObject)JSONParser.parseLenient(jTry2.toString());
    JSONValue sunsetHr = jC.get("hour");
    JSONValue sunsetMin = jC.get("minute");
    
    strSunsetHr = sunsetHr.toString();
    strSunsetHr = strSunsetHr.substring(1, strSunsetHr.length()-1);
    strSunsetMin = sunsetMin.toString();
    strSunsetMin = strSunsetMin.substring(1, strSunsetMin.length()-1);
    
    strSunset = strSunsetHr + ":" + strSunsetMin;
    
    Variables.w.add(new Label("Sunset:\t" + strSunset));
  } // updateSunset
  
  /**
   * Send request to data server and catch errors.
   * @param url The server URL to be used.
   */
  public void requestData(final String url, final int option) {
    RequestBuilder builder = new RequestBuilder(RequestBuilder.GET, url);
    
    try {
      Request request = builder.sendRequest(null, new RequestCallback() {
        
        public void onError(Request request, Throwable exception) {
          Window.alert("onError: Couldn't retrieve JSON");
        } // onError
        
        public void onResponseReceived(Request request, Response response) {
          if (intHttpOk == response.getStatusCode()) {
            String rt = response.getText();
            if(option == 0) {
              updateConditions(rt);
            } // if
            else if(option == 1) {
              updateSunset(rt);
            } // else if
            
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
} // Weather