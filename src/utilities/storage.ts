export class Storage {
  /**
   * Get an item from localStorage.
   *
   * @param name
   */
  static get(name: string): string | null {
    return localStorage.getItem(name);
  }

  /**
   * Check if an item exists in localStorage.
   *
   * @param name The name of the object
   * @return boolean
   */
  static has(name: string): boolean {
    return !!localStorage.getItem(name);
  }

  /**
   * Put an item in localStorage.
   *
   * @param name Name of the item.
   * @param value Value of the item.
   */
  static put(name: string, value: string): boolean {
    localStorage.setItem(name, value);
    return this.has(name);
  }

  /**
   * Return the item then remove it from localStorage.
   *
   * @param name
   */
  static pluck(name: string): string | null {
    const item = localStorage.getItem(name);
    this.remove(name);

    return item;
  }

  /**
   * Remove the item from localStorage.
   *
   * @param name The name of the item.
   */
  static remove(name: string): boolean {
    localStorage.removeItem(name);
    return !this.has(name)
  }
}
