package mhcs.client;

/**
 * This class defines a point in 2D space on
 * the surface of Mars.
 *
 * @author Naples
 *
 */
public class Point {

	private int x, y;

	/**
	 * Self-explanatory constructor.
	 *
	 * @param xp x-coordinate within landing area.
	 * @param yp y-coordinate within landing area.
	 */
	public Point(final int xp, final int yp) {
		this.x = xp;
		this.y = yp;
	}

	/**
	 * Constructor to create a point from the string in
	 * HTML5 localStorage.
	 * @param str
	 */
	public Point(String str)
	{
		this.x = Integer.parseInt(str.split(" ")[0]);
		this.x = Integer.parseInt(str.split(" ")[1]);
	}

	/**
	 * turn a point into a string.
	 * @return the string version of the module.
	 */
	public final String toString()
	{
		return Integer.toString(x) + " " + Integer.toString(y);
	}

	/**
	 * gets the x value.
	 * @return x The x-coordinate within landing area.
	 */
	public final int getX() {
		return x;
	}

	/**
	 * gets the y value.
	 * @return y The y-coordinate within landing area.
	 */
	public final int getY() {
		return y;
	}

	public void setY(int y) {
		this.y = y;
	}

	public void setX(int x) {
		this.x = x;
	}

	public boolean equals(Point p) {
		return (p.x == x && p.y == y);
	}
	
	public int distanceTo(Point p)
	{
		return (int) Math.sqrt(Math.pow(p.getX() - getX(), 2)
				+ Math.pow(p.getY() - getY(), 2));
	}
	
	
}