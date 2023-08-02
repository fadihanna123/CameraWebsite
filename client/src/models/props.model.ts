import { ChangeEventHandler, MouseEventHandler, ReactElement } from 'react';

export class HeadingProps {
  constructor(other?: any) {
    this.headingLevel = other.headingLevel;
    this.className = other.className;
    this.children = other.children;
  }
  public headingLevel?: 1 | number;
  public className?: string[];
  public children: ReactElement<any, any> | string;
}

export class InputProps {
  constructor(other?: any) {
    this.id = other.id;
    this.type = other.type;
    this.className = other.className;
    this.name = other.name;
    this.val = other.val;
    this.isRequired = other.isRequired;
    this.changeFunc = other.changeFunc;
    this.acceptValues = other.acceptValues;
    this.autoComplete = other.autoComplete;
  }
  public id: string;
  public type?: 'text' | string;
  public className?: string[];
  public name?: string;
  public val?: string;
  public isRequired?: boolean;
  public changeFunc?: ChangeEventHandler<HTMLInputElement>;
  public acceptValues?: string;
  public autoComplete?: string;
}

export class BtnProps {
  constructor(other?: any) {
    this.className = other.className;
    this.clickFunc = other.clickFunc;
    this.children = other.children;
    this.btnStyle = other.btnStyle;
  }
  public className?: ['btn'] | string[];
  public clickFunc?: MouseEventHandler<HTMLButtonElement>;
  public children?: ReactElement<any, any> | string;
  public btnStyle?: object;
  public backgroundColor?: string;
  public disabled!: boolean;
}

export class ParaProps {
  constructor(other?: any) {
    this.className = other.className;
    this.children = other.children;
  }
  public className?: string[];
  public children: JSX.Element | JSX.Element[] | string;
}

export class FileUploaderProps {
  constructor(other?: any) {
    this.id = other.id;
    this.type = other.type;
    this.className = other.className;
    this.name = other.name;
    this.val = other.val;
    this.isRequired = other.isRequired;
    this.changeFunc = other.changeFunc;
    this.acceptValues = other.acceptValues;
  }
  public id: string;
  public type?: 'text' | string;
  public className?: string[];
  public name?: string;
  public val?: string;
  public isRequired?: boolean;
  public changeFunc?: ChangeEventHandler<HTMLInputElement>;
  public acceptValues?: string;
}

export class TxtAreaProps {
  constructor(other?: any) {
    this.id = other.id;
    this.className = other.className;
  }
  public id: string;
  public className?: string[];
}

export class ImgProps {
  constructor(other?: any) {
    this.source = other.source;
    this.alt = other.alt;
    this.ariaLabel = other.ariaLabel;
    this.className = other.className;
    this.dimensions = other.dimensions;
    this.loading = other.loading;
  }
  public source: string;
  public className: string[];
  public alt: string;
  public ariaLabel: string;
  public loading: 'eager' | 'lazy' | undefined;
  public dimensions: number[];
}

export class MainFooterProps {
  constructor(other?: any) {
    this.children = other.children;
    this.classNames = other.classNames;
  }
  public classNames: string[];
  public children: JSX.Element | JSX.Element[] | string;
}

export class MainHeaderProps {
  constructor(other?: any) {
    this.children = other.children;
  }
  public children: JSX.Element | JSX.Element[] | string;
}

export class MenuProps {
  constructor(other?: any) {
    this.children = other.className;
    this.classNames = other.classNames;
  }
  public classNames: string[];
  public children: any;
}
