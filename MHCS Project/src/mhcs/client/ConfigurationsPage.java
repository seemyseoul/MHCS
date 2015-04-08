package mhcs.client;

import com.google.gwt.user.client.ui.RootPanel;
import mhcs.save.*;

public class ConfigurationsPage extends Page {

	public ConfigurationsPage(RootPanel rp)
	{
		super(rp);
	}
	
	public void generateConfigurations()
	{
		Module[] modules = Load.loadAll();
		
	}
}
