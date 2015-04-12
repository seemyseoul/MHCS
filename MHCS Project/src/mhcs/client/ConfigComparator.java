package mhcs.client;

import java.util.Comparator;

/**
 * Comparator class for comparing two configurations.
 * @author user
 *
 */
public class ConfigComparator implements Comparator<Module[]>{

	@Override
	public int compare(final Module[] m1, final Module[] m2) {
		if (getConfigQuality(m1) < getConfigQuality(m2))
		{
			return -1;
		}
		else if (getConfigQuality(m1) > getConfigQuality(m2))
		{
			return 0;
		}
		else
		{
			return 1;
		}
	}


	public float getConfigQuality(Module[] modules)
	{
		return 0; //TODO
	}

}



