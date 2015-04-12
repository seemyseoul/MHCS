package mhcs.client;

/**
 * This class defines a configuration as an array of modules.
 * @author user
 *
 */
public final class Configuration {
	private Module[] modules = null;

	/**
	 * Constructor for creating a Configuration
	 * from the string stored in HTML5 LocalStorage.
	 *
	 * @param configString
	 */
	private Configuration(String configString)
	{
		String[] moduleStrings = configString.split(";");

		for (int i = 0; i < moduleStrings.length; i++)
		{
			modules[modules.length] = new Module(moduleStrings[i]);
		}
	}

	/**
	 * Converts a configuration to a string.
	 * @return string version of a configuration.
	 * Modules are separated by ";" and fields within modules
	 * are separated by ",".
	 */
	public String toString()
	{
		String configString = "";
		for (Module m : modules)
		{
			configString += m.toString();
			configString += ";";
		}
		return configString.substring(0, configString.length() - 2);
	}

	/**
	 * Add a module to the configuration.
	 * @param m
	 */
	public void addModule(final Module m)
	{
		modules[modules.length] = m;
	}
}
