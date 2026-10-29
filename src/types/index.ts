export type Language = 'cs' | 'en';

import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export interface Photo {
  id: string;
  title: {
    cs: string;
    en: string;
  };
  category: 'editorial' | 'portrait' | 'commercial';
  src: string;
  aspectRatio?: string;
}

export interface BookingSlot {
  id: string;
  date: string;
  time: string;
  available: boolean;
}

declare module "react" {

}