
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model furnitures
 * 
 */
export type furnitures = $Result.DefaultSelection<Prisma.$furnituresPayload>
/**
 * Model cart
 * 
 */
export type cart = $Result.DefaultSelection<Prisma.$cartPayload>
/**
 * Model Store
 * 
 */
export type Store = $Result.DefaultSelection<Prisma.$StorePayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model OrderFurniture
 * 
 */
export type OrderFurniture = $Result.DefaultSelection<Prisma.$OrderFurniturePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Furnitures
 * const furnitures = await prisma.furnitures.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Furnitures
   * const furnitures = await prisma.furnitures.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.furnitures`: Exposes CRUD operations for the **furnitures** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Furnitures
    * const furnitures = await prisma.furnitures.findMany()
    * ```
    */
  get furnitures(): Prisma.furnituresDelegate<ExtArgs>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.cartDelegate<ExtArgs>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<ExtArgs>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs>;

  /**
   * `prisma.orderFurniture`: Exposes CRUD operations for the **OrderFurniture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderFurnitures
    * const orderFurnitures = await prisma.orderFurniture.findMany()
    * ```
    */
  get orderFurniture(): Prisma.OrderFurnitureDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.17.0
   * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    furnitures: 'furnitures',
    cart: 'cart',
    Store: 'Store',
    Orders: 'Orders',
    OrderFurniture: 'OrderFurniture'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "furnitures" | "cart" | "store" | "orders" | "orderFurniture"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      furnitures: {
        payload: Prisma.$furnituresPayload<ExtArgs>
        fields: Prisma.furnituresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.furnituresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$furnituresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.furnituresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$furnituresPayload>
          }
          findFirst: {
            args: Prisma.furnituresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$furnituresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.furnituresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$furnituresPayload>
          }
          findMany: {
            args: Prisma.furnituresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$furnituresPayload>[]
          }
          create: {
            args: Prisma.furnituresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$furnituresPayload>
          }
          createMany: {
            args: Prisma.furnituresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.furnituresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$furnituresPayload>[]
          }
          delete: {
            args: Prisma.furnituresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$furnituresPayload>
          }
          update: {
            args: Prisma.furnituresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$furnituresPayload>
          }
          deleteMany: {
            args: Prisma.furnituresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.furnituresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.furnituresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$furnituresPayload>
          }
          aggregate: {
            args: Prisma.FurnituresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFurnitures>
          }
          groupBy: {
            args: Prisma.furnituresGroupByArgs<ExtArgs>
            result: $Utils.Optional<FurnituresGroupByOutputType>[]
          }
          count: {
            args: Prisma.furnituresCountArgs<ExtArgs>
            result: $Utils.Optional<FurnituresCountAggregateOutputType> | number
          }
        }
      }
      cart: {
        payload: Prisma.$cartPayload<ExtArgs>
        fields: Prisma.cartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          findFirst: {
            args: Prisma.cartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          findMany: {
            args: Prisma.cartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>[]
          }
          create: {
            args: Prisma.cartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          createMany: {
            args: Prisma.cartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>[]
          }
          delete: {
            args: Prisma.cartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          update: {
            args: Prisma.cartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          deleteMany: {
            args: Prisma.cartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.cartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.cartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      Store: {
        payload: Prisma.$StorePayload<ExtArgs>
        fields: Prisma.StoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findFirst: {
            args: Prisma.StoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findMany: {
            args: Prisma.StoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          create: {
            args: Prisma.StoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          createMany: {
            args: Prisma.StoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          delete: {
            args: Prisma.StoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          update: {
            args: Prisma.StoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          deleteMany: {
            args: Prisma.StoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.StoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreCountArgs<ExtArgs>
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      OrderFurniture: {
        payload: Prisma.$OrderFurniturePayload<ExtArgs>
        fields: Prisma.OrderFurnitureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFurnitureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFurniturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFurnitureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFurniturePayload>
          }
          findFirst: {
            args: Prisma.OrderFurnitureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFurniturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFurnitureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFurniturePayload>
          }
          findMany: {
            args: Prisma.OrderFurnitureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFurniturePayload>[]
          }
          create: {
            args: Prisma.OrderFurnitureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFurniturePayload>
          }
          createMany: {
            args: Prisma.OrderFurnitureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderFurnitureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFurniturePayload>[]
          }
          delete: {
            args: Prisma.OrderFurnitureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFurniturePayload>
          }
          update: {
            args: Prisma.OrderFurnitureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFurniturePayload>
          }
          deleteMany: {
            args: Prisma.OrderFurnitureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderFurnitureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderFurnitureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderFurniturePayload>
          }
          aggregate: {
            args: Prisma.OrderFurnitureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderFurniture>
          }
          groupBy: {
            args: Prisma.OrderFurnitureGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderFurnitureGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderFurnitureCountArgs<ExtArgs>
            result: $Utils.Optional<OrderFurnitureCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FurnituresCountOutputType
   */

  export type FurnituresCountOutputType = {
    OrderFurniture: number
  }

  export type FurnituresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderFurniture?: boolean | FurnituresCountOutputTypeCountOrderFurnitureArgs
  }

  // Custom InputTypes
  /**
   * FurnituresCountOutputType without action
   */
  export type FurnituresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FurnituresCountOutputType
     */
    select?: FurnituresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FurnituresCountOutputType without action
   */
  export type FurnituresCountOutputTypeCountOrderFurnitureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderFurnitureWhereInput
  }


  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    furniture: number
    OrderFurniture: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    furniture?: boolean | StoreCountOutputTypeCountFurnitureArgs
    OrderFurniture?: boolean | StoreCountOutputTypeCountOrderFurnitureArgs
  }

  // Custom InputTypes
  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountFurnitureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: furnituresWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountOrderFurnitureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderFurnitureWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    OrderFurniture: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderFurniture?: boolean | OrdersCountOutputTypeCountOrderFurnitureArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrderFurnitureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderFurnitureWhereInput
  }


  /**
   * Models
   */

  /**
   * Model furnitures
   */

  export type AggregateFurnitures = {
    _count: FurnituresCountAggregateOutputType | null
    _avg: FurnituresAvgAggregateOutputType | null
    _sum: FurnituresSumAggregateOutputType | null
    _min: FurnituresMinAggregateOutputType | null
    _max: FurnituresMaxAggregateOutputType | null
  }

  export type FurnituresAvgAggregateOutputType = {
    id: number | null
    harga: number | null
    store_id: number | null
  }

  export type FurnituresSumAggregateOutputType = {
    id: number | null
    harga: number | null
    store_id: number | null
  }

  export type FurnituresMinAggregateOutputType = {
    id: number | null
    nama_furniture: string | null
    slug: string | null
    deskripsi: string | null
    harga: number | null
    categories: string | null
    image: string | null
    store_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FurnituresMaxAggregateOutputType = {
    id: number | null
    nama_furniture: string | null
    slug: string | null
    deskripsi: string | null
    harga: number | null
    categories: string | null
    image: string | null
    store_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FurnituresCountAggregateOutputType = {
    id: number
    nama_furniture: number
    slug: number
    deskripsi: number
    harga: number
    categories: number
    image: number
    store_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type FurnituresAvgAggregateInputType = {
    id?: true
    harga?: true
    store_id?: true
  }

  export type FurnituresSumAggregateInputType = {
    id?: true
    harga?: true
    store_id?: true
  }

  export type FurnituresMinAggregateInputType = {
    id?: true
    nama_furniture?: true
    slug?: true
    deskripsi?: true
    harga?: true
    categories?: true
    image?: true
    store_id?: true
    created_at?: true
    updated_at?: true
  }

  export type FurnituresMaxAggregateInputType = {
    id?: true
    nama_furniture?: true
    slug?: true
    deskripsi?: true
    harga?: true
    categories?: true
    image?: true
    store_id?: true
    created_at?: true
    updated_at?: true
  }

  export type FurnituresCountAggregateInputType = {
    id?: true
    nama_furniture?: true
    slug?: true
    deskripsi?: true
    harga?: true
    categories?: true
    image?: true
    store_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type FurnituresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which furnitures to aggregate.
     */
    where?: furnituresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of furnitures to fetch.
     */
    orderBy?: furnituresOrderByWithRelationInput | furnituresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: furnituresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` furnitures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` furnitures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned furnitures
    **/
    _count?: true | FurnituresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FurnituresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FurnituresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FurnituresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FurnituresMaxAggregateInputType
  }

  export type GetFurnituresAggregateType<T extends FurnituresAggregateArgs> = {
        [P in keyof T & keyof AggregateFurnitures]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFurnitures[P]>
      : GetScalarType<T[P], AggregateFurnitures[P]>
  }




  export type furnituresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: furnituresWhereInput
    orderBy?: furnituresOrderByWithAggregationInput | furnituresOrderByWithAggregationInput[]
    by: FurnituresScalarFieldEnum[] | FurnituresScalarFieldEnum
    having?: furnituresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FurnituresCountAggregateInputType | true
    _avg?: FurnituresAvgAggregateInputType
    _sum?: FurnituresSumAggregateInputType
    _min?: FurnituresMinAggregateInputType
    _max?: FurnituresMaxAggregateInputType
  }

  export type FurnituresGroupByOutputType = {
    id: number
    nama_furniture: string
    slug: string
    deskripsi: string
    harga: number
    categories: string
    image: string | null
    store_id: number
    created_at: Date
    updated_at: Date
    _count: FurnituresCountAggregateOutputType | null
    _avg: FurnituresAvgAggregateOutputType | null
    _sum: FurnituresSumAggregateOutputType | null
    _min: FurnituresMinAggregateOutputType | null
    _max: FurnituresMaxAggregateOutputType | null
  }

  type GetFurnituresGroupByPayload<T extends furnituresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FurnituresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FurnituresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FurnituresGroupByOutputType[P]>
            : GetScalarType<T[P], FurnituresGroupByOutputType[P]>
        }
      >
    >


  export type furnituresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_furniture?: boolean
    slug?: boolean
    deskripsi?: boolean
    harga?: boolean
    categories?: boolean
    image?: boolean
    store_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    Store?: boolean | furnitures$StoreArgs<ExtArgs>
    OrderFurniture?: boolean | furnitures$OrderFurnitureArgs<ExtArgs>
    _count?: boolean | FurnituresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["furnitures"]>

  export type furnituresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_furniture?: boolean
    slug?: boolean
    deskripsi?: boolean
    harga?: boolean
    categories?: boolean
    image?: boolean
    store_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    Store?: boolean | furnitures$StoreArgs<ExtArgs>
  }, ExtArgs["result"]["furnitures"]>

  export type furnituresSelectScalar = {
    id?: boolean
    nama_furniture?: boolean
    slug?: boolean
    deskripsi?: boolean
    harga?: boolean
    categories?: boolean
    image?: boolean
    store_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type furnituresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Store?: boolean | furnitures$StoreArgs<ExtArgs>
    OrderFurniture?: boolean | furnitures$OrderFurnitureArgs<ExtArgs>
    _count?: boolean | FurnituresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type furnituresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Store?: boolean | furnitures$StoreArgs<ExtArgs>
  }

  export type $furnituresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "furnitures"
    objects: {
      Store: Prisma.$StorePayload<ExtArgs> | null
      OrderFurniture: Prisma.$OrderFurniturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama_furniture: string
      slug: string
      deskripsi: string
      harga: number
      categories: string
      image: string | null
      store_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["furnitures"]>
    composites: {}
  }

  type furnituresGetPayload<S extends boolean | null | undefined | furnituresDefaultArgs> = $Result.GetResult<Prisma.$furnituresPayload, S>

  type furnituresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<furnituresFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FurnituresCountAggregateInputType | true
    }

  export interface furnituresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['furnitures'], meta: { name: 'furnitures' } }
    /**
     * Find zero or one Furnitures that matches the filter.
     * @param {furnituresFindUniqueArgs} args - Arguments to find a Furnitures
     * @example
     * // Get one Furnitures
     * const furnitures = await prisma.furnitures.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends furnituresFindUniqueArgs>(args: SelectSubset<T, furnituresFindUniqueArgs<ExtArgs>>): Prisma__furnituresClient<$Result.GetResult<Prisma.$furnituresPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Furnitures that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {furnituresFindUniqueOrThrowArgs} args - Arguments to find a Furnitures
     * @example
     * // Get one Furnitures
     * const furnitures = await prisma.furnitures.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends furnituresFindUniqueOrThrowArgs>(args: SelectSubset<T, furnituresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__furnituresClient<$Result.GetResult<Prisma.$furnituresPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Furnitures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {furnituresFindFirstArgs} args - Arguments to find a Furnitures
     * @example
     * // Get one Furnitures
     * const furnitures = await prisma.furnitures.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends furnituresFindFirstArgs>(args?: SelectSubset<T, furnituresFindFirstArgs<ExtArgs>>): Prisma__furnituresClient<$Result.GetResult<Prisma.$furnituresPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Furnitures that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {furnituresFindFirstOrThrowArgs} args - Arguments to find a Furnitures
     * @example
     * // Get one Furnitures
     * const furnitures = await prisma.furnitures.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends furnituresFindFirstOrThrowArgs>(args?: SelectSubset<T, furnituresFindFirstOrThrowArgs<ExtArgs>>): Prisma__furnituresClient<$Result.GetResult<Prisma.$furnituresPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Furnitures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {furnituresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Furnitures
     * const furnitures = await prisma.furnitures.findMany()
     * 
     * // Get first 10 Furnitures
     * const furnitures = await prisma.furnitures.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const furnituresWithIdOnly = await prisma.furnitures.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends furnituresFindManyArgs>(args?: SelectSubset<T, furnituresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$furnituresPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Furnitures.
     * @param {furnituresCreateArgs} args - Arguments to create a Furnitures.
     * @example
     * // Create one Furnitures
     * const Furnitures = await prisma.furnitures.create({
     *   data: {
     *     // ... data to create a Furnitures
     *   }
     * })
     * 
     */
    create<T extends furnituresCreateArgs>(args: SelectSubset<T, furnituresCreateArgs<ExtArgs>>): Prisma__furnituresClient<$Result.GetResult<Prisma.$furnituresPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Furnitures.
     * @param {furnituresCreateManyArgs} args - Arguments to create many Furnitures.
     * @example
     * // Create many Furnitures
     * const furnitures = await prisma.furnitures.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends furnituresCreateManyArgs>(args?: SelectSubset<T, furnituresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Furnitures and returns the data saved in the database.
     * @param {furnituresCreateManyAndReturnArgs} args - Arguments to create many Furnitures.
     * @example
     * // Create many Furnitures
     * const furnitures = await prisma.furnitures.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Furnitures and only return the `id`
     * const furnituresWithIdOnly = await prisma.furnitures.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends furnituresCreateManyAndReturnArgs>(args?: SelectSubset<T, furnituresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$furnituresPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Furnitures.
     * @param {furnituresDeleteArgs} args - Arguments to delete one Furnitures.
     * @example
     * // Delete one Furnitures
     * const Furnitures = await prisma.furnitures.delete({
     *   where: {
     *     // ... filter to delete one Furnitures
     *   }
     * })
     * 
     */
    delete<T extends furnituresDeleteArgs>(args: SelectSubset<T, furnituresDeleteArgs<ExtArgs>>): Prisma__furnituresClient<$Result.GetResult<Prisma.$furnituresPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Furnitures.
     * @param {furnituresUpdateArgs} args - Arguments to update one Furnitures.
     * @example
     * // Update one Furnitures
     * const furnitures = await prisma.furnitures.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends furnituresUpdateArgs>(args: SelectSubset<T, furnituresUpdateArgs<ExtArgs>>): Prisma__furnituresClient<$Result.GetResult<Prisma.$furnituresPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Furnitures.
     * @param {furnituresDeleteManyArgs} args - Arguments to filter Furnitures to delete.
     * @example
     * // Delete a few Furnitures
     * const { count } = await prisma.furnitures.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends furnituresDeleteManyArgs>(args?: SelectSubset<T, furnituresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Furnitures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {furnituresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Furnitures
     * const furnitures = await prisma.furnitures.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends furnituresUpdateManyArgs>(args: SelectSubset<T, furnituresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Furnitures.
     * @param {furnituresUpsertArgs} args - Arguments to update or create a Furnitures.
     * @example
     * // Update or create a Furnitures
     * const furnitures = await prisma.furnitures.upsert({
     *   create: {
     *     // ... data to create a Furnitures
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Furnitures we want to update
     *   }
     * })
     */
    upsert<T extends furnituresUpsertArgs>(args: SelectSubset<T, furnituresUpsertArgs<ExtArgs>>): Prisma__furnituresClient<$Result.GetResult<Prisma.$furnituresPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Furnitures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {furnituresCountArgs} args - Arguments to filter Furnitures to count.
     * @example
     * // Count the number of Furnitures
     * const count = await prisma.furnitures.count({
     *   where: {
     *     // ... the filter for the Furnitures we want to count
     *   }
     * })
    **/
    count<T extends furnituresCountArgs>(
      args?: Subset<T, furnituresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FurnituresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Furnitures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FurnituresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FurnituresAggregateArgs>(args: Subset<T, FurnituresAggregateArgs>): Prisma.PrismaPromise<GetFurnituresAggregateType<T>>

    /**
     * Group by Furnitures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {furnituresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends furnituresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: furnituresGroupByArgs['orderBy'] }
        : { orderBy?: furnituresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, furnituresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFurnituresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the furnitures model
   */
  readonly fields: furnituresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for furnitures.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__furnituresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Store<T extends furnitures$StoreArgs<ExtArgs> = {}>(args?: Subset<T, furnitures$StoreArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    OrderFurniture<T extends furnitures$OrderFurnitureArgs<ExtArgs> = {}>(args?: Subset<T, furnitures$OrderFurnitureArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderFurniturePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the furnitures model
   */ 
  interface furnituresFieldRefs {
    readonly id: FieldRef<"furnitures", 'Int'>
    readonly nama_furniture: FieldRef<"furnitures", 'String'>
    readonly slug: FieldRef<"furnitures", 'String'>
    readonly deskripsi: FieldRef<"furnitures", 'String'>
    readonly harga: FieldRef<"furnitures", 'Float'>
    readonly categories: FieldRef<"furnitures", 'String'>
    readonly image: FieldRef<"furnitures", 'String'>
    readonly store_id: FieldRef<"furnitures", 'Int'>
    readonly created_at: FieldRef<"furnitures", 'DateTime'>
    readonly updated_at: FieldRef<"furnitures", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * furnitures findUnique
   */
  export type furnituresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the furnitures
     */
    select?: furnituresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: furnituresInclude<ExtArgs> | null
    /**
     * Filter, which furnitures to fetch.
     */
    where: furnituresWhereUniqueInput
  }

  /**
   * furnitures findUniqueOrThrow
   */
  export type furnituresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the furnitures
     */
    select?: furnituresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: furnituresInclude<ExtArgs> | null
    /**
     * Filter, which furnitures to fetch.
     */
    where: furnituresWhereUniqueInput
  }

  /**
   * furnitures findFirst
   */
  export type furnituresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the furnitures
     */
    select?: furnituresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: furnituresInclude<ExtArgs> | null
    /**
     * Filter, which furnitures to fetch.
     */
    where?: furnituresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of furnitures to fetch.
     */
    orderBy?: furnituresOrderByWithRelationInput | furnituresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for furnitures.
     */
    cursor?: furnituresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` furnitures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` furnitures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of furnitures.
     */
    distinct?: FurnituresScalarFieldEnum | FurnituresScalarFieldEnum[]
  }

  /**
   * furnitures findFirstOrThrow
   */
  export type furnituresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the furnitures
     */
    select?: furnituresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: furnituresInclude<ExtArgs> | null
    /**
     * Filter, which furnitures to fetch.
     */
    where?: furnituresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of furnitures to fetch.
     */
    orderBy?: furnituresOrderByWithRelationInput | furnituresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for furnitures.
     */
    cursor?: furnituresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` furnitures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` furnitures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of furnitures.
     */
    distinct?: FurnituresScalarFieldEnum | FurnituresScalarFieldEnum[]
  }

  /**
   * furnitures findMany
   */
  export type furnituresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the furnitures
     */
    select?: furnituresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: furnituresInclude<ExtArgs> | null
    /**
     * Filter, which furnitures to fetch.
     */
    where?: furnituresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of furnitures to fetch.
     */
    orderBy?: furnituresOrderByWithRelationInput | furnituresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing furnitures.
     */
    cursor?: furnituresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` furnitures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` furnitures.
     */
    skip?: number
    distinct?: FurnituresScalarFieldEnum | FurnituresScalarFieldEnum[]
  }

  /**
   * furnitures create
   */
  export type furnituresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the furnitures
     */
    select?: furnituresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: furnituresInclude<ExtArgs> | null
    /**
     * The data needed to create a furnitures.
     */
    data: XOR<furnituresCreateInput, furnituresUncheckedCreateInput>
  }

  /**
   * furnitures createMany
   */
  export type furnituresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many furnitures.
     */
    data: furnituresCreateManyInput | furnituresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * furnitures createManyAndReturn
   */
  export type furnituresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the furnitures
     */
    select?: furnituresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many furnitures.
     */
    data: furnituresCreateManyInput | furnituresCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: furnituresIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * furnitures update
   */
  export type furnituresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the furnitures
     */
    select?: furnituresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: furnituresInclude<ExtArgs> | null
    /**
     * The data needed to update a furnitures.
     */
    data: XOR<furnituresUpdateInput, furnituresUncheckedUpdateInput>
    /**
     * Choose, which furnitures to update.
     */
    where: furnituresWhereUniqueInput
  }

  /**
   * furnitures updateMany
   */
  export type furnituresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update furnitures.
     */
    data: XOR<furnituresUpdateManyMutationInput, furnituresUncheckedUpdateManyInput>
    /**
     * Filter which furnitures to update
     */
    where?: furnituresWhereInput
  }

  /**
   * furnitures upsert
   */
  export type furnituresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the furnitures
     */
    select?: furnituresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: furnituresInclude<ExtArgs> | null
    /**
     * The filter to search for the furnitures to update in case it exists.
     */
    where: furnituresWhereUniqueInput
    /**
     * In case the furnitures found by the `where` argument doesn't exist, create a new furnitures with this data.
     */
    create: XOR<furnituresCreateInput, furnituresUncheckedCreateInput>
    /**
     * In case the furnitures was found with the provided `where` argument, update it with this data.
     */
    update: XOR<furnituresUpdateInput, furnituresUncheckedUpdateInput>
  }

  /**
   * furnitures delete
   */
  export type furnituresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the furnitures
     */
    select?: furnituresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: furnituresInclude<ExtArgs> | null
    /**
     * Filter which furnitures to delete.
     */
    where: furnituresWhereUniqueInput
  }

  /**
   * furnitures deleteMany
   */
  export type furnituresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which furnitures to delete
     */
    where?: furnituresWhereInput
  }

  /**
   * furnitures.Store
   */
  export type furnitures$StoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    where?: StoreWhereInput
  }

  /**
   * furnitures.OrderFurniture
   */
  export type furnitures$OrderFurnitureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFurniture
     */
    select?: OrderFurnitureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFurnitureInclude<ExtArgs> | null
    where?: OrderFurnitureWhereInput
    orderBy?: OrderFurnitureOrderByWithRelationInput | OrderFurnitureOrderByWithRelationInput[]
    cursor?: OrderFurnitureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderFurnitureScalarFieldEnum | OrderFurnitureScalarFieldEnum[]
  }

  /**
   * furnitures without action
   */
  export type furnituresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the furnitures
     */
    select?: furnituresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: furnituresInclude<ExtArgs> | null
  }


  /**
   * Model cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartAvgAggregateOutputType = {
    id: number | null
    id_furniture: number | null
    harga: number | null
  }

  export type CartSumAggregateOutputType = {
    id: number | null
    id_furniture: number | null
    harga: number | null
  }

  export type CartMinAggregateOutputType = {
    id: number | null
    id_furniture: number | null
    user_email: string | null
    nama_furniture: string | null
    slug: string | null
    harga: number | null
    categories: string | null
    image: string | null
  }

  export type CartMaxAggregateOutputType = {
    id: number | null
    id_furniture: number | null
    user_email: string | null
    nama_furniture: string | null
    slug: string | null
    harga: number | null
    categories: string | null
    image: string | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    id_furniture: number
    user_email: number
    nama_furniture: number
    slug: number
    harga: number
    categories: number
    image: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    id?: true
    id_furniture?: true
    harga?: true
  }

  export type CartSumAggregateInputType = {
    id?: true
    id_furniture?: true
    harga?: true
  }

  export type CartMinAggregateInputType = {
    id?: true
    id_furniture?: true
    user_email?: true
    nama_furniture?: true
    slug?: true
    harga?: true
    categories?: true
    image?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    id_furniture?: true
    user_email?: true
    nama_furniture?: true
    slug?: true
    harga?: true
    categories?: true
    image?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    id_furniture?: true
    user_email?: true
    nama_furniture?: true
    slug?: true
    harga?: true
    categories?: true
    image?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cart to aggregate.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type cartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartWhereInput
    orderBy?: cartOrderByWithAggregationInput | cartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: cartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _avg?: CartAvgAggregateInputType
    _sum?: CartSumAggregateInputType
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    id: number
    id_furniture: number
    user_email: string | null
    nama_furniture: string
    slug: string
    harga: number
    categories: string
    image: string | null
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends cartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type cartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_furniture?: boolean
    user_email?: boolean
    nama_furniture?: boolean
    slug?: boolean
    harga?: boolean
    categories?: boolean
    image?: boolean
  }, ExtArgs["result"]["cart"]>

  export type cartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_furniture?: boolean
    user_email?: boolean
    nama_furniture?: boolean
    slug?: boolean
    harga?: boolean
    categories?: boolean
    image?: boolean
  }, ExtArgs["result"]["cart"]>

  export type cartSelectScalar = {
    id?: boolean
    id_furniture?: boolean
    user_email?: boolean
    nama_furniture?: boolean
    slug?: boolean
    harga?: boolean
    categories?: boolean
    image?: boolean
  }


  export type $cartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cart"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_furniture: number
      user_email: string | null
      nama_furniture: string
      slug: string
      harga: number
      categories: string
      image: string | null
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type cartGetPayload<S extends boolean | null | undefined | cartDefaultArgs> = $Result.GetResult<Prisma.$cartPayload, S>

  type cartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<cartFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface cartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cart'], meta: { name: 'cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {cartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cartFindUniqueArgs>(args: SelectSubset<T, cartFindUniqueArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {cartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cartFindUniqueOrThrowArgs>(args: SelectSubset<T, cartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cartFindFirstArgs>(args?: SelectSubset<T, cartFindFirstArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cartFindFirstOrThrowArgs>(args?: SelectSubset<T, cartFindFirstOrThrowArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cartFindManyArgs>(args?: SelectSubset<T, cartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cart.
     * @param {cartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends cartCreateArgs>(args: SelectSubset<T, cartCreateArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Carts.
     * @param {cartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cartCreateManyArgs>(args?: SelectSubset<T, cartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {cartCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `id`
     * const cartWithIdOnly = await prisma.cart.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cartCreateManyAndReturnArgs>(args?: SelectSubset<T, cartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Cart.
     * @param {cartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends cartDeleteArgs>(args: SelectSubset<T, cartDeleteArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cart.
     * @param {cartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cartUpdateArgs>(args: SelectSubset<T, cartUpdateArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Carts.
     * @param {cartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cartDeleteManyArgs>(args?: SelectSubset<T, cartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cartUpdateManyArgs>(args: SelectSubset<T, cartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cart.
     * @param {cartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends cartUpsertArgs>(args: SelectSubset<T, cartUpsertArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends cartCountArgs>(
      args?: Subset<T, cartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cartGroupByArgs['orderBy'] }
        : { orderBy?: cartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cart model
   */
  readonly fields: cartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cart model
   */ 
  interface cartFieldRefs {
    readonly id: FieldRef<"cart", 'Int'>
    readonly id_furniture: FieldRef<"cart", 'Int'>
    readonly user_email: FieldRef<"cart", 'String'>
    readonly nama_furniture: FieldRef<"cart", 'String'>
    readonly slug: FieldRef<"cart", 'String'>
    readonly harga: FieldRef<"cart", 'Float'>
    readonly categories: FieldRef<"cart", 'String'>
    readonly image: FieldRef<"cart", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cart findUnique
   */
  export type cartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart findUniqueOrThrow
   */
  export type cartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart findFirst
   */
  export type cartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart findFirstOrThrow
   */
  export type cartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart findMany
   */
  export type cartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart create
   */
  export type cartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * The data needed to create a cart.
     */
    data: XOR<cartCreateInput, cartUncheckedCreateInput>
  }

  /**
   * cart createMany
   */
  export type cartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carts.
     */
    data: cartCreateManyInput | cartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cart createManyAndReturn
   */
  export type cartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many carts.
     */
    data: cartCreateManyInput | cartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cart update
   */
  export type cartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * The data needed to update a cart.
     */
    data: XOR<cartUpdateInput, cartUncheckedUpdateInput>
    /**
     * Choose, which cart to update.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart updateMany
   */
  export type cartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carts.
     */
    data: XOR<cartUpdateManyMutationInput, cartUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartWhereInput
  }

  /**
   * cart upsert
   */
  export type cartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * The filter to search for the cart to update in case it exists.
     */
    where: cartWhereUniqueInput
    /**
     * In case the cart found by the `where` argument doesn't exist, create a new cart with this data.
     */
    create: XOR<cartCreateInput, cartUncheckedCreateInput>
    /**
     * In case the cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cartUpdateInput, cartUncheckedUpdateInput>
  }

  /**
   * cart delete
   */
  export type cartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Filter which cart to delete.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart deleteMany
   */
  export type cartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carts to delete
     */
    where?: cartWhereInput
  }

  /**
   * cart without action
   */
  export type cartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
  }


  /**
   * Model Store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreAvgAggregateOutputType = {
    id: number | null
  }

  export type StoreSumAggregateOutputType = {
    id: number | null
  }

  export type StoreMinAggregateOutputType = {
    id: number | null
    nama_toko: string | null
    slug: string | null
    deskripsi: string | null
    telp: string | null
    user_email: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StoreMaxAggregateOutputType = {
    id: number | null
    nama_toko: string | null
    slug: string | null
    deskripsi: string | null
    telp: string | null
    user_email: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StoreCountAggregateOutputType = {
    id: number
    nama_toko: number
    slug: number
    deskripsi: number
    telp: number
    user_email: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    id?: true
  }

  export type StoreSumAggregateInputType = {
    id?: true
  }

  export type StoreMinAggregateInputType = {
    id?: true
    nama_toko?: true
    slug?: true
    deskripsi?: true
    telp?: true
    user_email?: true
    created_at?: true
    updated_at?: true
  }

  export type StoreMaxAggregateInputType = {
    id?: true
    nama_toko?: true
    slug?: true
    deskripsi?: true
    telp?: true
    user_email?: true
    created_at?: true
    updated_at?: true
  }

  export type StoreCountAggregateInputType = {
    id?: true
    nama_toko?: true
    slug?: true
    deskripsi?: true
    telp?: true
    user_email?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithAggregationInput | StoreOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _avg?: StoreAvgAggregateInputType
    _sum?: StoreSumAggregateInputType
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    id: number
    nama_toko: string
    slug: string | null
    deskripsi: string | null
    telp: string | null
    user_email: string
    created_at: Date
    updated_at: Date
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_toko?: boolean
    slug?: boolean
    deskripsi?: boolean
    telp?: boolean
    user_email?: boolean
    created_at?: boolean
    updated_at?: boolean
    furniture?: boolean | Store$furnitureArgs<ExtArgs>
    OrderFurniture?: boolean | Store$OrderFurnitureArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type StoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_toko?: boolean
    slug?: boolean
    deskripsi?: boolean
    telp?: boolean
    user_email?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["store"]>

  export type StoreSelectScalar = {
    id?: boolean
    nama_toko?: boolean
    slug?: boolean
    deskripsi?: boolean
    telp?: boolean
    user_email?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type StoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    furniture?: boolean | Store$furnitureArgs<ExtArgs>
    OrderFurniture?: boolean | Store$OrderFurnitureArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {
      furniture: Prisma.$furnituresPayload<ExtArgs>[]
      OrderFurniture: Prisma.$OrderFurniturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama_toko: string
      slug: string | null
      deskripsi: string | null
      telp: string | null
      user_email: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["store"]>
    composites: {}
  }

  type StoreGetPayload<S extends boolean | null | undefined | StoreDefaultArgs> = $Result.GetResult<Prisma.$StorePayload, S>

  type StoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StoreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Store'], meta: { name: 'Store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreFindUniqueArgs>(args: SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Store that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreFindFirstArgs>(args?: SelectSubset<T, StoreFindFirstArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeWithIdOnly = await prisma.store.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreFindManyArgs>(args?: SelectSubset<T, StoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
     */
    create<T extends StoreCreateArgs>(args: SelectSubset<T, StoreCreateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Stores.
     * @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreCreateManyArgs>(args?: SelectSubset<T, StoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stores and returns the data saved in the database.
     * @param {StoreCreateManyAndReturnArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stores and only return the `id`
     * const storeWithIdOnly = await prisma.store.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoreCreateManyAndReturnArgs>(args?: SelectSubset<T, StoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
     */
    delete<T extends StoreDeleteArgs>(args: SelectSubset<T, StoreDeleteArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreUpdateArgs>(args: SelectSubset<T, StoreUpdateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreDeleteManyArgs>(args?: SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreUpdateManyArgs>(args: SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     */
    upsert<T extends StoreUpsertArgs>(args: SelectSubset<T, StoreUpsertArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Store model
   */
  readonly fields: StoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    furniture<T extends Store$furnitureArgs<ExtArgs> = {}>(args?: Subset<T, Store$furnitureArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$furnituresPayload<ExtArgs>, T, "findMany"> | Null>
    OrderFurniture<T extends Store$OrderFurnitureArgs<ExtArgs> = {}>(args?: Subset<T, Store$OrderFurnitureArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderFurniturePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Store model
   */ 
  interface StoreFieldRefs {
    readonly id: FieldRef<"Store", 'Int'>
    readonly nama_toko: FieldRef<"Store", 'String'>
    readonly slug: FieldRef<"Store", 'String'>
    readonly deskripsi: FieldRef<"Store", 'String'>
    readonly telp: FieldRef<"Store", 'String'>
    readonly user_email: FieldRef<"Store", 'String'>
    readonly created_at: FieldRef<"Store", 'DateTime'>
    readonly updated_at: FieldRef<"Store", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Store findUnique
   */
  export type StoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findFirst
   */
  export type StoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findMany
   */
  export type StoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store create
   */
  export type StoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }

  /**
   * Store createMany
   */
  export type StoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Store createManyAndReturn
   */
  export type StoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Store update
   */
  export type StoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
  }

  /**
   * Store upsert
   */
  export type StoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }

  /**
   * Store delete
   */
  export type StoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
  }

  /**
   * Store.furniture
   */
  export type Store$furnitureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the furnitures
     */
    select?: furnituresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: furnituresInclude<ExtArgs> | null
    where?: furnituresWhereInput
    orderBy?: furnituresOrderByWithRelationInput | furnituresOrderByWithRelationInput[]
    cursor?: furnituresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FurnituresScalarFieldEnum | FurnituresScalarFieldEnum[]
  }

  /**
   * Store.OrderFurniture
   */
  export type Store$OrderFurnitureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFurniture
     */
    select?: OrderFurnitureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFurnitureInclude<ExtArgs> | null
    where?: OrderFurnitureWhereInput
    orderBy?: OrderFurnitureOrderByWithRelationInput | OrderFurnitureOrderByWithRelationInput[]
    cursor?: OrderFurnitureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderFurnitureScalarFieldEnum | OrderFurnitureScalarFieldEnum[]
  }

  /**
   * Store without action
   */
  export type StoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    total_harga: number | null
  }

  export type OrdersSumAggregateOutputType = {
    total_harga: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: string | null
    user_email: string | null
    total_harga: number | null
    token: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: string | null
    user_email: string | null
    total_harga: number | null
    token: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    user_email: number
    total_harga: number
    token: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    total_harga?: true
  }

  export type OrdersSumAggregateInputType = {
    total_harga?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    user_email?: true
    total_harga?: true
    token?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    user_email?: true
    total_harga?: true
    token?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    user_email?: true
    total_harga?: true
    token?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: string
    user_email: string
    total_harga: number
    token: string
    status: string
    created_at: Date
    updated_at: Date
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_email?: boolean
    total_harga?: boolean
    token?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    OrderFurniture?: boolean | Orders$OrderFurnitureArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_email?: boolean
    total_harga?: boolean
    token?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectScalar = {
    id?: boolean
    user_email?: boolean
    total_harga?: boolean
    token?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderFurniture?: boolean | Orders$OrderFurnitureArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      OrderFurniture: Prisma.$OrderFurniturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_email: string
      total_harga: number
      token: string
      status: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrdersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    OrderFurniture<T extends Orders$OrderFurnitureArgs<ExtArgs> = {}>(args?: Subset<T, Orders$OrderFurnitureArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderFurniturePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Orders model
   */ 
  interface OrdersFieldRefs {
    readonly id: FieldRef<"Orders", 'String'>
    readonly user_email: FieldRef<"Orders", 'String'>
    readonly total_harga: FieldRef<"Orders", 'Float'>
    readonly token: FieldRef<"Orders", 'String'>
    readonly status: FieldRef<"Orders", 'String'>
    readonly created_at: FieldRef<"Orders", 'DateTime'>
    readonly updated_at: FieldRef<"Orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders createManyAndReturn
   */
  export type OrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
  }

  /**
   * Orders.OrderFurniture
   */
  export type Orders$OrderFurnitureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFurniture
     */
    select?: OrderFurnitureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFurnitureInclude<ExtArgs> | null
    where?: OrderFurnitureWhereInput
    orderBy?: OrderFurnitureOrderByWithRelationInput | OrderFurnitureOrderByWithRelationInput[]
    cursor?: OrderFurnitureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderFurnitureScalarFieldEnum | OrderFurnitureScalarFieldEnum[]
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model OrderFurniture
   */

  export type AggregateOrderFurniture = {
    _count: OrderFurnitureCountAggregateOutputType | null
    _avg: OrderFurnitureAvgAggregateOutputType | null
    _sum: OrderFurnitureSumAggregateOutputType | null
    _min: OrderFurnitureMinAggregateOutputType | null
    _max: OrderFurnitureMaxAggregateOutputType | null
  }

  export type OrderFurnitureAvgAggregateOutputType = {
    id: number | null
    furnitureId: number | null
    storeId: number | null
  }

  export type OrderFurnitureSumAggregateOutputType = {
    id: number | null
    furnitureId: number | null
    storeId: number | null
  }

  export type OrderFurnitureMinAggregateOutputType = {
    id: number | null
    orderId: string | null
    furnitureId: number | null
    storeId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrderFurnitureMaxAggregateOutputType = {
    id: number | null
    orderId: string | null
    furnitureId: number | null
    storeId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrderFurnitureCountAggregateOutputType = {
    id: number
    orderId: number
    furnitureId: number
    storeId: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OrderFurnitureAvgAggregateInputType = {
    id?: true
    furnitureId?: true
    storeId?: true
  }

  export type OrderFurnitureSumAggregateInputType = {
    id?: true
    furnitureId?: true
    storeId?: true
  }

  export type OrderFurnitureMinAggregateInputType = {
    id?: true
    orderId?: true
    furnitureId?: true
    storeId?: true
    created_at?: true
    updated_at?: true
  }

  export type OrderFurnitureMaxAggregateInputType = {
    id?: true
    orderId?: true
    furnitureId?: true
    storeId?: true
    created_at?: true
    updated_at?: true
  }

  export type OrderFurnitureCountAggregateInputType = {
    id?: true
    orderId?: true
    furnitureId?: true
    storeId?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OrderFurnitureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderFurniture to aggregate.
     */
    where?: OrderFurnitureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderFurnitures to fetch.
     */
    orderBy?: OrderFurnitureOrderByWithRelationInput | OrderFurnitureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderFurnitureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderFurnitures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderFurnitures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderFurnitures
    **/
    _count?: true | OrderFurnitureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderFurnitureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderFurnitureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderFurnitureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderFurnitureMaxAggregateInputType
  }

  export type GetOrderFurnitureAggregateType<T extends OrderFurnitureAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderFurniture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderFurniture[P]>
      : GetScalarType<T[P], AggregateOrderFurniture[P]>
  }




  export type OrderFurnitureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderFurnitureWhereInput
    orderBy?: OrderFurnitureOrderByWithAggregationInput | OrderFurnitureOrderByWithAggregationInput[]
    by: OrderFurnitureScalarFieldEnum[] | OrderFurnitureScalarFieldEnum
    having?: OrderFurnitureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderFurnitureCountAggregateInputType | true
    _avg?: OrderFurnitureAvgAggregateInputType
    _sum?: OrderFurnitureSumAggregateInputType
    _min?: OrderFurnitureMinAggregateInputType
    _max?: OrderFurnitureMaxAggregateInputType
  }

  export type OrderFurnitureGroupByOutputType = {
    id: number
    orderId: string
    furnitureId: number
    storeId: number
    created_at: Date
    updated_at: Date
    _count: OrderFurnitureCountAggregateOutputType | null
    _avg: OrderFurnitureAvgAggregateOutputType | null
    _sum: OrderFurnitureSumAggregateOutputType | null
    _min: OrderFurnitureMinAggregateOutputType | null
    _max: OrderFurnitureMaxAggregateOutputType | null
  }

  type GetOrderFurnitureGroupByPayload<T extends OrderFurnitureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderFurnitureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderFurnitureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderFurnitureGroupByOutputType[P]>
            : GetScalarType<T[P], OrderFurnitureGroupByOutputType[P]>
        }
      >
    >


  export type OrderFurnitureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    furnitureId?: boolean
    storeId?: boolean
    created_at?: boolean
    updated_at?: boolean
    orders?: boolean | OrdersDefaultArgs<ExtArgs>
    furnitures?: boolean | furnituresDefaultArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderFurniture"]>

  export type OrderFurnitureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    furnitureId?: boolean
    storeId?: boolean
    created_at?: boolean
    updated_at?: boolean
    orders?: boolean | OrdersDefaultArgs<ExtArgs>
    furnitures?: boolean | furnituresDefaultArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderFurniture"]>

  export type OrderFurnitureSelectScalar = {
    id?: boolean
    orderId?: boolean
    furnitureId?: boolean
    storeId?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type OrderFurnitureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | OrdersDefaultArgs<ExtArgs>
    furnitures?: boolean | furnituresDefaultArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }
  export type OrderFurnitureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | OrdersDefaultArgs<ExtArgs>
    furnitures?: boolean | furnituresDefaultArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }

  export type $OrderFurniturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderFurniture"
    objects: {
      orders: Prisma.$OrdersPayload<ExtArgs>
      furnitures: Prisma.$furnituresPayload<ExtArgs>
      store: Prisma.$StorePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: string
      furnitureId: number
      storeId: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["orderFurniture"]>
    composites: {}
  }

  type OrderFurnitureGetPayload<S extends boolean | null | undefined | OrderFurnitureDefaultArgs> = $Result.GetResult<Prisma.$OrderFurniturePayload, S>

  type OrderFurnitureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFurnitureFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderFurnitureCountAggregateInputType | true
    }

  export interface OrderFurnitureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderFurniture'], meta: { name: 'OrderFurniture' } }
    /**
     * Find zero or one OrderFurniture that matches the filter.
     * @param {OrderFurnitureFindUniqueArgs} args - Arguments to find a OrderFurniture
     * @example
     * // Get one OrderFurniture
     * const orderFurniture = await prisma.orderFurniture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFurnitureFindUniqueArgs>(args: SelectSubset<T, OrderFurnitureFindUniqueArgs<ExtArgs>>): Prisma__OrderFurnitureClient<$Result.GetResult<Prisma.$OrderFurniturePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OrderFurniture that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderFurnitureFindUniqueOrThrowArgs} args - Arguments to find a OrderFurniture
     * @example
     * // Get one OrderFurniture
     * const orderFurniture = await prisma.orderFurniture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFurnitureFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFurnitureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderFurnitureClient<$Result.GetResult<Prisma.$OrderFurniturePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OrderFurniture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFurnitureFindFirstArgs} args - Arguments to find a OrderFurniture
     * @example
     * // Get one OrderFurniture
     * const orderFurniture = await prisma.orderFurniture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFurnitureFindFirstArgs>(args?: SelectSubset<T, OrderFurnitureFindFirstArgs<ExtArgs>>): Prisma__OrderFurnitureClient<$Result.GetResult<Prisma.$OrderFurniturePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OrderFurniture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFurnitureFindFirstOrThrowArgs} args - Arguments to find a OrderFurniture
     * @example
     * // Get one OrderFurniture
     * const orderFurniture = await prisma.orderFurniture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFurnitureFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFurnitureFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderFurnitureClient<$Result.GetResult<Prisma.$OrderFurniturePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OrderFurnitures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFurnitureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderFurnitures
     * const orderFurnitures = await prisma.orderFurniture.findMany()
     * 
     * // Get first 10 OrderFurnitures
     * const orderFurnitures = await prisma.orderFurniture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderFurnitureWithIdOnly = await prisma.orderFurniture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFurnitureFindManyArgs>(args?: SelectSubset<T, OrderFurnitureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderFurniturePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OrderFurniture.
     * @param {OrderFurnitureCreateArgs} args - Arguments to create a OrderFurniture.
     * @example
     * // Create one OrderFurniture
     * const OrderFurniture = await prisma.orderFurniture.create({
     *   data: {
     *     // ... data to create a OrderFurniture
     *   }
     * })
     * 
     */
    create<T extends OrderFurnitureCreateArgs>(args: SelectSubset<T, OrderFurnitureCreateArgs<ExtArgs>>): Prisma__OrderFurnitureClient<$Result.GetResult<Prisma.$OrderFurniturePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OrderFurnitures.
     * @param {OrderFurnitureCreateManyArgs} args - Arguments to create many OrderFurnitures.
     * @example
     * // Create many OrderFurnitures
     * const orderFurniture = await prisma.orderFurniture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderFurnitureCreateManyArgs>(args?: SelectSubset<T, OrderFurnitureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderFurnitures and returns the data saved in the database.
     * @param {OrderFurnitureCreateManyAndReturnArgs} args - Arguments to create many OrderFurnitures.
     * @example
     * // Create many OrderFurnitures
     * const orderFurniture = await prisma.orderFurniture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderFurnitures and only return the `id`
     * const orderFurnitureWithIdOnly = await prisma.orderFurniture.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderFurnitureCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderFurnitureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderFurniturePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OrderFurniture.
     * @param {OrderFurnitureDeleteArgs} args - Arguments to delete one OrderFurniture.
     * @example
     * // Delete one OrderFurniture
     * const OrderFurniture = await prisma.orderFurniture.delete({
     *   where: {
     *     // ... filter to delete one OrderFurniture
     *   }
     * })
     * 
     */
    delete<T extends OrderFurnitureDeleteArgs>(args: SelectSubset<T, OrderFurnitureDeleteArgs<ExtArgs>>): Prisma__OrderFurnitureClient<$Result.GetResult<Prisma.$OrderFurniturePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OrderFurniture.
     * @param {OrderFurnitureUpdateArgs} args - Arguments to update one OrderFurniture.
     * @example
     * // Update one OrderFurniture
     * const orderFurniture = await prisma.orderFurniture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderFurnitureUpdateArgs>(args: SelectSubset<T, OrderFurnitureUpdateArgs<ExtArgs>>): Prisma__OrderFurnitureClient<$Result.GetResult<Prisma.$OrderFurniturePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OrderFurnitures.
     * @param {OrderFurnitureDeleteManyArgs} args - Arguments to filter OrderFurnitures to delete.
     * @example
     * // Delete a few OrderFurnitures
     * const { count } = await prisma.orderFurniture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderFurnitureDeleteManyArgs>(args?: SelectSubset<T, OrderFurnitureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderFurnitures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFurnitureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderFurnitures
     * const orderFurniture = await prisma.orderFurniture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderFurnitureUpdateManyArgs>(args: SelectSubset<T, OrderFurnitureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderFurniture.
     * @param {OrderFurnitureUpsertArgs} args - Arguments to update or create a OrderFurniture.
     * @example
     * // Update or create a OrderFurniture
     * const orderFurniture = await prisma.orderFurniture.upsert({
     *   create: {
     *     // ... data to create a OrderFurniture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderFurniture we want to update
     *   }
     * })
     */
    upsert<T extends OrderFurnitureUpsertArgs>(args: SelectSubset<T, OrderFurnitureUpsertArgs<ExtArgs>>): Prisma__OrderFurnitureClient<$Result.GetResult<Prisma.$OrderFurniturePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OrderFurnitures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFurnitureCountArgs} args - Arguments to filter OrderFurnitures to count.
     * @example
     * // Count the number of OrderFurnitures
     * const count = await prisma.orderFurniture.count({
     *   where: {
     *     // ... the filter for the OrderFurnitures we want to count
     *   }
     * })
    **/
    count<T extends OrderFurnitureCountArgs>(
      args?: Subset<T, OrderFurnitureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderFurnitureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderFurniture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFurnitureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderFurnitureAggregateArgs>(args: Subset<T, OrderFurnitureAggregateArgs>): Prisma.PrismaPromise<GetOrderFurnitureAggregateType<T>>

    /**
     * Group by OrderFurniture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFurnitureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderFurnitureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderFurnitureGroupByArgs['orderBy'] }
        : { orderBy?: OrderFurnitureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderFurnitureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderFurnitureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderFurniture model
   */
  readonly fields: OrderFurnitureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderFurniture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderFurnitureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    furnitures<T extends furnituresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, furnituresDefaultArgs<ExtArgs>>): Prisma__furnituresClient<$Result.GetResult<Prisma.$furnituresPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderFurniture model
   */ 
  interface OrderFurnitureFieldRefs {
    readonly id: FieldRef<"OrderFurniture", 'Int'>
    readonly orderId: FieldRef<"OrderFurniture", 'String'>
    readonly furnitureId: FieldRef<"OrderFurniture", 'Int'>
    readonly storeId: FieldRef<"OrderFurniture", 'Int'>
    readonly created_at: FieldRef<"OrderFurniture", 'DateTime'>
    readonly updated_at: FieldRef<"OrderFurniture", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderFurniture findUnique
   */
  export type OrderFurnitureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFurniture
     */
    select?: OrderFurnitureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFurnitureInclude<ExtArgs> | null
    /**
     * Filter, which OrderFurniture to fetch.
     */
    where: OrderFurnitureWhereUniqueInput
  }

  /**
   * OrderFurniture findUniqueOrThrow
   */
  export type OrderFurnitureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFurniture
     */
    select?: OrderFurnitureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFurnitureInclude<ExtArgs> | null
    /**
     * Filter, which OrderFurniture to fetch.
     */
    where: OrderFurnitureWhereUniqueInput
  }

  /**
   * OrderFurniture findFirst
   */
  export type OrderFurnitureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFurniture
     */
    select?: OrderFurnitureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFurnitureInclude<ExtArgs> | null
    /**
     * Filter, which OrderFurniture to fetch.
     */
    where?: OrderFurnitureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderFurnitures to fetch.
     */
    orderBy?: OrderFurnitureOrderByWithRelationInput | OrderFurnitureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderFurnitures.
     */
    cursor?: OrderFurnitureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderFurnitures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderFurnitures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderFurnitures.
     */
    distinct?: OrderFurnitureScalarFieldEnum | OrderFurnitureScalarFieldEnum[]
  }

  /**
   * OrderFurniture findFirstOrThrow
   */
  export type OrderFurnitureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFurniture
     */
    select?: OrderFurnitureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFurnitureInclude<ExtArgs> | null
    /**
     * Filter, which OrderFurniture to fetch.
     */
    where?: OrderFurnitureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderFurnitures to fetch.
     */
    orderBy?: OrderFurnitureOrderByWithRelationInput | OrderFurnitureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderFurnitures.
     */
    cursor?: OrderFurnitureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderFurnitures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderFurnitures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderFurnitures.
     */
    distinct?: OrderFurnitureScalarFieldEnum | OrderFurnitureScalarFieldEnum[]
  }

  /**
   * OrderFurniture findMany
   */
  export type OrderFurnitureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFurniture
     */
    select?: OrderFurnitureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFurnitureInclude<ExtArgs> | null
    /**
     * Filter, which OrderFurnitures to fetch.
     */
    where?: OrderFurnitureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderFurnitures to fetch.
     */
    orderBy?: OrderFurnitureOrderByWithRelationInput | OrderFurnitureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderFurnitures.
     */
    cursor?: OrderFurnitureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderFurnitures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderFurnitures.
     */
    skip?: number
    distinct?: OrderFurnitureScalarFieldEnum | OrderFurnitureScalarFieldEnum[]
  }

  /**
   * OrderFurniture create
   */
  export type OrderFurnitureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFurniture
     */
    select?: OrderFurnitureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFurnitureInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderFurniture.
     */
    data: XOR<OrderFurnitureCreateInput, OrderFurnitureUncheckedCreateInput>
  }

  /**
   * OrderFurniture createMany
   */
  export type OrderFurnitureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderFurnitures.
     */
    data: OrderFurnitureCreateManyInput | OrderFurnitureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderFurniture createManyAndReturn
   */
  export type OrderFurnitureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFurniture
     */
    select?: OrderFurnitureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OrderFurnitures.
     */
    data: OrderFurnitureCreateManyInput | OrderFurnitureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFurnitureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderFurniture update
   */
  export type OrderFurnitureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFurniture
     */
    select?: OrderFurnitureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFurnitureInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderFurniture.
     */
    data: XOR<OrderFurnitureUpdateInput, OrderFurnitureUncheckedUpdateInput>
    /**
     * Choose, which OrderFurniture to update.
     */
    where: OrderFurnitureWhereUniqueInput
  }

  /**
   * OrderFurniture updateMany
   */
  export type OrderFurnitureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderFurnitures.
     */
    data: XOR<OrderFurnitureUpdateManyMutationInput, OrderFurnitureUncheckedUpdateManyInput>
    /**
     * Filter which OrderFurnitures to update
     */
    where?: OrderFurnitureWhereInput
  }

  /**
   * OrderFurniture upsert
   */
  export type OrderFurnitureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFurniture
     */
    select?: OrderFurnitureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFurnitureInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderFurniture to update in case it exists.
     */
    where: OrderFurnitureWhereUniqueInput
    /**
     * In case the OrderFurniture found by the `where` argument doesn't exist, create a new OrderFurniture with this data.
     */
    create: XOR<OrderFurnitureCreateInput, OrderFurnitureUncheckedCreateInput>
    /**
     * In case the OrderFurniture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderFurnitureUpdateInput, OrderFurnitureUncheckedUpdateInput>
  }

  /**
   * OrderFurniture delete
   */
  export type OrderFurnitureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFurniture
     */
    select?: OrderFurnitureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFurnitureInclude<ExtArgs> | null
    /**
     * Filter which OrderFurniture to delete.
     */
    where: OrderFurnitureWhereUniqueInput
  }

  /**
   * OrderFurniture deleteMany
   */
  export type OrderFurnitureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderFurnitures to delete
     */
    where?: OrderFurnitureWhereInput
  }

  /**
   * OrderFurniture without action
   */
  export type OrderFurnitureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderFurniture
     */
    select?: OrderFurnitureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderFurnitureInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FurnituresScalarFieldEnum: {
    id: 'id',
    nama_furniture: 'nama_furniture',
    slug: 'slug',
    deskripsi: 'deskripsi',
    harga: 'harga',
    categories: 'categories',
    image: 'image',
    store_id: 'store_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type FurnituresScalarFieldEnum = (typeof FurnituresScalarFieldEnum)[keyof typeof FurnituresScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id',
    id_furniture: 'id_furniture',
    user_email: 'user_email',
    nama_furniture: 'nama_furniture',
    slug: 'slug',
    harga: 'harga',
    categories: 'categories',
    image: 'image'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    id: 'id',
    nama_toko: 'nama_toko',
    slug: 'slug',
    deskripsi: 'deskripsi',
    telp: 'telp',
    user_email: 'user_email',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    user_email: 'user_email',
    total_harga: 'total_harga',
    token: 'token',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const OrderFurnitureScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    furnitureId: 'furnitureId',
    storeId: 'storeId',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type OrderFurnitureScalarFieldEnum = (typeof OrderFurnitureScalarFieldEnum)[keyof typeof OrderFurnitureScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type furnituresWhereInput = {
    AND?: furnituresWhereInput | furnituresWhereInput[]
    OR?: furnituresWhereInput[]
    NOT?: furnituresWhereInput | furnituresWhereInput[]
    id?: IntFilter<"furnitures"> | number
    nama_furniture?: StringFilter<"furnitures"> | string
    slug?: StringFilter<"furnitures"> | string
    deskripsi?: StringFilter<"furnitures"> | string
    harga?: FloatFilter<"furnitures"> | number
    categories?: StringFilter<"furnitures"> | string
    image?: StringNullableFilter<"furnitures"> | string | null
    store_id?: IntFilter<"furnitures"> | number
    created_at?: DateTimeFilter<"furnitures"> | Date | string
    updated_at?: DateTimeFilter<"furnitures"> | Date | string
    Store?: XOR<StoreNullableRelationFilter, StoreWhereInput> | null
    OrderFurniture?: OrderFurnitureListRelationFilter
  }

  export type furnituresOrderByWithRelationInput = {
    id?: SortOrder
    nama_furniture?: SortOrder
    slug?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    categories?: SortOrder
    image?: SortOrderInput | SortOrder
    store_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    Store?: StoreOrderByWithRelationInput
    OrderFurniture?: OrderFurnitureOrderByRelationAggregateInput
  }

  export type furnituresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: furnituresWhereInput | furnituresWhereInput[]
    OR?: furnituresWhereInput[]
    NOT?: furnituresWhereInput | furnituresWhereInput[]
    nama_furniture?: StringFilter<"furnitures"> | string
    deskripsi?: StringFilter<"furnitures"> | string
    harga?: FloatFilter<"furnitures"> | number
    categories?: StringFilter<"furnitures"> | string
    image?: StringNullableFilter<"furnitures"> | string | null
    store_id?: IntFilter<"furnitures"> | number
    created_at?: DateTimeFilter<"furnitures"> | Date | string
    updated_at?: DateTimeFilter<"furnitures"> | Date | string
    Store?: XOR<StoreNullableRelationFilter, StoreWhereInput> | null
    OrderFurniture?: OrderFurnitureListRelationFilter
  }, "id" | "slug">

  export type furnituresOrderByWithAggregationInput = {
    id?: SortOrder
    nama_furniture?: SortOrder
    slug?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    categories?: SortOrder
    image?: SortOrderInput | SortOrder
    store_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: furnituresCountOrderByAggregateInput
    _avg?: furnituresAvgOrderByAggregateInput
    _max?: furnituresMaxOrderByAggregateInput
    _min?: furnituresMinOrderByAggregateInput
    _sum?: furnituresSumOrderByAggregateInput
  }

  export type furnituresScalarWhereWithAggregatesInput = {
    AND?: furnituresScalarWhereWithAggregatesInput | furnituresScalarWhereWithAggregatesInput[]
    OR?: furnituresScalarWhereWithAggregatesInput[]
    NOT?: furnituresScalarWhereWithAggregatesInput | furnituresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"furnitures"> | number
    nama_furniture?: StringWithAggregatesFilter<"furnitures"> | string
    slug?: StringWithAggregatesFilter<"furnitures"> | string
    deskripsi?: StringWithAggregatesFilter<"furnitures"> | string
    harga?: FloatWithAggregatesFilter<"furnitures"> | number
    categories?: StringWithAggregatesFilter<"furnitures"> | string
    image?: StringNullableWithAggregatesFilter<"furnitures"> | string | null
    store_id?: IntWithAggregatesFilter<"furnitures"> | number
    created_at?: DateTimeWithAggregatesFilter<"furnitures"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"furnitures"> | Date | string
  }

  export type cartWhereInput = {
    AND?: cartWhereInput | cartWhereInput[]
    OR?: cartWhereInput[]
    NOT?: cartWhereInput | cartWhereInput[]
    id?: IntFilter<"cart"> | number
    id_furniture?: IntFilter<"cart"> | number
    user_email?: StringNullableFilter<"cart"> | string | null
    nama_furniture?: StringFilter<"cart"> | string
    slug?: StringFilter<"cart"> | string
    harga?: FloatFilter<"cart"> | number
    categories?: StringFilter<"cart"> | string
    image?: StringNullableFilter<"cart"> | string | null
  }

  export type cartOrderByWithRelationInput = {
    id?: SortOrder
    id_furniture?: SortOrder
    user_email?: SortOrderInput | SortOrder
    nama_furniture?: SortOrder
    slug?: SortOrder
    harga?: SortOrder
    categories?: SortOrder
    image?: SortOrderInput | SortOrder
  }

  export type cartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cartWhereInput | cartWhereInput[]
    OR?: cartWhereInput[]
    NOT?: cartWhereInput | cartWhereInput[]
    id_furniture?: IntFilter<"cart"> | number
    user_email?: StringNullableFilter<"cart"> | string | null
    nama_furniture?: StringFilter<"cart"> | string
    slug?: StringFilter<"cart"> | string
    harga?: FloatFilter<"cart"> | number
    categories?: StringFilter<"cart"> | string
    image?: StringNullableFilter<"cart"> | string | null
  }, "id">

  export type cartOrderByWithAggregationInput = {
    id?: SortOrder
    id_furniture?: SortOrder
    user_email?: SortOrderInput | SortOrder
    nama_furniture?: SortOrder
    slug?: SortOrder
    harga?: SortOrder
    categories?: SortOrder
    image?: SortOrderInput | SortOrder
    _count?: cartCountOrderByAggregateInput
    _avg?: cartAvgOrderByAggregateInput
    _max?: cartMaxOrderByAggregateInput
    _min?: cartMinOrderByAggregateInput
    _sum?: cartSumOrderByAggregateInput
  }

  export type cartScalarWhereWithAggregatesInput = {
    AND?: cartScalarWhereWithAggregatesInput | cartScalarWhereWithAggregatesInput[]
    OR?: cartScalarWhereWithAggregatesInput[]
    NOT?: cartScalarWhereWithAggregatesInput | cartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cart"> | number
    id_furniture?: IntWithAggregatesFilter<"cart"> | number
    user_email?: StringNullableWithAggregatesFilter<"cart"> | string | null
    nama_furniture?: StringWithAggregatesFilter<"cart"> | string
    slug?: StringWithAggregatesFilter<"cart"> | string
    harga?: FloatWithAggregatesFilter<"cart"> | number
    categories?: StringWithAggregatesFilter<"cart"> | string
    image?: StringNullableWithAggregatesFilter<"cart"> | string | null
  }

  export type StoreWhereInput = {
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    id?: IntFilter<"Store"> | number
    nama_toko?: StringFilter<"Store"> | string
    slug?: StringNullableFilter<"Store"> | string | null
    deskripsi?: StringNullableFilter<"Store"> | string | null
    telp?: StringNullableFilter<"Store"> | string | null
    user_email?: StringFilter<"Store"> | string
    created_at?: DateTimeFilter<"Store"> | Date | string
    updated_at?: DateTimeFilter<"Store"> | Date | string
    furniture?: FurnituresListRelationFilter
    OrderFurniture?: OrderFurnitureListRelationFilter
  }

  export type StoreOrderByWithRelationInput = {
    id?: SortOrder
    nama_toko?: SortOrder
    slug?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    telp?: SortOrderInput | SortOrder
    user_email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    furniture?: furnituresOrderByRelationAggregateInput
    OrderFurniture?: OrderFurnitureOrderByRelationAggregateInput
  }

  export type StoreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    nama_toko?: StringFilter<"Store"> | string
    deskripsi?: StringNullableFilter<"Store"> | string | null
    telp?: StringNullableFilter<"Store"> | string | null
    user_email?: StringFilter<"Store"> | string
    created_at?: DateTimeFilter<"Store"> | Date | string
    updated_at?: DateTimeFilter<"Store"> | Date | string
    furniture?: FurnituresListRelationFilter
    OrderFurniture?: OrderFurnitureListRelationFilter
  }, "id" | "slug">

  export type StoreOrderByWithAggregationInput = {
    id?: SortOrder
    nama_toko?: SortOrder
    slug?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    telp?: SortOrderInput | SortOrder
    user_email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: StoreCountOrderByAggregateInput
    _avg?: StoreAvgOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
    _sum?: StoreSumOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    OR?: StoreScalarWhereWithAggregatesInput[]
    NOT?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Store"> | number
    nama_toko?: StringWithAggregatesFilter<"Store"> | string
    slug?: StringNullableWithAggregatesFilter<"Store"> | string | null
    deskripsi?: StringNullableWithAggregatesFilter<"Store"> | string | null
    telp?: StringNullableWithAggregatesFilter<"Store"> | string | null
    user_email?: StringWithAggregatesFilter<"Store"> | string
    created_at?: DateTimeWithAggregatesFilter<"Store"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Store"> | Date | string
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    id?: StringFilter<"Orders"> | string
    user_email?: StringFilter<"Orders"> | string
    total_harga?: FloatFilter<"Orders"> | number
    token?: StringFilter<"Orders"> | string
    status?: StringFilter<"Orders"> | string
    created_at?: DateTimeFilter<"Orders"> | Date | string
    updated_at?: DateTimeFilter<"Orders"> | Date | string
    OrderFurniture?: OrderFurnitureListRelationFilter
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    user_email?: SortOrder
    total_harga?: SortOrder
    token?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    OrderFurniture?: OrderFurnitureOrderByRelationAggregateInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    user_email?: StringFilter<"Orders"> | string
    total_harga?: FloatFilter<"Orders"> | number
    token?: StringFilter<"Orders"> | string
    status?: StringFilter<"Orders"> | string
    created_at?: DateTimeFilter<"Orders"> | Date | string
    updated_at?: DateTimeFilter<"Orders"> | Date | string
    OrderFurniture?: OrderFurnitureListRelationFilter
  }, "id">

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    user_email?: SortOrder
    total_harga?: SortOrder
    token?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Orders"> | string
    user_email?: StringWithAggregatesFilter<"Orders"> | string
    total_harga?: FloatWithAggregatesFilter<"Orders"> | number
    token?: StringWithAggregatesFilter<"Orders"> | string
    status?: StringWithAggregatesFilter<"Orders"> | string
    created_at?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
  }

  export type OrderFurnitureWhereInput = {
    AND?: OrderFurnitureWhereInput | OrderFurnitureWhereInput[]
    OR?: OrderFurnitureWhereInput[]
    NOT?: OrderFurnitureWhereInput | OrderFurnitureWhereInput[]
    id?: IntFilter<"OrderFurniture"> | number
    orderId?: StringFilter<"OrderFurniture"> | string
    furnitureId?: IntFilter<"OrderFurniture"> | number
    storeId?: IntFilter<"OrderFurniture"> | number
    created_at?: DateTimeFilter<"OrderFurniture"> | Date | string
    updated_at?: DateTimeFilter<"OrderFurniture"> | Date | string
    orders?: XOR<OrdersRelationFilter, OrdersWhereInput>
    furnitures?: XOR<FurnituresRelationFilter, furnituresWhereInput>
    store?: XOR<StoreRelationFilter, StoreWhereInput>
  }

  export type OrderFurnitureOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    furnitureId?: SortOrder
    storeId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    orders?: OrdersOrderByWithRelationInput
    furnitures?: furnituresOrderByWithRelationInput
    store?: StoreOrderByWithRelationInput
  }

  export type OrderFurnitureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderFurnitureWhereInput | OrderFurnitureWhereInput[]
    OR?: OrderFurnitureWhereInput[]
    NOT?: OrderFurnitureWhereInput | OrderFurnitureWhereInput[]
    orderId?: StringFilter<"OrderFurniture"> | string
    furnitureId?: IntFilter<"OrderFurniture"> | number
    storeId?: IntFilter<"OrderFurniture"> | number
    created_at?: DateTimeFilter<"OrderFurniture"> | Date | string
    updated_at?: DateTimeFilter<"OrderFurniture"> | Date | string
    orders?: XOR<OrdersRelationFilter, OrdersWhereInput>
    furnitures?: XOR<FurnituresRelationFilter, furnituresWhereInput>
    store?: XOR<StoreRelationFilter, StoreWhereInput>
  }, "id">

  export type OrderFurnitureOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    furnitureId?: SortOrder
    storeId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: OrderFurnitureCountOrderByAggregateInput
    _avg?: OrderFurnitureAvgOrderByAggregateInput
    _max?: OrderFurnitureMaxOrderByAggregateInput
    _min?: OrderFurnitureMinOrderByAggregateInput
    _sum?: OrderFurnitureSumOrderByAggregateInput
  }

  export type OrderFurnitureScalarWhereWithAggregatesInput = {
    AND?: OrderFurnitureScalarWhereWithAggregatesInput | OrderFurnitureScalarWhereWithAggregatesInput[]
    OR?: OrderFurnitureScalarWhereWithAggregatesInput[]
    NOT?: OrderFurnitureScalarWhereWithAggregatesInput | OrderFurnitureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderFurniture"> | number
    orderId?: StringWithAggregatesFilter<"OrderFurniture"> | string
    furnitureId?: IntWithAggregatesFilter<"OrderFurniture"> | number
    storeId?: IntWithAggregatesFilter<"OrderFurniture"> | number
    created_at?: DateTimeWithAggregatesFilter<"OrderFurniture"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"OrderFurniture"> | Date | string
  }

  export type furnituresCreateInput = {
    nama_furniture: string
    slug: string
    deskripsi: string
    harga: number
    categories: string
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Store?: StoreCreateNestedOneWithoutFurnitureInput
    OrderFurniture?: OrderFurnitureCreateNestedManyWithoutFurnituresInput
  }

  export type furnituresUncheckedCreateInput = {
    id?: number
    nama_furniture: string
    slug: string
    deskripsi: string
    harga: number
    categories: string
    image?: string | null
    store_id: number
    created_at?: Date | string
    updated_at?: Date | string
    OrderFurniture?: OrderFurnitureUncheckedCreateNestedManyWithoutFurnituresInput
  }

  export type furnituresUpdateInput = {
    nama_furniture?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Store?: StoreUpdateOneWithoutFurnitureNestedInput
    OrderFurniture?: OrderFurnitureUpdateManyWithoutFurnituresNestedInput
  }

  export type furnituresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_furniture?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    store_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderFurniture?: OrderFurnitureUncheckedUpdateManyWithoutFurnituresNestedInput
  }

  export type furnituresCreateManyInput = {
    id?: number
    nama_furniture: string
    slug: string
    deskripsi: string
    harga: number
    categories: string
    image?: string | null
    store_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type furnituresUpdateManyMutationInput = {
    nama_furniture?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type furnituresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_furniture?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    store_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cartCreateInput = {
    id_furniture: number
    user_email?: string | null
    nama_furniture: string
    slug: string
    harga: number
    categories: string
    image?: string | null
  }

  export type cartUncheckedCreateInput = {
    id?: number
    id_furniture: number
    user_email?: string | null
    nama_furniture: string
    slug: string
    harga: number
    categories: string
    image?: string | null
  }

  export type cartUpdateInput = {
    id_furniture?: IntFieldUpdateOperationsInput | number
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    nama_furniture?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_furniture?: IntFieldUpdateOperationsInput | number
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    nama_furniture?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cartCreateManyInput = {
    id?: number
    id_furniture: number
    user_email?: string | null
    nama_furniture: string
    slug: string
    harga: number
    categories: string
    image?: string | null
  }

  export type cartUpdateManyMutationInput = {
    id_furniture?: IntFieldUpdateOperationsInput | number
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    nama_furniture?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_furniture?: IntFieldUpdateOperationsInput | number
    user_email?: NullableStringFieldUpdateOperationsInput | string | null
    nama_furniture?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StoreCreateInput = {
    nama_toko: string
    slug?: string | null
    deskripsi?: string | null
    telp?: string | null
    user_email: string
    created_at?: Date | string
    updated_at?: Date | string
    furniture?: furnituresCreateNestedManyWithoutStoreInput
    OrderFurniture?: OrderFurnitureCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateInput = {
    id?: number
    nama_toko: string
    slug?: string | null
    deskripsi?: string | null
    telp?: string | null
    user_email: string
    created_at?: Date | string
    updated_at?: Date | string
    furniture?: furnituresUncheckedCreateNestedManyWithoutStoreInput
    OrderFurniture?: OrderFurnitureUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreUpdateInput = {
    nama_toko?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    telp?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    furniture?: furnituresUpdateManyWithoutStoreNestedInput
    OrderFurniture?: OrderFurnitureUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_toko?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    telp?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    furniture?: furnituresUncheckedUpdateManyWithoutStoreNestedInput
    OrderFurniture?: OrderFurnitureUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateManyInput = {
    id?: number
    nama_toko: string
    slug?: string | null
    deskripsi?: string | null
    telp?: string | null
    user_email: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StoreUpdateManyMutationInput = {
    nama_toko?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    telp?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_toko?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    telp?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersCreateInput = {
    id: string
    user_email: string
    total_harga: number
    token: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    OrderFurniture?: OrderFurnitureCreateNestedManyWithoutOrdersInput
  }

  export type OrdersUncheckedCreateInput = {
    id: string
    user_email: string
    total_harga: number
    token: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
    OrderFurniture?: OrderFurnitureUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type OrdersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    total_harga?: FloatFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderFurniture?: OrderFurnitureUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    total_harga?: FloatFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderFurniture?: OrderFurnitureUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersCreateManyInput = {
    id: string
    user_email: string
    total_harga: number
    token: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrdersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    total_harga?: FloatFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    total_harga?: FloatFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderFurnitureCreateInput = {
    created_at?: Date | string
    updated_at?: Date | string
    orders: OrdersCreateNestedOneWithoutOrderFurnitureInput
    furnitures: furnituresCreateNestedOneWithoutOrderFurnitureInput
    store: StoreCreateNestedOneWithoutOrderFurnitureInput
  }

  export type OrderFurnitureUncheckedCreateInput = {
    id?: number
    orderId: string
    furnitureId: number
    storeId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderFurnitureUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrdersUpdateOneRequiredWithoutOrderFurnitureNestedInput
    furnitures?: furnituresUpdateOneRequiredWithoutOrderFurnitureNestedInput
    store?: StoreUpdateOneRequiredWithoutOrderFurnitureNestedInput
  }

  export type OrderFurnitureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    furnitureId?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderFurnitureCreateManyInput = {
    id?: number
    orderId: string
    furnitureId: number
    storeId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderFurnitureUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderFurnitureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    furnitureId?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StoreNullableRelationFilter = {
    is?: StoreWhereInput | null
    isNot?: StoreWhereInput | null
  }

  export type OrderFurnitureListRelationFilter = {
    every?: OrderFurnitureWhereInput
    some?: OrderFurnitureWhereInput
    none?: OrderFurnitureWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderFurnitureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type furnituresCountOrderByAggregateInput = {
    id?: SortOrder
    nama_furniture?: SortOrder
    slug?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    categories?: SortOrder
    image?: SortOrder
    store_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type furnituresAvgOrderByAggregateInput = {
    id?: SortOrder
    harga?: SortOrder
    store_id?: SortOrder
  }

  export type furnituresMaxOrderByAggregateInput = {
    id?: SortOrder
    nama_furniture?: SortOrder
    slug?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    categories?: SortOrder
    image?: SortOrder
    store_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type furnituresMinOrderByAggregateInput = {
    id?: SortOrder
    nama_furniture?: SortOrder
    slug?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    categories?: SortOrder
    image?: SortOrder
    store_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type furnituresSumOrderByAggregateInput = {
    id?: SortOrder
    harga?: SortOrder
    store_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type cartCountOrderByAggregateInput = {
    id?: SortOrder
    id_furniture?: SortOrder
    user_email?: SortOrder
    nama_furniture?: SortOrder
    slug?: SortOrder
    harga?: SortOrder
    categories?: SortOrder
    image?: SortOrder
  }

  export type cartAvgOrderByAggregateInput = {
    id?: SortOrder
    id_furniture?: SortOrder
    harga?: SortOrder
  }

  export type cartMaxOrderByAggregateInput = {
    id?: SortOrder
    id_furniture?: SortOrder
    user_email?: SortOrder
    nama_furniture?: SortOrder
    slug?: SortOrder
    harga?: SortOrder
    categories?: SortOrder
    image?: SortOrder
  }

  export type cartMinOrderByAggregateInput = {
    id?: SortOrder
    id_furniture?: SortOrder
    user_email?: SortOrder
    nama_furniture?: SortOrder
    slug?: SortOrder
    harga?: SortOrder
    categories?: SortOrder
    image?: SortOrder
  }

  export type cartSumOrderByAggregateInput = {
    id?: SortOrder
    id_furniture?: SortOrder
    harga?: SortOrder
  }

  export type FurnituresListRelationFilter = {
    every?: furnituresWhereInput
    some?: furnituresWhereInput
    none?: furnituresWhereInput
  }

  export type furnituresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreCountOrderByAggregateInput = {
    id?: SortOrder
    nama_toko?: SortOrder
    slug?: SortOrder
    deskripsi?: SortOrder
    telp?: SortOrder
    user_email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StoreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    id?: SortOrder
    nama_toko?: SortOrder
    slug?: SortOrder
    deskripsi?: SortOrder
    telp?: SortOrder
    user_email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    id?: SortOrder
    nama_toko?: SortOrder
    slug?: SortOrder
    deskripsi?: SortOrder
    telp?: SortOrder
    user_email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StoreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    user_email?: SortOrder
    total_harga?: SortOrder
    token?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    total_harga?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_email?: SortOrder
    total_harga?: SortOrder
    token?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    user_email?: SortOrder
    total_harga?: SortOrder
    token?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    total_harga?: SortOrder
  }

  export type OrdersRelationFilter = {
    is?: OrdersWhereInput
    isNot?: OrdersWhereInput
  }

  export type FurnituresRelationFilter = {
    is?: furnituresWhereInput
    isNot?: furnituresWhereInput
  }

  export type StoreRelationFilter = {
    is?: StoreWhereInput
    isNot?: StoreWhereInput
  }

  export type OrderFurnitureCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    furnitureId?: SortOrder
    storeId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderFurnitureAvgOrderByAggregateInput = {
    id?: SortOrder
    furnitureId?: SortOrder
    storeId?: SortOrder
  }

  export type OrderFurnitureMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    furnitureId?: SortOrder
    storeId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderFurnitureMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    furnitureId?: SortOrder
    storeId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderFurnitureSumOrderByAggregateInput = {
    id?: SortOrder
    furnitureId?: SortOrder
    storeId?: SortOrder
  }

  export type StoreCreateNestedOneWithoutFurnitureInput = {
    create?: XOR<StoreCreateWithoutFurnitureInput, StoreUncheckedCreateWithoutFurnitureInput>
    connectOrCreate?: StoreCreateOrConnectWithoutFurnitureInput
    connect?: StoreWhereUniqueInput
  }

  export type OrderFurnitureCreateNestedManyWithoutFurnituresInput = {
    create?: XOR<OrderFurnitureCreateWithoutFurnituresInput, OrderFurnitureUncheckedCreateWithoutFurnituresInput> | OrderFurnitureCreateWithoutFurnituresInput[] | OrderFurnitureUncheckedCreateWithoutFurnituresInput[]
    connectOrCreate?: OrderFurnitureCreateOrConnectWithoutFurnituresInput | OrderFurnitureCreateOrConnectWithoutFurnituresInput[]
    createMany?: OrderFurnitureCreateManyFurnituresInputEnvelope
    connect?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
  }

  export type OrderFurnitureUncheckedCreateNestedManyWithoutFurnituresInput = {
    create?: XOR<OrderFurnitureCreateWithoutFurnituresInput, OrderFurnitureUncheckedCreateWithoutFurnituresInput> | OrderFurnitureCreateWithoutFurnituresInput[] | OrderFurnitureUncheckedCreateWithoutFurnituresInput[]
    connectOrCreate?: OrderFurnitureCreateOrConnectWithoutFurnituresInput | OrderFurnitureCreateOrConnectWithoutFurnituresInput[]
    createMany?: OrderFurnitureCreateManyFurnituresInputEnvelope
    connect?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StoreUpdateOneWithoutFurnitureNestedInput = {
    create?: XOR<StoreCreateWithoutFurnitureInput, StoreUncheckedCreateWithoutFurnitureInput>
    connectOrCreate?: StoreCreateOrConnectWithoutFurnitureInput
    upsert?: StoreUpsertWithoutFurnitureInput
    disconnect?: StoreWhereInput | boolean
    delete?: StoreWhereInput | boolean
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutFurnitureInput, StoreUpdateWithoutFurnitureInput>, StoreUncheckedUpdateWithoutFurnitureInput>
  }

  export type OrderFurnitureUpdateManyWithoutFurnituresNestedInput = {
    create?: XOR<OrderFurnitureCreateWithoutFurnituresInput, OrderFurnitureUncheckedCreateWithoutFurnituresInput> | OrderFurnitureCreateWithoutFurnituresInput[] | OrderFurnitureUncheckedCreateWithoutFurnituresInput[]
    connectOrCreate?: OrderFurnitureCreateOrConnectWithoutFurnituresInput | OrderFurnitureCreateOrConnectWithoutFurnituresInput[]
    upsert?: OrderFurnitureUpsertWithWhereUniqueWithoutFurnituresInput | OrderFurnitureUpsertWithWhereUniqueWithoutFurnituresInput[]
    createMany?: OrderFurnitureCreateManyFurnituresInputEnvelope
    set?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
    disconnect?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
    delete?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
    connect?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
    update?: OrderFurnitureUpdateWithWhereUniqueWithoutFurnituresInput | OrderFurnitureUpdateWithWhereUniqueWithoutFurnituresInput[]
    updateMany?: OrderFurnitureUpdateManyWithWhereWithoutFurnituresInput | OrderFurnitureUpdateManyWithWhereWithoutFurnituresInput[]
    deleteMany?: OrderFurnitureScalarWhereInput | OrderFurnitureScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderFurnitureUncheckedUpdateManyWithoutFurnituresNestedInput = {
    create?: XOR<OrderFurnitureCreateWithoutFurnituresInput, OrderFurnitureUncheckedCreateWithoutFurnituresInput> | OrderFurnitureCreateWithoutFurnituresInput[] | OrderFurnitureUncheckedCreateWithoutFurnituresInput[]
    connectOrCreate?: OrderFurnitureCreateOrConnectWithoutFurnituresInput | OrderFurnitureCreateOrConnectWithoutFurnituresInput[]
    upsert?: OrderFurnitureUpsertWithWhereUniqueWithoutFurnituresInput | OrderFurnitureUpsertWithWhereUniqueWithoutFurnituresInput[]
    createMany?: OrderFurnitureCreateManyFurnituresInputEnvelope
    set?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
    disconnect?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
    delete?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
    connect?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
    update?: OrderFurnitureUpdateWithWhereUniqueWithoutFurnituresInput | OrderFurnitureUpdateWithWhereUniqueWithoutFurnituresInput[]
    updateMany?: OrderFurnitureUpdateManyWithWhereWithoutFurnituresInput | OrderFurnitureUpdateManyWithWhereWithoutFurnituresInput[]
    deleteMany?: OrderFurnitureScalarWhereInput | OrderFurnitureScalarWhereInput[]
  }

  export type furnituresCreateNestedManyWithoutStoreInput = {
    create?: XOR<furnituresCreateWithoutStoreInput, furnituresUncheckedCreateWithoutStoreInput> | furnituresCreateWithoutStoreInput[] | furnituresUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: furnituresCreateOrConnectWithoutStoreInput | furnituresCreateOrConnectWithoutStoreInput[]
    createMany?: furnituresCreateManyStoreInputEnvelope
    connect?: furnituresWhereUniqueInput | furnituresWhereUniqueInput[]
  }

  export type OrderFurnitureCreateNestedManyWithoutStoreInput = {
    create?: XOR<OrderFurnitureCreateWithoutStoreInput, OrderFurnitureUncheckedCreateWithoutStoreInput> | OrderFurnitureCreateWithoutStoreInput[] | OrderFurnitureUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: OrderFurnitureCreateOrConnectWithoutStoreInput | OrderFurnitureCreateOrConnectWithoutStoreInput[]
    createMany?: OrderFurnitureCreateManyStoreInputEnvelope
    connect?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
  }

  export type furnituresUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<furnituresCreateWithoutStoreInput, furnituresUncheckedCreateWithoutStoreInput> | furnituresCreateWithoutStoreInput[] | furnituresUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: furnituresCreateOrConnectWithoutStoreInput | furnituresCreateOrConnectWithoutStoreInput[]
    createMany?: furnituresCreateManyStoreInputEnvelope
    connect?: furnituresWhereUniqueInput | furnituresWhereUniqueInput[]
  }

  export type OrderFurnitureUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<OrderFurnitureCreateWithoutStoreInput, OrderFurnitureUncheckedCreateWithoutStoreInput> | OrderFurnitureCreateWithoutStoreInput[] | OrderFurnitureUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: OrderFurnitureCreateOrConnectWithoutStoreInput | OrderFurnitureCreateOrConnectWithoutStoreInput[]
    createMany?: OrderFurnitureCreateManyStoreInputEnvelope
    connect?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
  }

  export type furnituresUpdateManyWithoutStoreNestedInput = {
    create?: XOR<furnituresCreateWithoutStoreInput, furnituresUncheckedCreateWithoutStoreInput> | furnituresCreateWithoutStoreInput[] | furnituresUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: furnituresCreateOrConnectWithoutStoreInput | furnituresCreateOrConnectWithoutStoreInput[]
    upsert?: furnituresUpsertWithWhereUniqueWithoutStoreInput | furnituresUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: furnituresCreateManyStoreInputEnvelope
    set?: furnituresWhereUniqueInput | furnituresWhereUniqueInput[]
    disconnect?: furnituresWhereUniqueInput | furnituresWhereUniqueInput[]
    delete?: furnituresWhereUniqueInput | furnituresWhereUniqueInput[]
    connect?: furnituresWhereUniqueInput | furnituresWhereUniqueInput[]
    update?: furnituresUpdateWithWhereUniqueWithoutStoreInput | furnituresUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: furnituresUpdateManyWithWhereWithoutStoreInput | furnituresUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: furnituresScalarWhereInput | furnituresScalarWhereInput[]
  }

  export type OrderFurnitureUpdateManyWithoutStoreNestedInput = {
    create?: XOR<OrderFurnitureCreateWithoutStoreInput, OrderFurnitureUncheckedCreateWithoutStoreInput> | OrderFurnitureCreateWithoutStoreInput[] | OrderFurnitureUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: OrderFurnitureCreateOrConnectWithoutStoreInput | OrderFurnitureCreateOrConnectWithoutStoreInput[]
    upsert?: OrderFurnitureUpsertWithWhereUniqueWithoutStoreInput | OrderFurnitureUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: OrderFurnitureCreateManyStoreInputEnvelope
    set?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
    disconnect?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
    delete?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
    connect?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
    update?: OrderFurnitureUpdateWithWhereUniqueWithoutStoreInput | OrderFurnitureUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: OrderFurnitureUpdateManyWithWhereWithoutStoreInput | OrderFurnitureUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: OrderFurnitureScalarWhereInput | OrderFurnitureScalarWhereInput[]
  }

  export type furnituresUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<furnituresCreateWithoutStoreInput, furnituresUncheckedCreateWithoutStoreInput> | furnituresCreateWithoutStoreInput[] | furnituresUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: furnituresCreateOrConnectWithoutStoreInput | furnituresCreateOrConnectWithoutStoreInput[]
    upsert?: furnituresUpsertWithWhereUniqueWithoutStoreInput | furnituresUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: furnituresCreateManyStoreInputEnvelope
    set?: furnituresWhereUniqueInput | furnituresWhereUniqueInput[]
    disconnect?: furnituresWhereUniqueInput | furnituresWhereUniqueInput[]
    delete?: furnituresWhereUniqueInput | furnituresWhereUniqueInput[]
    connect?: furnituresWhereUniqueInput | furnituresWhereUniqueInput[]
    update?: furnituresUpdateWithWhereUniqueWithoutStoreInput | furnituresUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: furnituresUpdateManyWithWhereWithoutStoreInput | furnituresUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: furnituresScalarWhereInput | furnituresScalarWhereInput[]
  }

  export type OrderFurnitureUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<OrderFurnitureCreateWithoutStoreInput, OrderFurnitureUncheckedCreateWithoutStoreInput> | OrderFurnitureCreateWithoutStoreInput[] | OrderFurnitureUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: OrderFurnitureCreateOrConnectWithoutStoreInput | OrderFurnitureCreateOrConnectWithoutStoreInput[]
    upsert?: OrderFurnitureUpsertWithWhereUniqueWithoutStoreInput | OrderFurnitureUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: OrderFurnitureCreateManyStoreInputEnvelope
    set?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
    disconnect?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
    delete?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
    connect?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
    update?: OrderFurnitureUpdateWithWhereUniqueWithoutStoreInput | OrderFurnitureUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: OrderFurnitureUpdateManyWithWhereWithoutStoreInput | OrderFurnitureUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: OrderFurnitureScalarWhereInput | OrderFurnitureScalarWhereInput[]
  }

  export type OrderFurnitureCreateNestedManyWithoutOrdersInput = {
    create?: XOR<OrderFurnitureCreateWithoutOrdersInput, OrderFurnitureUncheckedCreateWithoutOrdersInput> | OrderFurnitureCreateWithoutOrdersInput[] | OrderFurnitureUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: OrderFurnitureCreateOrConnectWithoutOrdersInput | OrderFurnitureCreateOrConnectWithoutOrdersInput[]
    createMany?: OrderFurnitureCreateManyOrdersInputEnvelope
    connect?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
  }

  export type OrderFurnitureUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<OrderFurnitureCreateWithoutOrdersInput, OrderFurnitureUncheckedCreateWithoutOrdersInput> | OrderFurnitureCreateWithoutOrdersInput[] | OrderFurnitureUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: OrderFurnitureCreateOrConnectWithoutOrdersInput | OrderFurnitureCreateOrConnectWithoutOrdersInput[]
    createMany?: OrderFurnitureCreateManyOrdersInputEnvelope
    connect?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
  }

  export type OrderFurnitureUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<OrderFurnitureCreateWithoutOrdersInput, OrderFurnitureUncheckedCreateWithoutOrdersInput> | OrderFurnitureCreateWithoutOrdersInput[] | OrderFurnitureUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: OrderFurnitureCreateOrConnectWithoutOrdersInput | OrderFurnitureCreateOrConnectWithoutOrdersInput[]
    upsert?: OrderFurnitureUpsertWithWhereUniqueWithoutOrdersInput | OrderFurnitureUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: OrderFurnitureCreateManyOrdersInputEnvelope
    set?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
    disconnect?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
    delete?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
    connect?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
    update?: OrderFurnitureUpdateWithWhereUniqueWithoutOrdersInput | OrderFurnitureUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: OrderFurnitureUpdateManyWithWhereWithoutOrdersInput | OrderFurnitureUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: OrderFurnitureScalarWhereInput | OrderFurnitureScalarWhereInput[]
  }

  export type OrderFurnitureUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<OrderFurnitureCreateWithoutOrdersInput, OrderFurnitureUncheckedCreateWithoutOrdersInput> | OrderFurnitureCreateWithoutOrdersInput[] | OrderFurnitureUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: OrderFurnitureCreateOrConnectWithoutOrdersInput | OrderFurnitureCreateOrConnectWithoutOrdersInput[]
    upsert?: OrderFurnitureUpsertWithWhereUniqueWithoutOrdersInput | OrderFurnitureUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: OrderFurnitureCreateManyOrdersInputEnvelope
    set?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
    disconnect?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
    delete?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
    connect?: OrderFurnitureWhereUniqueInput | OrderFurnitureWhereUniqueInput[]
    update?: OrderFurnitureUpdateWithWhereUniqueWithoutOrdersInput | OrderFurnitureUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: OrderFurnitureUpdateManyWithWhereWithoutOrdersInput | OrderFurnitureUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: OrderFurnitureScalarWhereInput | OrderFurnitureScalarWhereInput[]
  }

  export type OrdersCreateNestedOneWithoutOrderFurnitureInput = {
    create?: XOR<OrdersCreateWithoutOrderFurnitureInput, OrdersUncheckedCreateWithoutOrderFurnitureInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrderFurnitureInput
    connect?: OrdersWhereUniqueInput
  }

  export type furnituresCreateNestedOneWithoutOrderFurnitureInput = {
    create?: XOR<furnituresCreateWithoutOrderFurnitureInput, furnituresUncheckedCreateWithoutOrderFurnitureInput>
    connectOrCreate?: furnituresCreateOrConnectWithoutOrderFurnitureInput
    connect?: furnituresWhereUniqueInput
  }

  export type StoreCreateNestedOneWithoutOrderFurnitureInput = {
    create?: XOR<StoreCreateWithoutOrderFurnitureInput, StoreUncheckedCreateWithoutOrderFurnitureInput>
    connectOrCreate?: StoreCreateOrConnectWithoutOrderFurnitureInput
    connect?: StoreWhereUniqueInput
  }

  export type OrdersUpdateOneRequiredWithoutOrderFurnitureNestedInput = {
    create?: XOR<OrdersCreateWithoutOrderFurnitureInput, OrdersUncheckedCreateWithoutOrderFurnitureInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrderFurnitureInput
    upsert?: OrdersUpsertWithoutOrderFurnitureInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutOrderFurnitureInput, OrdersUpdateWithoutOrderFurnitureInput>, OrdersUncheckedUpdateWithoutOrderFurnitureInput>
  }

  export type furnituresUpdateOneRequiredWithoutOrderFurnitureNestedInput = {
    create?: XOR<furnituresCreateWithoutOrderFurnitureInput, furnituresUncheckedCreateWithoutOrderFurnitureInput>
    connectOrCreate?: furnituresCreateOrConnectWithoutOrderFurnitureInput
    upsert?: furnituresUpsertWithoutOrderFurnitureInput
    connect?: furnituresWhereUniqueInput
    update?: XOR<XOR<furnituresUpdateToOneWithWhereWithoutOrderFurnitureInput, furnituresUpdateWithoutOrderFurnitureInput>, furnituresUncheckedUpdateWithoutOrderFurnitureInput>
  }

  export type StoreUpdateOneRequiredWithoutOrderFurnitureNestedInput = {
    create?: XOR<StoreCreateWithoutOrderFurnitureInput, StoreUncheckedCreateWithoutOrderFurnitureInput>
    connectOrCreate?: StoreCreateOrConnectWithoutOrderFurnitureInput
    upsert?: StoreUpsertWithoutOrderFurnitureInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutOrderFurnitureInput, StoreUpdateWithoutOrderFurnitureInput>, StoreUncheckedUpdateWithoutOrderFurnitureInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StoreCreateWithoutFurnitureInput = {
    nama_toko: string
    slug?: string | null
    deskripsi?: string | null
    telp?: string | null
    user_email: string
    created_at?: Date | string
    updated_at?: Date | string
    OrderFurniture?: OrderFurnitureCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutFurnitureInput = {
    id?: number
    nama_toko: string
    slug?: string | null
    deskripsi?: string | null
    telp?: string | null
    user_email: string
    created_at?: Date | string
    updated_at?: Date | string
    OrderFurniture?: OrderFurnitureUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutFurnitureInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutFurnitureInput, StoreUncheckedCreateWithoutFurnitureInput>
  }

  export type OrderFurnitureCreateWithoutFurnituresInput = {
    created_at?: Date | string
    updated_at?: Date | string
    orders: OrdersCreateNestedOneWithoutOrderFurnitureInput
    store: StoreCreateNestedOneWithoutOrderFurnitureInput
  }

  export type OrderFurnitureUncheckedCreateWithoutFurnituresInput = {
    id?: number
    orderId: string
    storeId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderFurnitureCreateOrConnectWithoutFurnituresInput = {
    where: OrderFurnitureWhereUniqueInput
    create: XOR<OrderFurnitureCreateWithoutFurnituresInput, OrderFurnitureUncheckedCreateWithoutFurnituresInput>
  }

  export type OrderFurnitureCreateManyFurnituresInputEnvelope = {
    data: OrderFurnitureCreateManyFurnituresInput | OrderFurnitureCreateManyFurnituresInput[]
    skipDuplicates?: boolean
  }

  export type StoreUpsertWithoutFurnitureInput = {
    update: XOR<StoreUpdateWithoutFurnitureInput, StoreUncheckedUpdateWithoutFurnitureInput>
    create: XOR<StoreCreateWithoutFurnitureInput, StoreUncheckedCreateWithoutFurnitureInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutFurnitureInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutFurnitureInput, StoreUncheckedUpdateWithoutFurnitureInput>
  }

  export type StoreUpdateWithoutFurnitureInput = {
    nama_toko?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    telp?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderFurniture?: OrderFurnitureUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutFurnitureInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_toko?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    telp?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderFurniture?: OrderFurnitureUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type OrderFurnitureUpsertWithWhereUniqueWithoutFurnituresInput = {
    where: OrderFurnitureWhereUniqueInput
    update: XOR<OrderFurnitureUpdateWithoutFurnituresInput, OrderFurnitureUncheckedUpdateWithoutFurnituresInput>
    create: XOR<OrderFurnitureCreateWithoutFurnituresInput, OrderFurnitureUncheckedCreateWithoutFurnituresInput>
  }

  export type OrderFurnitureUpdateWithWhereUniqueWithoutFurnituresInput = {
    where: OrderFurnitureWhereUniqueInput
    data: XOR<OrderFurnitureUpdateWithoutFurnituresInput, OrderFurnitureUncheckedUpdateWithoutFurnituresInput>
  }

  export type OrderFurnitureUpdateManyWithWhereWithoutFurnituresInput = {
    where: OrderFurnitureScalarWhereInput
    data: XOR<OrderFurnitureUpdateManyMutationInput, OrderFurnitureUncheckedUpdateManyWithoutFurnituresInput>
  }

  export type OrderFurnitureScalarWhereInput = {
    AND?: OrderFurnitureScalarWhereInput | OrderFurnitureScalarWhereInput[]
    OR?: OrderFurnitureScalarWhereInput[]
    NOT?: OrderFurnitureScalarWhereInput | OrderFurnitureScalarWhereInput[]
    id?: IntFilter<"OrderFurniture"> | number
    orderId?: StringFilter<"OrderFurniture"> | string
    furnitureId?: IntFilter<"OrderFurniture"> | number
    storeId?: IntFilter<"OrderFurniture"> | number
    created_at?: DateTimeFilter<"OrderFurniture"> | Date | string
    updated_at?: DateTimeFilter<"OrderFurniture"> | Date | string
  }

  export type furnituresCreateWithoutStoreInput = {
    nama_furniture: string
    slug: string
    deskripsi: string
    harga: number
    categories: string
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    OrderFurniture?: OrderFurnitureCreateNestedManyWithoutFurnituresInput
  }

  export type furnituresUncheckedCreateWithoutStoreInput = {
    id?: number
    nama_furniture: string
    slug: string
    deskripsi: string
    harga: number
    categories: string
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    OrderFurniture?: OrderFurnitureUncheckedCreateNestedManyWithoutFurnituresInput
  }

  export type furnituresCreateOrConnectWithoutStoreInput = {
    where: furnituresWhereUniqueInput
    create: XOR<furnituresCreateWithoutStoreInput, furnituresUncheckedCreateWithoutStoreInput>
  }

  export type furnituresCreateManyStoreInputEnvelope = {
    data: furnituresCreateManyStoreInput | furnituresCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type OrderFurnitureCreateWithoutStoreInput = {
    created_at?: Date | string
    updated_at?: Date | string
    orders: OrdersCreateNestedOneWithoutOrderFurnitureInput
    furnitures: furnituresCreateNestedOneWithoutOrderFurnitureInput
  }

  export type OrderFurnitureUncheckedCreateWithoutStoreInput = {
    id?: number
    orderId: string
    furnitureId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderFurnitureCreateOrConnectWithoutStoreInput = {
    where: OrderFurnitureWhereUniqueInput
    create: XOR<OrderFurnitureCreateWithoutStoreInput, OrderFurnitureUncheckedCreateWithoutStoreInput>
  }

  export type OrderFurnitureCreateManyStoreInputEnvelope = {
    data: OrderFurnitureCreateManyStoreInput | OrderFurnitureCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type furnituresUpsertWithWhereUniqueWithoutStoreInput = {
    where: furnituresWhereUniqueInput
    update: XOR<furnituresUpdateWithoutStoreInput, furnituresUncheckedUpdateWithoutStoreInput>
    create: XOR<furnituresCreateWithoutStoreInput, furnituresUncheckedCreateWithoutStoreInput>
  }

  export type furnituresUpdateWithWhereUniqueWithoutStoreInput = {
    where: furnituresWhereUniqueInput
    data: XOR<furnituresUpdateWithoutStoreInput, furnituresUncheckedUpdateWithoutStoreInput>
  }

  export type furnituresUpdateManyWithWhereWithoutStoreInput = {
    where: furnituresScalarWhereInput
    data: XOR<furnituresUpdateManyMutationInput, furnituresUncheckedUpdateManyWithoutStoreInput>
  }

  export type furnituresScalarWhereInput = {
    AND?: furnituresScalarWhereInput | furnituresScalarWhereInput[]
    OR?: furnituresScalarWhereInput[]
    NOT?: furnituresScalarWhereInput | furnituresScalarWhereInput[]
    id?: IntFilter<"furnitures"> | number
    nama_furniture?: StringFilter<"furnitures"> | string
    slug?: StringFilter<"furnitures"> | string
    deskripsi?: StringFilter<"furnitures"> | string
    harga?: FloatFilter<"furnitures"> | number
    categories?: StringFilter<"furnitures"> | string
    image?: StringNullableFilter<"furnitures"> | string | null
    store_id?: IntFilter<"furnitures"> | number
    created_at?: DateTimeFilter<"furnitures"> | Date | string
    updated_at?: DateTimeFilter<"furnitures"> | Date | string
  }

  export type OrderFurnitureUpsertWithWhereUniqueWithoutStoreInput = {
    where: OrderFurnitureWhereUniqueInput
    update: XOR<OrderFurnitureUpdateWithoutStoreInput, OrderFurnitureUncheckedUpdateWithoutStoreInput>
    create: XOR<OrderFurnitureCreateWithoutStoreInput, OrderFurnitureUncheckedCreateWithoutStoreInput>
  }

  export type OrderFurnitureUpdateWithWhereUniqueWithoutStoreInput = {
    where: OrderFurnitureWhereUniqueInput
    data: XOR<OrderFurnitureUpdateWithoutStoreInput, OrderFurnitureUncheckedUpdateWithoutStoreInput>
  }

  export type OrderFurnitureUpdateManyWithWhereWithoutStoreInput = {
    where: OrderFurnitureScalarWhereInput
    data: XOR<OrderFurnitureUpdateManyMutationInput, OrderFurnitureUncheckedUpdateManyWithoutStoreInput>
  }

  export type OrderFurnitureCreateWithoutOrdersInput = {
    created_at?: Date | string
    updated_at?: Date | string
    furnitures: furnituresCreateNestedOneWithoutOrderFurnitureInput
    store: StoreCreateNestedOneWithoutOrderFurnitureInput
  }

  export type OrderFurnitureUncheckedCreateWithoutOrdersInput = {
    id?: number
    furnitureId: number
    storeId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderFurnitureCreateOrConnectWithoutOrdersInput = {
    where: OrderFurnitureWhereUniqueInput
    create: XOR<OrderFurnitureCreateWithoutOrdersInput, OrderFurnitureUncheckedCreateWithoutOrdersInput>
  }

  export type OrderFurnitureCreateManyOrdersInputEnvelope = {
    data: OrderFurnitureCreateManyOrdersInput | OrderFurnitureCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type OrderFurnitureUpsertWithWhereUniqueWithoutOrdersInput = {
    where: OrderFurnitureWhereUniqueInput
    update: XOR<OrderFurnitureUpdateWithoutOrdersInput, OrderFurnitureUncheckedUpdateWithoutOrdersInput>
    create: XOR<OrderFurnitureCreateWithoutOrdersInput, OrderFurnitureUncheckedCreateWithoutOrdersInput>
  }

  export type OrderFurnitureUpdateWithWhereUniqueWithoutOrdersInput = {
    where: OrderFurnitureWhereUniqueInput
    data: XOR<OrderFurnitureUpdateWithoutOrdersInput, OrderFurnitureUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderFurnitureUpdateManyWithWhereWithoutOrdersInput = {
    where: OrderFurnitureScalarWhereInput
    data: XOR<OrderFurnitureUpdateManyMutationInput, OrderFurnitureUncheckedUpdateManyWithoutOrdersInput>
  }

  export type OrdersCreateWithoutOrderFurnitureInput = {
    id: string
    user_email: string
    total_harga: number
    token: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrdersUncheckedCreateWithoutOrderFurnitureInput = {
    id: string
    user_email: string
    total_harga: number
    token: string
    status: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrdersCreateOrConnectWithoutOrderFurnitureInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutOrderFurnitureInput, OrdersUncheckedCreateWithoutOrderFurnitureInput>
  }

  export type furnituresCreateWithoutOrderFurnitureInput = {
    nama_furniture: string
    slug: string
    deskripsi: string
    harga: number
    categories: string
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    Store?: StoreCreateNestedOneWithoutFurnitureInput
  }

  export type furnituresUncheckedCreateWithoutOrderFurnitureInput = {
    id?: number
    nama_furniture: string
    slug: string
    deskripsi: string
    harga: number
    categories: string
    image?: string | null
    store_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type furnituresCreateOrConnectWithoutOrderFurnitureInput = {
    where: furnituresWhereUniqueInput
    create: XOR<furnituresCreateWithoutOrderFurnitureInput, furnituresUncheckedCreateWithoutOrderFurnitureInput>
  }

  export type StoreCreateWithoutOrderFurnitureInput = {
    nama_toko: string
    slug?: string | null
    deskripsi?: string | null
    telp?: string | null
    user_email: string
    created_at?: Date | string
    updated_at?: Date | string
    furniture?: furnituresCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutOrderFurnitureInput = {
    id?: number
    nama_toko: string
    slug?: string | null
    deskripsi?: string | null
    telp?: string | null
    user_email: string
    created_at?: Date | string
    updated_at?: Date | string
    furniture?: furnituresUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutOrderFurnitureInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutOrderFurnitureInput, StoreUncheckedCreateWithoutOrderFurnitureInput>
  }

  export type OrdersUpsertWithoutOrderFurnitureInput = {
    update: XOR<OrdersUpdateWithoutOrderFurnitureInput, OrdersUncheckedUpdateWithoutOrderFurnitureInput>
    create: XOR<OrdersCreateWithoutOrderFurnitureInput, OrdersUncheckedCreateWithoutOrderFurnitureInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutOrderFurnitureInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutOrderFurnitureInput, OrdersUncheckedUpdateWithoutOrderFurnitureInput>
  }

  export type OrdersUpdateWithoutOrderFurnitureInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    total_harga?: FloatFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUncheckedUpdateWithoutOrderFurnitureInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_email?: StringFieldUpdateOperationsInput | string
    total_harga?: FloatFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type furnituresUpsertWithoutOrderFurnitureInput = {
    update: XOR<furnituresUpdateWithoutOrderFurnitureInput, furnituresUncheckedUpdateWithoutOrderFurnitureInput>
    create: XOR<furnituresCreateWithoutOrderFurnitureInput, furnituresUncheckedCreateWithoutOrderFurnitureInput>
    where?: furnituresWhereInput
  }

  export type furnituresUpdateToOneWithWhereWithoutOrderFurnitureInput = {
    where?: furnituresWhereInput
    data: XOR<furnituresUpdateWithoutOrderFurnitureInput, furnituresUncheckedUpdateWithoutOrderFurnitureInput>
  }

  export type furnituresUpdateWithoutOrderFurnitureInput = {
    nama_furniture?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Store?: StoreUpdateOneWithoutFurnitureNestedInput
  }

  export type furnituresUncheckedUpdateWithoutOrderFurnitureInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_furniture?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    store_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreUpsertWithoutOrderFurnitureInput = {
    update: XOR<StoreUpdateWithoutOrderFurnitureInput, StoreUncheckedUpdateWithoutOrderFurnitureInput>
    create: XOR<StoreCreateWithoutOrderFurnitureInput, StoreUncheckedCreateWithoutOrderFurnitureInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutOrderFurnitureInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutOrderFurnitureInput, StoreUncheckedUpdateWithoutOrderFurnitureInput>
  }

  export type StoreUpdateWithoutOrderFurnitureInput = {
    nama_toko?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    telp?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    furniture?: furnituresUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutOrderFurnitureInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_toko?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    telp?: NullableStringFieldUpdateOperationsInput | string | null
    user_email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    furniture?: furnituresUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type OrderFurnitureCreateManyFurnituresInput = {
    id?: number
    orderId: string
    storeId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderFurnitureUpdateWithoutFurnituresInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrdersUpdateOneRequiredWithoutOrderFurnitureNestedInput
    store?: StoreUpdateOneRequiredWithoutOrderFurnitureNestedInput
  }

  export type OrderFurnitureUncheckedUpdateWithoutFurnituresInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    storeId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderFurnitureUncheckedUpdateManyWithoutFurnituresInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    storeId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type furnituresCreateManyStoreInput = {
    id?: number
    nama_furniture: string
    slug: string
    deskripsi: string
    harga: number
    categories: string
    image?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderFurnitureCreateManyStoreInput = {
    id?: number
    orderId: string
    furnitureId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type furnituresUpdateWithoutStoreInput = {
    nama_furniture?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderFurniture?: OrderFurnitureUpdateManyWithoutFurnituresNestedInput
  }

  export type furnituresUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_furniture?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderFurniture?: OrderFurnitureUncheckedUpdateManyWithoutFurnituresNestedInput
  }

  export type furnituresUncheckedUpdateManyWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_furniture?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    categories?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderFurnitureUpdateWithoutStoreInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrdersUpdateOneRequiredWithoutOrderFurnitureNestedInput
    furnitures?: furnituresUpdateOneRequiredWithoutOrderFurnitureNestedInput
  }

  export type OrderFurnitureUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    furnitureId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderFurnitureUncheckedUpdateManyWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: StringFieldUpdateOperationsInput | string
    furnitureId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderFurnitureCreateManyOrdersInput = {
    id?: number
    furnitureId: number
    storeId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderFurnitureUpdateWithoutOrdersInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    furnitures?: furnituresUpdateOneRequiredWithoutOrderFurnitureNestedInput
    store?: StoreUpdateOneRequiredWithoutOrderFurnitureNestedInput
  }

  export type OrderFurnitureUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    furnitureId?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderFurnitureUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    furnitureId?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use FurnituresCountOutputTypeDefaultArgs instead
     */
    export type FurnituresCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FurnituresCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoreCountOutputTypeDefaultArgs instead
     */
    export type StoreCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrdersCountOutputTypeDefaultArgs instead
     */
    export type OrdersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrdersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use furnituresDefaultArgs instead
     */
    export type furnituresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = furnituresDefaultArgs<ExtArgs>
    /**
     * @deprecated Use cartDefaultArgs instead
     */
    export type cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = cartDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoreDefaultArgs instead
     */
    export type StoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrdersDefaultArgs instead
     */
    export type OrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrdersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderFurnitureDefaultArgs instead
     */
    export type OrderFurnitureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderFurnitureDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}