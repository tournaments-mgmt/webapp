import {effect, Injectable, signal, Signal} from '@angular/core';
import {Storage} from "@ionic/storage-angular";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storageSignals = new Map<string, Signal<any>>();


  constructor(
    private storage: Storage
  ) {
    this.storage.create();
  }

  async init() {
  }

  async set(key: string, value: any) {
    if (!this.storageSignals.has(key)) {
      const storedValue = await this.storage.get(key);
      const dataSignal = signal(storedValue !== null ? storedValue : value);
      effect(() => {
        const newValue = dataSignal();
        this.storage.set(key, newValue);
      });
      this.storageSignals.set(key, dataSignal);
    }
  }

  get(key: string): Signal<any> {
    return this.storageSignals.get(key) as Signal<any>;
  }
}
