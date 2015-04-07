package lab6.client;

import lab6.shared.FieldVerifier;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.KeyCodes;
import com.google.gwt.event.dom.client.KeyUpEvent;
import com.google.gwt.event.dom.client.KeyUpHandler;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.logical.shared.ValueChangeHandler;
import com.google.gwt.user.client.History;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.Hyperlink;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;

public class HistoryExample implements EntryPoint, ValueChangeHandler<String> {

	  private Label lbl = new Label();

	  public void onModuleLoad() {
	    // Create three hyperlinks that change the application's history.
	    Hyperlink link0 = new Hyperlink("link to foo", "foo");
	    Hyperlink link1 = new Hyperlink("link to bar", "bar");
	    Hyperlink link2 = new Hyperlink("link to baz", "baz");

	    // If the application starts with no history token, redirect to a new
	    // 'baz' state.
	    String initToken = History.getToken();
	    if (initToken.length() == 0) {
	      History.newItem("baz");
	    }

	    // Add widgets to the root panel.
	    VerticalPanel panel = new VerticalPanel();
	    panel.add(lbl);
	    panel.add(link0);
	    panel.add(link1);
	    panel.add(link2);
	    RootPanel.get().add(panel);

        FlexTable t = new FlexTable();
        t.setCellPadding(20);		//SPACE THINGS OUT
        t.setWidget(0,0,new Label("Site Navigation"));
        t.setWidget(0,1,new Label("Module Configuration"));
        t.setWidget(1,0,panel);		//ADD THE PANEL
        t.setWidget(1,1, lbl);		//ADD THE LABEL
	    
	    
        RootPanel.get().add(t);
        
        
	    // Add history listener
	    History.addValueChangeHandler(this);

	    // Now that we've setup our listener, fire the initial history state.
	    History.fireCurrentHistoryState();
	  }

	  public void onValueChange(ValueChangeEvent<String> event) {
	    // This method is called whenever the application's history changes. Set
	    // the label to reflect the current history token.
	    lbl.setText("The current history token is: " + event.getValue());
	  }
	}
