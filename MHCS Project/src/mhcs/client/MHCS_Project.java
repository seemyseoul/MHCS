package mhcs.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.ui.RootPanel;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class MHCS_Project implements EntryPoint {

	/**
	 * This is the entry point method.
	 */
	public void onModuleLoad() {
		RootPanel rp = RootPanel.get(); // The root panel that is the entire browser window.  Make sure each "page" can access it to write their contents when appropriate.
		
		LoginPage 			loginPage 		= new LoginPage(rp);
		ModulesPage 		modulesPage 	= new ModulesPage(rp);
		ConfigurationsPage 	configPage 		= new ConfigurationsPage(rp);
		SettingsPage 		settingsPage 	= new SettingsPage(rp);
		
		// Check for log-in
		// if not logged in then:
		loginPage.show();
		
		// else:
		modulesPage.show();
		
	}
}
