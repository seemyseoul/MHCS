package mhcs.storage;

import com.google.gwt.http.client.Request;
import com.google.gwt.http.client.RequestBuilder;
import com.google.gwt.http.client.RequestCallback;
import com.google.gwt.http.client.RequestException;
import com.google.gwt.http.client.Response;
import com.google.gwt.http.client.URL;
import com.google.gwt.json.client.JSONArray;
import com.google.gwt.json.client.JSONNumber;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONParser;
import com.google.gwt.json.client.JSONString;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootLayoutPanel;
import com.google.gwt.user.client.ui.VerticalPanel;

public class TestCases {

	public TestCases(){
	
		String proxy ="http://www.d.umn.edu/~abrooks/Proxy.php?url=";
		String url = proxy+"http://www.d.umn.edu/~abrooks/SomeTests.php?q=1";
		url = URL.encode(url);
	
		RequestBuilder builder = new RequestBuilder(RequestBuilder.GET, url);
		try {
			Request request = builder.sendRequest(null, new RequestCallback() {
				public void onError(Request request, Throwable exception) {
					Window.alert("onError: Couldn't retrieve JSON");
				}
				public void onResponseReceived(Request request, Response response) {
					if (200 == response.getStatusCode()) {
						String rt = response.getText();
						update(rt); //METHOD CALL TO DO SOMETHING WITH RESPONSE TEXT
					} 
					else {
						Window.alert("Couldn't retrieve JSON (" + response.getStatusText()+ ")");
					}
				}
			});
		} 
		catch (RequestException e) {
			Window.alert("RequestException: Couldn't retrieve JSON");
		}
		
	} // Close Constructor
		
		
	public void update(String rt){
			Window.alert(rt);
		}
	
	
	
	
	
	
	
	
	
	
	} 
	
	
	
	
