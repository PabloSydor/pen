/**
 * From: https://github.com/w11k/ngx-componentdestroyed
 *
 * Others:
 *   - https://github.com/ngneat/until-destroy (Agular v9)
 *   - https://github.com/orchestratora/ngx-until-destroyed (older fork)
 */


import {
  OnDestroy,
} from '@angular/core';

import {
  Observable,
  ReplaySubject,
} from 'rxjs';

import {
  debounceTime,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  takeUntil,
} from 'rxjs/operators';


/**
 * The Angular's Component/Directive instance that extends `OnDestroy`.
 *
 * @interface NgInstance
 * @extends {OnDestroy}
 */
// tslint:disable-next-line: interface-name
interface NgInstance extends OnDestroy {
  __componentDestroyed$?: Observable<true>;
}

/**
 * When Angular calls the `ngOnDestroy` method once the component is being destroyed, this
 * operator will end the subscription automatically and any attempts to subscribe after that will
 * be blocked.
 *
 * This operator needs `takeUntil` in order to work correctly.
 *
 * @param {NgInstance} instance
 * @returns {Observable<true>}
 * @usage Component/Directive:
 *
 * observable$.pipe( **takeUntil(componentDestroyed(this))** )
 */
function componentDestroyed(instance: NgInstance): Observable<true> {
  const modifiedComponent = instance;
  if(modifiedComponent.__componentDestroyed$) {
    return modifiedComponent.__componentDestroyed$;
  }

  const oldNgOnDestroy = instance.ngOnDestroy;
  const stop$ = new ReplaySubject<true>();
  modifiedComponent.ngOnDestroy = () => {
    if(oldNgOnDestroy) {
      oldNgOnDestroy.apply(instance);
    }

    stop$.next(true);
    stop$.complete();
  };

  return modifiedComponent.__componentDestroyed$ = stop$.asObservable();
}

/**
 * **Use it at your own risk.**
 *
 * @returns {Observable<void>}
 */
function noop(): Observable<void> {
  return new Observable<void>((observer) => {
    observer.next();
    observer.complete();
  });
}

/**
 * When Angular calls the `ngOnDestroy` method once the component is being destroyed, this
 * operator will end the subscription automatically and any attempts to subscribe after that will
 * be blocked.
 *
 * @template T
 * @param {NgInstance} instance
 * @returns {(source: Observable<T>) => Observable<T>}
 * @usage Component/Directive:
 *
 * observable$.pipe( **untilComponentDestroyed(this)** )
 */
function untilComponentDestroyed<T>(instance: NgInstance): (source: Observable<T>) => Observable<T> {
  return (source: Observable<T>) => source.pipe(takeUntil(componentDestroyed(instance)));
}

/**
 * @template T
 * @param {number} dueTime
 * @param {(x: T, y: T) => boolean} [compare]
 * @returns {(source: Observable<T>) => Observable<T>}
 */
function untilDebouncedAndChanged<T>(
  dueTime: number,
  compare?: (x: T, y: T) => boolean,
): (source: Observable<T>) => Observable<T> {
  return (source: Observable<T>) => source.pipe(
    debounceTime(dueTime),
    distinctUntilChanged(compare),
  );
}

/**
 * @template T
 * @param {number} dueTime
 * @param {keyof T} key
 * @param {(x: T[keyof T], y: T[keyof T]) => boolean} [compare]
 * @returns {(source: Observable<T>) => Observable<T>}
 */
function untilDebouncedAndKeyChanged<T>(
  dueTime: number,
  key: keyof T,
  compare?: (x: T[keyof T], y: T[keyof T]) => boolean,
): (source: Observable<T>) => Observable<T> {
  return (source: Observable<T>) => source.pipe(
    debounceTime(dueTime),
    distinctUntilKeyChanged(key, compare),
  );
}


export {
  componentDestroyed,
  noop,
  untilComponentDestroyed,
  untilDebouncedAndChanged,
  untilDebouncedAndKeyChanged,
};
