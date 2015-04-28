/**
 * @author Brent
 *
 */
package mhcs.storage;

import mhcs.client.Module;
import mhcs.client.ModuleStatus;
import mhcs.client.ModuleType;
import mhcs.client.Point;

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



public class TestCases {
		
	public static void TestCaseChoice(int choice){		
		String proxy ="http://www.d.umn.edu/~mckeo044/Proxy.php?url=";
		String url = proxy+"http://www.d.umn.edu/~abrooks/SomeTests.php?q=" + Integer.toString(choice);		
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
					} //if
					else {
						Window.alert("Couldn't retrieve JSON (" + response.getStatusCode()+ ")");
					} //else
				} //onResponseReceived
			}); //send request
		} // RequestBuilder
		catch (RequestException e) {
			Window.alert("RequestException: Couldn't retrieve JSON");
		} //Catch
		
	} // TestCaseChoice
		
	public static void update(final String rt) {		 
		//update
		Window.alert(rt);
		Model.removeAll();
		JSONArray jArray = (JSONArray)JSONParser.parseLenient(rt); 
		JSONNumber jNumber; 
		JSONString jString; 
		double code;
		int id;
		int xC;
		int yC;
		int numTurns;
		double turns; 
		double x; 
		double y;
		String status;
		ModuleType type;
		Point coordinate;
		ModuleStatus modStatus;
		
		//Changes the JSON into datatypes
		for (int i = 0; i < jArray.size(); ++i) { 			 
			//Type and ID
			JSONObject jO = (JSONObject)jArray.get(i); 
			jNumber = (JSONNumber) jO.get("id"); 
			code = jNumber.doubleValue();
			id = (int) code;
			//Status
			jString = (JSONString) jO.get("status"); 
			status = jString.stringValue(); 		 
			//Orientation
			jNumber = (JSONNumber) jO.get("turns"); 
			turns = jNumber.doubleValue();		 
			numTurns = (int) turns;
			//Coordinates
			jNumber = (JSONNumber) jO.get("X"); 
			x = jNumber.doubleValue(); 	
			xC = (int) x;
			jNumber = (JSONNumber) jO.get("Y"); 
			y = jNumber.doubleValue(); 	
			yC = (int) y;
			coordinate = new Point (xC, yC);
			
			//update
			Window.alert(rt);
			Window.alert(Integer.toString(id));
			Window.alert(status);
			Window.alert(Integer.toString(numTurns));
			Window.alert(Integer.toString(id));			
			
			
			
			//Convert Status
			if (status == "undamaged"){
				modStatus = ModuleStatus.USABLE;
			}
			else if (status == "damaged"){
				modStatus = ModuleStatus.BEYONDREPAIR;
			}
			else{
				modStatus = ModuleStatus.USABLEAFTERREPAIR;
			}
			

			
			//Convert Type
			if (0 < code && code < 41) {
				type = ModuleType.PLAIN;
			} // if
			else if (60 < code && code < 81) {
				type = ModuleType.DORMITORY;
			} // if
			else if (90 < code && code < 101) {
				type = ModuleType.SANITATION;
			} // if
			else if (110 < code && code < 121) {
				type = ModuleType.FOODWATERSTORAGE;
			} // if
			else if (130 < code && code < 135) {
				type = ModuleType.GYMRELAXATION;
			} // if
			else if (140 < code && code < 145) {
				type = ModuleType.CANTEEN;
			} // if
			else if (150 < code && code < 155) {
				type = ModuleType.POWER;
			} // if
			else if (160 < code && code < 165) {
				type = ModuleType.CONTROL;
			} // if
			else if (170 < code && code < 175) {
				type = ModuleType.AIRLOCK;
			} // if
			else if (180 < code && code < 185) {
				type = ModuleType.MEDICAL;
			} // if
			else {
				type = null;
			} //else
			
			
			Module tempModule = new Module(type, id, coordinate, modStatus, numTurns, false);			
			Model.addModule(tempModule);

		} //for
	} //update

}//TestCases Class