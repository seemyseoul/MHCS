package mhcs.client;

import java.util.Comparator;

/**
 * Comparator class for comparing two configurations.
 *
 * @author user
 *
 */
public class ConfigComparator implements Comparator<Configuration> {

	@Override
	public int compare(final Configuration c1, final Configuration c2) {
		if (getConfigQuality(c1) < getConfigQuality(c2)) {
			return -1;
		} else if (getConfigQuality(c1) > getConfigQuality(c2)) {
			return 0;
		} else {
			return 1;
		}
	}
	/**
	 * Gets the configuration quality
	 * on a scale from 0 to 1 as a floating point value.
	 *
	 * @param config
	 * @return
	 */
	public final float getConfigQuality(final Configuration config) {
		return 0; 
		// TODO
	}

}
