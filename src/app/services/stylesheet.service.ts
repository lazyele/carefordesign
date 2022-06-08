import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StylesheetService {

  constructor() { }

  /**
   * Set the stylesheet with the specified key.
   */
  setStyle(key: string, href: string) {
    StylesheetService.getLinkElementForKey(key).setAttribute("href", href);
  }

  /**
   * Remove the stylesheet with the specified key.
   */
  removeStyle(key: string) {
    const existingLinkElement = StylesheetService.getExistingLinkElementByKey(key);
    if (existingLinkElement) {
      document.head.removeChild(existingLinkElement);
    }
  }

  private static getLinkElementForKey(key: string) {
    return this.getExistingLinkElementByKey(key) || this.createLinkElementWithKey(key);
  }

  private static getExistingLinkElementByKey(key: string) {
    return document.head.querySelector(
      `link[rel="stylesheet"].${StylesheetService.getClassNameForKey(key)}`
    );
  }

  private static createLinkElementWithKey(key: string) {
    const linkEl = document.createElement("link");
    linkEl.setAttribute("rel", "stylesheet");
    linkEl.classList.add(this.getClassNameForKey(key));
    document.head.appendChild(linkEl);
    return linkEl;
  }

  private static getClassNameForKey(key: string) {
    return `app-${key}`;
  }
}

