import {
  BehaviorSubject,
  Observable,
} from 'rxjs';


// tslint:disable-next-line: no-empty-interface
interface IEntityExample {

  // #region TO CHANGE

  property: any;

  // #endregion

}

class EntityExample {

  protected readonly change: BehaviorSubject<EntityExample> = new BehaviorSubject(this);
  public readonly change$: Observable<EntityExample> = this.change.asObservable();

  // #region TO CHANGE

  protected property: any;

  // #endregion

  constructor(o: IEntityExample) {

    // #region TO CHANGE

    this.property = o.property;

    // #endregion

  }

  /**
   * @alias clone (non static)
   * @returns A new instance of `EntityExample` with the same values
   */
  public static clone(o: EntityExample): EntityExample {
    return o.clone();
  }

  /**
   * @returns A new instance of `EntityExample` with the same values
   */
  public clone(): EntityExample {
    return new EntityExample(this.toObject());
  }

  /**
   * @returns The current `EntityExample` as plain object
   */
  public toObject(): IEntityExample {
    return {

      // #region TO CHANGE

      property: this.property,

      // #endregion

    };
  }

  /**
   * @returns The current `EntityExample` as string
   */
  public toString(): string {
    return JSON.stringify(this.toObject());
  }

  // #region TO CHANGE

  public getProperty(): any {
    return this.property;
  }

  public setProperty(value: any): this {
    this.property = value;

    this.change.next(this);
    return this;
  }

  // #endregion

}


export {
  EntityExample,
  IEntityExample,
};
