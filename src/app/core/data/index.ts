export interface ItemMenu {
  title: string;
  link: string;
}

export interface ItemOutstanding {
    title: string;
    total: number;
    unit: string;
    image: string;
}

export interface ItemProduct {
    title: string;
    total: string;
    image: string;
    thumbnail: string;
    link: string;
}

export interface Partner {
    title: string;
    image: string;
}

export interface User {
    name: string;
    role: string;
    image: string;
}

export interface PrivacyPolicy {
    id: number;
    attributes: {
        Content: string;

    }
}

export interface TermOfUse {
    id: number;
    attributes: {
        Des: string;

    }
}

export class CMSResponse<T> {
    data ?: T;
    error?: Error;
    meta?: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  }
