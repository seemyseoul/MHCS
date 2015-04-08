package mhcs.client;

import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.SimplePanel;

public class Page {
	private RootPanel rp;
	private Panel mainPanel;
	private SettingsPage settingsPage;
	private LoginPage loginPage;
	private ConfigurationsPage configPage;
	private ModulesPage modulesPage;
	
	public Page(RootPanel rp)
	{
		this.rp = rp;
		mainPanel = new SimplePanel();
	}
	
	public Panel getMainPanel()
	{
		return mainPanel;
	}
	
	public void setMainPanel(Panel p)
	{
		mainPanel = p;
	}
	
	public void show()
	{
		rp.add(mainPanel);
	}

	public SettingsPage getSettingsPage() {
		return settingsPage;
	}

	public void setSettingsPage(SettingsPage settingsPage) {
		this.settingsPage = settingsPage;
	}

	public LoginPage getLoginPage() {
		return loginPage;
	}

	public void setLoginPage(LoginPage loginPage) {
		this.loginPage = loginPage;
	}

	public ConfigurationsPage getConfigPage() {
		return configPage;
	}

	public void setConfigPage(ConfigurationsPage configPage) {
		this.configPage = configPage;
	}

	public ModulesPage getModulesPage() {
		return modulesPage;
	}

	public void setModulesPage(ModulesPage modulesPage) {
		this.modulesPage = modulesPage;
	}
	
	
}
